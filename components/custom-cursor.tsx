"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { Eye } from "lucide-react"
import { cn } from "@/lib/utils"

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 })
  const smoothedMousePosition = useRef({ x: -100, y: -100 })
  const [isVisible, setIsVisible] = useState(false)
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false)
  const animationFrameId = useRef<number | null>(null)

  const smoothSpeed = 0.15 // Controls how smoothly the cursor follows the mouse

  const animateCursor = useCallback(() => {
    smoothedMousePosition.current.x += (mousePosition.x - smoothedMousePosition.current.x) * smoothSpeed
    smoothedMousePosition.current.y += (mousePosition.y - smoothedMousePosition.current.y) * smoothSpeed

    if (animationFrameId.current) {
      animationFrameId.current = requestAnimationFrame(animateCursor)
    }
  }, [mousePosition, smoothSpeed])

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY })

      // Check if the target element or any of its parents have the data-cursor-view attribute
      let targetElement: HTMLElement | null = event.target as HTMLElement
      let foundInteractive = false
      while (targetElement && targetElement !== document.body) {
        if (targetElement.dataset.cursorView === "true") {
          foundInteractive = true
          break
        }
        targetElement = targetElement.parentElement
      }
      setIsHoveringInteractive(foundInteractive)
      setIsVisible(foundInteractive) // Cursor is visible only when hovering interactive elements
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
      setIsHoveringInteractive(false)
    }

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseleave", handleMouseLeave)

    animationFrameId.current = requestAnimationFrame(animateCursor)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseleave", handleMouseLeave)
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }
    }
  }, [mousePosition, animateCursor])

  // Hide default cursor when custom cursor is active
  useEffect(() => {
    if (isHoveringInteractive) {
      document.body.style.cursor = "none"
    } else {
      document.body.style.cursor = "default"
    }
    return () => {
      document.body.style.cursor = "default" // Clean up on unmount
    }
  }, [isHoveringInteractive])

  return (
    <div
      className={cn(
        "fixed z-[9999] pointer-events-none transition-opacity duration-300 ease-out",
        "hidden md:flex items-center justify-center flex-col", // Hidden on mobile, flex on desktop
        "bg-black rounded-full",
        isVisible ? "opacity-100" : "opacity-0",
        isHoveringInteractive ? "scale-100 w-20 h-20" : "scale-0 w-0 h-0", // Scale effect when active
      )}
      style={{
        left: smoothedMousePosition.current.x,
        top: smoothedMousePosition.current.y,
        transform: `translate(-50%, -50%)`, // Center the cursor on the mouse
      }}
    >
      <Eye className="w-8 h-8 text-white mb-1" />
      <span className="text-white text-sm font-medium tracking-wide">view</span>
    </div>
  )
}
