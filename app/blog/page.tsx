export default function BlogPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-16 bg-black text-white font-sans">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-blue-400">Blog</h1>
      <p className="text-lg text-gray-300 mb-8 text-center max-w-xl">Thoughts, tutorials, and stories on software engineering, distributed systems, and AI. Stay tuned for more!</p>
      {/* Blog posts will go here */}
      <div className="w-full flex flex-col items-center gap-6">
        <a href="/blog/meridian-data-transfer" className="block w-full max-w-xl bg-gray-900 rounded-lg p-6 border-l-4 border-blue-400 shadow hover:bg-gray-800 transition">
          <div className="flex items-center gap-2 mb-1">
            <h2 className="text-2xl font-bold text-blue-300">Meridian: TB-Scale Reliable Data Transfer</h2>
          </div>
          <div className="text-sm text-gray-400 mb-2">March 2026 • System Design • Engineering Design Document</div>
          <p className="text-gray-300">A production-grade system for transferring terabytes of data across nodes with zero data loss, end-to-end integrity verification, resumable transfers, and automatic failover.</p>
          <div className="flex gap-2 mt-3 flex-wrap">
            {["gRPC", "CDC", "Merkle Trees", "WAL", "TLS 1.3", "io_uring", "RocksDB"].map(tag => (
              <span key={tag} className="text-xs bg-blue-950 text-blue-300 px-2 py-0.5 rounded-full">{tag}</span>
            ))}
          </div>
        </a>
        <a href="/blog/search-infrastructure" className="block w-full max-w-xl bg-gray-900 rounded-lg p-6 border-l-4 border-blue-400 shadow hover:bg-gray-800 transition">
          <div className="flex items-center gap-2 mb-1">
            <h2 className="text-2xl font-bold text-blue-300">Building Centralized Search for Microservices</h2>
          </div>
          <div className="text-sm text-gray-400 mb-2">2024 • System Design • Case Study</div>
          <p className="text-gray-300">Event-driven search infrastructure powering pharmacy work queues at 2000 RPS. CDC, Kinesis, Lambda aggregation, OpenSearch — and why the aggregation logic is the hardest part.</p>
          <div className="flex gap-2 mt-3">
            {["Kinesis", "OpenSearch", "Lambda", "CDC", "Microservices"].map(tag => (
              <span key={tag} className="text-xs bg-blue-950 text-blue-300 px-2 py-0.5 rounded-full">{tag}</span>
            ))}
          </div>
        </a>
        <a href="/blog/why-we-procrastinate" className="block w-full max-w-xl bg-gray-900 rounded-lg p-6 border-l-4 border-blue-400 shadow hover:bg-gray-800 transition">
          <h2 className="text-2xl font-bold text-blue-300 mb-1">Why We Procrastinate</h2>
          <div className="text-sm text-gray-400 mb-2">May 2024 • Psychology</div>
          <p className="text-gray-300">Why do we put things off, even when we know it's not in our best interest? A look at the psychology behind procrastination and how to overcome it.</p>
        </a>
      </div>
    </main>
  );
} 