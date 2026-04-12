const posts = [
  {
    href: "/blog/elasticsearch-fundamentals",
    title: "Elasticsearch, Explained",
    meta: "April 2026 • Search • Architecture Guide",
    description:
      "A practical guide to indices, mappings, Lucene internals, near real-time search, distributed architecture, and large-scale ingestion strategy.",
    tags: ["Lucene", "Mappings", "Distributed Search", "Nested"],
    tone: "technical",
  },
  {
    href: "/blog/meridian-data-transfer",
    title: "Meridian: TB-Scale Reliable Data Transfer",
    meta: "March 2026 • System Design • Engineering Design Document",
    description:
      "A production-grade system for transferring terabytes of data across nodes with zero data loss, end-to-end integrity verification, resumable transfers, and automatic failover.",
    tags: ["gRPC", "Merkle Trees", "io_uring", "RocksDB"],
    tone: "technical",
  },
  {
    href: "/blog/search-infrastructure",
    title: "Building Centralized Search for Microservices",
    meta: "2024 • System Design • Case Study",
    description:
      "Event-driven search infrastructure powering pharmacy work queues at 2000 RPS, plus the aggregation logic and migration trade-offs behind it.",
    tags: ["Kinesis", "OpenSearch", "Lambda", "CDC"],
    tone: "technical",
  },
  {
    href: "/blog/the-quiet-weight-of-i-could-have-been-more",
    title: "The Quiet Weight of “I Could Have Been More”",
    meta: "April 2026 • Personal Essay",
    description:
      "A reflection on potential, insecurity, comparison, regret, and the slow rebuilding of confidence over time.",
    tags: ["Personal", "Growth", "Reflection"],
    tone: "personal",
  },
  {
    href: "/blog/why-we-procrastinate",
    title: "Why We Procrastinate",
    meta: "May 2024 • Psychology",
    description:
      "A short look at procrastination as emotional avoidance, and how self-compassion and smaller steps help us move.",
    tags: ["Mindset", "Psychology"],
    tone: "personal",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 pb-12">
        <section className="rounded-[32px] border border-[var(--border)] bg-white/82 px-6 py-10 shadow-[0_28px_90px_rgba(28,36,49,0.08)] backdrop-blur-sm sm:px-8">
          <a
            href="/"
            className="text-sm font-semibold text-slate-500 transition hover:text-teal-700"
          >
            Home
          </a>
          <div className="mt-5 max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-[0.24em] text-teal-700">
              Rahul&apos;s notebook
            </div>
            <h1 className="mt-3 font-serif text-5xl leading-tight text-slate-900">
              Technical deep dives, system design notes, and personal essays.
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              This blog sits somewhere between an engineer&apos;s field notes and a
              personal journal. Some posts are architecture breakdowns. Others
              are quieter reflections on ambition, confidence, and growth.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {["Distributed systems", "AI", "Search", "Career", "Personal writing"].map(
              (label) => (
                <span
                  key={label}
                  className="rounded-full border border-teal-100 bg-teal-50 px-3 py-1 text-sm text-teal-800"
                >
                  {label}
                </span>
              ),
            )}
          </div>
        </section>

        <section className="grid gap-5 md:grid-cols-2">
          {posts.map((post) => {
            const accentClasses =
              post.tone === "personal"
                ? "border-[rgba(182,95,52,0.24)] bg-[rgba(255,247,240,0.86)]"
                : "border-[rgba(15,118,110,0.18)] bg-white/78";

            const tagClasses =
              post.tone === "personal"
                ? "bg-[rgba(182,95,52,0.1)] text-[var(--highlight)]"
                : "bg-teal-50 text-teal-800";

            return (
              <a
                key={post.href}
                href={post.href}
                className={`group rounded-[28px] border p-6 shadow-[0_18px_55px_rgba(28,36,49,0.06)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_24px_65px_rgba(28,36,49,0.08)] ${accentClasses}`}
              >
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  {post.meta}
                </div>
                <h2 className="mt-4 font-serif text-3xl leading-tight text-slate-900 transition group-hover:text-teal-700">
                  {post.title}
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  {post.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`rounded-full px-3 py-1 text-xs font-medium ${tagClasses}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            );
          })}
        </section>
      </div>
    </main>
  );
}
