import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-16 gap-10 bg-white text-black dark:bg-black dark:text-white">
      <section className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Hi, Your Name here</h1>
        <p className="text-lg">20-something developer</p>
      </section>
      <section className="max-w-xl text-center">
        <h2 className="text-xl font-semibold mb-2">About</h2>
        <p className="text-base">tldr; learnt by hacking around on the internet. I like technology and deep science. I deeply study art, history, football and great books.</p>
      </section>
      <section className="max-w-xl w-full">
        <h2 className="text-xl font-semibold mb-2 text-center">Cool places I worked at</h2>
        <ul className="list-disc list-inside text-base space-y-1 text-left mx-auto w-fit">
          <li>Company 1 – Role (Year)</li>
          <li>Company 2 – Role (Year)</li>
        </ul>
      </section>
      <section className="max-w-xl w-full">
        <h2 className="text-xl font-semibold mb-2 text-center">Education</h2>
        <ul className="list-disc list-inside text-base space-y-1 text-left mx-auto w-fit">
          <li>University Name (Year)</li>
        </ul>
      </section>
      <section className="max-w-xl w-full">
        <h2 className="text-xl font-semibold mb-2 text-center">Skills</h2>
        <div className="flex flex-wrap gap-2 justify-center">
          <span className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-sm">React</span>
          <span className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-sm">Next.js</span>
          <span className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-sm">Typescript</span>
        </div>
      </section>
    </main>
  );
}
