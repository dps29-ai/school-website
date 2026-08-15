// Fee structure (w.e.f. 1 April 2026)
export const feeStructure = {
  session: "2026-27",
  oneTime: [
    { name: "Registration Fee", amount: "₹ 2,000" },
    { name: "Admission Fee", amount: "₹ 25,000" },
  ],
  annual: { name: "Annual Charges (paid in July & October)", amount: "₹ 5,800" },
  tuition: [
    { class: "Nursery", fee: "₹ 2,200" },
    { class: "L.K.G & U.K.G", fee: "₹ 2,700" },
    { class: "I to V", fee: "₹ 3,000" },
    { class: "VI to VIII", fee: "₹ 3,400" },
    { class: "IX & X", fee: "₹ 3,800" },
    { class: "XI & XII (Science)", fee: "₹ 4,800" },
    { class: "XI & XII (Commerce)", fee: "₹ 4,100" },
  ],
  rules: [
    "School fee must be deposited between 1st to 15th of every month in the bank or through Campus Care (Entab) software.",
    "Beyond the 15th, fee is accepted in the school office or through Campus Care with a late payment fine of ₹ 100.",
    "For Board classes X and XII, all dues up to March 2027 must be cleared before 15th January 2027.",
  ],
};

// School timings
export const timings = {
  summer: { period: "6th April – 31st October" },
  winter: { period: "1st November – 31st March" },
  schedule: [
    {
      season: "Summer",
      nursery: { assembly: "08:30 am", dispersal: "12:50 pm" },
      primary: { assembly: "07:55 am", dispersal: "01:55 pm" },
    },
    {
      season: "Winter",
      nursery: { assembly: "09:00 am", dispersal: "01:00 pm" },
      primary: { assembly: "08:15 am", dispersal: "02:15 pm" },
    },
  ],
  notes: [
    "All students are expected to be in school five minutes before the first bell rings.",
    "Every Saturday, the school remains closed for Play Group to KG.",
    "Every Second Saturday, the school remains closed.",
    "The last working day of every month is a half-day.",
    "The last Saturday of every month is BAGLESS (till class VIII).",
  ],
};

// Holidays for 2026-27
export const holidays = [
  { date: "14 Apr 2026", day: "Tue", occasion: "Ambedkar Jayanti" },
  { date: "1 May 2026", day: "Fri", occasion: "Buddha Purnima" },
  { date: "22 May – 2 Jul 2026", day: "Fri–Thu", occasion: "Summer Vacation" },
  { date: "27 May 2026", day: "Wed", occasion: "Id-Ul-Zuha*" },
  { date: "26 Jun 2026", day: "Fri", occasion: "Moharram" },
  { date: "16 Jul 2026", day: "Thu", occasion: "Harela" },
  { date: "15 Aug 2026", day: "Sat", occasion: "Independence Day" },
  { date: "26 Aug 2026", day: "Wed", occasion: "Id-E-Milad*" },
  { date: "28 Aug 2026", day: "Fri", occasion: "Raksha Bandhan" },
  { date: "4 Sep 2026", day: "Fri", occasion: "Janmashtmi" },
  { date: "17 Sep 2026", day: "Thu", occasion: "Vishwakarma Puja" },
  { date: "2 Oct 2026", day: "Fri", occasion: "Gandhi Jayanti" },
  { date: "11 Oct 2026", day: "Sun", occasion: "Agrasen Jayanti" },
  { date: "19–20 Oct 2026", day: "Mon–Tue", occasion: "Dusshera Holiday" },
  { date: "26 Oct 2026", day: "Mon", occasion: "Valmiki Jayanti" },
  { date: "29 Oct 2026", day: "Thu", occasion: "Karwa Chauth" },
  { date: "6–11 Nov 2026", day: "Fri–Wed", occasion: "Diwali Holidays" },
  { date: "15 Nov 2026", day: "Sun", occasion: "Chhat Puja" },
  { date: "20 Nov 2026", day: "Fri", occasion: "Igaas" },
  { date: "24 Nov 2026", day: "Tue", occasion: "Guru Nanak Dev Ji / Guru Teg Bahadur Shahidi Diwas" },
  { date: "25 Dec 2026", day: "Fri", occasion: "Christmas Day" },
  { date: "26 Dec 2026 – 15 Jan 2027", day: "Sat–Fri", occasion: "Winter Vacation" },
  { date: "15 Jan 2027", day: "Fri", occasion: "Makarsankranti" },
  { date: "16 Jan 2027", day: "Sat", occasion: "Guru Govind Singh Jayanti" },
  { date: "26 Jan 2027", day: "Tue", occasion: "Republic Day" },
  { date: "20 Feb 2027", day: "Sat", occasion: "Guru Ravidas Jayanti" },
  { date: "6 Mar 2027", day: "Sat", occasion: "Maha Shivratri" },
  { date: "9 Mar 2027", day: "Tue", occasion: "Id-Ul-Fitr*" },
  { date: "21–22 Mar 2027", day: "Sun–Mon", occasion: "Holi" },
  { date: "26 Mar 2027", day: "Fri", occasion: "Good Friday" },
];

// Scholarship criteria
export const scholarship = {
  title: "Neeraj Goyal / Rama Goyal Scholarship",
  intro: "Appreciating the performance of children, our founder member Late Mrs. Rama Goyal instituted a scholarship to reward exemplary performers during the Annual Examination.",
  criteria: [
    {
      label: "Class Topper (Class III–XI) with 95% and above",
      reward: "₹ 2,400 (once a year)",
    },
    {
      label: "Gold Medalist at State level",
      reward: "₹ 1,000 (once a year)",
    },
    {
      label: "Gold Medalist at District level",
      reward: "₹ 500 (once a year)",
    },
    {
      label: "Topper of Board Class X with more than 97%",
      reward: "Free-ship in Class XI in best five subjects",
    },
  ],
};

