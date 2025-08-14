"use client"
import Image from "next/image"
import Footer from "@/components/footer"
import DabbleSection from "@/components/dabble-section"
import Header from "@/components/header"
import Link from "next/link" // Import Link for the CTA button
import { Linkedin, Instagram, FileText, Facebook } from 'lucide-react' // Import icons for social links
import PortfolioItem from "@/components/portfolio-item" // Import the new PortfolioItem component

export default function Portfolio() {
return (
<div
className={`min-h-screen transition-colors duration-300 bg-transparent text-white`}
style={{ scrollBehavior: "smooth" }}
>
{/* Navigation Header */}
<Header isDarkMode={true} />
{/* Hero Section - New Design */}
<main
className={`relative py-16 sm:py-24 lg:py-32 min-h-[calc(100vh-80px)] flex items-center justify-center bg-transparent`}
>
{/* Content Wrapper */}
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
    {/* Left Column: Main Text, Description, Social Links, CTA */}
    <div className="text-white text-center lg:text-left">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
        <span className="inline-block mr-2 text-4xl sm:text-5xl lg:text-6xl">👋</span> Hi there! I'm{" "}
        <span
          className="font-bold"
          style={{
            background: "linear-gradient(45deg, #00f5ff, #ff00ff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Jerin Nusrat
        </span>
        .
      </h1>
      <p className="mt-4 text-xl sm:text-2xl leading-relaxed mb-8 lg:text-2xl">
        I craft ✨ digital products that empower people and drive business growth. 👩‍💻
      </p>

      {/* Social Links */}
      <div className="flex items-center justify-center lg:justify-start space-x-4 mb-8">
        <Link
          href="https://www.linkedin.com/in/jerin-nusrat-345807194/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg transition-colors hover:text-gray-300 hover:bg-gray-800"
          data-cursor-view="true"
        >
          <Linkedin className="h-6 w-6" />
        </Link>
        <Link
          href="https://www.facebook.com/jazzjerin108"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg transition-colors hover:text-gray-300 hover:bg-gray-800"
          data-cursor-view="true"
        >
          <Facebook className="h-6 w-6" />
        </Link>
        <Link
          href="https://www.instagram.com/jerinnusratt/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg transition-colors hover:text-gray-300 hover:bg-gray-800"
          data-cursor-view="true"
        >
          <Instagram className="h-6 w-6" />
        </Link>
        <Link
          href="https://drive.google.com/file/d/184cU2APscBD7YZrxGldovdjonpELex0t/view"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 p-2 rounded-lg transition-colors border border-gray-600 hover:border-gray-500 hover:bg-gray-800"
          data-cursor-view="true"
        >
          <FileText className="h-6 w-6" />
          <span className="text-base font-medium">Resume</span>
        </Link>
      </div>

      {/* Call-to-Action Button */}
      <Link
        href="#featured-projects"
        className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-yellow-400 hover:bg-yellow-300 transition-colors duration-300 shadow-lg"
        data-cursor-view="true"
      >
        View My Work
      </Link>
    </div>

    {/* Right Column: Illustration Image */}
    <div className="flex justify-center items-center py-8 lg:py-0">
      <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white shadow-lg">
        <Image
          src="/images/jerin-nusrat-profile.png"
          alt="Jerin Nusrat Profile Picture"
          fill
          style={{ objectFit: "cover" }}
          className="object-cover"
        />
      </div>
    </div>
  </div>
</div>
</main>
{/* Featured Projects Section */}
<section id="featured-projects" className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
{/* Topographic Background */}
<div
  className="absolute inset-0 z-0"
  style={{
    backgroundImage: "url('/images/topographic-pattern-dark.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    opacity: 0.3, // Adjust opacity to be subtle
  }}
></div>

<h2
  className={`font-extrabold leading-tight tracking-super-wide text-left mb-40 sm:mb-48 lg:mb-56 text-gray-600 relative z-10 px-4 sm:px-6 lg:px-8`}
  style={{
    fontFamily: "'Inter', sans-serif",
    WebkitFontSmoothing: "antialiased",
    fontSize: "clamp(2.5rem, 8vw, 5.5rem)",
    fontStyle: "normal",
    fontWeight: 800,
    lineHeight: "1.2",
    letterSpacing: "0em",
    wordSpacing: "0.1em", // Added this line
    textAlign: "left",
    margin: 0,
  }}
>
  Projects I'm Proud of..
</h2>

{/* Projects Container - changed to grid */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 relative z-10 px-4 sm:px-6 lg:px-8">
  {/* Helios Project */}
  <PortfolioItem
    title="Helios"
    description="Building a community of entrepreneurship and talent."
    imageUrl="https://gracemmaa.com/images/helios1.png"
    link="/helios"
    year="2022"
  />

  {/* Farm Swarming Project */}
  <PortfolioItem
    title="Farm Swarming"
    description="Born from necessity, built for community."
    imageUrl="https://www.ngan-nguyen.com/images/FS-8-min-min.gif"
    link="/farm-swarming"
    year="2020"
  />

  {/* Break the Ice Project */}
  <PortfolioItem
    title="Break the Ice"
    description="An app to help students make friends by utilizing the sociology concept of 'third places'."
    imageUrl="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tVFDyzePVmrAeePOwcPlKzN8POStPX.png"
    link="/break-the-ice"
    year="2021"
  />

  {/* Schoolhouse.world User Dashboard Project */}
  <PortfolioItem
    title="Schoolhouse.world User Dashboard"
    description="Advance learning and tutoring experience."
    imageUrl="https://christy-hu.com/images/graphic/shw/prototype.gif"
    link="/schoolhouse"
    year="2024"
  />

  {/* CRED Project */}
  <PortfolioItem
    title="CRED"
    description="A case study on enhancing the user experience for a financial app."
    imageUrl="https://framerusercontent.com/assets/bGQbVffkFOkMoDMchrd0EXiO2BU.mp4"
    link="/cred"
    year="2024"
  />

  {/* Daylight Health Project */}
  <PortfolioItem
    title="Daylight Health"
    description="Designing a user-friendly platform to empower individuals in managing their health and wellness."
    imageUrl="https://framerusercontent.com/assets/K9URv2KLrIP6TVfxw5v3pfc8Xc.mp4"
    link="/daylight-health"
    year="2025"
  />
</div>
</section>
{/* New Dabble Section */}
<DabbleSection isDarkMode={true} />
{/* Footer */}
<Footer isDarkMode={true} />
</div>
)
}
