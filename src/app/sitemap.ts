import type { MetadataRoute } from "next";
import { school } from "@/data/school";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://doonpresidencyschool.edu.in";
  const routes = [
    "",
    "/about",
    "/about/founder",
    "/about/vision-mission",
    "/about/principal",
    "/academics",
    "/academics/subjects",
    "/academics/exam-promotion",
    "/academics/timings",
    "/admissions",
    "/admissions/prospectus",
    "/fee-structure",
    "/scholarship",
    "/facilities",
    "/facilities/labs",
    "/facilities/library",
    "/facilities/sports",
    "/student-life",
    "/student-life/uniform",
    "/student-life/council",
    "/rules",
    "/prayer",
    "/events",
    "/achievements",
    "/calendar",
    "/gallery",
    "/faculty",
    "/career",
    "/mandatory-disclosure",
    "/contact",
  ];

  return routes.map((r) => ({
    url: `${base}${r}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: r === "" ? 1 : 0.7,
  }));
}
