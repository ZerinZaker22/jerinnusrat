"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface HeaderProps {
  isDarkMode?: boolean
}

export default function Header({ isDarkMode = true }: HeaderProps) {
  // Default to dark mode
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const textColorClass = isDarkMode ? "text-white" : "text-black"
  const hoverTextColorClass = isDarkMode ? "hover:text-gray-300" : "hover:text-gray-700"

  return (
    <nav
      className={cn(
        "flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 sm:py-6 relative z-50",
        isDarkMode ? "bg-black" : "bg-white",
      )}
    >
      {/* Logo/Name */}
      <Link
        href="/"
        className={cn(
          "relative flex items-center text-lg sm:text-xl font-medium overflow-hidden h-6 sm:h-7 lg:h-8",
          textColorClass,
        )}
      >
        <span className="transition-all duration-300 ease-in-out opacity-100 scale-100">JN.</span>
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center space-x-4 sm:space-x-6 lg:space-x-8">
        <Link
          href="#featured-projects"
          className={cn("text-sm sm:text-base font-medium transition-colors", textColorClass, hoverTextColorClass)}
        >
          Work
        </Link>
        <Link
          href="/about"
          className={cn("text-sm sm:text-base font-medium transition-colors", textColorClass, hoverTextColorClass)}
        >
          About
        </Link>
        <Link
          href="https://www.linkedin.com/in/jerin-nusrat-345807194/"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "hidden sm:block text-sm sm:text-base font-medium transition-colors",
            textColorClass,
            hoverTextColorClass,
          )}
        >
          LinkedIn
        </Link>
      </div>
    </nav>
  )
}
