"use client";

import { useState } from "react";

const sections = [
  "Executive Summary",
  "Requirements",
  "Architecture",
  "Content-Defined Chunking",
  "Transport Layer",
  "Filling the Pipe",
  "Data Integrity",
  "Reliability & Fault Tolerance",
  "Security",
  "Observability",
  "Design Tradeoffs",
  "Operations & Capacity",
];

function SectionAnchor({ id, children }: { id: string; children: React.ReactNode }) {
  return <div id={id} className="scroll-mt-24">{children}</div>;
}

function Table({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto my-4">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr>
            {headers.map((h) => (
              <th key={h} className="text-left text-cyan-400 border-b border-gray-700 px-3 py-2 font-semibold">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-gray-800 hover:bg-gray-800/50">
              {row.map((cell, j) => (
                <td key={j} className="px-3 py-2 text-gray-300">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function InfoCard({ title, children, accent = "blue" }: { title: string; children: React.ReactNode; accent?: string }) {
  const borderColor = accent === "purple" ? "border-purple-500" : accent === "green" ? "border-green-500" : accent === "yellow" ? "border-yellow-500" : accent === "red" ? "border-red-500" : "border-blue-500";
  const titleColor = accent === "purple" ? "text-purple-400" : accent === "green" ? "text-green-400" : accent === "yellow" ? "text-yellow-400" : accent === "red" ? "text-red-400" : "text-blue-400";
  return (
    <div className={`bg-gray-800/60 rounded-lg p-5 border-l-4 ${borderColor} my-4`}>
      <div className={`font-semibold ${titleColor} mb-2 text-sm uppercase tracking-wide`}>{title}</div>
      <div className="text-gray-300 text-sm leading-relaxed">{children}</div>
    </div>
  );
}

function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="bg-gray-950 rounded-lg p-4 text-sm text-emerald-300 font-mono overflow-x-auto my-4 border border-gray-800">
      <code>{children}</code>
    </pre>
  );
}

function Diagram({ src, title }: { src: string; title: string }) {
  return (
    <div className="my-8 rounded-xl overflow-hidden border border-gray-700 bg-gray-950">
      <div className="px-4 py-2 bg-gray-900 border-b border-gray-700 flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
        <span className="text-xs text-gray-400 font-mono">{title}</span>
        <a href={src} target="_blank" rel="noopener noreferrer" className="ml-auto text-xs text-cyan-400 hover:text-cyan-300 transition">Open in Excalidraw &rarr;</a>
      </div>
      <iframe
        src={src.replace('#', '#')}
        width="100%"
        height="500"
        className="border-0 bg-[#1e1e2e]"
        loading="lazy"
        title={title}
      />
    </div>
  );
}

export default function MeridianDataTransfer() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-black text-white font-sans">
      {/* Header */}
      <div className="relative bg-gradient-to-b from-gray-900 via-gray-950 to-black border-b border-gray-800 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-950/40 via-transparent to-transparent"></div>
        <div className="relative max-w-4xl mx-auto px-6 py-20 text-center">
          <div className="text-cyan-400 text-sm font-mono tracking-widest uppercase mb-4">Engineering Design Document</div>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4">
            Meridian<br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">TB-Scale Reliable Data Transfer</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            A production-grade, highly available system for transferring terabytes of data across nodes with zero data loss, end-to-end integrity verification, and automatic failover.
          </p>
          <div className="flex flex-wrap justify-center gap-8 mt-6">
            {[
              ["50+ TB", "Max Transfer", "text-cyan-400"],
              ["80%+", "Link Utilization", "text-emerald-400"],
              ["Zero", "Data Loss", "text-amber-400"],
              ["<5s", "Resume Time", "text-purple-400"],
            ].map(([val, label, color]) => (
              <div key={label}>
                <div className={`text-2xl font-bold ${color}`}>{val}</div>
                <div className="text-gray-500 text-sm mt-1">{label}</div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-gray-500 text-sm">Version 1.0 &middot; March 2026</div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-8 flex gap-8">
        {/* Sidebar TOC - desktop only */}
        <nav className="hidden lg:block w-56 shrink-0 sticky top-8 self-start">
          <div className="text-xs text-gray-500 uppercase tracking-widest mb-3 font-semibold">Contents</div>
          <ul className="flex flex-col gap-1">
            {sections.map((s, i) => (
              <li key={s}>
                <a
                  href={`#section-${i}`}
                  onClick={() => setActiveSection(s)}
                  className={`text-sm px-2 py-1 rounded block transition ${
                    activeSection === s ? "text-cyan-400 bg-gray-900" : "text-gray-500 hover:text-gray-300"
                  }`}
                >
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Main content */}
        <article className="flex-1 min-w-0">

          {/* Section 1: Executive Summary */}
          <SectionAnchor id="section-0">
            <section className="mb-16">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">Executive Summary</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                This document specifies the architecture, design decisions, and implementation details for <strong className="text-white">Meridian</strong>, a production-grade system that transfers terabyte-scale datasets between nodes with zero data loss.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                The system provides resumable transfers, content-defined deduplication, multi-path parallelism, end-to-end cryptographic integrity verification, and automatic failover &mdash; all while saturating available network bandwidth.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-6">
                {[
                  ["Resumable Transfers", "text-cyan-300 border-cyan-900"],
                  ["Content-Defined Dedup", "text-purple-300 border-purple-900"],
                  ["Multi-Path Parallelism", "text-amber-300 border-amber-900"],
                  ["Cryptographic Integrity", "text-rose-300 border-rose-900"],
                  ["Automatic Failover", "text-emerald-300 border-emerald-900"],
                  ["Bandwidth Saturation", "text-sky-300 border-sky-900"],
                ].map(([f, colors]) => (
                  <div key={f} className={`bg-gray-900 rounded-lg px-3 py-2 text-center text-sm border ${colors}`}>
                    {f}
                  </div>
                ))}
              </div>
            </section>
          </SectionAnchor>

          {/* Section 2: Requirements */}
          <SectionAnchor id="section-1">
            <section className="mb-16">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent mb-6">Requirements</h2>

              <h3 className="text-xl font-semibold text-white mb-3">Functional Requirements</h3>
              <ul className="space-y-2 mb-8">
                {[
                  ["Bulk Transfer", "Transfer datasets from 1 GB to 50+ TB between two nodes (source and destination)."],
                  ["Resumability", "If interrupted at any point (crash, network failure, reboot), resume from the point of interruption, not restart from scratch."],
                  ["Incremental Sync", "When transferring a previously-transferred dataset, only changed portions are re-sent."],
                  ["Integrity Guarantee", "The receiver cryptographically verifies that received data is bit-for-bit identical to the source. Silent corruption is detected."],
                  ["Atomic Commit", "A transfer is either fully committed or not committed at all. No partial states visible to consumers."],
                  ["Multi-File Support", "A single transfer job can include thousands of files in a directory tree, preserving structure on the destination."],
                ].map(([title, desc]) => (
                  <li key={title} className="flex gap-3">
                    <span className="text-blue-400 mt-0.5 shrink-0">&#9654;</span>
                    <div>
                      <span className="text-white font-semibold">{title}:</span>{" "}
                      <span className="text-gray-300">{desc}</span>
                    </div>
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3">Performance Targets</h3>
              <Table
                headers={["Metric", "Target", "Rationale"]}
                rows={[
                  ["Throughput", "≥80% of link capacity", "On a 10 Gbps link, achieve ≥8 Gbps sustained"],
                  ["Chunk Latency (p99)", "<50 ms", "End-to-end time for one chunk: send, verify, ACK"],
                  ["Resume Time", "<5 seconds", "Time from process restart to transfer resumption"],
                  ["Dedup Ratio (incremental)", "≥40%", "For typical edit patterns on previously-transferred data"],
                ]}
              />

              <h3 className="text-xl font-semibold text-white mb-3 mt-8">Reliability Targets</h3>
              <Table
                headers={["Metric", "Target", "Rationale"]}
                rows={[
                  ["Data Loss", "Zero", "Not one byte lost, ever. Cryptographic verification end-to-end."],
                  ["Transfer Success Rate", "99.999%", "Measured over 30-day rolling window"],
                  ["Recovery from Node Crash", "Automatic", "WAL-based recovery, no manual intervention"],
                  ["Recovery from Network Partition", "Automatic", "Reconnect with exponential backoff, delta sync on reconnect"],
                ]}
              />

              <h3 className="text-xl font-semibold text-white mb-3 mt-8">Security Requirements</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {[
                  ["Encryption in Transit", "TLS 1.3 with mTLS. AES-256-GCM, ChaCha20-Poly1305."],
                  ["Encryption at Rest", "AES-256-GCM per-chunk. Per-transfer DEKs. Master key in HSM/Vault."],
                  ["Access Control", "RBAC with OPA policy engine. Roles: admin, operator, transfer-agent, read-only."],
                  ["Audit Logging", "Immutable, append-only audit log. 2-year retention."],
                ].map(([title, desc]) => (
                  <div key={title} className="bg-gray-900 rounded-lg p-4 border border-gray-800">
                    <div className="text-blue-400 font-semibold text-sm mb-1">{title}</div>
                    <div className="text-gray-400 text-xs">{desc}</div>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-semibold text-white mb-3">Scalability</h3>
              <ul className="space-y-1 text-gray-300 text-sm mb-8">
                <li>&#8226; Datasets up to 50 TB in a single transfer job</li>
                <li>&#8226; Up to 10 million chunks per transfer (~40 TB at 4 MB average)</li>
                <li>&#8226; Up to 100 concurrent transfer jobs per node</li>
                <li>&#8226; Horizontal scaling via multiple sender/receiver pairs</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3">Observability</h3>
              <ul className="space-y-1 text-gray-300 text-sm mb-8">
                <li>&#8226; <strong className="text-white">Metrics:</strong> Prometheus-compatible on :9090 &mdash; throughput, chunk latency histogram, dedup ratio, error rate, WAL backlog</li>
                <li>&#8226; <strong className="text-white">Tracing:</strong> OpenTelemetry distributed tracing with per-chunk spans. 100% sampling on failures, 10% on success</li>
                <li>&#8226; <strong className="text-white">Alerting:</strong> Pre-configured rules for throughput drops, integrity failures, stalled transfers, disk space, certificate expiry</li>
              </ul>

              <InfoCard title="Constraints & Assumptions" accent="yellow">
                <ul className="space-y-1 text-sm">
                  <li>&#8226; Both nodes run Linux (kernel 5.6+ for io_uring support)</li>
                  <li>&#8226; Network link at least 1 Gbps. Optimized for 10&ndash;100 Gbps</li>
                  <li>&#8226; NVMe SSD storage on both nodes</li>
                  <li>&#8226; All ordering uses logical clocks, not wall clocks (no time sync required)</li>
                  <li>&#8226; Designed for batch/bulk transfers, not real-time streaming</li>
                </ul>
              </InfoCard>
            </section>
          </SectionAnchor>

          {/* Section 3: High-Level Architecture */}
          <SectionAnchor id="section-2">
            <section className="mb-16">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-6">High-Level Architecture</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                The system consists of three planes: the <strong className="text-white">data plane</strong> (chunking, transfer, reassembly), the <strong className="text-white">control plane</strong> (coordination, state management, health monitoring), and the <strong className="text-white">observability plane</strong> (metrics, tracing, alerting).
              </p>

              <Diagram
                src="https://excalidraw.com/#json=WxWpXihlQkDwezsDpHjkg,pCXkAobc2wl8tAx-b3ngxQ"
                title="Architecture: End-to-End Data Flow"
              />

              <h3 className="text-xl font-semibold text-white mb-3">End-to-End Data Flow</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {[
                  ["1. File Scanning", "Scan directory tree, compute metadata. inotify/fswatch for change detection."],
                  ["2. CDC Chunking", "Variable-size chunks (256 KB – 16 MB, avg 4 MB) via Buzhash rolling hash."],
                  ["3. Deduplication", "SHA-256 hash checked against receiver's dedup index. Skip existing chunks."],
                  ["4. Compression", "Adaptive: LZ4, Zstd L3, Zstd L9, or none based on entropy sampling."],
                  ["5. Transport", "gRPC bi-directional streams over 8 parallel TCP connections. TLS 1.3."],
                  ["6. Integrity", "CRC32C (wire), SHA-256 (chunk), Merkle root (file completeness)."],
                  ["7. Reassembly & Commit", "Chunks reassembled via manifest. fsync'd. Atomically committed."],
                ].map(([title, desc]) => (
                  <div key={title} className="bg-gray-900 rounded-lg p-3 border border-gray-800 flex-1 min-w-[280px]">
                    <div className="text-blue-400 font-semibold text-sm">{title}</div>
                    <div className="text-gray-400 text-xs mt-1">{desc}</div>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-semibold text-white mb-3">Transfer State Machine</h3>
              <div className="bg-gray-900 rounded-lg p-4 border border-gray-800 mb-6 overflow-x-auto">
                <div className="flex items-center gap-2 text-sm font-mono flex-wrap">
                  {[
                    ["QUEUED", "text-gray-300 bg-gray-800"],
                    ["SCANNING", "text-cyan-300 bg-cyan-950"],
                    ["CHUNKING", "text-purple-300 bg-purple-950"],
                    ["NEGOTIATING", "text-amber-300 bg-amber-950"],
                    ["TRANSFERRING", "text-blue-300 bg-blue-950"],
                    ["VERIFYING", "text-rose-300 bg-rose-950"],
                    ["COMMITTING", "text-orange-300 bg-orange-950"],
                    ["COMPLETE", "text-emerald-300 bg-emerald-950"],
                  ].map(([state, colors], i, arr) => (
                    <span key={state} className="flex items-center gap-2">
                      <span className={`${colors} px-2 py-1 rounded`}>{state}</span>
                      {i < arr.length - 1 && <span className="text-gray-600">&rarr;</span>}
                    </span>
                  ))}
                </div>
                <p className="text-gray-500 text-xs mt-3">Failure at any state triggers RETRYING (exponential backoff). After max retries: FAILED with diagnostic snapshot. Operators can PAUSE or CANCEL at any point.</p>
              </div>

              <h3 className="text-xl font-semibold text-white mb-3">Component Responsibilities</h3>
              <Table
                headers={["Component", "Location", "Responsibility"]}
                rows={[
                  ["File Scanner", "Source", "Discover files, detect changes, feed chunker"],
                  ["CDC Chunker", "Source", "Split files into content-defined variable-size chunks"],
                  ["Dedup Index", "Both", "Track which chunks exist at each node (Bloom filter + RocksDB)"],
                  ["Transfer Queue", "Source", "Priority queue of chunks to send, backed by WAL"],
                  ["Transport Pool", "Both", "8 gRPC connections, 16 streams each, TLS 1.3, flow control"],
                  ["Integrity Verifier", "Destination", "CRC32C, SHA-256, Merkle tree verification"],
                  ["Reassembler", "Destination", "Reconstruct files from chunks using manifest"],
                  ["WAL", "Both", "Crash-safe state tracking (append-only, fsync'd)"],
                  ["Coordinator", "Both", "State machine management, retry logic, job lifecycle"],
                  ["Metrics Exporter", "Both", "Prometheus metrics, OpenTelemetry traces"],
                ]}
              />
            </section>
          </SectionAnchor>

          {/* Section 4: Content-Defined Chunking */}
          <SectionAnchor id="section-3">
            <section className="mb-16">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">Content-Defined Chunking</h2>

              <InfoCard title="Why Not Fixed-Size Chunks?" accent="red">
                <p className="mb-2">
                  Fixed-size chunking (e.g., splitting every 4 MB) breaks catastrophically on insertions. Consider a 1 TB file where a 50 KB row is inserted near the beginning:
                </p>
                <ul className="space-y-1 text-sm">
                  <li>&#8226; <strong className="text-white">Fixed chunks:</strong> Every chunk boundary after the insertion shifts by 50 KB. Every chunk has a different SHA-256 hash. You must re-transfer the entire 1 TB file.</li>
                  <li>&#8226; <strong className="text-white">CDC chunks:</strong> Boundaries are data-dependent via rolling hash. An insertion only affects 2&ndash;3 chunks near the edit point. All other boundaries remain stable.</li>
                </ul>
                <p className="mt-2 text-blue-300 font-semibold">CDC reduces re-transfer volume by 90&ndash;99% compared to fixed-size chunking.</p>
              </InfoCard>

              <h3 className="text-xl font-semibold text-white mb-3 mt-8">Algorithm: Buzhash</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                We use Buzhash (bitwise rolling hash) rather than Rabin fingerprinting:
              </p>
              <Table
                headers={["Property", "Buzhash", "Rabin"]}
                rows={[
                  ["Speed", "~3.5 GB/s", "~2.8 GB/s"],
                  ["Distribution Quality", "Good", "Excellent"],
                  ["Implementation", "XOR + rotate (simple)", "Polynomial arithmetic (moderate)"],
                ]}
              />
              <p className="text-gray-400 text-sm mt-2">
                We chose Buzhash because chunking is CPU-bound and runs inline with I/O. The 25% speed advantage keeps pace with NVMe read speeds (~3.5 GB/s). Rabin&apos;s better distribution doesn&apos;t matter because we rely on SHA-256 for content addressing, not the rolling hash.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3 mt-8">Chunk Size Parameters</h3>
              <Table
                headers={["Parameter", "Value", "Rationale"]}
                rows={[
                  ["Minimum Chunk", "256 KB", "Prevents pathological tiny chunks from repetitive data patterns"],
                  ["Average Chunk", "4 MB", "Sweet spot: 2.5M chunks per 10 TB fits in ~640 MB RAM index"],
                  ["Maximum Chunk", "16 MB", "Caps worst-case for uniform data (zeros, compressed streams)"],
                  ["Window Size", "48 bytes", "Sliding window for rolling hash computation"],
                ]}
              />
              <p className="text-gray-400 text-sm mt-2">
                The 4 MB average is a three-way tension: smaller chunks (1 MB) give better dedup granularity but produce 10M chunks per 10 TB, requiring ~2.5 GB for the index. Larger chunks (16 MB) reduce index size but miss small edits. 4 MB is tunable per-environment.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3 mt-8">The Chunk Manifest</h3>
              <CodeBlock>{`ChunkMeta {
  chunk_index: u64,
  file_path:   String,
  offset:      u64,
  length:      u32,
  sha256:      [u8; 32]
}`}</CodeBlock>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                The manifest records each chunk&apos;s position (byte offset within the file), size, and content hash. It&apos;s deterministic: given the same file content and CDC parameters, the same boundaries are always produced. For multi-file transfers, chunk indices are global across all files. The sender can transmit chunks in any order; the receiver uses the manifest to place each chunk correctly.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3 mt-8">Deduplication Index</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
                  <div className="text-blue-400 font-semibold text-sm mb-1">RocksDB Backend</div>
                  <div className="text-gray-400 text-xs">SHA-256(chunk) &rarr; chunk_id, size, ref_count, locations[]</div>
                </div>
                <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
                  <div className="text-blue-400 font-semibold text-sm mb-1">Bloom Filter</div>
                  <div className="text-gray-400 text-xs">0.01% false positive rate. ~600 KB RAM for 2.5M chunks. Eliminates 99.99% of disk lookups.</div>
                </div>
                <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
                  <div className="text-blue-400 font-semibold text-sm mb-1">Garbage Collection</div>
                  <div className="text-gray-400 text-xs">ref_count=0 eligible for GC. Background compactor every 6 hours, 72-hour grace period.</div>
                </div>
              </div>
            </section>
          </SectionAnchor>

          {/* Section 5: Transport Layer */}
          <SectionAnchor id="section-4">
            <section className="mb-16">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">Transport Layer</h2>

              <Diagram
                src="https://excalidraw.com/#json=Eiid2MDDq9BbAXO8oMaZ9,p1wPyWZEwR1F0swvpTIT1w"
                title="Transport Layer: Protocol Stack & TCP vs UDP"
              />

              <h3 className="text-xl font-semibold text-white mb-3">Protocol Stack: gRPC over HTTP/2 over TCP</h3>
              <div className="space-y-3 mb-6">
                {[
                  ["TCP (Layer 4)", "Provides packet-level reliable delivery. 8 independent TCP connections, each with 128 MB socket buffer, BBR congestion control. Kernel handles retransmission at 1.5 KB granularity.", "green"],
                  ["HTTP/2 (Framing)", "Multiplexes 16 logical streams per TCP connection. Frames from different streams interleaved on the wire, tagged with stream IDs. 16-way parallelism per connection without separate handshakes.", "blue"],
                  ["gRPC (Application)", "RPC semantics (TransferChunks, NegotiateChunks, CommitTransfer), protobuf serialization, bi-directional streaming, deadline/cancellation propagation. Each gRPC stream maps to one HTTP/2 stream.", "purple"],
                ].map(([title, desc, color]) => {
                  const borderColor = color === "green" ? "border-green-500" : color === "purple" ? "border-purple-500" : "border-blue-500";
                  const titleColor = color === "green" ? "text-green-400" : color === "purple" ? "text-purple-400" : "text-blue-400";
                  return (
                    <div key={title} className={`bg-gray-900 rounded-lg p-4 border-l-4 ${borderColor}`}>
                      <div className={`${titleColor} font-semibold text-sm mb-1`}>{title}</div>
                      <div className="text-gray-400 text-xs leading-relaxed">{desc}</div>
                    </div>
                  );
                })}
              </div>
              <InfoCard title="Combined" accent="blue">
                8 TCP connections &times; 16 gRPC streams = <strong className="text-white">128 parallel chunk transfers</strong>. A packet loss on connection #3 only stalls its 16 streams; the other 112 streams continue unaffected.
              </InfoCard>

              <h3 className="text-xl font-semibold text-white mb-3 mt-8">Why 8 Connections and 16 Streams?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                {[
                  ["Too Few (1 TCP, 128 streams)", "Single packet loss causes head-of-line blocking across all 128 streams. At 0.1% loss, effective throughput drops dramatically.", "red"],
                  ["Too Many (128 TCP, 1 stream each)", "128 TLS handshakes, 128 × 128 MB = 16 GB RAM, 128 congestion windows fighting for bandwidth, middlebox DDoS flags.", "red"],
                  ["Sweet Spot (8 TCP, 16 streams)", "8 fault domains limit blast radius to 12.5%. 16 streams amortize overhead. 8 handshakes, 2 GB buffer memory, good fairness.", "green"],
                ].map(([title, desc, color]) => {
                  const borderColor = color === "green" ? "border-green-500" : "border-red-500";
                  return (
                    <div key={title} className={`bg-gray-900 rounded-lg p-4 border border-gray-800 border-t-2 ${borderColor}`}>
                      <div className={`font-semibold text-sm mb-1 ${color === "green" ? "text-green-400" : "text-red-400"}`}>{title}</div>
                      <div className="text-gray-400 text-xs">{desc}</div>
                    </div>
                  );
                })}
              </div>

              <h3 className="text-xl font-semibold text-white mb-3 mt-8">What is Multiplexing?</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Without multiplexing, sending 16 chunks simultaneously requires 16 TCP connections. With multiplexing, one TCP connection carries all 16 by interleaving. HTTP/2 chops each chunk&apos;s data into small frames (16 KB default), stamps each frame with a stream ID, and interleaves them on the wire. The receiver reads frames, sorts by stream ID, and reassembles each stream independently. This is purely a framing-layer concern &mdash; invisible to application code.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3 mt-8">Why TCP and Not UDP?</h3>
              <InfoCard title="The Granularity Argument" accent="yellow">
                <p className="mb-2">TCP operates at the <strong className="text-white">packet level (1.5 KB)</strong>. Our application operates at the <strong className="text-white">chunk level (4 MB)</strong>. A 4 MB chunk is ~2,700 packets. If one packet is lost:</p>
                <ul className="space-y-2 text-sm">
                  <li><strong className="text-green-400">With TCP:</strong> Kernel retransmits just 1.5 KB. Application receives a complete 4 MB chunk. Cost: 1.5 KB re-sent, ~50 ms delay.</li>
                  <li><strong className="text-red-400">With UDP (chunk-level retry):</strong> SHA-256 verification fails. Discard all 4 MB and re-request. Cost: 4 MB re-sent &mdash; a <strong className="text-white">2,700&times; amplification</strong>. At 0.1% loss, ~70% of all data is re-transmitted.</li>
                  <li><strong className="text-yellow-400">With UDP (packet-level reliability):</strong> Track individual packets, detect losses, retransmit. But this requires sequence numbers, retransmit timers, duplicate detection, congestion control &mdash; you&apos;ve reimplemented TCP.</li>
                </ul>
                <p className="mt-3 text-blue-300 font-semibold text-sm">TCP&apos;s ordering guarantee is a small tax (occasional HOL blocking). Its packet-level reliability saves us from 2,700&times; retransmit amplification.</p>
              </InfoCard>

              <h3 className="text-xl font-semibold text-white mb-3 mt-8">QUIC Fallback</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                QUIC runs over UDP but builds its own per-stream reliability, eliminating TCP&apos;s head-of-line blocking. Used as a fallback when measured packet loss exceeds 1% (typically WAN/internet paths). Not the default because: (1) NIC hardware offloading only works for TCP; (2) BBR over TCP is more mature; (3) kernel bypass (io_uring) integrates better with TCP sockets.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3 mt-8">Adaptive Compression</h3>
              <Table
                headers={["Algorithm", "Ratio", "Speed", "When Used"]}
                rows={[
                  ["LZ4", "2.1×", "4.5 GB/s", "CPU bottleneck (fast network, slow CPU)"],
                  ["Zstd level 3", "3.2×", "1.2 GB/s", "Balanced default"],
                  ["Zstd level 9", "3.8×", "200 MB/s", "Network bottleneck (slow WAN link)"],
                  ["None", "1.0×", "∞", "Already compressed/encrypted data (entropy >7.5 bits/byte)"],
                ]}
              />
              <p className="text-gray-400 text-sm mt-2">
                The first 64 KB of each chunk is sampled to estimate entropy. High-entropy data is sent uncompressed. Algorithm choice between LZ4/Zstd is based on the ratio of measured network throughput to available CPU cycles.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3 mt-8">Zero-Copy I/O & Kernel Optimizations</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  ["sendfile()", "Transfers data directly from disk to socket without copying into userspace. Saves 2 memory copies per chunk."],
                  ["io_uring", "Linux 5.6+ async batched I/O submission. Up to 32 SQEs per syscall, reducing context switches 10–30×."],
                  ["Huge Pages", "2 MB huge pages for chunk buffers to reduce TLB misses during hash computation and compression."],
                ].map(([title, desc]) => (
                  <div key={title} className="bg-gray-900 rounded-lg p-4 border border-gray-800">
                    <div className="text-green-400 font-semibold text-sm mb-1 font-mono">{title}</div>
                    <div className="text-gray-400 text-xs">{desc}</div>
                  </div>
                ))}
              </div>
            </section>
          </SectionAnchor>

          {/* Section 6: Why a Single TCP Connection Doesn't Fill the Pipe */}
          <SectionAnchor id="section-5">
            <section className="mb-16">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-red-400 bg-clip-text text-transparent mb-6">Why a Single TCP Connection Doesn&apos;t Fill the Pipe</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                A 10 Gbps NIC can push 1.25 GB/s onto the wire. A single &ldquo;normal&rdquo; TCP connection achieves a fraction of this. Five independent bottlenecks compound:
              </p>

              <div className="space-y-4 mb-8">
                {[
                  ["1. Socket Buffer Limits", "TCP throughput is bounded by: throughput = socket_buffer / RTT. Default Linux socket buffers are ~4 MB. With 50 ms RTT: 4 MB / 50 ms = 640 Mbps — just 6.4% of a 10 Gbps link. The kernel defaults to small buffers because a server with 1,000 connections at 128 MB each would need 256 TB of RAM."],
                  ["2. Congestion Window Ramp-Up", "TCP starts with a small congestion window (~14.6 KB) and probes upward. To fill a 10 Gbps link with 50 ms RTT, cwnd must reach the bandwidth-delay product: 10 Gbps × 50 ms = 62.5 MB. CUBIC ramps conservatively. BBR probes much faster."],
                  ["3. Head-of-Line Blocking", "HTTP/2 on one TCP connection: a lost packet stalls ALL streams until retransmission (one RTT). At 0.1% loss on 10 Gbps, thousands of stall events per second. Multiple TCP connections contain the blast radius."],
                  ["4. Receiver Processing Bottleneck", "Single-threaded receiver doing decompress + SHA-256 + disk write tops out at 350–500 MB/s. Buffer fills, TCP window closes, sender throttled. We use 64 parallel processing workers."],
                  ["5. Memory Copy Overhead", "Normal read()/write() copies data twice per direction. At 10 Gbps that's ~2.5 GB/s of memcpy competing with application work. sendfile(), io_uring, and zero-copy techniques reduce this."],
                ].map(([title, desc]) => (
                  <div key={title} className="bg-gray-900 rounded-lg p-4 border border-gray-800">
                    <div className="text-yellow-400 font-semibold text-sm mb-2">{title}</div>
                    <div className="text-gray-400 text-xs leading-relaxed">{desc}</div>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-semibold text-white mb-3">Combined Effect</h3>
              <Table
                headers={["Bottleneck", "Effect on 10 Gbps", "Mitigation"]}
                rows={[
                  ["Default 4 MB buffers", "640 Mbps (6%)", "128 MB per-socket buffers"],
                  ["CUBIC cwnd ramp", "~7 Gbps (70%)", "BBR congestion control"],
                  ["HOL blocking (0.1% loss)", "~4 Gbps (40%)", "8 independent TCP connections"],
                  ["Single-threaded receiver", "~2.8 Gbps (28%)", "64 parallel processing workers"],
                  ["2× memory copies", "~2.2 Gbps (22%)", "sendfile() + io_uring + huge pages"],
                  ["All mitigations applied", "~8 Gbps (80%)", "Remaining 20%: TLS, checksums, fsync"],
                ]}
              />
            </section>
          </SectionAnchor>

          {/* Section 7: Data Integrity */}
          <SectionAnchor id="section-6">
            <section className="mb-16">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-red-400 to-rose-400 bg-clip-text text-transparent mb-6">Data Integrity</h2>
              <Diagram
                src="https://excalidraw.com/#json=aFuFOGzf5A-9tG92k9srp,nh3A_FtGRJgoNowEJB5XQA"
                title="Four Layers of Data Integrity & Merkle Tree"
              />

              <p className="text-gray-300 leading-relaxed mb-6">Four layers of verification, each catching a different class of corruption at a different point in the pipeline:</p>

              <div className="space-y-4 mb-8">
                {[
                  ["Layer 1: CRC32C on the Wire", "Every chunk carries a CRC32C checksum in its protobuf header. Verified immediately upon receipt, before writing to disk. Hardware-accelerated (SSE4.2, ~30 GB/s), ~0.1% overhead. Catches: bit flips in transit, NIC errors, kernel buffer corruption.", "green"],
                  ["Layer 2: SHA-256 Content Hash", "After decompression, receiver computes SHA-256 of raw chunk data and compares to manifest hash. Uses hardware acceleration (SHA-NI on x86, CE on ARM) at ~1.5 GB/s. Catches: decompression errors, memory corruption, anything CRC32C might miss.", "blue"],
                  ["Layer 3: Merkle Tree", "Once all chunks for a file are received, a Merkle tree is built from chunk SHA-256 hashes. Root compared against sender's. Catches: missing chunks, duplicate chunks, misordered chunks. Enables O(log n) failure localization via binary search.", "purple"],
                  ["Layer 4: Background Scrubbing", "After commit, a background scrubber periodically re-reads stored chunks and re-verifies SHA-256 hashes. Detects bit rot from storage media degradation. Low I/O priority (ionice class 3). Full scrub of 10 TB completes in ~8 hours at 350 MB/s.", "yellow"],
                ].map(([title, desc, color]) => {
                  const borderColor = color === "green" ? "border-green-500" : color === "purple" ? "border-purple-500" : color === "yellow" ? "border-yellow-500" : "border-blue-500";
                  const titleColor = color === "green" ? "text-green-400" : color === "purple" ? "text-purple-400" : color === "yellow" ? "text-yellow-400" : "text-blue-400";
                  return (
                    <div key={title} className={`bg-gray-900 rounded-lg p-4 border-l-4 ${borderColor}`}>
                      <div className={`${titleColor} font-semibold text-sm mb-2`}>{title}</div>
                      <div className="text-gray-400 text-xs leading-relaxed">{desc}</div>
                    </div>
                  );
                })}
              </div>

              <InfoCard title="Why Three Layers Instead of Just SHA-256?" accent="blue">
                <p className="text-sm">
                  SHA-256 alone is technically sufficient. CRC32C adds value because it is <strong className="text-white">20&times; faster</strong> and catches wire errors before wasting CPU on decompression and SHA-256. The Merkle tree adds value because per-chunk SHA-256 <strong className="text-white">cannot detect missing or misordered chunks</strong>. A single Merkle root comparison proves the entire dataset is correct; without it, you&apos;d compare 2.5 million hashes individually.
                </p>
              </InfoCard>
            </section>
          </SectionAnchor>

          {/* Section 8: Reliability & Fault Tolerance */}
          <SectionAnchor id="section-7">
            <section className="mb-16">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-6">Reliability &amp; Fault Tolerance</h2>

              <h3 className="text-xl font-semibold text-white mb-3">Write-Ahead Log (WAL)</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                The WAL is an append-only file on disk &mdash; not a service, not a database, not a distributed system. It stores a sequence of binary records, each describing a state transition:
              </p>
              <Table
                headers={["Record Type", "Meaning", "Fields"]}
                rows={[
                  ["CHUNK_QUEUED", "Chunk added to send queue", "transfer_id, chunk_index, sha256"],
                  ["CHUNK_SENT", "Chunk data written to socket", "transfer_id, chunk_index"],
                  ["CHUNK_ACKED", "Receiver confirmed receipt", "transfer_id, chunk_index, ack_status"],
                  ["CHUNK_COMMITTED", "Written to final location + fsync'd", "transfer_id, chunk_index"],
                  ["STATE_CHANGE", "Transfer phase transition", "transfer_id, old_state, new_state"],
                  ["CHECKPOINT", "Snapshot of all in-flight state", "full state map"],
                ]}
              />
              <InfoCard title="The Write-Ahead Contract" accent="green">
                Before doing any action, write a WAL record describing the intended action. Only after the record is safely on disk (fsync&apos;d) do you execute the action. If you crash between the WAL write and the action, on restart you replay the WAL and retry. Because all operations are idempotent (sending a duplicate chunk is a no-op via dedup), retrying is always safe.
              </InfoCard>

              <h3 className="text-xl font-semibold text-white mb-3 mt-8">Why a WAL and Not a Database?</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                The WAL is append-only: every write is sequential I/O at the end of the file &mdash; the fastest possible disk operation. NVMe SSDs can do 500K+ sequential small writes per second. A database doing random I/O, maintaining B-tree indexes, and journaling is <strong className="text-white">10&ndash;50&times; slower</strong> for this access pattern. With 64 parallel workers recording state, a database&apos;s row-level locking creates contention. An append-only file has zero lock contention.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3 mt-8">Crash Recovery Scenarios</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {[
                  ["Sender Crash", "Read WAL from last checkpoint. Identify chunks in QUEUED or SENT-but-not-ACKED state. Resume from there. Skip file scanning if manifest already persisted."],
                  ["Receiver Crash", "Read WAL. Identify partially-written chunks (ACKED but not COMMITTED). Delete incomplete chunks. Send updated manifest to sender. Sender fills gaps."],
                  ["Both Crash Simultaneously", "Both replay WALs independently. Sender sends manifest; receiver responds with what it has. Delta transfer resumes. Worst case — verified with chaos testing."],
                  ["Network Partition", "gRPC keepalive pings every 10s. 3 consecutive failures (30s) = dead. Sender pauses and queues locally. Auto-reconnect with exponential backoff (1s → 60s cap). Lightweight delta sync via bitmap."],
                ].map(([title, desc]) => (
                  <div key={title} className="bg-gray-900 rounded-lg p-4 border border-gray-800">
                    <div className="text-yellow-400 font-semibold text-sm mb-1">{title}</div>
                    <div className="text-gray-400 text-xs leading-relaxed">{desc}</div>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-semibold text-white mb-3 mt-8">Retry Strategy</h3>
              <CodeBlock>{`delay = min(base × 2^attempt + random(0, jitter), max_delay)
base: 100ms, jitter: 50ms, max: 30s, max_attempts: 5`}</CodeBlock>
              <p className="text-gray-400 text-sm">Per-connection retries: if a gRPC stream breaks, reconnect with fresh TLS handshake. All in-flight chunks on that stream are re-queued.</p>

              <h3 className="text-xl font-semibold text-white mb-3 mt-8">Chaos Engineering Tests</h3>
              <Table
                headers={["Test", "Mechanism", "Validates"]}
                rows={[
                  ["Kill sender mid-transfer", "SIGKILL + restart", "WAL replay, resume from checkpoint"],
                  ["Kill receiver mid-write", "SIGKILL + restart", "Partial chunk cleanup, gap filling"],
                  ["Network partition (60s)", "iptables DROP", "Reconnect + delta sync"],
                  ["Flip random bits on wire", "tc netem corrupt 1%", "CRC32C + SHA-256 catch all corruption"],
                  ["Disk full on receiver", "fallocate fill disk", "Backpressure, THROTTLE ack, retry"],
                  ["Slow disk (10ms latency)", "dm-delay", "I/O queue depth adaptation"],
                  ["OOM pressure", "cgroups memory limit", "Graceful degradation, fewer streams"],
                ]}
              />
            </section>
          </SectionAnchor>

          {/* Section 9: Security */}
          <SectionAnchor id="section-8">
            <section className="mb-16">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent mb-6">Security</h2>

              <h3 className="text-xl font-semibold text-white mb-3">Transport Security</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                All data in transit uses TLS 1.3 with cipher suites AES-256-GCM-SHA384 and ChaCha20-Poly1305-SHA256. Mutual TLS (mTLS) requires both sender and receiver to present X.509 certificates signed by the internal CA. Certificate rotation every 90 days.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">Encryption at Rest &mdash; Key Hierarchy</h3>
              <div className="space-y-3 mb-6">
                {[
                  ["Master Key (MK)", "Stored in HSM / AWS KMS / HashiCorp Vault. Never leaves the HSM. Rotates quarterly."],
                  ["Data Encryption Key (DEK)", "Per-transfer random 256-bit key. Encrypted with MK (envelope encryption). Stored alongside transfer metadata."],
                  ["Chunk Nonce", "Unique per-chunk (chunk_index as nonce counter). Ensures no nonce reuse even across retries."],
                ].map(([title, desc]) => (
                  <div key={title} className="bg-gray-900 rounded-lg p-4 border border-gray-800">
                    <div className="text-green-400 font-semibold text-sm mb-1 font-mono">{title}</div>
                    <div className="text-gray-400 text-xs">{desc}</div>
                  </div>
                ))}
              </div>

              <InfoCard title="Why Chunk-Level, Not Volume-Level (LUKS)?" accent="green">
                <ul className="space-y-1 text-sm">
                  <li>&#8226; Per-transfer DEKs limit blast radius of key compromise to <strong className="text-white">one transfer</strong>, not all data</li>
                  <li>&#8226; Destroying a DEK <strong className="text-white">cryptographically erases</strong> that transfer instantly, without re-encrypting the volume</li>
                  <li>&#8226; Chunks can live on any storage backend (local disk, object store, archive) carrying their own encryption</li>
                </ul>
                <p className="mt-2 text-gray-500 text-xs">When LUKS is acceptable: single-tenant systems where per-transfer key isolation isn&apos;t required.</p>
              </InfoCard>

              <h3 className="text-xl font-semibold text-white mb-3 mt-8">Access Control &amp; Audit</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                RBAC with OPA policy engine evaluates every transfer request against policies: allowed source/dest pairs, max transfer size, time-of-day windows, rate limits per-user. Immutable audit log records every API call, state transition, and access with who, what, when, from_ip, transfer_id, result. Retained for 2 years.
              </p>
            </section>
          </SectionAnchor>

          {/* Section 10: Observability */}
          <SectionAnchor id="section-9">
            <section className="mb-16">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent mb-6">Observability</h2>

              <h3 className="text-xl font-semibold text-white mb-3">Key Metrics (Prometheus)</h3>
              <Table
                headers={["Metric", "Type", "Description"]}
                rows={[
                  ["transfer_bytes_total", "Counter", "Total bytes transferred by direction and compression type"],
                  ["transfer_chunks_total", "Counter", "Chunks sent, received, deduped, or failed"],
                  ["transfer_throughput_bytes", "Gauge", "Current throughput per connection"],
                  ["chunk_latency_seconds", "Histogram", "End-to-end chunk delivery time (p50/p95/p99)"],
                  ["wal_entries_pending", "Gauge", "Unprocessed WAL entries (backlog indicator)"],
                  ["dedup_ratio", "Gauge", "Fraction of chunks skipped via deduplication"],
                  ["integrity_failures_total", "Counter", "CRC or SHA mismatches (should be ~0)"],
                  ["connection_resets_total", "Counter", "gRPC stream resets (network health indicator)"],
                ]}
              />

              <h3 className="text-xl font-semibold text-white mb-3 mt-8">Distributed Tracing</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Every transfer gets a root span. Child spans for each phase: scan_files, chunk_file, negotiate_dedup, transfer_chunks (with per-chunk sub-spans for compress/encrypt/send), verify_merkle, commit. Sampling: 100% for failed transfers, 10% for successful (adaptive based on volume).
              </p>

              <h3 className="text-xl font-semibold text-white mb-3 mt-8">Alerting Rules</h3>
              <Table
                headers={["Alert", "Condition", "Severity"]}
                rows={[
                  ["Throughput Drop", "<50% of baseline for 5 min", "WARN"],
                  ["Integrity Failure", "Any checksum mismatch", "CRITICAL"],
                  ["Transfer Stalled", "No progress for 2 min", "WARN"],
                  ["WAL Backlog", ">10K pending entries", "WARN"],
                  ["Connection Failures", ">5 resets in 1 min", "CRITICAL"],
                  ["Disk Space Low", "<10% free on receiver", "CRITICAL"],
                  ["Certificate Expiry", "<7 days to expiration", "WARN"],
                ]}
              />
            </section>
          </SectionAnchor>

          {/* Section 11: Design Tradeoffs Summary */}
          <SectionAnchor id="section-10">
            <section className="mb-16">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-amber-400 bg-clip-text text-transparent mb-6">Design Tradeoffs Summary</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Every major decision involved rejecting viable alternatives:
              </p>
              <Table
                headers={["Decision", "Chosen", "Runner-Up", "Key Tradeoff"]}
                rows={[
                  ["Transport", "gRPC streaming", "Raw TCP", "5–8% overhead vs. months of protocol engineering"],
                  ["Chunking", "CDC (Buzhash)", "Fixed-size", "Code complexity vs. 90–99% savings on incremental"],
                  ["Chunk Size", "4 MB average", "1 MB / 16 MB", "RAM vs. dedup granularity vs. round-trips"],
                  ["Integrity", "3-layer", "SHA-256 only", "Complexity vs. early detection + failure localization"],
                  ["Reliability", "WAL", "Database", "Sequential I/O speed vs. query flexibility"],
                  ["Dedup", "Chunk-level", "File-level / None", "CPU+RAM overhead vs. 40–80% bandwidth savings"],
                  ["Compression", "Adaptive", "Fixed Zstd-3", "Decision logic vs. optimal per-environment"],
                  ["Flow Control", "Receiver-driven", "Sender rate-limit", "ACK overhead vs. perfect receiver knowledge"],
                  ["Encryption", "Chunk-level AES", "Volume LUKS", "Code complexity vs. key granularity"],
                  ["Coordination", "etcd + RocksDB", "Postgres", "Operational overhead vs. multi-node needs"],
                  ["Connections", "8 TCP × 16 streams", "1 TCP / 128 TCP", "HOL blast radius vs. connection overhead"],
                  ["Primary Protocol", "TCP + QUIC fallback", "QUIC-only", "NIC offload + maturity vs. loss handling"],
                ]}
              />
            </section>
          </SectionAnchor>

          {/* Section 12: Operations & Capacity Planning */}
          <SectionAnchor id="section-11">
            <section className="mb-16">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent mb-6">Operations &amp; Capacity Planning</h2>

              <h3 className="text-xl font-semibold text-white mb-3">Kernel Tuning</h3>
              <CodeBlock>{`# Socket buffers
net.core.rmem_max = 134217728          # 128 MB receive buffer max
net.core.wmem_max = 134217728          # 128 MB send buffer max
net.ipv4.tcp_rmem = 4096 1048576 134217728
net.ipv4.tcp_wmem = 4096 1048576 134217728

# Congestion control
net.ipv4.tcp_congestion_control = bbr

# Network queue
net.core.netdev_max_backlog = 250000

# VM tuning
vm.dirty_ratio = 40
vm.swappiness = 10

# File descriptors
ulimit -n 1048576  # 1M open fds`}</CodeBlock>

              <h3 className="text-xl font-semibold text-white mb-3 mt-8">Deployment Modes</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                {[
                  ["Lite Mode (2 nodes)", "In-process coordinator, no etcd. WAL + RocksDB on local disk. Simplest deployment."],
                  ["Standard Mode (2+ nodes)", "etcd for coordination, RocksDB for local state. Multiple concurrent jobs and failover."],
                  ["Relay Mode", "Source → Relay → Destination. For transfers crossing network boundaries. Relay stores chunks temporarily."],
                ].map(([title, desc]) => (
                  <div key={title} className="bg-gray-900 rounded-lg p-4 border border-gray-800">
                    <div className="text-blue-400 font-semibold text-sm mb-1">{title}</div>
                    <div className="text-gray-400 text-xs">{desc}</div>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-semibold text-white mb-3 mt-8">Hardware Recommendations</h3>
              <Table
                headers={["Component", "Specification", "Rationale"]}
                rows={[
                  ["CPU", "16+ cores (AMD EPYC / Xeon)", "SHA-256, Zstd, CDC hashing are CPU-bound"],
                  ["RAM", "64 GB+", "Chunk buffers (64×16MB=1GB), dedup index, RocksDB block cache"],
                  ["Network", "25 Gbps+ NIC (dual-port for HA)", "10TB @ 25Gbps = ~53 minutes"],
                  ["Storage", "NVMe SSD, 2× transfer size", "Chunk store + WAL. 3+ GB/s sequential writes"],
                  ["NIC Offload", "TSO, GRO, TCP checksum offload", "Reduces CPU load for TCP processing"],
                ]}
              />

              <h3 className="text-xl font-semibold text-white mb-3 mt-8">Transfer Time Estimates</h3>
              <Table
                headers={["Data Size", "10 Gbps", "25 Gbps", "100 Gbps"]}
                rows={[
                  ["100 GB", "~1.3 min", "~32 sec", "~8 sec"],
                  ["1 TB", "~13 min", "~5.3 min", "~1.3 min"],
                  ["10 TB", "~2.2 hrs", "~53 min", "~13 min"],
                  ["50 TB", "~11 hrs", "~4.4 hrs", "~66 min"],
                ]}
              />
              <p className="text-gray-500 text-xs mt-2">Assumes 80% link utilization, 0% dedup, Zstd level 3 (3.2&times; compression). Actual times significantly lower with dedup on incremental transfers.</p>

              <h3 className="text-xl font-semibold text-white mb-3 mt-8">When This System is Wrong</h3>
              <InfoCard title="Use Something Simpler When..." accent="yellow">
                <ul className="space-y-1 text-sm">
                  <li>&#8226; <strong className="text-white">Sub-100 GB, one-time transfer:</strong> Use rsync or scp. Engineering investment unjustified.</li>
                  <li>&#8226; <strong className="text-white">Streaming/real-time data:</strong> Use Kafka, Pulsar, or Kinesis. This is a batch system.</li>
                  <li>&#8226; <strong className="text-white">Cloud-to-cloud with managed services:</strong> Use AWS DataSync, GCP Transfer Service, or Azure Data Box.</li>
                  <li>&#8226; <strong className="text-white">Cross-region over public internet:</strong> Consider Aspera, Signiant with proprietary WAN optimization.</li>
                  <li>&#8226; <strong className="text-white">Immutable write-once data:</strong> Simple PUT to object storage with file-level checksums. CDC overhead adds no value.</li>
                </ul>
              </InfoCard>
            </section>
          </SectionAnchor>

          {/* Conclusion */}
          <section className="mb-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700 shadow-lg shadow-cyan-950/20">
            <h2 className="text-2xl font-bold text-white mb-4">Conclusion</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Meridian is designed for organizations that need to move terabytes of data between nodes reliably, efficiently, and securely. Every design choice reflects a conscious tradeoff &mdash; gRPC over raw TCP for engineering velocity, CDC over fixed-size for incremental efficiency, WAL over database for I/O speed, multiple TCP connections over one for fault isolation.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The system is not the right tool for every job. For small, one-time transfers, rsync is simpler. For real-time streaming, Kafka is better. For cloud-managed environments, first-party transfer services may suffice. Meridian&apos;s value proposition is the combination of <strong className="text-white">TB-scale throughput</strong>, <strong className="text-white">zero-data-loss integrity</strong>, <strong className="text-white">crash-safe resumability</strong>, and <strong className="text-white">production-grade observability</strong> &mdash; all in a single, self-contained system.
            </p>
          </section>

          {/* Back to blog */}
          <div className="text-center">
            <a href="/blog" className="text-cyan-400 hover:text-cyan-300 transition text-sm">
              &larr; Back to Blog
            </a>
          </div>
        </article>
      </div>
    </main>
  );
}
