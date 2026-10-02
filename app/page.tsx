import Link from "next/link";
import { ThemeToggle } from "./components/ThemeToggle";
import { Achievements } from "./components/Achievements";
import { Timer } from "./components/Timer";
import { SummaryButton } from "./components/SummaryButton";
import { VisitorCounter } from "./components/VisitorCounter";

export default async function Home() {
  return (
    <main className="min-h-screen text-gray-900 dark:text-[#ededed] relative z-10 bg-transparent">
      <ThemeToggle />
      <div className="max-w-4xl mx-auto px-6 pt-4 md:pt-6 relative z-10">
        <div className="flex justify-end mb-8 md:mb-12">
          <VisitorCounter />
        </div>
        {/* Hero Section */}
        <section className="mb-20">
          <div className="flex items-start gap-4 mb-6">
            <SummaryButton>
              <span className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-2xl font-bold text-black dark:text-black avatar-glow">a</span>
            </SummaryButton>
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-3">abhishrestha</h1>
              <a href="mailto:abhishrestha.primary@gmail.com" className="text-sm text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400 transition-colors">Email</a>
            </div>
          </div>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">i&apos;m abhishrestha :)</p>
        </section>

        {/* What I Do Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-2 text-green-500 dark:text-green-400">what i do</h2>
          <p className="text-xl text-gray-800 dark:text-gray-200 font-medium mb-8 leading-snug">
            
          </p>

          {/* Experience */}
          <div className="space-y-6">
            <div className="border-l-2 border-green-500 dark:border-green-400 pl-6 py-2 border-shimmer">
              <div className="flex items-start gap-4 mb-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-500 to-slate-800 flex items-center justify-center text-white font-bold text-sm mt-1">
                  S
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline gap-2 mb-1">
                    <h3 className="text-xl font-semibold">Software Engineer</h3>
                    <span className="text-gray-400">•</span>
                    <span className="text-green-500 dark:text-green-400">Stealth Startup · Part-time</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Aug 2026 – Present · 3 mos · Tokyo, Japan · Remote</p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">Software Infrastructure, Software Design and +3 skills</p>
                </div>
              </div>
            </div>

            <div className="border-l-2 border-green-500 dark:border-green-400 pl-6 py-2 border-shimmer">
              <div className="flex items-start gap-4 mb-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center text-white font-bold text-sm mt-1">
                  &lt;/&gt;
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline gap-2 mb-1">
                    <h3 className="text-xl font-semibold">Open Source Developer</h3>
                    <span className="text-gray-400">•</span>
                    <span className="text-green-500 dark:text-green-400">Google Summer of Code · Part-time</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">May 2026 – Sep 2026 · 5 mos · San Francisco, California, United States · Remote</p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">Open Source Contributor @The Linux Foundation</p>
                  <Link href="https://drive.google.com/file/d/1MHUNp-3jdIzmmhWkjspL-qtq51jK285c/view?usp=sharing" target="_blank" className="inline-block mt-3 text-sm text-green-500 dark:text-green-400 hover:underline">GSoC Acceptance Letter ↗</Link>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mt-3">Version Control, Open-Source Software and +3 skills</p>
                </div>
              </div>
            </div>

            <div className="border-l-2 border-green-500 dark:border-green-400 pl-6 py-2 border-shimmer">
              <div className="flex items-start gap-4 mb-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm mt-1">
                  S
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline gap-2 mb-1">
                    <h3 className="text-xl font-semibold">Technical Content Developer</h3>
                    <span className="text-gray-400">•</span>
                    <span className="text-green-500 dark:text-green-400">Scaler · Part-time</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">May 2025 – Aug 2026 · 1 yr 4 mos · Bengaluru, Karnataka, India · Remote</p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">Technical content, Content Strategy and +1 skill</p>
                </div>
              </div>
            </div>

            <div className="border-l-2 border-green-500 dark:border-green-400 pl-6 py-2 border-shimmer">
              <div className="flex items-start gap-4 mb-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-500 to-gray-800 flex items-center justify-center text-white font-bold text-sm mt-1">
                  T
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline gap-2 mb-1">
                    <h3 className="text-xl font-semibold">Desktop App Developer</h3>
                    <span className="text-gray-400">•</span>
                    <span className="text-green-500 dark:text-green-400">Tech Instance · Part-time</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Sep 2025 – Jan 2026 · 5 mos · Bhubaneswar, Odisha, India · Remote</p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">Back-End Web Development and Version Control</p>
                </div>
              </div>
            </div>

            <div className="border-l-2 border-green-500 dark:border-green-400 pl-6 py-2 border-shimmer">
              <div className="flex items-start gap-4 mb-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center text-white font-bold text-sm mt-1">
                  L
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline gap-2 mb-1">
                    <h3 className="text-xl font-semibold">Software Engineer</h3>
                    <span className="text-gray-400">•</span>
                    <Link href="https://www.linkedin.com/company/pmcprecisionco/posts/?feedView=all" target="_blank" className="text-green-500 dark:text-green-400 hover:underline">
                      Lumio
                    </Link>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Aug 2025 – Sep 2025 · 2 mos · San Francisco, California, United States · Remote</p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">Mobile Applications, Front-End Development and +4 skills</p>
                </div>
              </div>
            </div>

            <div className="border-l-2 border-green-500 dark:border-green-400 pl-6 py-2 border-shimmer">
              <div className="flex items-start gap-4 mb-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center text-white font-bold text-sm mt-1">
                  T
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline gap-2 mb-1">
                    <h3 className="text-xl font-semibold">React Native Developer</h3>
                    <span className="text-gray-400">•</span>
                    <span className="text-green-500 dark:text-green-400">Tech Instance · Part-time</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Mar 2025 – Apr 2025 · 2 mos · Bhubaneswar, Odisha, India · Remote</p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    Contributed to the development of a ride-sharing application by implementing key features and functionalities to enhance user experience and platform performance.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mt-3">Front-End Development, Version Control and +1 skill</p>
                </div>
              </div>
            </div>

            <div className="border-l-2 border-green-500 dark:border-green-400 pl-6 py-2 border-shimmer">
              <div className="flex items-start gap-4 mb-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center text-white font-bold text-sm mt-1">
                  T
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline gap-2 mb-1">
                    <h3 className="text-xl font-semibold">Frontend Developer</h3>
                    <span className="text-gray-400">•</span>
                    <span className="text-green-500 dark:text-green-400">Wefofy · Part-time</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Mar 2025 – Apr 2025 · 2 mos · Noida, Uttar Pradesh, India · Remote</p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">Front-End Design, Front-end Coding and +3 skills</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <Link href="https://github.com/abhishrestha" target="_blank" aria-label="Visit abhishrestha on GitHub" className="group w-14 border border-transparent rounded-lg overflow-hidden hover:opacity-80 transition-opacity">
              <div className="h-12 bg-[#171717] flex items-center justify-center overflow-hidden">
                <img src="https://github.com/abhishrestha.png?size=120" alt="" className="w-9 h-9 rounded-full" />
              </div>
            </Link>
            <h2 className="text-3xl font-bold text-green-500 dark:text-green-400">projects</h2>
          </div>
          <div className="space-y-6">
            <div className="border border-gray-300 dark:border-gray-800 rounded-lg p-6 border-glow transition-all duration-300">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold">Spectra</h3>
                <Link 
                  href="https://github.com/abhishrestha/spectra" 
                  target="_blank"
                  className="text-green-500 dark:text-green-400 hover:underline text-sm"
                >
                  GitHub →
                </Link>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">FastAPI, Python, LangChain, LangGraph, PostgreSQL, Supabase, Next.js, React, TypeScript</p>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-3">
                Engineered full-stack generative AI backend using FastAPI and Python, integrating LangGraph framework
                for multi-turn conversation orchestration with persistent chat history and Supabase authentication.
              </p>
              <ul className="text-gray-300 text-sm space-y-1 list-disc list-inside">
                <li>Implemented advanced RAG workflows using Tavily web search API for real-time information retrieval, grounding AI responses with cited sources and enabling long-term memory replay across sessions</li>
                <li>Developed RESTful streaming chat APIs with user registration, session management, message persistence, and real-time SSE for streaming AI responses with source attributions</li>
                <li>Built responsive React/TypeScript frontend with Next.js, implementing session restoration, real-time backend sync, structured AI output rendering, and Google OAuth 2.0 authentication</li>
              </ul>
            </div>

            <div className="border border-gray-300 dark:border-gray-800 rounded-lg p-6 border-glow transition-all duration-300">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold">Trackify</h3>
                <Link 
                  href="https://github.com/abhishrestha/trackify" 
                  target="_blank"
                  className="text-green-500 dark:text-green-400 hover:underline text-sm"
                >
                  GitHub →
                </Link>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">React Native, Expo, Firebase, JavaScript</p>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-3">
                Engineered a full-stack mobile application to streamline tiffin subscription management for campus students, 
                automating daily order tracking and payment workflows
              </p>
              <ul className="text-gray-300 text-sm space-y-1 list-disc list-inside">
                <li>Implemented a Cron-based scheduling system to improve user notifications</li>
                <li>Optimized Firestore queries and implemented local caching, reducing average order-fetch latency from 1.8s to 180ms (90% improvement)</li>
              </ul>
            </div>

            <div className="border border-gray-300 dark:border-gray-800 rounded-lg p-6 border-glow transition-all duration-300">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold">AI-Powered Speech Analysis</h3>
                <Link 
                  href="https://github.com/abhishrestha/ai-speech-analysis" 
                  target="_blank"
                  className="text-green-500 dark:text-green-400 hover:underline text-sm"
                >
                  GitHub →
                </Link>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">React, Firebase Auth, Web Speech API, Gemini API, Google Cloud</p>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-3">
                Developed an intelligent, browser-based speech analysis tool offering real-time insights on pronunciation, 
                tone, and delivery for speakers and presenters
              </p>
              <ul className="text-gray-300 text-sm space-y-1 list-disc list-inside">
                <li>Leveraged Google Cloud Speech-to-Text and Gemini API to quantify clarity, engagement, and delivery metrics</li>
                <li>Enhanced feedback precision by 50%</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6 text-green-500 dark:text-green-400">technical skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3 uppercase tracking-wide">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {["JavaScript", "TypeScript", "Python", "C++", "Java", "SQL", "HTML", "CSS"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-sm text-gray-800 dark:text-gray-300 border border-transparent skill-tag cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3 uppercase tracking-wide">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {["React", "React Native", "Next.js", "Redux", "Tailwind CSS", "Material-UI", "Responsive Design"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-sm text-gray-800 dark:text-gray-300 border border-transparent skill-tag cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3 uppercase tracking-wide">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {["Node.js", "Express.js", "FastAPI", "RESTful APIs"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-sm text-gray-800 dark:text-gray-300 border border-transparent skill-tag cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3 uppercase tracking-wide">AI / ML</h3>
              <div className="flex flex-wrap gap-2">
                {["LangChain", "LangGraph", "OpenAI API", "Gemini API", "RAG"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-sm text-gray-800 dark:text-gray-300 border border-transparent skill-tag cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3 uppercase tracking-wide">Databases</h3>
              <div className="flex flex-wrap gap-2">
                {["PostgreSQL", "Firebase", "Firestore", "Supabase", "MongoDB", "SQL Database Design"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-sm text-gray-800 dark:text-gray-300 border border-transparent skill-tag cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3 uppercase tracking-wide">DevOps & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {["Git", "GitHub", "Docker", "Postman", "VS Code"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-sm text-gray-800 dark:text-gray-300 border border-transparent skill-tag cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3 uppercase tracking-wide">Cloud & Services</h3>
              <div className="flex flex-wrap gap-2">
                {["Google Cloud Platform", "Firebase Auth", "OAuth 2.0", "Supabase"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-sm text-gray-800 dark:text-gray-300 border border-transparent skill-tag cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <Achievements />


        {/* Contact Section */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold mb-6 text-green-500 dark:text-green-400">get in touch</h2>
          <div className="flex flex-wrap gap-4">
            <a 
              href="mailto:abhishrestha.primary@gmail.com" 
              className="px-6 py-3 bg-green-500 dark:bg-green-400 text-white dark:text-black rounded-lg font-semibold hover:bg-green-600 dark:hover:bg-green-500 transition-colors inline-flex items-center gap-2 border-glow"
            >
              Email me
              <span>→</span>
            </a>
            <Link 
              href="https://linkedin.com/in/abhishrestha-tiwari" 
              target="_blank"
              className="px-6 py-3 border border-gray-400 dark:border-gray-700 rounded-lg font-semibold inline-flex items-center gap-2 border-glow"
            >
              LinkedIn
              <span>↗</span>
            </Link>
            <Link 
              href="https://github.com/abhishrestha" 
              target="_blank"
              className="px-6 py-3 border border-gray-400 dark:border-gray-700 rounded-lg font-semibold inline-flex items-center gap-2 border-glow"
            >
              GitHub
              <span>↗</span>
            </Link>
          </div>
        </section>

        {/* Timer */}
        <Timer />
        {/* Footer */}
        <footer className="pt-6 text-center text-sm text-gray-600 dark:text-gray-500 space-y-2">
          <p>© abhishrestha </p>
        </footer>
      </div>
    </main>
  );
}
