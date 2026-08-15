import { PageHeader, Section, Ornament } from "@/components/PageHeader";
import { CtaBanner } from "@/components/CtaBanner";

export const metadata = { title: "School Prayer & Song" };

const pledge = `India is my country. All Indians are my brothers and sisters. I love my country. I am proud of its rich and varied heritage. I shall always strive to be worthy of it.
I shall give respect to my parents, teachers and all elders and treat everyone with courtesy.
To my country and my people I pledge my devotion; in their well being and prosperity alone lies my happiness.`;

const schoolSong = `God bless our School, Doon Presidency School,
We love our teachers, we love our school
We play and sing and dance every day, everything is so beautiful
God bless our school Doon Presidency School
We work while we work and play while we play, everything is so wonderful
God bless our school Doon Presidency School`;

const monday = `Lord I hope this day is good
I'm feeling empty and misunderstood
I should be thankful Lord I know I should
But Lord I hope this day is good
Lord have you forgotten me
I've been praying to you faithfully
I'm not saying I'm a righteous man
But Lord I hope you understand
I don't need fortune and I don't need fame
Send down the thunder Lord send down the rain
But when you're planning just how it should be
Plan a good day for me`;

const wednesday = `God, give me courage, to do what is right
Courage to speak and courage to fight;
For honesty, goodness, justice and truth;
Courage to choose the good in my youth;
Courage to own, when I am in the wrong;
Courage to face the day with a song;
Courage to guard my thought and my tongue;
Courage to choose the right when I am young.`;

const thursday = `हमको मन की शक्ति, देना मन विजय करें
दूसरों की जय से पहले, खुद की जय करें
भेद-भाव अपने दिल से, साफ़ कर सकें
दूसरों से भूल हो तो, माफ़ कर सकें
झूठ से बचे रहें, सच का दम भरें
दूसरों की जय से पहले, खुद की जय करें`;

const friday = `ऐ मालिक तेरे बंदे हम, ऐसे हों हमारे करम
नेकी पर चले और बदी से टले, ताकि हँसते हुए निकले दम
जब जुल्मों का हो सामना, तब तू ही हमें थामना
बुराई करें, हम भलाई करें, नेकी पर चले और बदी से टले
बढ़ उठे प्यार का हर कदम, ऐ मालिक तेरे बंदे हम
और मिटे बैर का ये भरम, ऐ मालिक तेरे बंदे हम`;

const saturday = `O God, our heavenly Father
we thank you for this new day —
We come to you asking for your guidance and wisdom
as we face the challenges of today.
Give us strength to do what is right
and courage to stand up for what we believe in —
Help us to think clearly and make good decisions.
Amen.`;

const lordsPrayer = `Our Father, who art in heaven,
hallowed be thy name;
thy kingdom come; thy will be done;
on earth as it is in heaven.
Give us this day our daily bread.
And forgive us our trespasses, as we forgive those who trespass against us.
And lead us not into temptation;
but deliver us from evil.
For thine is the kingdom, the power, and the glory forever and ever.
Amen.`;

export default function PrayerPage() {
  return (
    <>
      <PageHeader
        eyebrow="Student Life"
        title="School Prayer & Song"
        subtitle="The words that open our day, every day of the week."
        crumbs={[{ label: "Home", href: "/" }, { label: "Student Life", href: "/student-life" }, { label: "Prayer & Song" }]}
      />

      <Section title="Pledge" eyebrow="Daily" className="bg-beige-200">
        <div className="max-w-2xl mx-auto text-center">
          <Ornament />
          <p className="mt-6 text-navy-800 leading-relaxed whitespace-pre-line italic">{pledge}</p>
        </div>
      </Section>

      <Section title="School Song (Wednesday)" className="bg-beige-100">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-navy-800 leading-relaxed whitespace-pre-line">{schoolSong}</p>
        </div>
      </Section>

      <Section title="The Lord's Prayer" className="bg-beige-200">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-navy-800 leading-relaxed whitespace-pre-line italic">{lordsPrayer}</p>
        </div>
      </Section>

      <div className="bg-beige-100">
        <div className="container-page py-16 md:py-24 grid md:grid-cols-2 gap-10">
          {[
            { day: "Monday", title: "Lord I Hope This Day Is Good", text: monday, lang: "en" },
            { day: "Tuesday", title: "Choose The Right Path", text: wednesday, lang: "en" },
            { day: "Wednesday", title: "School Song", text: schoolSong, lang: "en" },
            { day: "Thursday", title: "हमको मन की शक्ति देना", text: thursday, lang: "hi" },
            { day: "Friday", title: "ऐ मालिक तेरे बंदे हम", text: friday, lang: "hi" },
            { day: "Saturday", title: "O God, Our Heavenly Father", text: saturday, lang: "en" },
          ].map((p) => (
            <article key={p.day} className="bg-white border border-navy-100 p-7">
              <div className="text-xs uppercase tracking-widest text-navy-400">{p.day}</div>
              <h3 className={`font-display text-xl text-navy-900 mt-2 ${p.lang === "hi" ? "devanagari" : ""}`}>
                {p.title}
              </h3>
              <p className={`mt-3 text-navy-700 leading-relaxed whitespace-pre-line ${p.lang === "hi" ? "devanagari" : ""}`}>
                {p.text}
              </p>
            </article>
          ))}
        </div>
      </div>
      <CtaBanner />
    </>
  );
}
