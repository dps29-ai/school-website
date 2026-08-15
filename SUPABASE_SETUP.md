# Supabase + Vercel Setup Guide

This guide walks you through setting up the free-tier backend for the Doon Presidency School website — **completely free** to operate at typical school scale.

## 💰 Cost: $0/month

- **Supabase Free Tier:** 500MB database, 50,000 monthly active users, 1GB file storage
- **Vercel Free Tier:** 100GB bandwidth, unlimited static sites, serverless functions
- **Total:** $0 for a school with up to ~2,000 students

---

## 📋 Step 1: Create Supabase Project

1. Go to https://supabase.com and sign up (free)
2. Click **"New Project"**
3. Settings:
   - **Name:** `doon-presidency-school`
   - **Database Password:** Choose a strong password (save it!)
   - **Region:** Mumbai (closest to Dehradun)
4. Click **"Create new project"** (takes ~2 minutes)

## 🔑 Step 2: Get Your API Keys

1. In your Supabase dashboard, go to **Settings** → **API**
2. Copy these values:
   - **Project URL** (e.g., `https://abcxyz.supabase.co`)
   - **anon public key** (long JWT token starting with `eyJ...`)
   - **service_role key** (server-side only — keep secret!)

## 🗄️ Step 3: Set Up the Database

1. In Supabase dashboard, go to **SQL Editor** (left sidebar)
2. Click **"New Query"**
3. Copy the entire content of `supabase/schema.sql` from this project
4. Paste and click **"Run"**
5. You should see "Success. No rows returned" — this is correct!

## 👤 Step 4: Create Admin User

1. In Supabase dashboard, go to **Authentication** → **Users** (left sidebar)
2. Click **"Add user"** → **"Create new user"**
3. Fill in:
   - **Email:** `admin@doonpresidency.edu.in` (or your preferred admin email)
   - **Password:** Choose a strong password
   - **Auto Confirm User:** ✅ (toggle ON)
4. Click **"Create user"**
5. Now run this SQL to make them an admin:
   ```sql
   UPDATE public.profiles
   SET role = 'admin', full_name = 'School Administrator'
   WHERE email = 'admin@doonpresidency.edu.in';
   ```

## 🔐 Step 5: Add Environment Variables Locally

Create a file called `.env.local` in the project root:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...your-anon-key
SUPABASE_SERVICE_ROLE_KEY=eyJhbGc...your-service-role-key
```

Replace the values with your actual Supabase credentials.

## 🌐 Step 6: Deploy to Vercel

### Option A: One-Click Deploy (Easiest)

1. Push your code to GitHub (if not already):
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```
2. Go to https://vercel.com and sign up with GitHub
3. Click **"Add New Project"**
4. Import your `school-website` repository
5. Before deploying, click **"Environment Variables"** and add:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
6. Click **"Deploy"**
7. Wait ~2 minutes → your site is live!

### Option B: Vercel CLI

```bash
npm install -g vercel
vercel login
vercel
# Follow prompts, add env vars when asked
```

## 🎨 Step 7: Add Custom Domain (Optional)

1. Buy a domain (e.g., `doonpresidencyschool.edu.in` from Namecheap ~₹700/year)
2. In Vercel dashboard → **Settings** → **Domains**
3. Add your domain
4. Update DNS records as Vercel instructs
5. Free SSL certificate is auto-installed

## 👥 Step 8: Add Users (Teachers, Students, Parents)

### Option A: Self-Registration
- The ERP login pages can be configured to allow new sign-ups
- Default role is `student`; admin must promote to `teacher` or `parent`

### Option B: Bulk Import (Recommended for Schools)
Run SQL like this to create student/parent records:

```sql
-- Add a student
INSERT INTO auth.users (email, encrypted_password, email_confirmed_at)
VALUES ('student1@doonpresidency.edu.in', crypt('Student@2026', gen_salt('bf')), NOW());

-- Then in profiles
INSERT INTO public.profiles (id, email, full_name, role)
SELECT id, email, 'Student Name', 'student' FROM auth.users WHERE email = 'student1@doonpresidency.edu.in';

-- Then in students
INSERT INTO public.students (profile_id, roll_number, class_name, section)
SELECT id, '001', 'X', 'A' FROM public.profiles WHERE email = 'student1@doonpresidency.edu.in';
```

## 🔐 Default Login Credentials (Demo)

After setting up, these demo accounts work:

| Role | Email | Password |
|------|-------|----------|
| **Admin** | `admin@doonpresidency.edu.in` | `Admin@2026` |
| **Teacher** | `teacher@doonpresidency.edu.in` | `Teacher@2026` |
| **Student** | `student@doonpresidency.edu.in` | `Student@2026` |
| **Parent** | `parent@doonpresidency.edu.in` | `Parent@2026` |

You can create these via Supabase Authentication → Add User, then run:

```sql
UPDATE public.profiles SET role = 'teacher' WHERE email = 'teacher@doonpresidency.edu.in';
UPDATE public.profiles SET role = 'student' WHERE email = 'student@doonpresidency.edu.in';
UPDATE public.profiles SET role = 'parent' WHERE email = 'parent@doonpresidency.edu.in';
```

## 📊 Database Schema Overview

The schema includes tables for:
- **profiles** — All users (admin/teacher/student/parent)
- **students** — Student-specific data (roll number, class, etc.)
- **attendance** — Daily attendance records
- **marks** — Exam marks and grades
- **notices** — School announcements
- **fee_payments** — Fee collection tracking

Row-level security (RLS) ensures:
- Admins see everything
- Teachers manage their classes
- Students see only their own data
- Parents see only their children's data

## 🆘 Troubleshooting

### "Supabase env vars missing"
- Make sure `.env.local` has the correct values
- Restart your dev server after adding env vars

### "Invalid login credentials"
- Verify the user exists in Supabase → Authentication → Users
- Check that the email/password match exactly
- Ensure email is confirmed (toggle Auto Confirm when creating)

### "Permission denied for table..."
- Row-level security is blocking access
- Verify the user's role in `public.profiles` table

### Need more help?
- Supabase docs: https://supabase.com/docs
- Vercel docs: https://vercel.com/docs
- Contact: dps_doon07@rediffmail.com
