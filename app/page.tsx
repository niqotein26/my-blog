import { FaEnvelope, FaLinkedin, FaPhone } from "react-icons/fa";

const experience = [
  {
    company: "Blink Health",
    title: "Senior Software Engineer",
    period: "Feb 2022 - Present",
    summary:
      "Building high-scale systems across voice automation, search infrastructure, CRM, and payments.",
    highlights: [
      "Built a real-time voice assistant using Twilio and OpenAI that sharply reduced escalations.",
      "Designed a centralized search platform on Elasticsearch and Kinesis with much lower latency at scale.",
      "Led platform migrations, eventing infrastructure, and a 4-engineer team across contact center and payments.",
    ],
  },
  {
    company: "Amazon",
    title: "Software Engineer",
    period: "Jun 2020 - Feb 2022",
    summary:
      "Worked on vendor systems, compliance workflows, and data-heavy internal platforms.",
    highlights: [
      "Launched a serverless pipeline for large-scale payment hold summaries.",
      "Migrated 20 TB of storage to S3 to improve reliability and cost efficiency.",
      "Built services that streamlined vendor onboarding and compliance automation.",
    ],
  },
];

const projects = [
  {
    title: "Habit Pledge App",
    description:
      "A product in progress that helps people quit harmful habits by attaching real monetary commitment.",
  },
  {
    title: "System Design Learnings",
    description:
      "An ongoing body of notes and essays around distributed systems, trade-offs, and architecture thinking.",
  },
];

const skills = [
  "Python",
  "Java",
  "TypeScript",
  "JavaScript",
  "C++",
  "Django",
  "React",
  "PostgreSQL",
  "DynamoDB",
  "MySQL",
  "Kubernetes",
  "Terraform",
  "Docker",
  "AWS",
  "LLMs",
  "Search",
  "Payments",
  "Healthcare",
];

const writingThemes = [
  "Distributed systems",
  "Search and infrastructure",
  "AI in production",
  "Career and personal reflections",
];

