import type { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Elasticsearch, Explained | Rahul Garg",
  description:
    "A practical guide to Elasticsearch fundamentals, mappings, Lucene, architecture, near real-time search, and bulk ingestion strategy.",
};

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl sm:text-3xl font-bold text-blue-300 mb-4">{title}</h2>
      <div className="space-y-4 text-gray-300 leading-8">{children}</div>
    </section>
  );
}

function Callout({
  title,
  children,
  accent = "blue",
}: {
  title: string;
  children: ReactNode;
  accent?: "blue" | "amber" | "green";
}) {
  const styles =
    accent === "amber"
      ? "border-amber-500 bg-amber-950/30 text-amber-100"
      : accent === "green"
        ? "border-green-500 bg-green-950/30 text-green-100"
        : "border-blue-500 bg-blue-950/30 text-blue-100";

  return (
    <div className={`rounded-xl border-l-4 p-5 my-6 ${styles}`}>
      <div className="font-semibold uppercase tracking-wide text-sm mb-2">{title}</div>
      <div className="text-sm leading-7 text-gray-200">{children}</div>
    </div>
  );
}

function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="bg-gray-950 border border-gray-800 rounded-xl p-4 overflow-x-auto text-sm text-emerald-300 my-6">
      <code>{children}</code>
    </pre>
  );
}

