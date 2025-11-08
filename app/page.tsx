import DotGrid from "./components/DotGrid";
import Ballpit from "./components/BallPit";
import Header from "./components/header";
import GridBackground from "./components/GridBackground";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Grid Background - Must be first and lowest z-index */}
      <div className="fixed inset-0 z-0">
        <GridBackground />
      </div>

      {/* Ballpit Animation */}
      <div className="fixed inset-0 z-10">
        <Ballpit
          count={100}
          gravity={0.1}
          friction={1}
          wallBounce={0.95}
          followCursor={false}
        />
      </div>

      <div className="relative z-30">
        <Header />
      </div>

      <div className="relative z-20 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-xl w-full flex flex-col space-y-3 bg-white/30 px-8 py-3 shadow-2xl backdrop-blur-2xl rounded-xl">
          <div className="text-black animate-slideInUp text-left">
            Hey there, I&apos;m
          </div>

          <div className="flex items-center text-[80px] text-black animate-slideInUp text-center md:text-left leading-none gap-2">
            <span>Martin Cam</span>
            <img
              src="/landingpagevectors/namedot.svg"
              alt="dot"
              className="w-3 h-3 -mt-12"
            />
          </div>

          <div className="text-black animate-slideInUp text-left leading-relaxed">
            An 18-year-old Full Stack web developer based in Vancouver, Canada.
            I&apos;m currently working as a Software Engineer at Futurity, an
            AI-powered learning and career enablement platform designed to
            prepare individuals and organizations for the future of work.
            <div className="text-black animate-slideInUp text-left mt-5 leading-relaxed">
              Primarily, I write a lot of TypeScript, React, Next, and Tailwind
              CSS but I also have experience with ExpressJS, Drizzle ORM,
              PostgreSQL, and Docker.
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
