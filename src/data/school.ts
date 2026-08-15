// Doon Presidency School — Centralized Data
// All factual content lives here so every page stays consistent.

export const school = {
  name: "Doon Presidency School",
  shortName: "DPS",
  slogan: "ज्ञानेन मुक्तिः",
  sloganTranslation: "Knowledge is Liberation",
  established: 1981,
  society: "Rama Shikshan Sansthan Society",
  affiliation: "ICSE / ISC (Council for the Indian School Certificate Examinations)",
  address: {
    line1: "2-B, Premnagar",
    line2: "Dehradun, Uttarakhand, India",
    pin: "248007",
  },
  contact: {
    phone: ["0135-2771324", "0135-2773216"],
    email: "dps_doon07@rediffmail.com",
  },
  classification: {
    type: "Day School",
    gender: "Co-educational",
    medium: "English",
    grades: "Play Group to Class XII",
    board: "ICSE / ISC",
  },
  social: {
    // Placeholder — replace with real handles when available
    facebook: "#",
    instagram: "#",
    youtube: "#",
  },
} as const;

export const navigation = [
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About the School", href: "/about" },
      { label: "Our Founder", href: "/about/founder" },
      { label: "Vision & Mission", href: "/about/vision-mission" },
      { label: "Leadership", href: "/about/leadership" },
      { label: "Principal's Desk", href: "/about/principal-desk" },
      { label: "Awards & Honours", href: "/about/awards" },
      { label: "Parent Engagement", href: "/about/parent-engagement" },
      { label: "Staff", href: "/about/staff" },
      { label: "Prefectorial Board", href: "/about/prefectorial-board" },
    ],
  },
  {
    label: "Academics",
    href: "/academics",
    children: [
      { label: "Curriculum", href: "/academics" },
      { label: "Subjects Offered", href: "/academics/subjects" },
      { label: "Exam & Promotion", href: "/academics/exam-promotion" },
      { label: "School Timings", href: "/academics/timings" },
    ],
  },
  {
    label: "Admissions",
    href: "/admissions",
    children: [
      { label: "Admission Process", href: "/admissions" },
      { label: "Fee Structure", href: "/fee-structure" },
      { label: "Scholarships", href: "/scholarship" },
      { label: "Eligibility Criteria", href: "/eligibility" },
      { label: "Important Dates", href: "/important-dates" },
      { label: "Download Prospectus", href: "/admissions/prospectus" },
    ],
  },
  {
    label: "Facilities",
    href: "/facilities",
    children: [
      { label: "Facilities Overview", href: "/facilities" },
      { label: "Laboratories", href: "/facilities/labs" },
      { label: "Library", href: "/facilities/library" },
      { label: "Sports", href: "/facilities/sports" },
    ],
  },
  {
    label: "Beyond Learning",
    href: "/co-curricular",
    children: [
      { label: "Co-Curricular Activities", href: "/co-curricular" },
      { label: "Personal & Social Education", href: "/personal-social-education" },
      { label: "Clubs", href: "/clubs" },
    ],
  },
  {
    label: "Learning Spaces",
    href: "/learning-spaces",
    children: [
      { label: "Education", href: "/learning-spaces/education" },
      { label: "Sports", href: "/facilities/sports" },
      { label: "Blog", href: "/learning-spaces/blog" },
    ],
  },
  {
    label: "Student Life",
    href: "/student-life",
    children: [
      { label: "Student Life", href: "/student-life" },
      { label: "School Uniform", href: "/student-life/uniform" },
      { label: "Rules of Discipline", href: "/rules" },
      { label: "School Prayer & Song", href: "/prayer" },
    ],
  },
  {
    label: "More",
    href: "/contact",
    children: [
      { label: "Gallery", href: "/gallery" },
      { label: "Events", href: "/events" },
      { label: "Achievements", href: "/achievements" },
      { label: "Calendar", href: "/calendar" },
      { label: "Mandatory Disclosure", href: "/mandatory-disclosure" },
      { label: "Public Disclosure", href: "/public-disclosure" },
      { label: "Policy Document", href: "/policy-document" },
      { label: "360° Tour", href: "/360-tour" },
      { label: "Career", href: "/career" },
    ],
  },
] as const;

export const quickFacts = [
  { label: "Established", value: "1981" },
  { label: "Board", value: "ICSE / ISC" },
  { label: "Grades", value: "Play Group – XII" },
  { label: "Type", value: "Co-ed Day School" },
  { label: "Medium", value: "English" },
  { label: "Location", value: "Premnagar, Dehradun" },
];
