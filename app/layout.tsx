import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import CustomCursor from "@/components/custom-cursor" // Import the CustomCursor component

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Jerin Nusrat - UI/UX Designer & Brand Designer",
  description:
    "Portfolio of Jerin Nusrat, a multidisciplinary designer specializing in UI/UX, product design, and brand design.",
  keywords: "UI/UX Designer, Brand Designer, Product Designer, Portfolio, Jerin Nusrat",
  authors: [{ name: "Jerin Nusrat" }],
  creator: "Jerin Nusrat",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jerin-nusrat.vercel.app",
    title: "Jerin Nusrat - UI/UX Designer & Brand Designer",
    description:
      "Portfolio of Jerin Nusrat, a multidisciplinary designer specializing in UI/UX, product design, and brand design.",
    siteName: "Jerin Nusrat Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jerin Nusrat - UI/UX Designer & Brand Designer",
    description:
      "Portfolio of Jerin Nusrat, a multidisciplinary designer specializing in UI/UX, product design, and brand design.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <CustomCursor /> {/* Add the CustomCursor component here */}
      </body>
    </html>
  )
}