export default function Home() {
  return (
    <main className="min-h-screen px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 pb-12">
        <section className="relative overflow-hidden rounded-[32px] border border-[var(--border)] bg-white/80 px-6 py-10 shadow-[0_28px_90px_rgba(28,36,49,0.08)] backdrop-blur-sm sm:px-8 lg:px-10">
          <div className="absolute -left-16 top-0 h-44 w-44 rounded-full bg-[rgba(15,118,110,0.14)] blur-3xl" />
          <div className="absolute right-0 top-10 h-40 w-40 rounded-full bg-[rgba(182,95,52,0.12)] blur-3xl" />

          <div className="relative grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
            <div>
              <span className="inline-flex items-center rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-teal-700">
                Technical writing + personal notes
              </span>
              <h1 className="mt-6 max-w-3xl font-serif text-5xl leading-none text-slate-900 sm:text-6xl">
                Rahul Garg
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                Senior software engineer writing about distributed systems, AI,
                career growth, and the quieter parts of building a life.
              </p>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-500">
                I like practical systems, clean abstractions, and honest essays
                about ambition, confidence, and the work behind the work.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="/blog"
                  className="inline-flex items-center rounded-full bg-teal-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-800"
                >
                  Read the blog
                </a>
                <a
                  href="mailto:rgarg2605@gmail.com"
                  className="inline-flex items-center rounded-full border border-[var(--border)] bg-white/80 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-teal-200 hover:text-teal-700"
                >
                  Say hello
                </a>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-slate-500">
                <a
                  href="mailto:rgarg2605@gmail.com"
                  title="Email"
                  className="inline-flex items-center gap-2 rounded-full border border-transparent px-3 py-2 transition hover:border-teal-200 hover:bg-teal-50 hover:text-teal-700"
                >
                  <FaEnvelope size={16} />
                  Email
                </a>
                <a
                  href="https://www.linkedin.com/in/rahulgarg2605"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn"
                  className="inline-flex items-center gap-2 rounded-full border border-transparent px-3 py-2 transition hover:border-teal-200 hover:bg-teal-50 hover:text-teal-700"
                >
                  <FaLinkedin size={16} />
                  LinkedIn
                </a>
                <a
                  href="tel:8755181453"
                  title="Phone"
                  className="inline-flex items-center gap-2 rounded-full border border-transparent px-3 py-2 transition hover:border-teal-200 hover:bg-teal-50 hover:text-teal-700"
                >
                  <FaPhone size={16} />
                  Call
                </a>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-[28px] border border-[var(--border)] bg-[rgba(255,250,242,0.88)] p-5">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Writing Focus
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {writingThemes.map((theme) => (
                    <span
                      key={theme}
                      className="rounded-full bg-teal-50 px-3 py-1 text-sm text-teal-800"
                    >
                      {theme}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-[28px] border border-[var(--border)] bg-[rgba(255,255,255,0.72)] p-5">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Right Now
                </div>
                <div className="mt-3 text-sm leading-7 text-slate-600">
                  Building systems at scale, exploring product ideas, and using
                  this blog as a place to publish both technical breakdowns and
                  more personal essays.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[28px] border border-[var(--border)] bg-white/76 p-6 shadow-[0_18px_55px_rgba(28,36,49,0.06)] backdrop-blur-sm">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              About
            </div>
            <h2 className="mt-3 font-serif text-3xl text-slate-900">
              Engineering with a bias toward clarity and momentum
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              I enjoy building scalable systems that make messy operational
              work feel simpler. My background spans voice assistants,
              event-driven search, CRM and payment platforms, and the kind of
              infrastructure that quietly holds products together.
            </p>
          </div>

          <div className="rounded-[28px] border border-[var(--border)] bg-[rgba(255,250,242,0.82)] p-6">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Education
            </div>
            <h2 className="mt-3 font-serif text-3xl text-slate-900">
              IIT Roorkee
            </h2>
            <p className="mt-2 text-sm uppercase tracking-[0.18em] text-teal-700">
              B.Tech in Electrical Engineering
            </p>
            <p className="mt-3 text-base leading-7 text-slate-600">
              2016 - 2020
            </p>
          </div>
        </section>

        <section className="rounded-[32px] border border-[var(--border)] bg-white/78 p-6 shadow-[0_18px_55px_rgba(28,36,49,0.06)] backdrop-blur-sm sm:p-8">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Experience
              </div>
              <h2 className="mt-2 font-serif text-3xl text-slate-900">
                Work that shaped how I think
              </h2>
            </div>
            <a
              href="/blog/search-infrastructure"
              className="text-sm font-semibold text-teal-700 transition hover:text-teal-800"
            >
              Featured case study
            </a>
          </div>

          <div className="mt-8 grid gap-5">
            {experience.map((role) => (
              <article
                key={role.company}
                className="rounded-[24px] border border-[var(--border)] bg-[rgba(255,250,242,0.76)] p-5"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">
                      {role.title}, {role.company}
                    </h3>
                    <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600">
                      {role.summary}
                    </p>
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">
                    {role.period}
                  </span>
                </div>
                <ul className="mt-4 grid gap-2 text-sm leading-7 text-slate-600">
                  {role.highlights.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[var(--highlight)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[28px] border border-[var(--border)] bg-white/78 p-6 shadow-[0_18px_55px_rgba(28,36,49,0.06)] backdrop-blur-sm">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Projects
            </div>
            <div className="mt-5 grid gap-4">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="rounded-[22px] border border-[var(--border)] bg-[rgba(255,250,242,0.82)] p-4"
                >
                  <h3 className="text-lg font-semibold text-slate-900">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {project.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-[var(--border)] bg-[rgba(255,250,242,0.84)] p-6">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Skills
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-teal-100 bg-white/80 px-3 py-1.5 text-sm text-slate-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        <footer className="px-2 text-center text-sm text-slate-500">
          A place for system design notes, honest reflections, and the work in
          between.
        </footer>
      </div>
    </main>
  );
}
