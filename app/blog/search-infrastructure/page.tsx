"use client";

import { useState, useEffect, useCallback } from "react";

const slides = [
  // SLIDE 1: TITLE
  {
    id: 1,
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center gap-6">
        <div className="text-blue-400 text-sm font-mono tracking-widest uppercase">Case Study</div>
        <h1 className="text-5xl font-extrabold leading-tight">
          Building Centralized Search<br />
          <span className="text-blue-400">for Microservices</span>
        </h1>
        <p className="text-gray-400 text-xl max-w-xl">
          Event-driven search infrastructure powering pharmacy operations at scale
        </p>
        <div className="flex gap-8 mt-4 text-center">
          {[["2000 RPS", "Throughput"], ["50ms", "p95 Latency"], ["100K+", "Daily Users"], ["6+", "Microservices"]].map(([val, label]) => (
            <div key={label}>
              <div className="text-3xl font-bold text-blue-400">{val}</div>
              <div className="text-gray-500 text-sm mt-1">{label}</div>
            </div>
          ))}
        </div>
        <div className="mt-6 text-gray-500 text-sm">Rahul Garg · Tech Lead · Blink Health</div>
      </div>
    ),
  },

  // SLIDE: MY ROLE
  {
    id: 18,
    content: (
      <div className="flex flex-col h-full gap-6">
        <div>
          <div className="text-blue-400 text-xs font-mono uppercase tracking-widest mb-2">My Contribution</div>
          <h2 className="text-4xl font-bold">What I Built & Led</h2>
          <p className="text-gray-400 mt-2">Tech Lead · 3-engineer team · End-to-end ownership</p>
        </div>
        <div className="grid grid-cols-2 gap-6 flex-1">
          <div className="flex flex-col gap-3">
            <div className="text-blue-400 font-semibold text-xs uppercase tracking-wide">What I designed & built</div>
            {[
              ["Pipeline Architecture", "Designed the full event pipeline from scratch — Firehose, Lambda, and OpenSearch. No search infrastructure existed before this project."],
              ["Aggregate Index + Merge Logic", "Built the aggregated OpenSearch index and the Lambda merge strategy that combines data from 6 independent services into a single queryable document."],
              ["Optimistic Locking", "Designed and implemented two-layer OCC — per-service versioning and OpenSearch seq_no — to handle concurrent writes from multiple services safely."],
            ].map(([title, desc]) => (
              <div key={title} className="bg-gray-900 rounded-xl p-4 border border-blue-700 flex-1">
                <div className="text-blue-400 font-semibold text-sm">{title}</div>
                <div className="text-gray-400 text-xs mt-1">{desc}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-purple-400 font-semibold text-xs uppercase tracking-wide">What I led & coordinated</div>
            {[
              ["Onboarded 6 Service Teams", "Worked with each service team to define event schemas and create their individual OpenSearch indexes. My pipeline consumed their existing Kinesis streams."],
              ["Owned the Migration", "Managed the full cutover from monolith search to OpenSearch — coordinating readiness, validation, and rollback across all teams simultaneously."],
              ["Unblocked a Company Initiative", "Search infrastructure was the critical path for the entire monolith → microservices migration. This was the primary business driver."],
            ].map(([title, desc]) => (
              <div key={title} className="bg-gray-900 rounded-xl p-4 border border-purple-700 flex-1">
                <div className="text-purple-400 font-semibold text-sm">{title}</div>
                <div className="text-gray-400 text-xs mt-1">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },

  // SLIDE 2: THE PROBLEM
  {
    id: 2,
    content: (
      <div className="flex flex-col h-full gap-6">
        <div>
          <div className="text-blue-400 text-xs font-mono uppercase tracking-widest mb-2">The Problem</div>
          <h2 className="text-4xl font-bold">When Microservices Break Your Search</h2>
        </div>
        <div className="grid grid-cols-2 gap-6 flex-1">
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-700 flex flex-col gap-4">
            <div className="text-green-400 font-semibold text-lg">✓ Before (Monolith)</div>
            <div className="flex flex-col items-center gap-3 flex-1 justify-center">
              <div className="bg-gray-700 border border-green-600 rounded-lg px-6 py-4 text-center w-full">
                <div className="font-bold text-green-300">Single Database</div>
                <div className="text-gray-400 text-sm mt-1">All data in one place</div>
              </div>
              <div className="text-gray-500">↓</div>
              <div className="bg-gray-700 border border-green-600 rounded-lg px-6 py-4 text-center w-full">
                <div className="font-bold text-green-300">Simple Search Index</div>
                <div className="text-gray-400 text-sm mt-1">JOIN across tables → done</div>
              </div>
            </div>
          </div>
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-700 flex flex-col gap-4">
            <div className="text-red-400 font-semibold text-lg">✗ After (Microservices)</div>
            <div className="grid grid-cols-3 gap-2">
              {["Patient", "Prescription", "Fill", "Fulfillment", "Purchase", "Account"].map(s => (
                <div key={s} className="bg-gray-700 border border-red-800 rounded-lg p-2 text-center text-xs text-gray-300">{s}</div>
              ))}
            </div>
            <div className="bg-red-950 border border-red-700 rounded-lg p-3 text-center mt-2">
              <div className="text-red-400 font-bold">❌ Can't JOIN across services</div>
              <div className="text-gray-400 text-xs mt-1">Each service owns its own DB</div>
            </div>
            <div className="text-gray-300 text-sm">
              Pharmacy queues need data from <span className="text-blue-400 font-bold">all 6 services</span> aggregated in real-time
            </div>
          </div>
        </div>
      </div>
    ),
  },

  // SLIDE 3: CONTEXT
  {
    id: 3,
    content: (
      <div className="flex flex-col h-full gap-6">
        <div>
          <div className="text-blue-400 text-xs font-mono uppercase tracking-widest mb-2">Context</div>
          <h2 className="text-4xl font-bold">Pharmacy Work Queues</h2>
          <p className="text-gray-400 mt-2">Our ops team's daily workflow depended on these</p>
        </div>
        <div className="grid grid-cols-3 gap-4 flex-1">
          {[
            { name: "Prescription Review", color: "blue", needs: ["Patient info", "Medication details", "Prescriber", "Insurance"], icon: "💊" },
            { name: "Fulfillment Queue", color: "purple", needs: ["Order status", "Shipping details", "Payment status", "Fill location"], icon: "📦" },
            { name: "Patient Issues", color: "orange", needs: ["Account status", "Contact info", "Pending actions", "History"], icon: "🏥" },
          ].map(q => (
            <div key={q.name} className="bg-gray-900 rounded-xl p-5 border border-gray-700 flex flex-col gap-3">
              <div className="text-3xl">{q.icon}</div>
              <div className="font-bold text-lg text-blue-300">{q.name}</div>
              <div className="text-gray-500 text-xs uppercase tracking-wide">Needs data from:</div>
              <ul className="flex flex-col gap-1">
                {q.needs.map(n => (
                  <li key={n} className="text-gray-300 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                    {n}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="bg-blue-950 border border-blue-700 rounded-xl p-4 text-center">
          <span className="text-blue-300 font-semibold">Key Constraint: </span>
          <span className="text-gray-300">Real-time updates required — ops can't work from stale data</span>
        </div>
      </div>
    ),
  },

  // SLIDE 4: SOLUTION OVERVIEW
  {
    id: 4,
    content: (
      <div className="flex flex-col h-full gap-6">
        <div>
          <div className="text-blue-400 text-xs font-mono uppercase tracking-widest mb-2">Solution</div>
          <h2 className="text-4xl font-bold">Event-Driven Search Pipeline</h2>
          <p className="text-gray-400 mt-2">Treat search as a read model built from domain events</p>
        </div>
        <div className="flex items-center justify-between flex-1 gap-3">
          {[
            { label: "Data Change", sub: "in any microservice", icon: "📝", color: "border-purple-600 bg-purple-950" },
            { label: "CDC Event", sub: "outbox → Kinesis", icon: "⚡", color: "border-yellow-600 bg-yellow-950" },
            { label: "Aggregation", sub: "Lambda merges data", icon: "⚙️", color: "border-green-600 bg-green-950" },
            { label: "Search Index", sub: "OpenSearch updated", icon: "🔍", color: "border-blue-600 bg-blue-950" },
            { label: "Query", sub: "2000 RPS, 50ms p95", icon: "✅", color: "border-blue-400 bg-blue-900" },
          ].map((step, i) => (
            <div key={step.label} className="flex items-center gap-3 flex-1">
              <div className={`flex-1 border rounded-xl p-4 text-center ${step.color}`}>
                <div className="text-3xl mb-2">{step.icon}</div>
                <div className="font-bold text-slate-950 text-sm">{step.label}</div>
                <div className="text-gray-400 text-xs mt-1">{step.sub}</div>
              </div>
              {i < 4 && <div className="text-blue-400 text-2xl flex-shrink-0">→</div>}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-4">
          {[
            ["Decoupled", "Services don't know about search — they just emit events"],
            ["Near Real-Time", "Data change → searchable in 6-10 seconds"],
            ["Scalable", "Each component scales independently"],
          ].map(([title, desc]) => (
            <div key={title} className="bg-gray-900 rounded-xl p-4 border border-gray-700">
              <div className="text-blue-400 font-semibold mb-1">{title}</div>
              <div className="text-gray-400 text-sm">{desc}</div>
            </div>
          ))}
        </div>
      </div>
    ),
  },

  // SLIDE 5: ARCHITECTURE DIAGRAM
  {
    id: 5,
    content: (
      <div className="flex flex-col h-full gap-4">
        <div>
          <div className="text-blue-400 text-xs font-mono uppercase tracking-widest mb-2">Architecture</div>
          <h2 className="text-3xl font-bold">Full System Diagram</h2>
        </div>
        <div className="flex-1 flex flex-col gap-2">
          {/* Layer 1: Microservices */}
          <div className="border border-gray-700 rounded-xl p-3 bg-gray-900">
            <div className="text-xs text-gray-500 uppercase tracking-wide mb-2">Microservices Layer</div>
            <div className="flex gap-2 justify-center">
              {["Patient", "Prescription", "Fill", "Fulfillment", "Purchase", "Account (OpenFGA)"].map((s, i) => (
                <div key={s} className="bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-xs text-center text-gray-200 flex-1">
                  <div>{s}</div>
                  <div className="text-gray-500 text-xs mt-1">{i < 4 ? "Outbox" : i === 4 ? "Outbox" : "DMS"}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center text-blue-400">↓ CDC Events</div>

          {/* Layer 2: Kinesis */}
          <div className="border border-yellow-700 rounded-xl p-3 bg-yellow-950 flex items-center gap-4">
            <div className="text-2xl">⚡</div>
            <div>
              <div className="font-bold text-yellow-300 text-sm">Kinesis Stream</div>
              <div className="text-gray-400 text-xs">Partitioned by service:entityId — guarantees ordering per entity</div>
            </div>
            <div className="ml-auto text-yellow-400 text-xs font-mono">~500 events/sec</div>
          </div>

          <div className="text-center text-blue-400">↓ Micro-batching</div>

          {/* Layer 3: Firehose + Lambda */}
          <div className="grid grid-cols-2 gap-2">
            <div className="border border-orange-700 rounded-xl p-3 bg-orange-950">
              <div className="font-bold text-orange-300 text-sm">Kinesis Firehose</div>
              <div className="text-gray-400 text-xs mt-1">Buffers 5s or 1MB → 50x cost reduction via batching</div>
            </div>
            <div className="border border-green-700 rounded-xl p-3 bg-green-950">
              <div className="font-bold text-green-300 text-sm">Lambda (Aggregation)</div>
              <div className="text-gray-400 text-xs mt-1">Smart merge strategy · Idempotent · DLQ for failures</div>
            </div>
          </div>

          <div className="text-center text-blue-400">↓ Bulk Index</div>

          {/* Layer 4: OpenSearch */}
          <div className="grid grid-cols-4 gap-2">
            {["patient-index", "prescription-index", "fill-index", "aggregated-index ★"].map((idx, i) => (
              <div key={idx} className={`border rounded-lg p-2 text-center text-xs ${i === 3 ? "border-blue-500 bg-blue-950 text-blue-300 font-bold" : "border-gray-600 bg-gray-800 text-gray-400"}`}>
                {idx}
              </div>
            ))}
          </div>

          <div className="text-center text-blue-400">↓ 2000 RPS · p95 50ms</div>

          {/* Layer 5: Consumers */}
          <div className="grid grid-cols-2 gap-2">
            <div className="border border-blue-600 rounded-xl p-3 bg-blue-950 text-center">
              <div className="font-bold text-blue-300 text-sm">Search Service API</div>
              <div className="text-gray-400 text-xs">Pharmacy Dashboards · Work Queues</div>
            </div>
            <div className="border border-gray-600 rounded-xl p-3 bg-gray-800 text-center">
              <div className="font-bold text-gray-300 text-sm">Internal Tools</div>
              <div className="text-gray-400 text-xs">Analytics · Reports · Admin</div>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  // SLIDE: CROSS-TEAM ONBOARDING
  {
    id: 19,
    content: (
      <div className="flex flex-col h-full gap-6">
        <div>
          <div className="text-blue-400 text-xs font-mono uppercase tracking-widest mb-2">Leadership · Coordination</div>
          <h2 className="text-4xl font-bold">Onboarding 6 Service Teams</h2>
          <p className="text-gray-400 mt-2">The hardest part wasn&apos;t the technology — it was getting 6 independent teams aligned and migrated</p>
        </div>
        <div className="grid grid-cols-3 gap-4 flex-1">
          <div className="bg-gray-900 rounded-xl p-5 border border-blue-700 flex flex-col gap-3">
            <div className="text-blue-400 font-semibold">My Process Per Team</div>
            {[
              "Agree on event schema for their domain",
              "Create the individual OpenSearch index",
              "Write the Lambda mapping for their events",
              "Run data parity validation",
              "Sign off on readiness, then cut over",
            ].map(step => (
              <div key={step} className="flex items-start gap-2 text-gray-400 text-sm">
                <span className="text-blue-400 mt-0.5 flex-shrink-0">→</span> {step}
              </div>
            ))}
            <div className="bg-blue-950 rounded-lg p-3 border border-blue-800 mt-auto">
              <div className="text-blue-300 text-xs">Created a runbook so onboarding became repeatable — later teams took 2 days instead of 5.</div>
            </div>
          </div>
          <div className="bg-gray-900 rounded-xl p-5 border border-yellow-700 flex flex-col gap-4">
            <div className="text-yellow-400 font-semibold">Challenges</div>
            {[
              { title: "Schema disagreements", desc: "Teams had conflicting opinions on what fields to expose. I owned the schema contract and made the final call on what the pipeline needed." },
              { title: "Timeline pressure", desc: "The monolith migration was blocked on my infra. I staggered onboarding — services blocking pharmacy queues first, everything else second." },
              { title: "Event ordering bugs", desc: "One service wasn't partitioning Kinesis by entityId — events arrived out-of-order. Caught this during validation before cutover." },
            ].map(({ title, desc }) => (
              <div key={title} className="flex flex-col gap-1">
                <div className="text-yellow-300 text-sm font-medium">{title}</div>
                <div className="text-gray-500 text-xs leading-relaxed">{desc}</div>
              </div>
            ))}
          </div>
          <div className="bg-gray-900 rounded-xl p-5 border border-purple-700 flex flex-col gap-3">
            <div className="text-purple-400 font-semibold">Onboarding Order</div>
            <div className="text-gray-500 text-xs mb-1">Prioritized by what was blocking the migration</div>
            {[
              { num: "1", name: "Prescription", reason: "Critical path — pharmacy queues blocked on this" },
              { num: "2", name: "Patient + Fill", reason: "Queue dependency — needed together" },
              { num: "3", name: "Fulfillment + Purchase", reason: "Secondary queues" },
              { num: "4", name: "Account / OpenFGA", reason: "Permissions layer — last" },
            ].map(({ num, name, reason }) => (
              <div key={num} className="bg-gray-800 rounded-lg p-3 flex gap-3 items-start">
                <span className="text-purple-400 font-bold text-sm flex-shrink-0">{num}.</span>
                <div>
                  <div className="text-gray-200 text-sm font-medium">{name}</div>
                  <div className="text-gray-500 text-xs">{reason}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },

  // SLIDE 6: EVENT SOURCE
  {
    id: 6,
    content: (
      <div className="flex flex-col h-full gap-6">
        <div>
          <div className="text-blue-400 text-xs font-mono uppercase tracking-widest mb-2">Event Source · Context</div>
          <h2 className="text-4xl font-bold">How Events Enter the Pipeline</h2>
          <p className="text-gray-400 mt-2">Services already emitted events to Kinesis — our pipeline consumed from those existing streams</p>
        </div>
        <div className="grid grid-cols-2 gap-6 flex-1">
          <div className="flex flex-col gap-4">
            <div className="bg-blue-950 rounded-xl p-4 border border-blue-600">
              <div className="text-blue-300 font-semibold mb-2 text-sm">Starting Point</div>
              <div className="text-gray-300 text-sm leading-relaxed">Each microservice already had its own Kinesis stream publishing domain events. My pipeline subscribed to these — I didn&apos;t own or modify how services produced events.</div>
            </div>
            <div className="bg-gray-900 rounded-xl p-5 border border-gray-700 flex-1">
              <div className="text-gray-300 font-semibold mb-3 text-sm">How source services worked</div>
              <div className="space-y-3">
                <div className="bg-gray-800 rounded-lg p-3">
                  <div className="text-blue-400 text-xs font-semibold mb-1">Outbox Pattern (most services)</div>
                  <div className="font-mono text-xs text-green-300 leading-relaxed">
                    <div className="text-gray-500">-- Atomic transaction</div>
                    <div>BEGIN TRANSACTION;</div>
                    <div className="ml-3 text-yellow-300">UPDATE patients SET name = &apos;John Doe&apos;;</div>
                    <div className="ml-3 text-yellow-300">INSERT INTO outbox_events ...</div>
                    <div>COMMIT;</div>
                  </div>
                </div>
                <div className="bg-gray-800 rounded-lg p-3">
                  <div className="text-orange-400 text-xs font-semibold mb-1">AWS DMS (some services)</div>
                  <div className="text-gray-400 text-xs">Reads DB binlog/WAL directly → publishes to Kinesis. Used where teams didn&apos;t have outbox set up.</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-gray-300 font-semibold">What this meant for my pipeline</div>
            {[
              ["At-Least-Once Delivery", "Kinesis guarantees at-least-once — my Lambda had to be idempotent. The same event could arrive twice."],
              ["Out-of-Order Events", "Events from different services arrive independently. The aggregation logic had to handle any order."],
              ["Per-Entity Ordering", "Within a single service, events for the same entity are ordered — but only within that partition."],
              ["Schema Contract", "I worked with each team to agree on the event schema my pipeline would consume. Their events, my consumer."],
            ].map(([title, desc]) => (
              <div key={title} className="bg-gray-900 rounded-xl p-4 border border-gray-700">
                <div className="text-blue-400 font-semibold text-sm">{title}</div>
                <div className="text-gray-400 text-sm mt-1">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },

  // SLIDE 7: KINESIS
  {
    id: 7,
    content: (
      <div className="flex flex-col h-full gap-6">
        <div>
          <div className="text-blue-400 text-xs font-mono uppercase tracking-widest mb-2">Component 2 of 4</div>
          <h2 className="text-4xl font-bold">Event Bus — Kinesis Stream</h2>
          <p className="text-gray-400 mt-2">Reliable, ordered, scalable event transport</p>
        </div>
        <div className="grid grid-cols-2 gap-6 flex-1">
          <div className="flex flex-col gap-4">
            <div className="bg-gray-900 rounded-xl p-5 border border-yellow-700">
              <div className="text-yellow-400 font-semibold mb-3">Partition Key Strategy</div>
              <div className="bg-gray-800 rounded-lg p-4 font-mono text-sm text-gray-300">
                <div className="text-gray-500 text-xs mb-2">Partition Key = service:entityId</div>
                <div className="text-green-300">&quot;patient:123&quot;</div>
                <div className="text-blue-300">&quot;prescription:456&quot;</div>
                <div className="text-purple-300">&quot;fill:789&quot;</div>
              </div>
              <div className="mt-3 text-gray-400 text-sm">All events for the same entity go to the same shard → guaranteed ordering</div>
            </div>
            <div className="bg-gray-900 rounded-xl p-4 border border-gray-700">
              <div className="text-gray-300 font-semibold mb-2 text-sm">Configuration</div>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {[["Shards", "5 (auto-scale)"], ["Throughput", "25 MB/sec"], ["Retention", "7 days"], ["Peak", "2000 events/sec"]].map(([k, v]) => (
                  <div key={k} className="bg-gray-800 rounded-lg p-2">
                    <div className="text-gray-500 text-xs">{k}</div>
                    <div className="text-blue-300 font-mono text-sm">{v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-gray-300 font-semibold">Why Kinesis?</div>
            {[
              ["Ordering Guarantees", "Events per shard are strictly ordered — critical for merge correctness"],
              ["7-Day Retention", "Enables replay when aggregation logic has bugs"],
              ["AWS Native", "Seamless integration with Firehose, Lambda, CloudWatch"],
              ["Scalable", "Add shards as event volume grows without downtime"],
            ].map(([title, desc]) => (
              <div key={title} className="bg-gray-900 rounded-xl p-4 border border-gray-700">
                <div className="text-yellow-400 font-semibold text-sm">{title}</div>
                <div className="text-gray-400 text-sm mt-1">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },

  // SLIDE 8: FIREHOSE BATCHING
  {
    id: 8,
    content: (
      <div className="flex flex-col h-full gap-6">
        <div>
          <div className="text-blue-400 text-xs font-mono uppercase tracking-widest mb-2">Component 3 of 4</div>
          <h2 className="text-4xl font-bold">Firehose — Micro-batching</h2>
          <p className="text-gray-400 mt-2">50x cost reduction through smart batching</p>
        </div>
        <div className="grid grid-cols-2 gap-6 flex-1">
          <div className="flex flex-col gap-4">
            <div className="bg-red-950 rounded-xl p-5 border border-red-700">
              <div className="text-red-400 font-semibold mb-3">❌ Without Batching</div>
              <div className="text-gray-300 text-sm space-y-2">
                <div>100 events/sec × 6 services</div>
                <div className="text-red-300 font-mono text-lg">= 600 Lambda calls/sec</div>
                <div className="text-gray-500">→ Massive Lambda costs</div>
                <div className="text-gray-500">→ OpenSearch overwhelmed</div>
                <div className="text-gray-500">→ Single-doc writes (slow)</div>
                <div className="mt-3 text-red-400 font-bold">~$2,000/month</div>
              </div>
            </div>
            <div className="bg-green-950 rounded-xl p-5 border border-green-700">
              <div className="text-green-400 font-semibold mb-3">✓ With Firehose Batching</div>
              <div className="text-gray-300 text-sm space-y-2">
                <div>Buffer for 5s <span className="text-gray-500">or</span> 1MB</div>
                <div className="text-green-300 font-mono text-lg">= 50-100 events/call</div>
                <div className="text-gray-400">→ 12 Lambda calls/min</div>
                <div className="text-gray-400">→ Bulk API to OpenSearch</div>
                <div className="text-gray-400">→ Natural backpressure</div>
                <div className="mt-3 text-green-400 font-bold">~$40/month</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="bg-gray-900 rounded-xl p-5 border border-gray-700 flex-1">
              <div className="text-blue-400 font-semibold mb-3">Trade-off Discussion</div>
              <div className="space-y-4">
                <div>
                  <div className="text-green-400 text-sm font-semibold">✓ Benefits</div>
                  <ul className="text-gray-400 text-sm mt-1 space-y-1">
                    <li>• 98% cost reduction</li>
                    <li>• Better OpenSearch indexing performance</li>
                    <li>• Absorbs traffic spikes naturally</li>
                  </ul>
                </div>
                <div>
                  <div className="text-red-400 text-sm font-semibold">✗ Cost</div>
                  <ul className="text-gray-400 text-sm mt-1 space-y-1">
                    <li>• +5s indexing latency</li>
                    <li>• Data not immediately searchable</li>
                  </ul>
                </div>
                <div className="bg-blue-950 rounded-lg p-3 border border-blue-700 mt-3">
                  <div className="text-blue-300 text-sm font-semibold">Why acceptable?</div>
                  <div className="text-gray-400 text-sm mt-1">Pharmacy queues refresh every 30s. 5s pipeline lag is near-real-time for ops.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  // SLIDE 9: AGGREGATION - THE HARD PART
  {
    id: 9,
    content: (
      <div className="flex flex-col h-full gap-6">
        <div>
          <div className="text-blue-400 text-xs font-mono uppercase tracking-widest mb-2">Component 4 of 4 · The Hard Part</div>
          <h2 className="text-4xl font-bold">Lambda Aggregation Logic</h2>
          <p className="text-gray-400 mt-2">Merging data from 6 services with eventual consistency</p>
        </div>
        <div className="grid grid-cols-2 gap-6 flex-1">
          <div className="flex flex-col gap-3">
            <div className="text-gray-300 font-semibold">The Core Challenge: Out-of-Order Events</div>
            <div className="bg-gray-900 rounded-xl p-4 border border-gray-700 flex-1">
              {[
                { time: "t=0s", event: "Prescription event arrives first", action: "Create aggregated doc with Rx data only", status: "⚠️" },
                { time: "t=5s", event: "Patient event arrives late", action: "Update doc — must preserve Rx data!", status: "🔄" },
                { time: "t=8s", event: "Fill event arrives out of order", action: "Merge without losing patient or Rx data", status: "✅" },
              ].map((step) => (
                <div key={step.time} className="flex gap-3 mb-4">
                  <div className="text-blue-400 font-mono text-xs w-10 pt-1 flex-shrink-0">{step.time}</div>
                  <div className="flex-1">
                    <div className="text-gray-300 text-sm font-medium">{step.status} {step.event}</div>
                    <div className="text-gray-500 text-xs mt-0.5">→ {step.action}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-gray-300 font-semibold">Solution: Smart Merge Strategy</div>
            <div className="bg-gray-900 rounded-xl p-4 border border-green-700 flex-1">
              <div className="font-mono text-xs text-gray-300 leading-relaxed">
                <div className="text-gray-500">// Each service owns its section</div>
                <div>aggregated_doc = &#123;</div>
                <div className="ml-4 text-purple-300">patientData: &#123;...&#125;,</div>
                <div className="ml-4 text-blue-300">prescriptionData: &#123;...&#125;,</div>
                <div className="ml-4 text-green-300">fillData: &#123;...&#125;,</div>
                <div className="ml-4 text-yellow-300">fulfillmentData: &#123;...&#125;,</div>
                <div className="mt-2 ml-4 text-gray-500">// Derived fields</div>
                <div className="ml-4 text-slate-950">queueType: <span className="text-green-300">&apos;prescription-review&apos;</span>,</div>
                <div className="ml-4 text-slate-950">priority: <span className="text-red-300">&apos;high&apos;</span>,</div>
                <div className="ml-4 text-slate-950">updatedAt: <span className="text-gray-400">timestamp</span></div>
                <div>&#125;</div>
              </div>
              <div className="mt-3 pt-3 border-t border-gray-700">
                <div className="text-green-400 text-xs font-semibold mb-1">Key Insight</div>
                <div className="text-gray-400 text-xs">Update only your service&apos;s section. Recompute derived fields. Other services&apos; data is preserved automatically.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  // SLIDE 10: OPTIMISTIC LOCKING
  {
    id: 10,
    content: (
      <div className="flex flex-col h-full gap-6">
        <div>
          <div className="text-blue-400 text-xs font-mono uppercase tracking-widest mb-2">Aggregation · Consistency</div>
          <h2 className="text-4xl font-bold">Optimistic Locking for Aggregated Index</h2>
          <p className="text-gray-400 mt-2">Two layers to handle concurrent writes from 6+ services</p>
        </div>
        <div className="grid grid-cols-2 gap-6 flex-1">
          <div className="flex flex-col gap-4">
            <div className="bg-gray-900 rounded-xl p-5 border border-blue-700 flex-1">
              <div className="text-blue-400 font-semibold mb-3">Layer 1 — Per-Service Versioning</div>
              <div className="bg-gray-800 rounded-lg p-3 font-mono text-xs text-gray-300 leading-relaxed mb-3">
                <div className="text-gray-500">// aggregated doc in OpenSearch</div>
                <div>&#123;</div>
                <div className="ml-4 text-purple-300">&quot;patientData&quot;: &#123; ... &#125;,</div>
                <div className="ml-4 text-blue-300">&quot;prescriptionData&quot;: &#123; ... &#125;,</div>
                <div className="ml-4 text-green-300">&quot;_versions&quot;: &#123;</div>
                <div className="ml-8">&quot;patient&quot;: 5, &quot;prescription&quot;: 12, &quot;fill&quot;: 8</div>
                <div className="ml-4 text-green-300">&#125;</div>
                <div>&#125;</div>
              </div>
              <div className="text-gray-400 text-xs">In Lambda: if event_version ≤ _versions[service] → skip. Handles Kinesis at-least-once replays. Version IDs come from outbox sequence numbers.</div>
            </div>
            <div className="bg-gray-900 rounded-xl p-4 border border-yellow-700">
              <div className="text-yellow-400 font-semibold mb-2 text-sm">Layer 2 — OpenSearch OCC</div>
              <div className="text-gray-400 text-xs">Use <span className="font-mono text-yellow-300">if_seq_no + if_primary_term</span> on every write. On <span className="font-mono text-red-300">ConflictError</span> → re-read doc + retry with fresh seq_no. Handles two services writing to the same aggregated doc simultaneously.</div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-gray-300 font-semibold text-sm">Edge Cases to Know</div>
            {[
              { title: "Doc creation race", desc: "Two services create the same doc simultaneously with no seq_no → dirty write", fix: "Use op_type='create' — fails if doc exists → retry with fresh read and seq_no" },
              { title: "Infinite retry loop", desc: "High contention causes ConflictError loop with no exit condition", fix: "Iterative retry: MAX_RETRIES=3. On exhaustion, send to DLQ." },
              { title: "Lambda mid-batch failure", desc: "Lambda crashes after processing some records. Kinesis re-delivers entire batch.", fix: "Layer 1 idempotency: already-applied events are skipped. Safe to replay." },
              { title: "Backfill replay", desc: "Historical events have lower version IDs than current state", fix: "Layer 1 correctly skips them. Use force_reindex flag to bypass for intentional re-index." },
            ].map(e => (
              <div key={e.title} className="bg-gray-900 rounded-xl p-3 border border-gray-700">
                <div className="text-red-400 font-semibold text-sm">{e.title}</div>
                <div className="text-gray-500 text-xs mt-1">{e.desc}</div>
                <div className="text-green-400 text-xs mt-1.5">→ {e.fix}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },

  // SLIDE 11: MONITORING & OBSERVABILITY
  {
    id: 11,
    content: (
      <div className="flex flex-col h-full gap-5">
        <div>
          <div className="text-blue-400 text-xs font-mono uppercase tracking-widest mb-2">Observability</div>
          <h2 className="text-4xl font-bold">Monitoring the Pipeline</h2>
          <p className="text-gray-400 mt-2">
            <span className="font-mono text-blue-400">IteratorAgeMilliseconds</span> and <span className="font-mono text-blue-400">end_to_end_lag_ms</span> are your SLA canaries
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4 flex-1">
          <div className="flex flex-col gap-2">
            <div className="text-gray-400 font-semibold text-xs uppercase tracking-wide mb-1">By Layer</div>
            {[
              { layer: "Outbox / DMS", border: "border-purple-700", text: "text-purple-400", metrics: ["Outbox table row count (backlog)", "DMS replication lag (ms)", "Events emitted/sec per service"] },
              { layer: "Kinesis", border: "border-yellow-700", text: "text-yellow-400", metrics: ["IteratorAgeMilliseconds ★", "ThrottledRecords", "WriteProvisionedThroughputExceeded"] },
              { layer: "Firehose (5s buffer)", border: "border-orange-700", text: "text-orange-400", metrics: ["DataFreshness ≈ 5s (alert if > 15s)", "Failed records per delivery", "Batch size hitting limits"] },
              { layer: "OpenSearch", border: "border-blue-700", text: "text-blue-400", metrics: ["Search latency p95/p99", "Cluster health (red = alert)", "JVM heap > 75% = GC pressure", "Thread pool rejections"] },
            ].map(({ layer, border, text, metrics }) => (
              <div key={layer} className={`bg-gray-900 rounded-xl p-3 border ${border}`}>
                <div className={`font-semibold text-xs mb-1.5 ${text}`}>{layer}</div>
                {metrics.map(m => <div key={m} className="text-gray-400 text-xs">• {m}</div>)}
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-gray-400 font-semibold text-xs uppercase tracking-wide mb-1">Custom Lambda Metrics</div>
            <div className="bg-gray-900 rounded-xl p-4 border border-green-700 flex-1">
              {[
                { name: "end_to_end_lag_ms", desc: "event_created_at → now. The true SLA metric. Target < 10s steady-state." },
                { name: "conflict_errors", desc: "Layer 2 OCC failures. High = OpenSearch contention or hot partition." },
                { name: "stale_events_skipped", desc: "Layer 1 version check skips. Expected during retries. Unexpected spike = upstream bug." },
                { name: "dlq_events", desc: "Permanently failed events. Alert immediately at > 0." },
                { name: "retry_count_p99", desc: "Retries before success. p99 > 2 = sustained contention." },
                { name: "events_by_service", desc: "Per-service event count. Spot which service floods the pipeline." },
              ].map(m => (
                <div key={m.name} className="mb-3 last:mb-0">
                  <div className="font-mono text-green-300 text-xs">{m.name}</div>
                  <div className="text-gray-500 text-xs mt-0.5">{m.desc}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-gray-400 font-semibold text-xs uppercase tracking-wide mb-1">Alerting</div>
            <div className="bg-red-950 rounded-xl p-3 border border-red-700">
              <div className="text-red-400 font-bold text-xs mb-1.5">CRITICAL — Page On-Call</div>
              {["DLQ depth > 0", "OpenSearch cluster red", "Lambda error rate > 5%"].map(a => <div key={a} className="text-gray-300 text-xs">• {a}</div>)}
            </div>
            <div className="bg-yellow-950 rounded-xl p-3 border border-yellow-700 mt-2">
              <div className="text-yellow-400 font-bold text-xs mb-1.5">WARNING</div>
              {["Kinesis IteratorAge > 30s", "ConflictError rate > 10%", "End-to-end lag > 30s"].map(a => <div key={a} className="text-gray-300 text-xs">• {a}</div>)}
            </div>
            <div className="bg-gray-900 rounded-xl p-4 border border-blue-700 flex-1 mt-2">
              <div className="text-blue-400 font-semibold text-xs mb-2">Reconciliation Job</div>
              <div className="text-gray-400 text-xs leading-relaxed">Runs hourly. Samples patient IDs, recomputes expected aggregated doc from individual indices, diffs against actual. Only way to catch silent data drift without user reports.</div>
              <div className="mt-2 text-gray-500 text-xs">Alert if mismatch rate &gt; 0.1%</div>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  // SLIDE 12: EDGE CASES
  {
    id: 12,
    content: (
      <div className="flex flex-col h-full gap-6">
        <div>
          <div className="text-blue-400 text-xs font-mono uppercase tracking-widest mb-2">Aggregation · Edge Cases</div>
          <h2 className="text-4xl font-bold">Handling Distributed System Edge Cases</h2>
        </div>
        <div className="grid grid-cols-2 gap-4 flex-1">
          {[
            {
              problem: "Duplicate Events",
              cause: "At-least-once delivery from Kinesis",
              solution: "Idempotent updates — applying same event twice produces same result",
              color: "border-yellow-700 bg-yellow-950",
              tag: "text-yellow-400",
            },
            {
              problem: "Stale Data",
              cause: "Events can arrive minutes late",
              solution: "Use event timestamp to reject updates older than current doc's version",
              color: "border-orange-700 bg-orange-950",
              tag: "text-orange-400",
            },
            {
              problem: "Missing References",
              cause: "Prescription arrives before Patient is indexed",
              solution: "Store reference IDs now, fill in data when that service's event arrives",
              color: "border-purple-700 bg-purple-950",
              tag: "text-purple-400",
            },
            {
              problem: "Deletions",
              cause: "Record deleted from source service",
              solution: "Soft delete: set isDeleted = true. Preserve for audit trail. Hard delete after grace period.",
              color: "border-red-700 bg-red-950",
              tag: "text-red-400",
            },
            {
              problem: "Schema Evolution",
              cause: "Service adds new fields over time",
              solution: "Backward-compatible events (new fields optional). OpenSearch dynamic mapping handles new fields gracefully.",
              color: "border-blue-700 bg-blue-950",
              tag: "text-blue-400",
            },
            {
              problem: "Lambda Failures",
              cause: "Aggregation Lambda crashes mid-batch",
              solution: "DLQ captures failed events. Idempotency means safe to reprocess. Kinesis retention enables full replay.",
              color: "border-green-700 bg-green-950",
              tag: "text-green-400",
            },
          ].map((c) => (
            <div key={c.problem} className={`rounded-xl p-4 border ${c.color}`}>
              <div className={`font-bold text-sm ${c.tag}`}>{c.problem}</div>
              <div className="text-gray-500 text-xs mt-0.5">Cause: {c.cause}</div>
              <div className="text-gray-300 text-sm mt-2">→ {c.solution}</div>
            </div>
          ))}
        </div>
      </div>
    ),
  },

  // SLIDE 13: DUAL INDEXING
  {
    id: 13,
    content: (
      <div className="flex flex-col h-full gap-6">
        <div>
          <div className="text-blue-400 text-xs font-mono uppercase tracking-widest mb-2">OpenSearch Design</div>
          <h2 className="text-4xl font-bold">Dual Indexing Strategy</h2>
          <p className="text-gray-400 mt-2">Optimize for different query patterns — 1.5x storage, 10x faster queries</p>
        </div>
        <div className="grid grid-cols-2 gap-6 flex-1">
          <div className="flex flex-col gap-3">
            <div className="bg-gray-900 rounded-xl p-5 border border-gray-700 flex-1">
              <div className="text-gray-400 font-semibold mb-3 text-sm uppercase tracking-wide">Individual Indices (per service)</div>
              <div className="flex flex-wrap gap-2 mb-4">
                {["patient-index", "prescription-index", "fill-index", "fulfillment-index", "purchase-index"].map(i => (
                  <span key={i} className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded font-mono">{i}</span>
                ))}
              </div>
              <div className="space-y-2 text-sm">
                <div><span className="text-blue-400">Use case:</span> <span className="text-gray-300">Service-specific queries</span></div>
                <div><span className="text-blue-400">Example:</span> <span className="text-gray-300">&quot;All prescriptions for patient 123&quot;</span></div>
                <div><span className="text-blue-400">Schema:</span> <span className="text-gray-300">Matches service domain model</span></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="bg-blue-950 rounded-xl p-5 border border-blue-600 flex-1">
              <div className="text-blue-400 font-semibold mb-3 text-sm uppercase tracking-wide">★ Aggregated Index</div>
              <div className="font-mono text-xs text-gray-300 bg-gray-900 rounded-lg p-3 mb-3 leading-relaxed">
                <div>&#123;</div>
                <div className="ml-3 text-blue-300">&quot;id&quot;: &quot;prescription:12345&quot;,</div>
                <div className="ml-3 text-purple-300">&quot;queueType&quot;: &quot;prescription-review&quot;,</div>
                <div className="ml-3 text-red-300">&quot;priority&quot;: &quot;high&quot;,</div>
                <div className="ml-3 text-green-300">&quot;patientName&quot;: &quot;John Doe&quot;,</div>
                <div className="ml-3 text-yellow-300">&quot;medication&quot;: &quot;Metformin 500mg&quot;,</div>
                <div className="ml-3 text-gray-400">&quot;fillStatus&quot;: &quot;pending-review&quot;</div>
                <div>&#125;</div>
              </div>
              <div className="space-y-1 text-sm">
                <div><span className="text-blue-400">Use case:</span> <span className="text-gray-300">Cross-service queue queries</span></div>
                <div><span className="text-blue-400">Schema:</span> <span className="text-gray-300">Denormalized for display</span></div>
                <div><span className="text-blue-400">Benefit:</span> <span className="text-gray-300">One query, all data needed</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  // SLIDE: MIGRATION MANAGEMENT
  {
    id: 20,
    content: (
      <div className="flex flex-col h-full gap-6">
        <div>
          <div className="text-blue-400 text-xs font-mono uppercase tracking-widest mb-2">Migration</div>
          <h2 className="text-4xl font-bold">Managing the Cutover</h2>
          <p className="text-gray-400 mt-2">Moving 100K+ daily users from monolith search to OpenSearch with zero downtime</p>
        </div>
        <div className="grid grid-cols-3 gap-4 flex-1">
          <div className="bg-gray-900 rounded-xl p-5 border border-blue-700 flex flex-col gap-3">
            <div className="text-blue-400 font-semibold">Cutover Strategy</div>
            {[
              { phase: "Phase 1", title: "Shadow indexing", desc: "Pipeline indexed into OpenSearch while monolith was still the source of truth. No user impact." },
              { phase: "Phase 2", title: "Validation window", desc: "Ran parity checks — compared OpenSearch results to monolith for same queries. Target: <0.1% mismatch." },
              { phase: "Phase 3", title: "Hard cutover", desc: "Flipped the switch per service, not all at once. Rollback was a single feature flag." },
            ].map(({ phase, title, desc }) => (
              <div key={phase} className="bg-gray-800 rounded-lg p-3">
                <div className="text-xs text-gray-500 font-mono">{phase}</div>
                <div className="text-blue-300 text-sm font-semibold">{title}</div>
                <div className="text-gray-400 text-xs mt-1">{desc}</div>
              </div>
            ))}
          </div>
          <div className="bg-gray-900 rounded-xl p-5 border border-yellow-700 flex flex-col gap-4">
            <div className="text-yellow-400 font-semibold">Validation Approach</div>
            {[
              { title: "Data parity checks", desc: "Compared OpenSearch results to monolith query results for the same inputs before cutting over each service." },
              { title: "End-to-end lag checks", desc: "Verified events were flowing through the full pipeline and indexing within the expected window before declaring readiness." },
              { title: "Hourly reconciliation job", desc: "Sampled documents and diffed expected vs actual aggregated state. Caught silent drift that parity checks alone wouldn't surface." },
            ].map(({ title, desc }) => (
              <div key={title} className="flex flex-col gap-1">
                <div className="text-yellow-300 text-sm font-medium">{title}</div>
                <div className="text-gray-500 text-xs leading-relaxed">{desc}</div>
              </div>
            ))}
          </div>
          <div className="bg-gray-900 rounded-xl p-5 border border-green-700 flex flex-col gap-3">
            <div className="text-green-400 font-semibold">Outcome</div>
            {[
              { stat: "Zero", label: "data loss events during migration" },
              { stat: "Zero", label: "downtime — ops team didn't notice the cutover" },
              { stat: "6 services", label: "migrated over ~3 weeks" },
            ].map(({ stat, label }) => (
              <div key={label} className="bg-gray-800 rounded-lg p-3 text-center">
                <div className="text-green-400 text-xl font-bold">{stat}</div>
                <div className="text-gray-400 text-xs mt-1">{label}</div>
              </div>
            ))}
            <div className="bg-blue-950 border border-blue-700 rounded-lg p-3 mt-auto">
              <div className="text-blue-300 text-xs leading-relaxed">Rollback plan: feature flag to instantly revert to monolith search per service. Never needed it.</div>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  // SLIDE 14: RESULTS
  {
    id: 14,
    content: (
      <div className="flex flex-col h-full gap-6">
        <div>
          <div className="text-blue-400 text-xs font-mono uppercase tracking-widest mb-2">Results</div>
          <h2 className="text-4xl font-bold">Impact & Metrics</h2>
        </div>
        <div className="grid grid-cols-2 gap-6 flex-1">
          <div className="flex flex-col gap-4">
            <div className="text-gray-400 font-semibold text-sm uppercase tracking-wide">Performance</div>
            {[
              { label: "Query Latency (p95)", before: "180ms", after: "50ms", delta: "72% faster" },
              { label: "Throughput", before: "500 RPS", after: "2,000 RPS", delta: "4x increase" },
              { label: "Availability", before: "99.5%", after: "99.95%", delta: "10x fewer outages" },
              { label: "Indexing Latency", before: "N/A (sync)", after: "~2 seconds", delta: "real-time" },
            ].map((m) => (
              <div key={m.label} className="bg-gray-900 rounded-xl p-4 border border-gray-700">
                <div className="text-gray-400 text-sm mb-2">{m.label}</div>
                <div className="flex items-center gap-3">
                  <span className="text-red-400 line-through text-sm">{m.before}</span>
                  <span className="text-gray-500">→</span>
                  <span className="text-green-400 font-bold">{m.after}</span>
                  <span className="ml-auto text-blue-400 text-xs bg-blue-950 px-2 py-0.5 rounded-full">{m.delta}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-gray-400 font-semibold text-sm uppercase tracking-wide">Business Impact</div>
            {[
              { icon: "🏢", title: "Unblocked Migration", desc: "Enabled entire monolith → microservices move. Critical business requirement." },
              { icon: "👥", title: "100K+ Daily Users", desc: "Pharmacy ops team, internal tools, analytics — all powered by this." },
              { icon: "🔧", title: "10+ Services Depend On It", desc: "Dashboards, reports, admin panels, analytics all query Search Service." },
              { icon: "⚡", title: "Self-Service", desc: "Product teams add searchable fields by updating event schema — no eng required." },
              { icon: "💰", title: "Cost Optimized", desc: "Firehose batching reduced Lambda costs by 98% ($2000 → $40/month)." },
            ].map((item) => (
              <div key={item.title} className="bg-gray-900 rounded-xl p-4 border border-gray-700 flex gap-3">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <div className="text-blue-300 font-semibold text-sm">{item.title}</div>
                  <div className="text-gray-400 text-xs mt-0.5">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },

  // SLIDE 15: DESIGN DECISIONS
  {
    id: 15,
    content: (
      <div className="flex flex-col h-full gap-6">
        <div>
          <div className="text-blue-400 text-xs font-mono uppercase tracking-widest mb-2">Design Decisions</div>
          <h2 className="text-4xl font-bold">Key Trade-offs</h2>
          <p className="text-gray-400 mt-2">Why we chose what we chose</p>
        </div>
        <div className="grid grid-cols-2 gap-4 flex-1">
          {[
            {
              decision: "Event-Driven vs Batch",
              chose: "Event-Driven",
              pros: ["Real-time (<2s delay)", "Process only changed data", "Audit trail built-in"],
              cons: ["More complex", "Eventual consistency challenges"],
              reason: "Pharmacy queues need seconds-fresh data, not 24hr stale.",
            },
            {
              decision: "Dual vs Single Index",
              chose: "Dual Indexing",
              pros: ["Optimized per query pattern", "Services evolve independently", "10x faster queries"],
              cons: ["1.5x storage cost", "Two writes per event"],
              reason: "Different queries need different schemas. Storage is cheap.",
            },
            {
              decision: "OpenSearch vs Algolia",
              chose: "OpenSearch",
              pros: ["AWS managed, HIPAA compliant", "Native Kinesis/Lambda integration", "No vendor lock-in"],
              cons: ["More ops overhead than Algolia"],
              reason: "Healthcare requires HIPAA compliance. AWS-native fits stack.",
            },
            {
              decision: "Firehose vs Direct Lambda",
              chose: "Firehose + Lambda",
              pros: ["50x cost reduction", "Better OpenSearch bulk indexing", "Natural backpressure"],
              cons: ["+5s indexing latency"],
              reason: "Pharmacy ops refresh every 30s. 5s pipeline lag is near-real-time.",
            },
          ].map((d) => (
            <div key={d.decision} className="bg-gray-900 rounded-xl p-4 border border-gray-700">
              <div className="flex items-center justify-between mb-2">
                <div className="text-gray-300 font-semibold text-sm">{d.decision}</div>
                <div className="text-blue-400 text-xs bg-blue-950 px-2 py-0.5 rounded-full">→ {d.chose}</div>
              </div>
              <div className="grid grid-cols-2 gap-2 mb-2">
                <div>
                  <div className="text-green-400 text-xs mb-1">Pros</div>
                  {d.pros.map(p => <div key={p} className="text-gray-400 text-xs">✓ {p}</div>)}
                </div>
                <div>
                  <div className="text-red-400 text-xs mb-1">Cons</div>
                  {d.cons.map(c => <div key={c} className="text-gray-400 text-xs">✗ {c}</div>)}
                </div>
              </div>
              <div className="text-blue-300 text-xs border-t border-gray-700 pt-2 mt-1">💡 {d.reason}</div>
            </div>
          ))}
        </div>
      </div>
    ),
  },

  // SLIDE 16: LESSONS LEARNED
  {
    id: 16,
    content: (
      <div className="flex flex-col h-full gap-6">
        <div>
          <div className="text-blue-400 text-xs font-mono uppercase tracking-widest mb-2">Retrospective</div>
          <h2 className="text-4xl font-bold">Lessons Learned</h2>
          <p className="text-gray-400 mt-2">What I&apos;d do differently and what worked well</p>
        </div>
        <div className="grid grid-cols-2 gap-6 flex-1">
          <div className="flex flex-col gap-3">
            <div className="text-red-400 font-semibold text-sm uppercase tracking-wide">What I&apos;d do differently</div>
            {[
              {
                title: "DLQ + Alerting from Day 1",
                story: "First time Lambda failed, events disappeared silently — no DLQ, no alert. Discovered it because a pharmacist noticed a patient was missing from the queue hours later.",
                fix: "At-least-once delivery guarantees failures will happen. DLQ + dlq_events > 0 alert should have been live before the first deploy, not after the first production incident.",
              },
              {
                title: "Observability Before First Deploy",
                story: "Set up CloudWatch dashboards only after things broke. Spent hours correlating logs across Lambda, Kinesis, and OpenSearch to find the lag was in Firehose — a metric we weren't tracking.",
                fix: "Full observability stack (IteratorAge, end-to-end lag, ConflictError rate) should be ready on day 1. You can't debug what you can't see — and in distributed systems, you always need to debug.",
              },
            ].map(({ title, story, fix }) => (
              <div key={title} className="bg-gray-900 rounded-xl p-4 border border-red-900 flex flex-col gap-2">
                <div className="text-red-400 text-sm font-semibold">{title}</div>
                <div className="text-gray-400 text-xs leading-relaxed">{story}</div>
                <div className="text-blue-300 text-xs border-t border-gray-800 pt-2">→ {fix}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-green-400 font-semibold text-sm uppercase tracking-wide">What worked well</div>
            {[
              ["Outbox Pattern", "Zero lost events throughout the entire migration. Atomicity guarantee was critical for data integrity."],
              ["Idempotent Lambda", "Designing Lambda to be idempotent from day 1 made retries, replays, and debugging painless."],
              ["Dual Indexing", "Individual + aggregated indices gave best of both worlds. Worth the storage overhead."],
              ["Firehose Batching", "98% cost reduction was a huge win. The 5s latency trade-off turned out to be a complete non-issue."],
            ].map(([title, desc]) => (
              <div key={title} className="bg-gray-900 rounded-xl p-3 border border-green-900">
                <div className="text-green-400 text-sm font-semibold">{title}</div>
                <div className="text-gray-400 text-xs mt-1">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },

  // SLIDE 17: KEY TAKEAWAYS
  {
    id: 17,
    content: (
      <div className="flex flex-col h-full gap-6 items-center justify-center text-center">
        <div className="text-blue-400 text-xs font-mono uppercase tracking-widest">Key Takeaways</div>
        <h2 className="text-4xl font-bold">What This Project Taught Me</h2>
        <div className="grid grid-cols-3 gap-4 w-full mt-4">
          {[
            { icon: "🔄", title: "Event-Driven Thinking", desc: "Think in state machines, not request/response. Every data change is an event. Search is a materialized view." },
            { icon: "🤝", title: "Embrace Eventual Consistency", desc: "Perfect consistency across microservices is impossible. Design the UX to handle it gracefully — timestamps, loading states." },
            { icon: "🧩", title: "Aggregation Is the Hard Part", desc: "The technology (Kinesis, Lambda, OpenSearch) is easy. Merging data from 6 services with eventual consistency is hard." },
            { icon: "🔭", title: "Observability First", desc: "Correlation IDs and comprehensive logging at every stage saved hours of debugging. Non-negotiable in distributed systems." },
            { icon: "⚙️", title: "Idempotency Always", desc: "Design every operation to be safe to retry. At-least-once delivery is the norm. Idempotency is what makes it work." },
            { icon: "💡", title: "Optimize for the Use Case", desc: "Firehose batching trades latency for cost. Dual indexing trades storage for query speed. Know your access patterns." },
          ].map((t) => (
            <div key={t.title} className="bg-gray-900 rounded-xl p-5 border border-gray-700 text-left">
              <div className="text-3xl mb-3">{t.icon}</div>
              <div className="text-blue-400 font-semibold text-sm mb-2">{t.title}</div>
              <div className="text-gray-400 text-xs leading-relaxed">{t.desc}</div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
];

export default function SearchInfrastructurePresentation() {
  const [current, setCurrent] = useState(0);

  const prev = useCallback(() => setCurrent(c => Math.max(0, c - 1)), []);
  const next = useCallback(() => setCurrent(c => Math.min(slides.length - 1, c + 1)), []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [next, prev]);

  const slide = slides[current];

  return (
    <div className="min-h-screen bg-transparent text-slate-900 flex flex-col" style={{ fontFamily: "var(--font-body)" }}>
      {/* Top bar */}
      <div className="flex items-center justify-between px-8 py-3 border-b border-gray-800 bg-[rgba(255,250,242,0.94)] backdrop-blur-sm">
        <a href="/blog" className="text-gray-500 text-sm hover:text-blue-400 transition">← Blog</a>
        <div className="text-gray-500 text-sm font-mono">
          Search Infrastructure · Slide {current + 1} / {slides.length}
        </div>
        <div className="text-gray-600 text-xs">← → to navigate · Space to advance</div>
      </div>

      {/* Progress bar */}
      <div className="h-1 bg-gray-800">
        <div
          className="h-1 bg-blue-500 transition-all duration-300"
          style={{ width: `${((current + 1) / slides.length) * 100}%` }}
        />
      </div>

      {/* Slide content */}
      <div className="flex-1 px-16 py-10 max-w-6xl mx-auto w-full">
        {slide.content}
      </div>

      {/* Bottom navigation */}
      <div className="flex items-center justify-between px-8 py-4 border-t border-gray-800 bg-[rgba(255,250,242,0.94)] backdrop-blur-sm">
        <button
          onClick={prev}
          disabled={current === 0}
          className="px-5 py-2 rounded-lg bg-gray-800 text-gray-300 text-sm hover:bg-gray-700 transition disabled:opacity-30 disabled:cursor-not-allowed"
        >
          ← Previous
        </button>

        {/* Dot navigation */}
        <div className="flex gap-1.5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all ${i === current ? "w-6 h-2 bg-blue-400" : "w-2 h-2 bg-gray-700 hover:bg-gray-500"}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          disabled={current === slides.length - 1}
          className="px-5 py-2 rounded-lg bg-blue-600 text-white text-sm hover:bg-blue-500 transition disabled:opacity-30 disabled:cursor-not-allowed"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