// Co-curricular activities calendar
export const activitiesCalendar = [
  { date: "29 Apr 2026", day: "Wed", event: "Drawing Competition (VI–VIII) / Poster Making (V, IX–XII)" },
  { date: "13 May 2026", day: "Wed", event: "Hindi Elocution" },
  { date: "15 Jul 2026", day: "Wed", event: "Drawing & Colouring" },
  { date: "29 Jul 2026", day: "Wed", event: "L.P. Goyal Mathematics Quiz" },
  { date: "12 Aug 2026", day: "Wed", event: "Craft Competition — Theme: Independence Day" },
  { date: "14 Aug 2026", day: "Fri", event: "Origami / English Calligraphy" },
  { date: "15 Aug 2026", day: "Sat", event: "Patriotic Song Competition" },
  { date: "29 Aug 2026", day: "Sat", event: "Special Assembly — Mrs. Rama Goyal Birth Anniversary" },
  { date: "5 Sep 2026", day: "Sat", event: "Teacher's Day Celebration (LKG–UKG)" },
  { date: "11 Sep 2026", day: "Fri", event: "Hindi Calligraphy (LKG–UKG)" },
  { date: "14 Oct 2026", day: "Wed", event: "Hindi Calligraphy" },
  { date: "23 Oct 2026", day: "Sat", event: "Fancy Dress Competition" },
  { date: "28 Oct 2026", day: "Wed", event: "Neeraj Goyal SciFest" },
  { date: "14 Nov 2026", day: "Sat", event: "Sports Day" },
  { date: "25 Nov 2026", day: "Wed", event: "English Debate" },
  { date: "28 Nov 2026", day: "Sat", event: "English Recitation (VI–X)" },
  { date: "11 Dec 2026", day: "Fri", event: "Mental Maths" },
  { date: "23 Jan 2027", day: "Sat", event: "Story Telling" },
  { date: "3 Feb 2027", day: "Wed", event: "Fireless Cooking / Flower Arrangement" },
  { date: "10 Feb 2027", day: "Wed", event: "Power Point Presentation" },
];

// Exam schedule for 2026-27
export const examSchedule = {
  nursery: [
    { date: "4 Apr 2026", event: "Orientation Programme" },
    { date: "27 Apr 2026", event: "Distribution of Syllabus" },
    { date: "21 May 2026", event: "PTM & Holidays' HW Discussion" },
    { date: "2 Jul 2026", event: "Workshop for Teachers & HW Submission" },
    { date: "18 Sep – 1 Oct 2026", event: "Half Yearly Examination" },
    { date: "17 Oct 2026", event: "PTM — Result of Half Yearly" },
    { date: "24 Dec 2026", event: "PTM & Holidays' HW Discussion" },
    { date: "22 Feb 2027 onwards", event: "Annual Examination" },
  ],
  school: [
    { date: "4 Apr 2026", event: "PTM Orientation (I–XI)" },
    { date: "27 Apr 2026", event: "Distribution of Syllabus" },
    { date: "21 May 2026", event: "PTM & Holidays' HW Discussion" },
    { date: "2 Jul 2026", event: "Workshop for Teachers & HW/Project Submission" },
    { date: "16–23 Jul 2026", event: "Unit Test (I–XII)" },
    { date: "1 Aug 2026", event: "PTM — Result of Unit Test I" },
    { date: "18 Sep – 1 Oct 2026", event: "Half Yearly Examination" },
    { date: "17 Oct 2026", event: "PTM — Result of Half Yearly" },
    { date: "1–8 Dec 2026", event: "Unit Test (I–IX & XI)" },
    { date: "1–11 Dec 2026", event: "Pre-Board (X & XII)" },
    { date: "24 Dec 2026", event: "PTM (I–XII) — Result of Unit II & I Pre-Board" },
    { date: "8–20 Jan 2027", event: "II Pre-Board (X & XII)" },
    { date: "30 Jan 2027", event: "Result of Pre-Board II (PTM)" },
    { date: "22 Feb 2027 onwards", event: "Annual Examination (I–IX & XI)" },
  ],
};

// Rules of discipline (key ones)
export const rules = [
  "Every pupil is urged to contribute to the high tone of the school by manner and deportment.",
  "Wearing the school uniform is compulsory on class days and school functions.",
  "Any kind of damage to school property will be recovered with penalty from the students.",
  "Parents/guardians are expected to cooperate in enforcing regularity and discipline.",
  "Pupils must bring the diary every day to school.",
  "Parents/guardians must sign the diary, progress reports, etc.",
  "Normally more than three days leave is not granted in continuation.",
  "Request for leave on medical grounds must be supported by a Registered Medical Practitioner's certificate.",
  "If a child is absent for more than 5 days without leave, the name will be struck off the roll.",
  "Parents/guardians are not allowed to see their children or teachers during school hours without prior permission of the Principal.",
  "All complaints must be made to the Principal directly and not to the teacher.",
  "No Transfer Certificate is issued until all sums due are paid.",
  "Habitual disobedience, stealing, objectionable moral influence, or inexcusable absence may lead to dismissal.",
  "Mobile phones are banned on campus. Driving scooters / motorcycles is viewed seriously — DM Dehradun order.",
  "For ICSE (X) and ISC (XII) entry, a minimum of 75% attendance in each of the two years is mandatory.",
];
