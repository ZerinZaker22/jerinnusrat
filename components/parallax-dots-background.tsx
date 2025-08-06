"use client"

import { useEffect, useState, useRef } from "react"
import { cn } from "@/lib/utils"

interface Dot {
  id: string
  size: number
  top: number
  left: number
  parallaxStrength: number
}

export default function ParallaxDotsBackground() {
  const [dots, setDots] = useState<Dot[]>([])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const generateDots = () => {
      const newDots: Dot[] = []
      const numberOfDots = 500 // Adjust as needed for density

      for (let i = 0; i < numberOfDots; i++) {
        newDots.push({
          id: `dot-${i}`,
          size: Math.random() * 1.5 + 0.5, // 0.5px to 2px
          top: Math.random() * 100, // %
          left: Math.random() * 100, // %
          parallaxStrength: Math.random() * 0.08 + 0.02, // 0.01 to 0.06
        })
      }
      setDots(newDots)
    }

    generateDots()
  }, [])

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const x = event.clientX - rect.left // X position within the element.
        const y = event.clientY - rect.top // Y position within the element.

        setMousePosition({ x, y })
      }
    }

    const currentContainer = containerRef.current
    if (currentContainer) {
      currentContainer.addEventListener("mousemove", handleMouseMove)
    }

    return () => {
      if (currentContainer) {
        currentContainer.removeEventListener("mousemove", handleMouseMove)
      }
    }
  }, [])

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      {dots.map((dot) => {
        const translateX = (mousePosition.x - (containerRef.current?.offsetWidth || 0) / 2) * dot.parallaxStrength
        const translateY = (mousePosition.y - (containerRef.current?.offsetHeight || 0) / 2) * dot.parallaxStrength

        return (
          <div
            key={dot.id}
            className={cn("absolute bg-gray-400 rounded-full opacity-70")}
            style={{
              width: `${dot.size}px`,
              height: `${dot.size}px`,
              top: `${dot.top}%`,
              left: `${dot.left}%`,
              transform: `translate(${translateX}px, ${translateY}px)`,
              transition: "transform 0.1s ease-out", // Smooth movement
            }}
          />
        )
      })}
    </div>
  )
}
