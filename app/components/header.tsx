"use client";

import Image from "next/image";
import Link from "next/link";

export const navigationItems = [
    {
        title: "./about",
        href: "about",
    },
    {
        title: "./projects",
        href: "projects",
    },
    {
        title: "./contact",
        href: "contact",
    }
];

export default function Header() {
    return (
        <nav
            className="fixed left-1/2 top-6 z-50 flex w-11/12 max-w-3xl -translate-x-1/2 flex-col items-center
    rounded-full border border-white/20 bg-white/30 px-8 py-3
    shadow-2xl backdrop-blur-2xl transition-all duration-500"
        >
            <div className="flex w-full items-center justify-between">
                <div className="flex items-center gap-3">
                    <Link href="/">
                        <Image
                            src="/favicon.ico"
                            alt="Site icon"
                            width={28}
                            height={28}
                            className="items-center"
                        />
                    </Link>

                    <span className="text-[30px] text-black">Martin Cam</span>
                    <div className="hidden gap-6 md:flex ml-6">
                        {navigationItems.map((item) => (
                            <Link key={item.href} href={item.href} className="text-[17px] font-medium hover:underline">
                                {item.title}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="flex gap-8 items-center ml-auto">
                    <a
                        href="https://github.com/martinlcam"
                        target="_blank"
                        className="text-gray-800 hover:text-gray-600 transition-colors duration-200"
                    >
                        <img
                            src="\icons\github-142-svgrepo-com.svg"
                            alt="Github"
                            className="w-8 h-8 hover:scale-110 transition-transform"
                        />
                    </a>

                    <a
                        href="www.linkedin.com/in/martin-cam-542909295"
                        target="_blank"
                        className="text-gray-800 hover:text-gray-600 transition-colors duration-200"
                    >
                        <img
                            src="/icons/linkedin-linked-in-svgrepo-com.svg"
                            alt="LinkedIn"
                            className="w-8 h-8 hover:scale-110 transition-transform"
                        />
                    </a>

                    <a
                        href="https://www.instagram.com/_martincam_/"
                        target="_blank"
                        className="text-gray-800 hover:text-gray-600 transition-colors duration-200"
                    >
                        <img
                            src="\icons\instagram-svgrepo-com.svg"
                            alt="LinkedIn"
                            className="w-8 h-8 hover:scale-110 transition-transform"
                        />
                    </a>
                </div>

            </div>
        </nav>
    );
}
