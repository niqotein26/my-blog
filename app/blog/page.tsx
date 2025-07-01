export default function BlogPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-16 bg-black text-white font-sans">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-blue-400">Blog</h1>
      <p className="text-lg text-gray-300 mb-8 text-center max-w-xl">Thoughts, tutorials, and stories on software engineering, distributed systems, and AI. Stay tuned for more!</p>
      {/* Blog posts will go here */}
      <div className="w-full flex flex-col items-center gap-6">
        <a href="/blog/why-we-procrastinate" className="block w-full max-w-xl bg-gray-900 rounded-lg p-6 border-l-4 border-blue-400 shadow hover:bg-gray-800 transition">
          <h2 className="text-2xl font-bold text-blue-300 mb-1">Why We Procrastinate</h2>
          <div className="text-sm text-gray-400 mb-2">May 2024 • Psychology</div>
          <p className="text-gray-300">Why do we put things off, even when we know it's not in our best interest? A look at the psychology behind procrastination and how to overcome it.</p>
        </a>
      </div>
    </main>
  );
} 