"use client";

// unused for now
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex justify-center w-full absolute top-6 z-50">
      <header className="bg-white/70 backdrop-blur-lg rounded-full shadow-lg border border-white/10 px-8 py-3 flex items-center gap-10 max-w-3xl w-[90vw]">
        <div className="text-[22px] font-bold text-[#0052ff] flex items-center gap-2">
          <img
            src="/favicon.ico"
            alt="Site icon"
            className="inline-block w-7 h-7 mr-2"
          />
          Martin Cam
        </div>
        <nav className="flex gap-8 items-center ml-auto">
          <button className="text-[17px] px-5 py-2 bg-[#0052ff] text-white rounded-full shadow hover:bg-[#47618a] transition" type="button">
            Pricing
          </button>
        </nav>
      </header>
    </div>
  );
}
