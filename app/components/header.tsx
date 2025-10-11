"use client";

import Image from "next/image";
import Link from "next/link";

export const navigationItems = [
  {
    title: "./about",
    href: "",
  },
  {
    title: "./projects",
    href: "",
  },
  {
    title: "./contact",
    href: "",
  }
];

export default function Header() {
  return (
    <nav
      className="fixed left-1/2 top-6 z-50 flex w-11/12 max-w-3xl -translate-x-1/2 flex-col items-center rounded-full border border-white/10 bg-white/70 px-8 py-3 shadow-lg backdrop-blur-lg"
    >
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/">
            <Image
              src="/favicon.ico"
              alt="Site icon"
              width={28}
              height={28}
              className="inline-block mr-2"
            />
          </Link>

          <span className="text-[30px] font-bold text-black">Martin Cam</span>
          <div className="hidden gap-6 md:flex ml-6">
            {navigationItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-[17px] font-medium hover:underline">
                {item.title}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex gap-4 items-center ml-auto">
          <button className="text-[17px] px-5 py-2 bg-[#0052ff] text-white rounded-full shadow hover:bg-[#47618a] transition" type="button">
            Pricing
          </button>
        </div>
        
      </div>
    </nav>
  );
}
