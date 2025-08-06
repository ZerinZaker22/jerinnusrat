import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface PortfolioItemProps {
imageUrl: string
title: string
description: string
year: string
link: string
}

export default function PortfolioItem({ imageUrl, title, description, year, link }: PortfolioItemProps) {
const isVideo = imageUrl.endsWith(".mp4") || imageUrl.endsWith(".webm") || imageUrl.endsWith(".ogg")

return (
  <Link href={link} className="block group" data-cursor-view="true">
    <div
      className="relative w-full h-64 sm:h-80 lg:h-96 overflow-hidden mb-6 mt-8"
      style={{
        borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%", // Organic blob-like border-radius
        transform: "rotate(-3deg)", // Slight rotation for more organic feel
      }}
    >
      {isVideo ? (
        <video
          src={imageUrl}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          fill
          style={{ objectFit: "cover", transform: "rotate(3deg) scale(1.05)" }} // Counter-rotate and slightly scale image
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      )}
    </div>
    <h3 className="text-xl font-semibold text-white group-hover:text-yellow-400 transition-colors duration-200">
      {title}
    </h3>
    <div className="w-full border-b border-gray-700 my-2"></div> {/* Thin line */}
    <div className="flex items-center mt-2">
      <p className="text-sm text-gray-400">{description}</p>
      <span className="mx-2 text-gray-600">•</span>
      <p className="text-sm text-gray-400">{year}</p>
    </div>
  </Link>
)
}
