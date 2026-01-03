//import DotGrid from "./components/DotGrid/DotGrid";
import Ballpit from "./components/BallPit/BallPit";
import Header from "./components/Header/header";
import GridBackground from "./components/GridBackground/GridBackground";
import { Text } from "@radix-ui/themes";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <div className="fixed inset-0 z-0">
        <GridBackground />
        <div className="absolute inset-0">
          <Ballpit
            count={100}
            gravity={0.1}
            friction={1}
            wallBounce={0.95}
            followCursor={false}
          />
        </div>
      </div>

      <div className="relative z-30">
        <Header />
      </div>

      <div className="relative z-20 min-h-screen flex items-center justify-center px-4 animate-pageFadeIn">
        <div className="max-w-xl w-full flex flex-col space-y-3 bg-palette-white px-8 py-6 shadow-2xl rounded-xl border border-palette-gray-20">
          <div className="text-palette-gray-100 animate-slideInUp text-left">
            Hey there, I&apos;m
          </div>

          <div className="flex items-center text-[80px] text-palette-gray-100 animate-slideInUp text-center md:text-left leading-none gap-2">
            <span>Martin Cam</span>
            <img
              src="/landingpagevectors/namedot.svg"
              alt="dot"
              className="w-3 h-3 -mt-12"
            />
          </div>

          <div className="text-palette-gray-100 animate-slideInUp text-left leading-relaxed">
            An 19-year-old Full Stack web developer based in{" "}
            <Text color="iris">Vancouver, Canada</Text>. I&apos;m currently
            working as a{" "}
            <a
              href="https://futurity.work"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              <Text color="grass">Software Engineer at Futurity</Text>
            </a>
            , an international AI startup providing enterprise on-premise AI
            deployments, integrations and plugins for clients around the world.
            <div className="text-palette-gray-100 animate-slideInUp text-left mt-5 leading-relaxed">
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
