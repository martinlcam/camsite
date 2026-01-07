"use client";

import { useEffect, useRef, useState } from "react";
import { animate, svg } from "animejs";
import * as simpleIcons from "simple-icons";

const techIcons = [
  { name: "TypeScript", slug: "typescript", color: "text-palette-blue-70", bg: "bg-palette-blue-10", border: "border-palette-blue-30" },
  { name: "React", slug: "react", color: "text-palette-blue-70", bg: "bg-palette-blue-10", border: "border-palette-blue-30" },
  { name: "Next.js", slug: "nextdotjs", color: "text-palette-gray-100", bg: "bg-palette-gray-10", border: "border-palette-gray-30" },
  { name: "Tailwind", slug: "tailwindcss", color: "text-palette-blue-70", bg: "bg-palette-blue-10", border: "border-palette-blue-30" },
  { name: "Express", slug: "express", color: "text-palette-gray-100", bg: "bg-palette-gray-10", border: "border-palette-gray-30" },
  { name: "Drizzle", slug: "drizzle", color: "text-palette-purple-60", bg: "bg-palette-purple-10", border: "border-palette-purple-30" },
  { name: "PostgreSQL", slug: "postgresql", color: "text-palette-blue-70", bg: "bg-palette-blue-10", border: "border-palette-blue-30" },
  { name: "Docker", slug: "docker", color: "text-palette-blue-70", bg: "bg-palette-blue-10", border: "border-palette-blue-30" },
];

export default function MorphingTechIcon() {
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const hiddenIconsRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const animationRef = useRef<any>(null);
  const currentPathIndexRef = useRef(0);

  useEffect(() => {
    if (!svgRef.current || !pathRef.current) return;

    const getIconPaths = (): string[] => {
      const paths: string[] = [];
      
      techIcons.forEach((tech) => {
        const slug = tech.slug;
        const iconKey = `si${slug.charAt(0).toUpperCase() + slug.slice(1)}` as keyof typeof simpleIcons;
        const icon = simpleIcons[iconKey];
        
        if (icon && icon.path) {
          paths.push(icon.path);
        } else {
          console.warn(`Icon not found for slug: ${tech.slug}, key: ${iconKey}`);
        }
      });
      
      return paths;
    };

    const iconPaths = getIconPaths();
    
    if (iconPaths.length === 0) {
      console.warn("No icon paths found");
      return;
    }

    const initializePaths = () => {
      const validPaths = iconPaths.filter(p => p && p.trim());
      if (validPaths.length > 0 && pathRef.current) {
        pathRef.current.setAttribute("d", validPaths[0]);
        currentPathIndexRef.current = 0;
        setCurrentIndex(0);
      }
    };

    initializePaths();

    const morphToNext = () => {
      if (iconPaths.length === 0 || !pathRef.current) {
        setTimeout(morphToNext, 200);
        return;
      }

      const nextIndex = (currentPathIndexRef.current + 1) % iconPaths.length;
      const targetPath = iconPaths[nextIndex];
      const currentPath = iconPaths[currentPathIndexRef.current];

      if (!targetPath || !currentPath) {
        setTimeout(morphToNext, 100);
        return;
      }

      const currentPathData = pathRef.current.getAttribute("d") || currentPath;
      if (!currentPathData || currentPathData.trim() === "") {
        pathRef.current.setAttribute("d", currentPath);
      }

      setCurrentIndex(nextIndex);

      if (animationRef.current) {
        animationRef.current.pause();
        animationRef.current = null;
      }

      const targetElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
      targetElement.setAttribute("d", targetPath);

      try {
        if (svg && typeof svg.morphTo === 'function') {
          const morphFn = svg.morphTo(targetElement, 1);
          if (typeof morphFn === 'function') {
            animationRef.current = animate(pathRef.current, {
              d: morphFn,
              duration: 800,
              easing: "easeInOutQuad",
              complete: () => {
                currentPathIndexRef.current = nextIndex;
                setTimeout(morphToNext, 1500);
              },
            });
            return;
          }
        }
      } catch (error) {
        console.error("Morph animation error:", error);
      }

      pathRef.current.setAttribute("d", targetPath);
      currentPathIndexRef.current = nextIndex;
      setTimeout(morphToNext, 1500);
    };

    setTimeout(() => {
      morphToNext();
    }, 1000);

    return () => {
      if (animationRef.current) {
        animationRef.current.pause();
      }
    };
  }, []);

  const currentTech = techIcons[currentIndex];

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32">
        <div
          ref={containerRef}
          className={`w-full h-full rounded-[12px] ${currentTech.bg} border ${currentTech.border} flex items-center justify-center transition-all duration-500`}
        >
          <svg
            ref={svgRef}
            viewBox="0 0 24 24"
            className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 ${currentTech.color} transition-colors duration-500`}
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
          >
            <path ref={pathRef} fill="currentColor" />
          </svg>
        </div>
      </div>
      <div className="text-center">
        <div className="text-sm sm:text-base text-palette-gray-50 mb-1">Tech Stack</div>
        <div className={`text-lg sm:text-xl font-semibold ${currentTech.color} transition-colors duration-500`}>
          {currentTech.name}
        </div>
      </div>

    </div>
  );
}

