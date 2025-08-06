"use client"

import { cn } from "@/lib/utils"

const skills = [
  "Usability Testing",
  "UI & Visual Design",
  "Design System",
  "Interaction Design",
  "Product Strategy",
  "User Research",
  "Prototyping",
  "Branding",
  "Web Design",
  "Mobile Design",
]

export default function DabbleSection({ isDarkMode }: { isDarkMode: boolean }) {
  return (
    <section className={cn("py-16 px-4 sm:px-6 lg:px-8", isDarkMode ? "bg-transparent" : "bg-gray-50")}>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-8">
        {/* Left Card: Everything I Dabble In */}
        <div
          className={cn(
            "relative flex flex-col items-center justify-center p-8 sm:p-12 lg:p-16 rounded-2xl border-2 group transition-all duration-300 ease-in-out hover:scale-[1.01] hover:shadow-xl hover:border-yellow-400 text-black bg-black",
            "bg-black border-gray-800 text-white", // Always black background with white text
            "w-full lg:w-1/2 h-[300px] sm:h-[400px] overflow-hidden",
          )}
        >
          {/* Plus signs */}
          <div className="absolute top-4 left-4 text-gray-600 text-xl font-light">+</div>
          <div className="absolute top-8 right-8 text-gray-600 text-xl font-light">+</div>
          <div className="absolute bottom-4 left-1/4 text-gray-600 text-xl font-light">+</div>
          <div className="absolute bottom-8 right-1/3 text-gray-600 text-xl font-light">+</div>

          {/* Twinkling Stars */}
          <div
            className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full shadow-white-glow animate-twinkle"
            style={{ animationDelay: "0s" }}
          ></div>
          <div
            className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-white rounded-full shadow-white-glow animate-twinkle"
            style={{ animationDelay: "0.5s" }}
          ></div>
          <div
            className="absolute bottom-1/4 left-1/3 w-2.5 h-2.5 bg-white rounded-full shadow-white-glow animate-twinkle"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-white rounded-full shadow-white-glow animate-twinkle"
            style={{ animationDelay: "1.5s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-white rounded-full shadow-white-glow animate-twinkle"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-1/5 left-3/4 w-2 h-2 bg-white rounded-full shadow-white-glow animate-twinkle"
            style={{ animationDelay: "2.5s" }}
          ></div>
          <div
            className="absolute bottom-1/5 right-1/5 w-1 h-1 bg-white rounded-full shadow-white-glow animate-twinkle"
            style={{ animationDelay: "3s" }}
          ></div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center leading-tight">
            Where My <br /> Curiosity Leads
          </h2>
        </div>

        {/* Scroll Bar (Visual only) */}
        <div
          className={cn(
            "hidden lg:flex flex-col justify-between h-[300px] sm:h-[400px] w-2 rounded-full",
            isDarkMode ? "bg-gray-800" : "bg-gray-200",
          )}
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className={cn("h-2 w-1.5 rounded-full mx-auto", isDarkMode ? "bg-gray-600" : "bg-gray-400")} />
          ))}
        </div>

        {/* Right Card: Skills List */}
        <div
          className={cn(
            "relative flex flex-col p-8 sm:p-12 lg:p-16 rounded-2xl border-2 group transition-all duration-300 ease-in-out hover:scale-[1.01] hover:shadow-xl hover:border-yellow-400",
            "bg-black border-gray-800 text-white", // Always black background with white text
            "w-full lg:w-1/2 h-[300px] sm:h-[400px] overflow-hidden",
          )}
        >
          <div className="absolute top-4 left-4 text-gray-600 text-xl font-light">+</div>
          <div className="absolute top-4 right-4 text-gray-600 text-xl font-light">+</div>
          <div className="absolute bottom-4 left-4 text-gray-600 text-xl font-light">+</div>
          <div className="absolute bottom-4 right-4 text-gray-600 text-xl font-light">+</div>

          <div className="relative h-full overflow-hidden">
            <div className="absolute inset-0 animate-scroll-skills">
              {[...skills, ...skills].map((skill, index) => (
                <div
                  key={index}
                  className="h-[60px] flex items-center justify-center text-xl sm:text-2xl font-medium py-2 border-b border-gray-700/50 last:border-b-0"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