export default function ElasticsearchFundamentalsPage() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      <div className="border-b border-gray-800 bg-gradient-to-b from-slate-950 via-black to-black">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <div className="text-sm uppercase tracking-[0.3em] text-blue-400 mb-4">Systems • Search • Architecture</div>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-5">
            Elasticsearch, Explained
            <span className="block text-blue-400">Core Concepts, Lucene, Architecture, and Real-World Usage</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl leading-8">
            Elasticsearch feels simple when you first index a JSON document, but the real value comes from
            understanding how mappings, shards, refreshes, Lucene segments, and distributed writes all work together.
            This post is a practical mental model for engineers who want to use search infrastructure well, not just
            get a demo working.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            {[
              "Index",
              "Document",
              "Mapping",
              "Nested",
              "Near Real-Time Search",
              "Bulk Ingestion",
              "Lucene",
              "Distributed Systems",
            ].map((tag) => (
              <span key={tag} className="rounded-full bg-blue-950 text-blue-200 px-3 py-1 text-sm border border-blue-900">
                {tag}
              </span>
            ))}
          </div>
          <div className="text-sm text-gray-500 mt-8">April 2026 • Beginner to Intermediate • Practical Guide</div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-6 py-12">
        <Section title="Why Elasticsearch Exists">
          <p>
            Elasticsearch is a distributed search and analytics engine built for querying large volumes of structured
            and semi-structured data quickly. It is commonly used for product search, log analytics, operational
            dashboards, document search, internal tools, monitoring, and read models built from events.
          </p>
          <p>
            Teams adopt it not just to store data, but because they need fast full-text search, flexible filtering,
            relevance scoring, aggregations, and scalable query performance across large datasets.
          </p>
          <Callout title="A Useful Mental Model" accent="green">
            A relational database is usually the source of truth for transactions. Elasticsearch is often the optimized
            read layer for search, discovery, and analytics-heavy access patterns.
          </Callout>
        </Section>

        <Section title="The Core Data Model">
          <p>There are four foundational concepts worth locking in early: index, document, field, and mapping.</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong className="text-white">Document:</strong> one JSON object stored in Elasticsearch.
            </li>
            <li>
              <strong className="text-white">Field:</strong> one key inside that JSON document.
            </li>
            <li>
              <strong className="text-white">Index:</strong> a collection of related documents.
            </li>
            <li>
              <strong className="text-white">Mapping:</strong> the schema-like definition describing how fields are
              indexed and stored.
            </li>
          </ul>
          <CodeBlock>{`{
  "title": "Intro to Elasticsearch",
  "author": "Rahul",
  "views": 120,
  "published_at": "2026-04-11"
}`}</CodeBlock>
          <p>
            In this example, the whole JSON object is a document. Each key such as <code>title</code> or{" "}
            <code>views</code> is a field. The document may live in an index like <code>blog_posts</code>. The mapping
            would define that <code>title</code> is searchable text, <code>views</code> is numeric, and{" "}
            <code>published_at</code> is a date.
          </p>
          <Callout title="Knowledge Boost" accent="amber">
            Elasticsearch is flexible, but it is not schema-free. Even when you let it infer types automatically, the
            fields still end up with concrete mappings.
          </Callout>
        </Section>

        <Section title="Dynamic Mapping and Why It Is Both Convenient and Dangerous">
          <p>
            Dynamic mapping means Elasticsearch can see a new field in an incoming document, infer its type, and add
            that field to the index mapping automatically.
          </p>
          <p>
            This is great for prototypes and early experimentation because you do not need to define every field
            upfront. But in production, it can create surprising field types, mapping conflicts, and uncontrolled
            growth in the number of mapped fields.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><code>dynamic: true</code> automatically adds new fields.</li>
            <li><code>dynamic: false</code> ignores unknown fields for mapping.</li>
            <li><code>dynamic: strict</code> rejects documents with unknown fields.</li>
          </ul>
          <Callout title="Important Fact">
            If Elasticsearch infers the wrong type for a field, you usually cannot simply change that field’s mapping
            in place. The common fix is to create a new index with the correct mapping and reindex the data.
          </Callout>
        </Section>

        <Section title="How to Think About Mapping Design">
          <p>
            Mapping is one of the most important design choices in Elasticsearch because it controls how your data can
            be queried later. In practice, mapping design is query design done in advance.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Define mappings explicitly in production rather than relying heavily on dynamic inference.</li>
            <li>Use <code>text</code> for full-text search and <code>keyword</code> for exact match, sort, and aggregations.</li>
            <li>Map dates and numeric fields intentionally instead of letting them be guessed.</li>
            <li>Do not index fields you never search on because indexing has a storage and write cost.</li>
            <li>Watch for mapping explosion when documents carry too many dynamic keys.</li>
          </ul>
          <Callout title="Common Beginner Mistake" accent="amber">
            Mapping every string as <code>text</code> looks harmless at first, but later you discover that sorting and
            aggregating on those fields becomes awkward or impossible without a <code>keyword</code> view.
          </Callout>
        </Section>

        <Section title="Object vs Nested: One of the Most Important Elasticsearch Concepts">
          <p>
            Arrays of objects are where many teams get their first serious Elasticsearch surprise. A plain{" "}
            <code>object</code> field looks intuitive, but arrays of objects are flattened internally in ways that can
            break the relationship between sibling fields.
          </p>
          <CodeBlock>{`{
  "title": "Elasticsearch Basics",
  "authors": [
    { "name": "Rahul", "role": "writer" },
    { "name": "Amit", "role": "editor" }
  ]
}`}</CodeBlock>
          <p>
            If <code>authors</code> is mapped as a regular object, Elasticsearch can flatten the data conceptually into
            arrays like <code>authors.name = ["Rahul", "Amit"]</code> and <code>authors.role = ["writer", "editor"]</code>.
            A query for <code>name = Rahul</code> and <code>role = editor</code> may now match even though Rahul is not
            the editor.
          </p>
          <p>
            A <code>nested</code> mapping preserves each array element as its own hidden sub-document, so the
            relationship between <code>name</code> and <code>role</code> stays intact.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Use <code>object</code> when field relationships inside arrays do not matter.</li>
            <li>Use <code>nested</code> when multiple fields must match within the same array element.</li>
          </ul>
          <Callout title="Practical Tradeoff">
            Nested fields are more correct for some query patterns, but they are also more expensive because they create
            extra internal documents and more complex queries.
          </Callout>
        </Section>

        <Section title="How Elasticsearch Is Used in Real Systems">
          <p>
            In many production systems, Elasticsearch is not the primary transactional database. Instead, data is
            written into operational systems first, then copied or projected into search indices in a shape optimized
            for query speed.
          </p>
          <p>Common patterns include:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Product search where users type free-text queries plus filters like price, brand, and category.</li>
            <li>Log analytics for filtering events by service, latency, environment, and time range.</li>
            <li>Operational dashboards where agents search aggregated views across multiple microservices.</li>
            <li>Document search over contracts, articles, support tickets, or knowledge bases.</li>
            <li>Event-driven read models where the index is built from CDC streams or domain events.</li>
          </ul>
          <Callout title="General Rule">
            Design the Elasticsearch document around the query the user needs, not around the normalized shape of your
            source database.
          </Callout>
        </Section>

        <Section title="Lucene: The Engine Under the Hood">
          <p>
            Elasticsearch is built on top of Apache Lucene. Lucene is the low-level search library that actually handles
            inverted indices, term dictionaries, postings lists, scoring, segment files, and query execution.
          </p>
          <p>
            Elasticsearch adds distributed systems capabilities on top of Lucene: clustering, shards, replicas, REST
            APIs, aggregations, index management, node coordination, and operational tooling.
          </p>
          <p>The easiest way to think about the relationship is:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Lucene is the storage and search engine library.</li>
            <li>Elasticsearch is the distributed database and API layer built around Lucene.</li>
          </ul>
          <Callout title="Why This Matters">
            Many Elasticsearch behaviors make more sense once you remember that Lucene segments are largely immutable.
            That one detail explains refreshes, merges, and why updates are not usually in-place edits.
          </Callout>
        </Section>

        <Section title="High-Level Elasticsearch Architecture">
          <p>
            At a high level, an Elasticsearch cluster consists of nodes. Data is split into indices, and each index is
            broken into shards. A shard is a Lucene index. Primary shards accept writes, and replica shards copy data
            for redundancy and read scaling.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong className="text-white">Cluster:</strong> the full Elasticsearch deployment.
            </li>
            <li>
              <strong className="text-white">Node:</strong> one running Elasticsearch instance in the cluster.
            </li>
            <li>
              <strong className="text-white">Index:</strong> logical collection of documents.
            </li>
            <li>
              <strong className="text-white">Shard:</strong> one partition of an index, backed by Lucene.
            </li>
            <li>
              <strong className="text-white">Replica:</strong> a copied shard for resilience and search scaling.
            </li>
          </ul>
          <p>
            When a search request arrives, Elasticsearch fans the query out to relevant shards, gathers the results,
            merges them, and returns a unified response.
          </p>
          <Callout title="Architecture Insight" accent="green">
            Elasticsearch looks like a single search box to the application, but every query is often a distributed
            query across multiple Lucene indices living on multiple nodes.
          </Callout>
        </Section>

        <Section title="How Updates Work Internally">
          <p>
            An Elasticsearch update is usually not an in-place mutation of an existing Lucene document. Instead, the
            system commonly performs a read-modify-write cycle.
          </p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Read the existing document source.</li>
            <li>Apply the partial update or script.</li>
            <li>Create a new full version of the document.</li>
            <li>Mark the old version as deleted.</li>
            <li>Index the new version.</li>
          </ol>
          <p>
            The old document is not physically removed immediately. It is logically deleted and cleaned up later during
            segment merges.
          </p>
          <Callout title="Important Fact" accent="amber">
            A partial update may look lightweight at the API layer, but internally it often still becomes a full
            document rewrite.
          </Callout>
        </Section>

        <Section title="How Elasticsearch Manages Contention for Updates">
          <p>
            Elasticsearch handles concurrent updates with optimistic concurrency control rather than heavy locking. The
            key idea is simple: detect stale writes instead of blocking all writers up front.
          </p>
          <p>
            Modern Elasticsearch uses sequence numbers and primary terms. If you read a document and then send an update
            with <code>if_seq_no</code> and <code>if_primary_term</code>, Elasticsearch can reject the update if
            someone else changed the document first.
          </p>
          <p>
            This prevents lost updates in distributed systems and is especially useful when multiple workers, services,
            or retry loops can touch the same document.
          </p>
          <Callout title="Engineering Intuition">
            Elasticsearch does not behave like a traditional row-locking database. It usually favors conflict detection
            and retry behavior over long-lived document locks.
          </Callout>
        </Section>

        <Section title="Near Real-Time Search: Why Writes Are Not Instantly Searchable">
          <p>
            Elasticsearch is near real-time, not strictly real-time. A write can succeed and still not be visible to
            search immediately because search visibility depends on a refresh.
          </p>
          <p>
            A refresh makes recently indexed changes visible to search by opening the latest Lucene segments for search.
            By default, this often happens about once per second on active indices.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>A successful write means the data has been accepted and persisted appropriately.</li>
            <li>A refresh means the data is now visible to search.</li>
            <li><code>GET</code> by ID can often see fresh data sooner than a normal search query can.</li>
          </ul>
          <Callout title="A Great Line to Remember" accent="green">
            In Elasticsearch, successful write acknowledgment and search visibility are related, but they are not the
            same thing.
          </Callout>
        </Section>

        <Section title="What Happens During Huge Batch Writes">
          <p>
            Large ingestion jobs usually use the bulk API. During a big batch load, Elasticsearch is not only writing
            documents. It is also buffering work, creating segments, refreshing periodically, and later merging segments
            in the background.
          </p>
          <p>That means heavy writes can increase:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>CPU usage for indexing and merge work.</li>
            <li>Disk I/O due to segment creation and compaction.</li>
            <li>Memory pressure on both the client and the cluster.</li>
            <li>Search latency if search and ingestion compete on the same cluster.</li>
          </ul>
          <Callout title="Important Ingestion Insight" accent="amber">
            Big write jobs are often limited less by raw write acceptance and more by the downstream cost of refreshes,
            segment creation, and merges.
          </Callout>
        </Section>

        <Section title="A Good Strategy for Initial Backfill">
          <p>For a first-time backfill, the goal is usually to maximize throughput without destabilizing the cluster.</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Create the index up front with explicit mappings.</li>
            <li>Use the bulk API rather than one-document-at-a-time indexing.</li>
            <li>Increase the refresh interval, or temporarily disable frequent refresh if search freshness is not needed.</li>
            <li>Optionally reduce replicas during a controlled one-time load, then restore them afterward.</li>
            <li>Send bulk requests with controlled concurrency rather than unbounded parallelism.</li>
            <li>Monitor latency, rejections, merge activity, heap, CPU, and disk I/O during the load.</li>
            <li>Restore normal settings, refresh, and validate counts and sample queries after ingestion finishes.</li>
          </ol>
          <p>
            Many teams also backfill into a brand-new index and then switch an alias after validation. That makes
            cutover safer than loading directly into a heavily queried live index.
          </p>
        </Section>

        <Section title="Why Bulk Size Tuning Matters">
          <p>
            Bulk requests are a tradeoff. If batches are too small, request overhead dominates. If batches are too
            large, requests become slower, memory usage rises, failures hurt more, and retries get more expensive.
          </p>
          <p>
            Engineers usually tune bulk size by payload size as much as by document count. A common starting point is a
            few hundred to a few thousand documents, often landing around 5 MB to 15 MB per request depending on
            document size and ingest complexity.
          </p>
          <p>
            The right answer depends on document size, mapping complexity, pipelines, shard count, hardware, and
            concurrency. Bulk size and worker count must be tuned together.
          </p>
          <Callout title="Rule of Thumb">
            Bulk tuning is not about finding the biggest request the cluster can survive. It is about finding the
            smallest request size that keeps throughput near peak without causing instability.
          </Callout>
        </Section>

        <Section title="Practical Guidance for Engineers Using Elasticsearch">
          <ul className="list-disc pl-6 space-y-2">
            <li>Model documents around the query path, not around normalized storage tables.</li>
            <li>Spend real time on mapping design before pushing production traffic.</li>
            <li>Be careful with arrays of objects and decide deliberately between object and nested.</li>
            <li>Expect updates to be more expensive than they first appear.</li>
            <li>Remember that search freshness depends on refresh behavior.</li>
            <li>Treat large ingestion as an operational event, not just a loop over writes.</li>
            <li>Monitor merge pressure, shard sizing, indexing latency, and rejected bulk requests.</li>
          </ul>
        </Section>

        <Section title="Closing Thought">
          <p>
            Elasticsearch is easy to start and deceptively deep to master. The simple part is storing JSON and running a
            query. The harder and more interesting part is understanding how Lucene, mappings, shard architecture,
            refreshes, optimistic concurrency control, and ingestion strategy shape correctness and performance.
          </p>
          <p>
            Once you internalize those building blocks, Elasticsearch stops feeling magical and starts feeling like an
            engineering tool you can reason about confidently.
          </p>
        </Section>
      </article>
    </main>
  );
}
