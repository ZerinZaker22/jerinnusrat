"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface Star {
  id: string
  size: number
  top: string
  left: string
  animationDelay: string
  animationDuration: string
}

export default function StarsBackground() {
  const [stars, setStars] = useState<Star[]>([])

  useEffect(() => {
    const generateStars = () => {
      const newStars: Star[] = []
      const numberOfStars = 100 // Adjust as needed

      for (let i = 0; i < numberOfStars; i++) {
        newStars.push({
          id: `star-${i}`,
          size: Math.random() * 2 + 1, // 1px to 3px
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 10}s`, // Random delay up to 10s
          animationDuration: `${Math.random() * 20 + 10}s`, // Random duration 10s to 30s
        })
      }
      setStars(newStars)
    }

    generateStars()
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className={cn(
            "absolute bg-white rounded-full opacity-0", // Start invisible, fade in
            "animate-star-move animate-star-fade",
          )}
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            top: star.top,
            left: star.left,
            animationDelay: star.animationDelay,
            animationDuration: star.animationDuration,
          }}
        />
      ))}
    </div>
  )
}
