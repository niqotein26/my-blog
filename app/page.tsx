import { FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-16 gap-12 bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="text-center space-y-3">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Rahul Garg <span className="text-blue-400">🚀</span></h1>
        <p className="text-lg sm:text-xl text-gray-300 max-w-xl mx-auto">Senior Software Engineer passionate about large scale distributed systems and AI-driven automation. Ex-Amazon.</p>
        <div className="flex justify-center gap-4 mt-3">
          <a href="mailto:rgarg2605@gmail.com" className="hover:text-blue-400 transition" title="Email"><FaEnvelope size={22} /></a>
          <a href="https://www.linkedin.com/in/rahulgarg2605" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition" title="LinkedIn"><FaLinkedin size={22} /></a>
          <a href="tel:8755181453" className="hover:text-blue-400 transition" title="Phone"><FaPhone size={22} /></a>
        </div>
        <div className="mt-6">
          <a href="/blog" className="inline-block px-6 py-2 rounded-full bg-blue-400 text-black font-semibold shadow hover:bg-blue-500 transition">Blog</a>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-2xl text-center space-y-2">
        <h2 className="text-2xl font-semibold mb-1 text-blue-400">About</h2>
        <p className="text-base text-gray-300">I build scalable systems and love automating the boring stuff. My work spans real-time voice assistants, high-throughput search, and CRM/payment platforms. Always learning, always shipping. Let's make something awesome together!</p>
      </section>

      {/* Experience Section */}
      <section className="max-w-2xl w-full">
        <h2 className="text-2xl font-semibold mb-3 text-blue-400 text-center">Experience</h2>
        <div className="space-y-6">
          <div className="bg-gray-900 rounded-lg p-5 shadow-md border-l-4 border-blue-400">
            <div className="flex justify-between items-center mb-1">
              <span className="font-bold">Senior Software Engineer, BlinkHealth</span>
              <span className="text-sm text-gray-400">Feb 2022 – Present</span>
            </div>
            <ul className="list-disc list-inside text-gray-300 text-sm space-y-1 pl-2">
              <li>Replaced legacy IVR with real-time voice assistant using Twilio & OpenAI, reducing escalations from 99% → 60%.</li>
              <li>Built centralized Search Service (Elasticsearch + Kinesis), achieving 80-90% lower p95 latency at 2K+ RPS.</li>
              <li>Designed eventing framework (SDK + Sidecar) for 30+ microservices, enabling real-time querying.</li>
              <li>Led zero-downtime migration to a Central Patient Store, unifying reads/writes platform-wide.</li>
              <li>Built custom CRM backend, saving $2M/yr and automating all voice-based flows.</li>
              <li>Refactored Payment Service for multi-processor routing, enabling partner expansion and PCI compliance.</li>
              <li>Lead 4-engineer team for contact center and payment infra, owning roadmap and delivery.</li>
            </ul>
          </div>
          <div className="bg-gray-900 rounded-lg p-5 shadow-md border-l-4 border-blue-400">
            <div className="flex justify-between items-center mb-1">
              <span className="font-bold">Software Engineer, Amazon</span>
              <span className="text-sm text-gray-400">Jun 2020 – Feb 2022</span>
            </div>
            <ul className="list-disc list-inside text-gray-300 text-sm space-y-1 pl-2">
              <li>Launched serverless pipeline (Lambda, Batch) for daily payment hold summaries for 200K+ vendors.</li>
              <li>Migrated 20TB of document storage to S3, improving reliability and reducing costs.</li>
              <li>Built full-stack services for vendor onboarding and compliance automation.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="max-w-2xl w-full">
        <h2 className="text-2xl font-semibold mb-3 text-blue-400 text-center">Skills</h2>
        <div className="flex flex-wrap gap-2 justify-center">
          <span className="px-3 py-1 bg-blue-900 text-blue-200 rounded-full text-sm">Python</span>
          <span className="px-3 py-1 bg-blue-900 text-blue-200 rounded-full text-sm">Java</span>
          <span className="px-3 py-1 bg-blue-900 text-blue-200 rounded-full text-sm">JavaScript</span>
          <span className="px-3 py-1 bg-blue-900 text-blue-200 rounded-full text-sm">TypeScript</span>
          <span className="px-3 py-1 bg-blue-900 text-blue-200 rounded-full text-sm">C++</span>
          <span className="px-3 py-1 bg-blue-900 text-blue-200 rounded-full text-sm">Django</span>
          <span className="px-3 py-1 bg-blue-900 text-blue-200 rounded-full text-sm">React</span>
          <span className="px-3 py-1 bg-blue-900 text-blue-200 rounded-full text-sm">PostgreSQL</span>
          <span className="px-3 py-1 bg-blue-900 text-blue-200 rounded-full text-sm">DynamoDB</span>
          <span className="px-3 py-1 bg-blue-900 text-blue-200 rounded-full text-sm">MySQL</span>
          <span className="px-3 py-1 bg-blue-900 text-blue-200 rounded-full text-sm">Kubernetes</span>
          <span className="px-3 py-1 bg-blue-900 text-blue-200 rounded-full text-sm">Terraform</span>
          <span className="px-3 py-1 bg-blue-900 text-blue-200 rounded-full text-sm">Docker</span>
          <span className="px-3 py-1 bg-blue-900 text-blue-200 rounded-full text-sm">Git</span>
          <span className="px-3 py-1 bg-blue-900 text-blue-200 rounded-full text-sm">AWS</span>
          <span className="px-3 py-1 bg-blue-900 text-blue-200 rounded-full text-sm">Machine Learning</span>
          <span className="px-3 py-1 bg-blue-900 text-blue-200 rounded-full text-sm">LLMs</span>
          <span className="px-3 py-1 bg-blue-900 text-blue-200 rounded-full text-sm">Healthcare</span>
          <span className="px-3 py-1 bg-blue-900 text-blue-200 rounded-full text-sm">FinTech</span>
          <span className="px-3 py-1 bg-blue-900 text-blue-200 rounded-full text-sm">Payments</span>
          <span className="px-3 py-1 bg-blue-900 text-blue-200 rounded-full text-sm">CRM</span>
          <span className="px-3 py-1 bg-blue-900 text-blue-200 rounded-full text-sm">Search</span>
        </div>
      </section>

      {/* Education Section */}
      <section className="max-w-2xl w-full">
        <h2 className="text-2xl font-semibold mb-3 text-blue-400 text-center">Education</h2>
        <div className="bg-gray-900 rounded-lg p-5 shadow-md border-l-4 border-blue-400 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <span className="font-bold">Indian Institute Of Technology Roorkee</span>
          <span className="text-sm text-gray-400">B.Tech in Electrical Engineering, 2016-2020</span>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-10 text-center text-gray-500 text-sm">
        <span>Made with ❤️ by Rahul Garg</span>
      </footer>
    </main>
  );
}
