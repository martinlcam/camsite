"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { GitHubLogoIcon, LinkedInLogoIcon, InstagramLogoIcon, HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";

export const navigationItems = [
    {
        title: "About",
        href: "about",
    },
    {
        title: "Projects",
        href: "projects",
    },
    {
        title: "Contact",
        href: "contact",
    },
    {
        title: "C-Net",
        href: "cnet",
        isSpecial: true, 
    }
];

// Divider component
const Divider = () => (
    <div className="h-4 w-px bg-gray-400/50 mx-2" />
);

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="fixed left-1/2 top-6 z-50 w-11/12 max-w-6xl -translate-x-1/2">
            <NavigationMenu.Root className="relative">
                <NavigationMenu.List className="flex items-center justify-between rounded-xl border border-white/20 bg-white/30 px-8 py-3 shadow-2xl backdrop-blur-2xl transition-all duration-500">
                    {/* Logo and Name */}
                    <div className="flex items-center gap-3">
                        <Link href="/" className="flex items-center gap-3">
                            <Image
                                src="/favicon.ico"
                                alt="Site icon"
                                width={28}
                                height={28}
                                className="items-center"
                            />
                            <span className="text-[30px] font-semibold text-gray-900">Martin Cam</span>
                        </Link>
                    </div>

                    {/* Desktop Navigation Items */}
                    <div className="hidden gap-6 md:flex items-center">
                        {navigationItems.map((item, index) => (
                            <React.Fragment key={item.href}>
                                {item.title === "C-Net" && <Divider />}
                                <NavigationMenu.Item>
                                    <NavigationMenu.Link asChild>
                                        <Link
                                            href={item.href}
                                            className={`group relative px-4 py-2 text-[17px] font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 rounded-md ${
                                                item.isSpecial 
                                                    ? 'text-purple-700 bg-purple-100/50 hover:bg-purple-200/50 hover:text-purple-800' 
                                                    : 'text-gray-700 hover:text-purple-700'
                                            }`}
                                        >
                                            {item.title}
                                            {!item.isSpecial && (
                                                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
                                            )}
                                        </Link>
                                    </NavigationMenu.Link>
                                </NavigationMenu.Item>
                            </React.Fragment>
                        ))}
                    </div>

                    {/* Social Media Icons */}
                    <div className="hidden md:flex items-center gap-6">
                        <NavigationMenu.Item>
                            <NavigationMenu.Link asChild>
                                <a
                                    href="https://github.com/martinlcam"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center rounded-lg p-2 text-gray-600 transition-all duration-200 hover:bg-purple-100 hover:text-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                                    aria-label="GitHub"
                                >
                                    <GitHubLogoIcon className="h-6 w-6" />
                                </a>
                            </NavigationMenu.Link>
                        </NavigationMenu.Item>

                        <NavigationMenu.Item>
                            <NavigationMenu.Link asChild>
                                <a
                                    href="https://www.linkedin.com/in/martin-cam-542909295"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center rounded-lg p-2 text-gray-600 transition-all duration-200 hover:bg-purple-100 hover:text-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                                    aria-label="LinkedIn"
                                >
                                    <LinkedInLogoIcon className="h-6 w-6" />
                                </a>
                            </NavigationMenu.Link>
                        </NavigationMenu.Item>

                        <NavigationMenu.Item>
                            <NavigationMenu.Link asChild>
                                <a
                                    href="https://www.instagram.com/_martincam_/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center rounded-lg p-2 text-gray-600 transition-all duration-200 hover:bg-purple-100 hover:text-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                                    aria-label="Instagram"
                                >
                                    <InstagramLogoIcon className="h-6 w-6" />
                                </a>
                            </NavigationMenu.Link>
                        </NavigationMenu.Item>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-gray-600 hover:text-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 rounded-lg"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle mobile menu"
                    >
                        {isMobileMenuOpen ? (
                            <Cross1Icon className="h-6 w-6" />
                        ) : (
                            <HamburgerMenuIcon className="h-6 w-6" />
                        )}
                    </button>
                </NavigationMenu.List>

                {/* Mobile Menu Dropdown */}
                {isMobileMenuOpen && (
                    <div className="absolute left-0 top-full mt-2 w-full rounded-lg border border-white/20 bg-white/30 backdrop-blur-2xl shadow-2xl md:hidden">
                        <div className="flex flex-col p-4 space-y-3">
                            {navigationItems.map((item, index) => (
                                <React.Fragment key={item.href}>
                                    {item.title === "C-Net" && (
                                        <div className="flex items-center justify-center py-2">
                                            <div className="h-px w-full bg-gray-400/50" />
                                        </div>
                                    )}
                                    <Link
                                        href={item.href}
                                        className={`px-4 py-2 text-[17px] font-medium rounded-md transition-colors duration-200 ${
                                            item.isSpecial
                                                ? 'text-purple-700 bg-purple-100/50 hover:bg-purple-200/50 hover:text-purple-800 text-center'
                                                : 'text-gray-700 hover:text-purple-700 hover:bg-purple-50'
                                        }`}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {item.title}
                                    </Link>
                                </React.Fragment>
                            ))}
                            <div className="flex items-center gap-4 pt-2 border-t border-white/20">
                                <a
                                    href="https://github.com/martinlcam"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center rounded-lg p-2 text-gray-600 hover:bg-purple-100 hover:text-purple-700 transition-all duration-200"
                                    aria-label="GitHub"
                                >
                                    <GitHubLogoIcon className="h-5 w-5" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/martin-cam-542909295"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center rounded-lg p-2 text-gray-600 hover:bg-purple-100 hover:text-purple-700 transition-all duration-200"
                                    aria-label="LinkedIn"
                                >
                                    <LinkedInLogoIcon className="h-5 w-5" />
                                </a>
                                <a
                                    href="https://www.instagram.com/_martincam_/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center rounded-lg p-2 text-gray-600 hover:bg-purple-100 hover:text-purple-700 transition-all duration-200"
                                    aria-label="Instagram"
                                >
                                    <InstagramLogoIcon className="h-5 w-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                )}

                {/* Desktop Navigation Viewport */}
                <NavigationMenu.Viewport className="absolute left-0 top-full mt-2 w-full data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight" />
            </NavigationMenu.Root>
        </header>
    );
}
