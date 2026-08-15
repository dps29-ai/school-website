-- ============================================
-- Doon Presidency School - Supabase Schema
-- ============================================
-- Run this SQL in your Supabase SQL editor
-- https://supabase.com/dashboard → SQL Editor → New Query

-- 1. PROFILES TABLE
-- Stores user info (linked to auth.users)
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT,
  role TEXT NOT NULL DEFAULT 'student' CHECK (role IN ('admin', 'teacher', 'student', 'parent')),
  phone TEXT,
  avatar_url TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. STUDENTS TABLE
CREATE TABLE IF NOT EXISTS public.students (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  profile_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  roll_number TEXT UNIQUE,
  admission_number TEXT UNIQUE,
  class_name TEXT NOT NULL,
  section TEXT,
  date_of_birth DATE,
  blood_group TEXT,
  parent_id UUID REFERENCES public.profiles(id),
  admission_date DATE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. ATTENDANCE TABLE
CREATE TABLE IF NOT EXISTS public.attendance (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID REFERENCES public.students(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  status TEXT NOT NULL CHECK (status IN ('present', 'absent', 'leave')),
  marked_by UUID REFERENCES public.profiles(id),
  remarks TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(student_id, date)
);

-- 4. MARKS / RESULTS TABLE
CREATE TABLE IF NOT EXISTS public.marks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID REFERENCES public.students(id) ON DELETE CASCADE,
  subject TEXT NOT NULL,
  exam_type TEXT NOT NULL, -- 'unit_test', 'half_yearly', 'annual', 'pre_board'
  marks_obtained NUMERIC NOT NULL,
  total_marks NUMERIC NOT NULL,
  grade TEXT,
  exam_date DATE,
  created_by UUID REFERENCES public.profiles(id),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. NOTICES TABLE
CREATE TABLE IF NOT EXISTS public.notices (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  category TEXT, -- 'general', 'exam', 'event', 'holiday'
  target_audience TEXT, -- 'all', 'students', 'parents', 'teachers'
  publish_date DATE DEFAULT CURRENT_DATE,
  expiry_date DATE,
  created_by UUID REFERENCES public.profiles(id),
  is_published BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. FEE PAYMENTS TABLE
CREATE TABLE IF NOT EXISTS public.fee_payments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID REFERENCES public.students(id) ON DELETE CASCADE,
  amount NUMERIC NOT NULL,
  payment_type TEXT NOT NULL, -- 'tuition', 'annual', 'admission', 'transport'
  month TEXT, -- for tuition
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'paid', 'overdue')),
  payment_date DATE,
  transaction_id TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 7. ROW LEVEL SECURITY (RLS)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.students ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.attendance ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.marks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.notices ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.fee_payments ENABLE ROW LEVEL SECURITY;

-- Policies: Users can read their own profile
CREATE POLICY "Users can view own profile" ON public.profiles
  FOR SELECT USING (auth.uid() = id);

-- Admins can do everything
CREATE POLICY "Admins have full access to profiles" ON public.profiles
  FOR ALL USING (
    EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin')
  );

-- Students: parents and self can read
CREATE POLICY "Students visible to admins" ON public.students
  FOR ALL USING (
    EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin')
  );

CREATE POLICY "Parents can view their children" ON public.students
  FOR SELECT USING (parent_id = auth.uid());

CREATE POLICY "Students can view own record" ON public.students
  FOR SELECT USING (profile_id = auth.uid());

-- Attendance: admins/teachers manage, students/parents view own
CREATE POLICY "Admins/teachers manage attendance" ON public.attendance
  FOR ALL USING (
    EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role IN ('admin', 'teacher'))
  );

CREATE POLICY "Students/parents view own attendance" ON public.attendance
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.students s
      WHERE s.id = attendance.student_id
      AND (s.profile_id = auth.uid() OR s.parent_id = auth.uid())
    )
  );

-- Marks: similar to attendance
CREATE POLICY "Admins/teachers manage marks" ON public.marks
  FOR ALL USING (
    EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role IN ('admin', 'teacher'))
  );

CREATE POLICY "Students/parents view own marks" ON public.marks
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.students s
      WHERE s.id = marks.student_id
      AND (s.profile_id = auth.uid() OR s.parent_id = auth.uid())
    )
  );

-- Notices: everyone can read published
CREATE POLICY "Everyone reads published notices" ON public.notices
  FOR SELECT USING (is_published = true);

CREATE POLICY "Admins manage notices" ON public.notices
  FOR ALL USING (
    EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin')
  );

-- 8. TRIGGER: Auto-create profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name, role)
  VALUES (
    NEW.id,
    NEW.email,
    NEW.raw_user_meta_data->>'full_name',
    COALESCE(NEW.raw_user_meta_data->>'role', 'student')
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger fires on new auth.users
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- 9. ADMIN BOOTSTRAP FUNCTION
-- Creates the first admin user (call once after setup)
CREATE OR REPLACE FUNCTION public.create_first_admin(admin_email TEXT, admin_password TEXT)
RETURNS TEXT AS $$
DECLARE
  new_user_id UUID;
BEGIN
  -- This needs to be called from supabase-js admin API in production
  -- For initial setup, create user via Supabase Dashboard → Authentication → Users
  RETURN 'Create the admin user via Supabase Dashboard → Authentication → Add user, then run: UPDATE public.profiles SET role = ''admin'' WHERE email = ''' || admin_email || ''';';
END;
$$ LANGUAGE plpgsql;

-- 10. SEED: Sample data (optional)
-- INSERT INTO public.notices (title, content, category, created_by)
-- VALUES ('Welcome to DPS', 'The 2026-27 academic year begins on 6th April 2026.', 'general', NULL);

-- ============================================
-- SETUP COMPLETE
-- ============================================
-- Next steps:
-- 1. Go to Supabase Dashboard → Authentication → Users → Add user
-- 2. Create the first admin user
-- 3. Then run: UPDATE public.profiles SET role = 'admin' WHERE email = 'admin@doonpresidency.edu.in';
-- 4. Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to .env.local
-- 5. Deploy to Vercel
