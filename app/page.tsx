import { FaEnvelope, FaLinkedin, FaPhone } from "react-icons/fa";

const experience = [
  {
    company: "Blink Health",
    title: "Senior Software Engineer II",
    period: "Apr 2025 - Present",
    summary:
      "Leading LLM-powered support systems, call intelligence, and cross-functional execution for high-volume operations.",
    highlights: [
      "Architected an in-house ticketing and call analytics platform replacing Zendesk and LevelAI, saving $1M+ annually while powering transcription, quality scoring, and support QA across 10K+ daily calls.",
      "Led a 3-engineer team replacing legacy IVR with LLM-powered voice assistants, cutting average call handling time from 8 to 5 minutes and reducing escalations by 60%.",
      "Managed a team of 4 engineers, drove alignment across product, engineering, and operations, and mentored engineers through successful promotion cycles.",
    ],
  },
  {
    company: "Blink Health",
    title: "Senior Software Engineer",
    period: "Jan 2023 - Apr 2025",
    summary:
      "Built core search, payments, and eventing platforms for a distributed microservices architecture.",
    highlights: [
      "Designed a centralized Search Service across 7+ microservices using OpenSearch, Kinesis, and Lambda-managed indexing, serving cross-entity queries at 2,000 RPS with p95 latency under 50 ms.",
      "Created a library-based business events SDK across 10+ microservices, processing 1M+ events per day into a centralized event store with replay and trace correlation.",
      "Redesigned payment orchestration for $50M+ monthly transactions across 3+ providers, improving payment success and reducing transaction failures by 40%.",
    ],
  },
  {
    company: "Blink Health",
    title: "Software Engineer",
    period: "Feb 2022 - Jan 2023",
    summary:
      "Worked on foundational platform reliability and large-scale patient data migration.",
    highlights: [
      "Orchestrated zero-downtime migration of 5M+ patient records across 300+ read paths to a new Patient Store using schema translation, phased backfills, dual writes, and feature-flagged cutovers.",
    ],
  },
  {
    company: "Amazon India",
    title: "Software Engineer",
    period: "Jul 2020 - Feb 2022",
    summary:
      "Built internal tooling and infrastructure for vendor operations, compliance, and document systems at scale.",
    highlights: [
      "Accelerated invoice approval cycles by 40% by batching 100K+ daily alerts with AWS Batch, SQS, and Lambda.",
      "Built an end-to-end vendor credentialing portal for 100K+ vendors across frontend, backend APIs, and infrastructure provisioning.",
      "Migrated 2 TB of vendor documents to S3, reducing storage cost by 60% and improving retrieval availability from 95% to 99.99%.",
    ],
  },
];

const projects = [
  {
    title: "Habit Pledge App",
    description:
      "A personal product in progress that helps people quit bad habits by putting real money behind commitment.",
  },
  {
    title: "Technical Writing",
    description:
      "Long-form posts on search infrastructure, Elasticsearch, distributed systems, and the engineering trade-offs behind production systems.",
  },
];

const skillGroups = [
  {
    label: "Cloud & Infrastructure",
    items: ["AWS", "Lambda", "SQS", "S3", "Kinesis", "API Gateway", "Kubernetes", "Terraform", "Docker", "Git"],
  },
  {
    label: "Data & Search",
    items: ["PostgreSQL", "DynamoDB", "Redis", "OpenSearch"],
  },
  {
    label: "Languages",
    items: ["Python", "Java", "JavaScript", "TypeScript"],
  },
  {
    label: "AI",
    items: ["OpenAI Agent SDK", "LLM Integration", "Agentic Workflows", "Multi-Agent Orchestration"],
  },
];

const writingThemes = [
  "Distributed systems",
  "Event-driven architecture",
  "Search infrastructure",
  "AI agents in production",
  "Career reflections",
];

const metrics = [
  ["6+ years", "Building backend and platform systems"],
  ["2K RPS", "Cross-entity search workload"],
  ["1M+/day", "Business events processed"],
  ["10K+/day", "Calls analyzed and automated"],
];

export default function Home() {
  return (
    <main className="min-h-screen px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 pb-12">
        <section className="relative overflow-hidden rounded-[32px] border border-[var(--border)] bg-white/80 px-6 py-10 shadow-[0_28px_90px_rgba(28,36,49,0.08)] backdrop-blur-sm sm:px-8 lg:px-10">
          <div className="absolute -left-16 top-0 h-44 w-44 rounded-full bg-[rgba(15,118,110,0.14)] blur-3xl" />
          <div className="absolute right-0 top-10 h-40 w-40 rounded-full bg-[rgba(182,95,52,0.12)] blur-3xl" />

          <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div>
              <span className="inline-flex items-center rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-teal-700">
                Backend engineer + writer
              </span>
              <h1 className="mt-6 max-w-3xl font-serif text-5xl leading-none text-slate-900 sm:text-6xl">
                Rahul Garg
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                Backend engineer specializing in distributed systems, event-driven
                architectures, and platform infrastructure at scale.
              </p>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-500">
                I&apos;ve spent 6+ years building high-throughput services across
                payments, search, and AI-powered support systems. This site is
                where I publish technical breakdowns, design notes, and the more
                personal essays behind the work.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="/blog"
                  className="inline-flex items-center rounded-full bg-teal-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-800"
                >
                  Read the blog
                </a>
                <a
                  href="/rahul-garg-resume-april-2026.pdf"
                  className="inline-flex items-center rounded-full border border-[var(--border)] bg-white/80 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-teal-200 hover:text-teal-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View resume
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
                  href="https://www.linkedin.com/in/rahul-garg-2605"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn"
                  className="inline-flex items-center gap-2 rounded-full border border-transparent px-3 py-2 transition hover:border-teal-200 hover:bg-teal-50 hover:text-teal-700"
                >
                  <FaLinkedin size={16} />
                  LinkedIn
                </a>
                <a
                  href="tel:+918755181453"
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
                  Snapshot
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {metrics.map(([value, label]) => (
                    <div
                      key={label}
                      className="rounded-2xl border border-[var(--border)] bg-white/75 p-4"
                    >
                      <div className="text-2xl font-semibold text-teal-700">{value}</div>
                      <div className="mt-1 text-sm leading-6 text-slate-600">{label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[28px] border border-[var(--border)] bg-[rgba(255,255,255,0.72)] p-5">
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
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[28px] border border-[var(--border)] bg-white/76 p-6 shadow-[0_18px_55px_rgba(28,36,49,0.06)] backdrop-blur-sm">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              About
            </div>
            <h2 className="mt-3 font-serif text-3xl text-slate-900">
              Systems, platform thinking, and clear execution
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              I build infrastructure that helps teams move faster without losing
              reliability. My work has included search platforms, business event
              pipelines, payments, patient data migrations, and LLM-powered voice
              and support systems for real production workloads.
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
              Jul 2016 - Jun 2020
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Research Intern at Samsung R&amp;D Institute, Bengaluru in 2019.
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
                key={`${role.company}-${role.title}-${role.period}`}
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

        <section className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
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
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {skillGroups.map((group) => (
                <article
                  key={group.label}
                  className="rounded-[22px] border border-[var(--border)] bg-white/78 p-4"
                >
                  <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-700">
                    {group.label}
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-teal-100 bg-teal-50 px-3 py-1.5 text-sm text-slate-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
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
