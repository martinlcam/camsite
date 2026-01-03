"use client";

import GridBackground from "../components/GridBackground/GridBackground";
import Header from "../components/Header/header";

export default function About() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="fixed inset-0 z-0">
        <GridBackground />
      </div>

      <div className="relative z-30">
        <Header />
      </div>

      <div className="relative z-20 min-h-screen pt-32 pb-20 px-4 sm:px-8 md:px-16 lg:px-24 animate-pageFadeIn">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-palette-gray-100 mb-4 animate-slideInUp">
              About Me
            </h1>
            <div className="w-24 h-1 bg-palette-purple-60 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-palette-white rounded-2xl p-8 shadow-xl border border-palette-gray-20 hover:shadow-2xl transition-all duration-300">
                <h2 className="text-3xl font-bold text-palette-gray-100 mb-4">
                  Bio
                </h2>
                <div className="space-y-4 text-palette-gray-70 leading-relaxed">
                  <p className="text-lg"></p>
                </div>
              </div>

              <div className="bg-palette-white rounded-2xl p-8 shadow-xl border border-palette-gray-20 hover:shadow-2xl transition-all duration-300">
                <h2 className="text-3xl font-bold text-palette-gray-100 mb-6">
                  Skills
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4"></div>
              </div>
            </div>

            <div className="space-y-8">
              {/* <div className="bg-palette-white rounded-2xl p-6 shadow-xl border border-palette-purple-30">
                <h3 className="text-xl font-bold text-palette-gray-100 mb-4">Quick Facts</h3>
                <div className="space-y-3 text-palette-gray-70">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-palette-purple-60 rounded-full"></div>
                    <span>Location</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-palette-purple-60 rounded-full"></div>
                    <span>Age</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-palette-purple-60 rounded-full"></div>
                    <span>Role</span>
                  </div>
                </div>
              </div> */}

              {/* Experience Card */}
              <div className="bg-palette-white rounded-2xl p-6 shadow-xl border border-palette-gray-20">
                <h3 className="text-xl font-bold text-palette-gray-100 mb-4">
                  Experience
                </h3>
                <div className="space-y-4"></div>
              </div>

              <div className="bg-palette-white rounded-2xl p-6 shadow-xl border border-palette-gray-20">
                <h3 className="text-xl font-bold text-palette-gray-100 mb-4">
                  Education
                </h3>
                <div className="space-y-4"></div>
              </div>
            </div>
          </div>

          <div className="bg-palette-white rounded-2xl p-8 shadow-xl border border-palette-gray-20">
            <h2 className="text-3xl font-bold text-palette-gray-100 mb-8">
              Timeline
            </h2>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-palette-purple-30"></div>

              <div className="space-y-8">
                <div className="relative pl-12">
                  <div className="absolute left-2 top-2 w-4 h-4 bg-palette-purple-60 rounded-full border-4 border-palette-white"></div>
                  <div className="bg-palette-gray-10 rounded-lg p-4 shadow-md">
                    <div className="text-sm text-palette-purple-60 font-semibold mb-1">
                      Date
                    </div>
                    <div className="text-lg font-bold text-palette-gray-100 mb-2">
                      Event Title
                    </div>
                    <div className="text-palette-gray-70">Description</div>
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
