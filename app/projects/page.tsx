"use client";

import GridBackground from "../components/GridBackground/GridBackground";
import Header from "../components/Header/header";
import { useState } from "react";

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="fixed inset-0 z-0">
        <GridBackground />
      </div>

      <div className="relative z-30">
        <Header />
      </div>

      <div className="relative z-20 min-h-screen pt-32 pb-20 px-4 sm:px-8 md:px-16 lg:px-24 animate-pageFadeIn">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-palette-gray-100 mb-4 animate-slideInUp">
              Projects
            </h1>
            <div className="w-24 h-1 bg-palette-purple-60 mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((project, index) => (
              <div
                key={index}
                className="group relative bg-palette-white rounded-[12px] overflow-hidden shadow-xl border border-palette-gray-20 hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative h-48 bg-palette-blue-30 overflow-hidden">
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-gray-500 text-sm font-medium">
                      placeholder
                    </span>
                  </div>
                  <div
                    className={`absolute inset-0 bg-palette-purple-60 flex items-center justify-center transition-all duration-300 ${
                      hoveredProject === index
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                  >
                    <span className="text-white font-semibold">
                      View Project
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-palette-gray-100">
                      placeholder
                    </h3>
                    <div className="flex gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  <p className="text-palette-gray-60 text-sm mb-4 line-clamp-2">
                    placeholder
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["React", "TypeScript", "Next.js"].map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-palette-purple-20 text-palette-purple-70 text-xs rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20">
            <h2 className="text-3xl font-bold text-palette-gray-100 mb-8 text-center">
              Featured Project
            </h2>
            <div className="bg-palette-purple-15 rounded-[12px] p-8 md:p-12 shadow-2xl border border-palette-purple-20 overflow-hidden relative">
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="relative h-64 md:h-96 bg-palette-white rounded-[12px] flex items-center justify-center border-2 border-palette-gray-20">
                  <span className="text-palette-gray-50">placeholder</span>
                </div>

                <div className="space-y-6">
                  <div>
                    <span className="inline-block px-4 py-1 bg-palette-purple-60 text-palette-white text-sm font-semibold rounded-full mb-4">
                      Featured
                    </span>
                    <h3 className="text-4xl font-bold text-palette-gray-100 mb-4">
                      placeholder
                    </h3>
                    <p className="text-lg text-palette-gray-70 leading-relaxed">
                      placeholder
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {["React", "TypeScript", "Next.js", "Tailwind"].map(
                      (tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-palette-white text-palette-gray-70 rounded-[12px] text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ),
                    )}
                  </div>

                  <div className="flex gap-4">
                    <button className="px-6 py-3 bg-palette-purple-60 text-palette-white rounded-[12px] font-semibold hover:bg-palette-purple-70 transition-colors">
                      View Project
                    </button>
                    <button className="px-6 py-3 bg-palette-white text-palette-gray-70 rounded-[12px] font-semibold hover:bg-palette-gray-10 transition-colors">
                      View Code
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
