"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  InstagramLogoIcon,
  HamburgerMenuIcon,
  Cross1Icon,
} from "@radix-ui/react-icons";

export const navigationItems = [
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "Contact",
    href: "/contact",
  },
  {
    title: "C-Net",
    href: "/cnet",
    isSpecial: true,
  },
];

//perhaps shift to radix theme if this gets annoying
const Seperator = () => <div className="h-4 w-px bg-gray-400/50 mx-2" />;

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        menuRef.current &&
        !menuRef.current.contains(target) &&
        !(target as Element).closest('button[aria-label="Toggle mobile menu"]')
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      const timeoutId = setTimeout(() => {
        document.addEventListener("mousedown", handleClickOutside);
      }, 100);
      document.addEventListener("keydown", handleEscapeKey);
      document.body.style.overflow = "hidden";

      return () => {
        clearTimeout(timeoutId);
        document.removeEventListener("mousedown", handleClickOutside);
        document.removeEventListener("keydown", handleEscapeKey);
        document.body.style.overflow = "unset";
      };
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      <header className="fixed left-1/2 top-6 z-50 w-11/12 max-w-6xl -translate-x-1/2">
        <NavigationMenu.Root className="relative">
          <NavigationMenu.List className="flex items-center justify-between rounded-xl border border-palette-gray-20 bg-palette-white px-8 py-3 shadow-2xl transition-all duration-500">
            <div className="flex items-center gap-3">
              <Link
                href="/"
                className="flex items-center gap-3"
                onClick={closeMobileMenu}
              >
                <Image
                  src="/favicon.ico"
                  alt="Site icon"
                  width={28}
                  height={28}
                  className="items-center"
                />
                <span className="text-[30px] font-semibold text-palette-gray-100">
                  Martin Cam
                </span>
              </Link>
            </div>

            <div className="hidden gap-6 md:flex items-center">
              {navigationItems.map((item, index) => (
                <React.Fragment key={item.href}>
                  {item.title === "C-Net" && <Seperator />}
                  <NavigationMenu.Item>
                    <NavigationMenu.Link asChild>
                      <Link
                        href={item.href}
                        className={`group relative px-4 py-2 text-[17px] font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-palette-purple-60 focus:ring-offset-2 rounded-md ${
                          item.isSpecial
                            ? "text-palette-purple-70 bg-palette-purple-20 hover:bg-palette-purple-25 hover:text-palette-purple-80"
                            : isActive(item.href)
                              ? "text-palette-purple-60"
                              : "text-palette-gray-70 hover:text-palette-purple-60"
                        }`}
                      >
                        {item.title}
                        {!item.isSpecial && (
                          <span
                            className={`absolute bottom-0 left-0 h-0.5 bg-palette-purple-60 transition-all duration-300 ${
                              isActive(item.href)
                                ? "w-full"
                                : "w-0 group-hover:w-full"
                            }`}
                          />
                        )}
                      </Link>
                    </NavigationMenu.Link>
                  </NavigationMenu.Item>
                </React.Fragment>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-6">
              <NavigationMenu.Item>
                <NavigationMenu.Link asChild>
                  <a
                    href="https://github.com/martinlcam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center rounded-lg p-2 text-palette-gray-60 transition-all duration-200 hover:bg-palette-purple-20 hover:text-palette-purple-60 focus:outline-none focus:ring-2 focus:ring-palette-purple-60 focus:ring-offset-2"
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
                    className="flex items-center justify-center rounded-lg p-2 text-palette-gray-60 transition-all duration-200 hover:bg-palette-purple-20 hover:text-palette-purple-60 focus:outline-none focus:ring-2 focus:ring-palette-purple-60 focus:ring-offset-2"
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
                    className="flex items-center justify-center rounded-lg p-2 text-palette-gray-60 transition-all duration-200 hover:bg-palette-purple-20 hover:text-palette-purple-60 focus:outline-none focus:ring-2 focus:ring-palette-purple-60 focus:ring-offset-2"
                    aria-label="Instagram"
                  >
                    <InstagramLogoIcon className="h-6 w-6" />
                  </a>
                </NavigationMenu.Link>
              </NavigationMenu.Item>
            </div>

            <button
              className="md:hidden relative p-2.5 rounded-xl bg-palette-white hover:bg-palette-gray-10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-palette-purple-60 focus:ring-offset-2 group z-50"
              onClick={(e) => {
                e.stopPropagation();
                toggleMobileMenu();
              }}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              <div className="relative w-6 h-6 flex items-center justify-center">
                <span
                  className={`absolute block h-0.5 w-5 bg-gray-700 transition-all duration-300 ${
                    isMobileMenuOpen
                      ? "rotate-45 translate-y-0"
                      : "-translate-y-1.5"
                  }`}
                />
                <span
                  className={`absolute block h-0.5 w-5 bg-gray-700 transition-all duration-300 ${
                    isMobileMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute block h-0.5 w-5 bg-gray-700 transition-all duration-300 ${
                    isMobileMenuOpen
                      ? "-rotate-45 translate-y-0"
                      : "translate-y-1.5"
                  }`}
                />
              </div>
            </button>
          </NavigationMenu.List>

          <NavigationMenu.Viewport className="absolute left-0 top-full mt-2 w-full data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight" />
        </NavigationMenu.Root>
      </header>

      <div
        ref={menuRef}
        className={`fixed left-1/2 top-24 z-40 w-11/12 max-w-6xl -translate-x-1/2 rounded-lg border border-palette-gray-20 bg-palette-white shadow-2xl md:hidden transition-all duration-300 ease-out ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
            : "opacity-0 -translate-y-4 scale-95 pointer-events-none"
        }`}
      >
        <div className="flex flex-col p-4 space-y-3">
          {navigationItems.map((item, index) => (
            <React.Fragment key={item.href}>
              {item.title === "C-Net" && (
                <div className="flex items-center justify-center py-2">
                  <div className="h-px w-full bg-palette-gray-30" />
                </div>
              )}
              <Link
                href={item.href}
                className={`px-4 py-3 text-[17px] font-medium rounded-md transition-colors duration-200 ${
                  item.isSpecial
                    ? "text-palette-purple-70 bg-palette-purple-20 hover:bg-palette-purple-25 hover:text-palette-purple-80 text-center"
                    : isActive(item.href)
                      ? "text-palette-purple-60 bg-palette-purple-15"
                      : "text-palette-gray-70 hover:text-palette-purple-60 hover:bg-palette-purple-15"
                }`}
                onClick={closeMobileMenu}
              >
                {item.title}
              </Link>
            </React.Fragment>
          ))}
          <div className="flex items-center justify-center gap-6 pt-4 border-t border-palette-gray-30">
            <a
              href="https://github.com/martinlcam"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-lg p-3 text-palette-gray-60 hover:bg-palette-purple-20 hover:text-palette-purple-60 transition-all duration-200"
              aria-label="GitHub"
              onClick={closeMobileMenu}
            >
              <GitHubLogoIcon className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/martin-cam-542909295"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-lg p-3 text-palette-gray-60 hover:bg-palette-purple-20 hover:text-palette-purple-60 transition-all duration-200"
              aria-label="LinkedIn"
              onClick={closeMobileMenu}
            >
              <LinkedInLogoIcon className="h-6 w-6" />
            </a>
            <a
              href="https://www.instagram.com/_martincam_/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-lg p-3 text-palette-gray-60 hover:bg-palette-purple-20 hover:text-palette-purple-60 transition-all duration-200"
              aria-label="Instagram"
              onClick={closeMobileMenu}
            >
              <InstagramLogoIcon className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-30 bg-palette-gray-100/20 md:hidden transition-opacity duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMobileMenu}
      />
    </>
  );
}
