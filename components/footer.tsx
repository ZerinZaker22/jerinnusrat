import Link from "next/link"
import { Linkedin, Instagram, FileText, Facebook } from 'lucide-react'
import { cn } from "@/lib/utils"

interface FooterProps {
isDarkMode?: boolean
}

export default function Footer({ isDarkMode = true }: FooterProps) {
// Default to dark mode
const bgColorClass = isDarkMode ? "bg-black" : "bg-white"
const textColorClass = isDarkMode ? "text-white" : "text-black"
const linkHoverClass = isDarkMode ? "hover:text-gray-300 hover:bg-gray-800" : "hover:text-gray-700 hover:bg-gray-100"
const resumeBorderClass = isDarkMode
  ? "border-gray-600 hover:border-gray-500"
  : "border-gray-300 hover:border-gray-400"

return (
  <footer className={cn("py-8 px-8", bgColorClass, textColorClass)}>
    <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-0">
      {/* Left side - Thanks message */}
      <div className="flex items-center space-x-2">
        <span className="text-base sm:text-lg font-medium">thanks for stopping by</span>
        <span className="text-base sm:text-lg">☺</span>
      </div>

      {/* Right side - Contact info */}
      <div className="text-center sm:text-right">
        <div className="mb-3 text-xs font-extralight">
          {
            "Big ideas? Just curious? I’d love to hear from you. Whether it’s a collaboration or a quick chat, I'm just one message away. 👇😇"
          }
        </div>
        <div className="flex items-center justify-center sm:justify-end space-x-4">
          <Link
            href="https://www.linkedin.com/in/jerin-nusrat-345807194/"
            target="_blank"
            rel="noopener noreferrer"
            className={cn("p-2 rounded-lg transition-colors", textColorClass, linkHoverClass)}
          >
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link
            href="https://www.facebook.com/jazzjerin108"
            target="_blank"
            rel="noopener noreferrer"
            className={cn("p-2 rounded-lg transition-colors", textColorClass, linkHoverClass)}
          >
            <Facebook className="h-5 w-5" />
          </Link>
          <Link
            href="https://www.instagram.com/jerinnusratt/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className={cn("p-2 rounded-lg transition-colors", textColorClass, linkHoverClass)}
          >
            <Instagram className="h-5 w-5" />
          </Link>
          <Link
            href="https://drive.google.com/file/d/184cU2APscBD7YZrxGldovdjonpELex0t/view"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "flex items-center space-x-2 p-2 rounded-lg transition-colors border",
              textColorClass,
              linkHoverClass,
              resumeBorderClass,
            )}
          >
            <FileText className="h-5 w-5" />
            <span className="text-sm font-medium">Resume</span>
          </Link>
        </div>
      </div>
    </div>
  </footer>
)
}
