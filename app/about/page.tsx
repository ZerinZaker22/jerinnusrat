"use client"
import Image from "next/image"
import { Target, Sparkles, User, Search } from 'lucide-react'
import Footer from "@/components/footer"
import Header from "@/components/header" // Import the new Header component
import Link from "next/link" // Import Link for the new button

export default function AboutPage() {
// isDarkMode state is no longer needed here as theme toggle is removed
// and site defaults to dark mode.

return (
  <div
    className={`min-h-screen transition-colors duration-300 bg-transparent text-white`} // Changed bg-black to bg-transparent
  >
    {/* Navigation Header */}
    <Header isDarkMode={true} /> {/* Use the new Header component */}
    {/* Main Content */}
    <main className="px-8 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h1 className={`text-8xl font-bold tracking-wider text-white`}>ABOUT ME</h1>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-32">
          {/* Photo Collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4 h-[600px]">
              {/* First photo - top left, larger */}
              <div className="relative overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg rounded-lg">
                <Image
                  src="https://i.postimg.cc/rsstQQnk/IMG-6439.png"
                  alt="Jerin Nusrat"
                  width={400}
                  height={500}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Second and third photos - right column */}
              <div className="space-y-4">
                <div className="relative overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg rounded-lg h-[290px]">
                  <Image
                    src="https://i.postimg.cc/NjMg4p1b/lightning-20786-256.gif"
                    alt="Lightning GIF"
                    width={400}
                    height={290}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="relative overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg rounded-lg h-[290px]">
                  <Image
                    src="https://i.postimg.cc/KzfkGGW0/ghost-15636-256.gif"
                    alt="Ghost GIF"
                    width={400}
                    height={290} /* Added width and height for the GIF */
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-8">
            <div className="text-xl leading-relaxed">
              <p className={`mb-6 text-white`}>
                Hi, I'm Jerin Nusrat! I'm a{" "}
                <span
                  className="font-bold"
                  style={{
                    background: "linear-gradient(45deg, #00f5ff, #ff00ff)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Versatile Designer
                </span>{" "}
                specializing in graphic, product, UI/UX, and brand design, with extensive experience leading creative
                projects that combine strategy and visual storytelling.
              </p>

              <p className={`mb-6 text-white`}>
                My passion for design goes beyond aesthetics—I'm fascinated by how thoughtful, user-centered design
                can solve problems and create meaningful experiences for both users and brands.
              </p>

              <p className={`mb-6 text-white`}>
                I spend my time exploring new design tools, conducting user research, and crafting innovative
                solutions that balance creativity with functionality.
              </p>

              <p className={`mb-6 text-white`}>
                <span
                  className="font-bold"
                  style={{
                    background: "linear-gradient(45deg, #00f5ff, #ff00ff)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  I've been shaping brands and digital experiences my entire career — even before I fully realized the
                  power of great design.
                </span>
              </p>
              {/* New Illustrations Button */}
              <div className="mt-8 text-center lg:text-left flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <Link
                  href="/illustrations"
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-yellow-400 hover:bg-yellow-300 transition-colors duration-300 shadow-lg"
                  data-cursor-view="true"
                >
                  {"See From Pen to Pixel\n"}
                </Link>
                <Link
                  href="/everyday-echoes"
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-yellow-400 hover:bg-yellow-300 transition-colors duration-300 shadow-lg"
                  data-cursor-view="true"
                >
                  Everyday Echoes
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="mb-16">
          <div className="w-full">
            {/* Years Badge */}
            <div className="flex justify-start mb-8">
              <div
                className={`inline-flex items-center px-6 py-3 rounded-full text-lg font-medium bg-white text-black`}
              >
                6+ Years in the industry
              </div>
            </div>

            {/* Separator Line */}
            <div className={`w-full h-px mb-12 bg-white`}></div>

            {/* Experience List */}
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 items-center">
                <div className={`text-lg text-white`}>2023 - 2025</div>
                <div className={`text-lg text-white`}>Beximco Pharmaceuticals Ltd.</div>
                <div className={`text-lg text-white`}>Senior Designer</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 items-center">
                <div className={`text-lg text-white`}>2022 - 2023</div>
                <div className={`text-lg text-white`}>Premiummultishop</div>
                <div className={`text-lg text-white`}>Ui Designer</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 items-center">
                <div className={`text-lg text-white`}>2021 - 2025</div>
                <div className={`text-lg text-white`}>Amazon Publishing</div>
                <div className={`text-lg text-white`}>Self-Publisher</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 items-center">
                <div className={`text-lg text-white`}>2019 - 2025</div>
                <div className={`text-lg text-white`}>Freelance</div>
                <div className={`text-lg text-white`}>Versatile Designer</div>
              </div>
            </div>
          </div>
        </div>

        {/* Collaborations Section */}
        <div className="mb-16">
          <div className="w-full">
            {/* Collaborations Badge */}
            <div className="flex justify-start items-center mb-8">
              <Image
                src="https://i.postimg.cc/LX7LQXX5/angry-2498-256.gif"
                alt="Angry GIF"
                width={64}
                height={64}
                className="mr-4"
              />
              <div
                className={`inline-flex items-center px-6 py-3 rounded-full text-lg font-medium bg-white text-black`}
              >
                880+ Collaborations
              </div>
            </div>

            {/* Separator Line */}
            <div className={`w-full h-px mb-12 bg-white`}></div>

            {/* Collaboration Text */}
            <div className="max-w-4xl mx-auto space-y-8">
              <p className={`text-xl leading-relaxed text-white`}>
                I team up with companies, big and small, spanning all sorts of industries, each redefining how we
                live, work, and interact with the world.
              </p>

              <p className={`text-xl leading-relaxed text-white`}>
                Whether it's helping startups find their voice or keeping established brands relevant, my role is to{" "}
                <span className="italic">align every aspect of their presence with who they are</span>—through
                strategy, design, and storytelling.
              </p>
            </div>
          </div>
        </div>

        {/* Hours Invested Section */}
        <div className="mb-16"></div>

        {/* My Core Skills Section */}
        <section className="mb-16">
          <div className="w-full">
            {/* Header with Number and Arrow */}
            <div className="flex items-start mb-8">
              <div className="relative">
                {/* Large Number 7 */}
                <div className="text-8xl font-bold text-blue-500 mr-4">7</div>
                {/* Curved Arrow */}
                <div className="absolute -top-4 -right-8">
                  <svg
                    width="60"
                    height="40"
                    viewBox="0 0 60 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-blue-500"
                  >
                    <path
                      d="M5 35C15 25 25 15 35 10C40 7.5 45 6 50 8"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                    <path d="M45 5L50 8L47 12" stroke="currentColor" strokeWidth="2" fill="none" />
                  </svg>
                </div>
              </div>
              <div className="flex-1 mt-4">
                {/* Title */}
                <h2 className={`text-3xl font-bold text-white`}>Core Research Skills</h2>
              </div>
            </div>

            {/* Skill Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {/* Skill Card 1 */}
              <div
                className={`group p-6 rounded-lg transition-all duration-300 hover:scale-105 bg-gray-900 border border-gray-800 hover:bg-black hover:text-white hover:shadow-xl hover:border-yellow-400`}
              >
                <h3 className={`text-lg font-medium text-white group-hover:text-white`}>UI/UX Design</h3>
              </div>

              {/* Skill Card 2 */}
              <div
                className={`group p-6 rounded-lg transition-all duration-300 hover:scale-105 bg-gray-900 border border-gray-800 hover:bg-black hover:text-white hover:shadow-xl hover:border-yellow-400`}
              >
                <h3 className={`text-lg font-medium text-white group-hover:text-white`}>Product Strategy</h3>
              </div>

              {/* Skill Card 3 */}
              <div
                className={`group p-6 rounded-lg transition-all duration-300 hover:scale-105 bg-gray-900 border border-gray-800 hover:bg-black hover:text-white hover:shadow-xl hover:border-yellow-400`}
              >
                <h3 className={`text-lg font-medium text-white group-hover:text-white`}>User Research</h3>
              </div>

              {/* Skill Card 4 */}
              <div
                className={`group p-6 rounded-lg transition-all duration-300 hover:scale-105 bg-gray-900 border border-gray-800 hover:bg-black hover:text-white hover:shadow-xl hover:border-yellow-400`}
              >
                <h3 className={`text-lg font-medium text-white group-hover:text-white`}>Wireframing & Prototyping</h3>
              </div>

              {/* Skill Card 5 */}
              <div
                className={`group p-6 rounded-lg transition-all duration-300 hover:scale-105 bg-gray-900 border border-gray-800 hover:bg-black hover:text-white hover:shadow-xl hover:border-yellow-400`}
              >
                <h3 className={`text-lg font-medium text-white group-hover:text-white`}>Branding & Identity</h3>
              </div>

              {/* Skill Card 6 */}
              <div
                className={`group p-6 rounded-lg transition-all duration-300 hover:scale-105 bg-gray-900 border border-gray-800 hover:bg-black hover:text-white hover:shadow-xl hover:border-yellow-400`}
              >
                <h3 className={`text-lg font-medium text-white group-hover:text-white`}>Design Systems</h3>
              </div>

              {/* Skill Card 7 */}
              <div
                className={`group p-6 rounded-lg transition-all duration-300 hover:scale-105 bg-gray-900 border border-gray-800 hover:bg-black hover:text-white hover:shadow-xl hover:border-yellow-400`}
              >
                <h3 className={`text-lg font-medium text-white group-hover:text-white`}>Web Design</h3>
              </div>

              {/* Skill Card 8 */}
              <div
                className={`group p-6 rounded-lg transition-all duration-300 hover:scale-105 bg-gray-900 border border-gray-800 hover:bg-black hover:text-white hover:shadow-xl hover:border-yellow-400`}
              >
                <h3 className={`text-lg font-medium text-white group-hover:text-white`}>User Experience </h3>
              </div>

              {/* Skill Card 9 */}
              <div
                className={`group p-6 rounded-lg transition-all duration-300 hover:scale-105 bg-gray-900 border border-gray-800 hover:bg-black hover:text-white hover:shadow-xl hover:border-yellow-400`}
              >
                <h3 className={`text-lg font-medium text-white group-hover:text-white`}>Accessibility</h3>
              </div>
            </div>
          </div>
        </section>

        {/* NEW TOOLS SECTION */}
        <section className="mb-16">
          <div className="w-full">
            {/* Header with Number and Arrow */}
            <div className="flex items-start mb-8">
              <div className="relative">
                {/* Large Number 8 */}
                <div className="text-8xl font-bold text-blue-500 mr-4">{"9"}</div>
                {/* Curved Arrow */}
                <div className="absolute -top-4 -right-8">
                  <svg
                    width="60"
                    height="40"
                    viewBox="0 0 60 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-blue-500"
                  >
                    <path
                      d="M5 35C15 25 25 15 35 10C40 7.5 45 6 50 8"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                    <path d="M45 5L50 8L47 12" stroke="currentColor" strokeWidth="2" fill="none" />
                  </svg>
                </div>
              </div>
              <div className="flex-1 mt-4">
                {/* Title */}
                <h2 className={`text-3xl font-bold text-white`}>{" Technical ToolKit:\n"}</h2>
              </div>
            </div>

            {/* Tools Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {/* Tool Card 1 */}
              <div
                className={`group p-6 rounded-lg transition-all duration-300 hover:scale-105 bg-gray-900 border border-gray-800 hover:bg-black hover:text-white hover:shadow-xl hover:border-yellow-400`}
              >
                <h3 className={`text-lg font-medium text-white group-hover:text-white`}>Figma</h3>
              </div>

              {/* Tool Card 2 */}
              <div
                className={`group p-6 rounded-lg transition-all duration-300 hover:scale-105 bg-gray-900 border border-gray-800 hover:bg-black hover:text-white hover:shadow-xl hover:border-yellow-400`}
              >
                <h3 className={`text-lg font-medium text-white group-hover:text-white`}>Adobe Creative Suite</h3>
              </div>

              {/* Tool Card 3 */}
              <div
                className={`group p-6 rounded-lg transition-all duration-300 hover:scale-105 bg-gray-900 border border-gray-800 hover:bg-black hover:text-white hover:shadow-xl hover:border-yellow-400`}
              >
                <h3 className={`text-lg font-medium text-white group-hover:text-white`}>Adobe Illustrator </h3>
              </div>

              {/* Tool Card 4 */}
              <div
                className={`group p-6 rounded-lg transition-all duration-300 hover:scale-105 bg-gray-900 border border-gray-800 hover:bg-black hover:text-white hover:shadow-xl hover:border-yellow-400`}
              >
                <h3 className={`text-lg font-medium text-white group-hover:text-white`}>Adobe Photoshop </h3>
              </div>

              {/* Tool Card 5 */}
              <div
                className={`group p-6 rounded-lg transition-all duration-300 hover:scale-105 bg-gray-900 border border-gray-800 hover:bg-black hover:text-white hover:shadow-xl hover:border-yellow-400`}
              >
                <h3 className={`text-lg font-medium text-white group-hover:text-white`}>Adobe XD </h3>
              </div>

              {/* Tool Card 6 */}
              <div
                className={`group p-6 rounded-lg transition-all duration-300 hover:scale-105 bg-gray-900 border border-gray-800 hover:bg-black hover:text-white hover:shadow-xl hover:border-yellow-400`}
              >
                <h3 className={`text-lg font-medium text-white group-hover:text-white`}>Adobe Indesign </h3>
              </div>

              {/* New Tool Card 7 */}
              <div
                className={`group p-6 rounded-lg transition-all duration-300 hover:scale-105 bg-gray-900 border border-gray-800 hover:bg-black hover:text-white hover:shadow-xl hover:border-yellow-400`}
              >
                <h3 className={`text-lg font-medium text-white group-hover:text-white`}>WordPress</h3>
              </div>

              {/* New Tool Card 8 */}
              <div
                className={`group p-6 rounded-lg transition-all duration-300 hover:scale-105 bg-gray-900 border border-gray-800 hover:bg-black hover:text-white hover:shadow-xl hover:border-yellow-400`}
              >
                <h3 className={`text-lg font-medium text-white group-hover:text-white`}>Shopify</h3>
              </div>

              {/* New Tool Card 9 */}
              <div
                className={`group p-6 rounded-lg transition-all duration-300 hover:scale-105 bg-gray-900 border border-gray-800 hover:bg-black hover:text-white hover:shadow-xl hover:border-yellow-400`}
              >
                <h3 className={`text-lg font-medium text-white group-hover:text-white`}>Adobe After Effects </h3>
              </div>
            </div>
          </div>
        </section>

        {/* NEW EDUCATION & RECOGNITION SECTION */}
        <section className="mb-16">
          <div className="w-full">
            {/* Header with Number and Arrow */}
            <div className="flex items-start mb-8">
              <div className="relative">
                {/* Large Number 9 */}
                <div className="text-8xl font-bold text-blue-500 mr-4">{""}</div>
                {/* Curved Arrow */}
                <div className="absolute -top-4 -right-8">
                  <svg
                    width="60"
                    height="40"
                    viewBox="0 0 60 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-blue-500"
                  >
                    <path
                      d="M5 35C15 25 25 15 35 10C40 7.5 45 6 50 8"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                    <path d="M45 5L50 8L47 12" stroke="currentColor" strokeWidth="2" fill="none" />
                  </svg>
                </div>
              </div>
              <div className="flex-1 mt-4">
                {/* Title */}
                <h2 className={`text-3xl font-bold text-white`}>Education & Recognition</h2>
              </div>
            </div>

            {/* Education List */}
            <div className="space-y-8 mt-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 items-center">
                <div className={`text-lg text-white`}>2019 - 2023</div>
                <div className={`text-lg text-white`}>National University, Bangladesh </div>
                <div className={`text-lg text-white`}>Bachelor of Arts in Social Work </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 items-center">
                <div className={`text-lg text-white`}>2024-2025</div>
                <div className={`text-lg text-white`}>Feni University, Bangladesh </div>
                <div className={`text-lg text-white`}>Master's in English </div>
              </div>
            </div>
          </div>
        </section>

        {/* NEW CERTIFICATIONS SECTION */}
        <section className="mb-16">
          <div className="w-full">
            {/* Header with Number and Arrow */}
            <div className="flex items-start mb-8">
              <div className="relative">
                {/* Large Number 10 */}
                <div className="text-8xl font-bold text-blue-500 mr-4">{""}</div>
                {/* Curved Arrow */}
                <div className="absolute -top-4 -right-8">
                  <svg
                    width="60"
                    height="40"
                    viewBox="0 0 60 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-blue-500"
                  >
                    <path
                      d="M5 35C15 25 25 15 35 10C40 7.5 45 6 50 8"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                    <path d="M45 5L50 8L47 12" stroke="currentColor" strokeWidth="2" fill="none" />
                  </svg>
                </div>
              </div>
              <div className="flex-1 mt-4">
                {/* Title */}
                <h2 className={`text-3xl font-bold text-white`}>Certifications</h2>
              </div>
            </div>

            {/* Certifications List */}
            <div className="space-y-8 mt-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 items-center">
                <div className={`text-lg text-white`}>2024</div>
                <div className={`text-lg text-white`}>Google</div>
                <div className={`text-lg text-white`}>Google UX Design Professional Certificate</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 items-center">
                <div className={`text-lg text-white`}>2025</div>
                <div className={`text-lg text-white`}>IBM</div>
                <div className={`text-lg text-white`}>IBM AI Product Manager Professional Certificate</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 items-center">
                <div className={`text-lg text-white`}>2020</div>
                <div className={`text-lg text-white`}>Creative IT</div>
                <div className={`text-lg text-white`}>Graphic design- Branding Strategies </div>
              </div>
            </div>
          </div>
        </section>

        {/* NEW TESTIMONIALS SECTION */}
        <section className="mb-16">
          <div className="w-full">
            {/* Header with Number and Arrow */}
            <div className="flex items-start mb-8">
              <div className="relative">
                {/* Large Number 10 */}
                <div className="text-8xl font-bold text-blue-500 mr-4">Few</div>
                {/* Curved Arrow */}
                <div className="absolute -top-4 -right-8">
                  <svg
                    width="60"
                    height="40"
                    viewBox="0 0 60 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-blue-500"
                  >
                    <path
                      d="M5 35C15 25 25 15 35 10C40 7.5 45 6 50 8"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                    <path d="M45 5L50 8L47 12" stroke="currentColor" strokeWidth="2" fill="none" />
                  </svg>
                </div>
              </div>
              <div className="flex-1 mt-4">
                {/* Title */}
                <h2 className={`text-3xl font-bold text-white`}> Clients Say</h2>
              </div>
            </div>

            {/* Testimonial Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {/* Testimonial Card 1 */}
              <div
                className={`group p-6 rounded-lg transition-all duration-300 hover:scale-105 bg-gray-900 border border-gray-800 hover:bg-black hover:text-white hover:shadow-xl hover:border-yellow-400`}
              >
                <p className="italic text-lg mb-4 text-white">
                  "Jerin's design work is exceptional. They truly understand user needs and translate them into
                  beautiful, functional interfaces. A pleasure to work with!"
                </p>
                <p className="font-medium text-white">- Macdon, CEO of TechCorp</p>
              </div>

              {/* Testimonial Card 2 */}
              <div
                className={`group p-6 rounded-lg transition-all duration-300 hover:scale-105 bg-gray-900 border border-gray-800 hover:bg-black hover:text-white hover:shadow-xl hover:border-yellow-400`}
              >
                <p className="italic text-lg mb-4 text-white">
                  "The branding Jerin developed for us perfectly captured our vision. Their attention to detail and
                  strategic thinking are unmatched."
                </p>
                <p className="font-medium text-white">- Daniel , Marketing Director at Global Brands</p>
              </div>

              {/* Testimonial Card 3 */}
              <div
                className={`group p-6 rounded-lg transition-all duration-300 hover:scale-105 bg-gray-900 border border-gray-800 hover:bg-black hover:text-white hover:shadow-xl hover:border-yellow-400`}
              >
                <p className="italic text-lg mb-4 text-white">
                  "Working with Jerin was a seamless experience. They delivered high-quality designs on time and were
                  incredibly responsive to feedback."
                </p>
                <p className="font-medium text-white">-Tatiana D Brea, Product Manager at Innovate Solutions</p>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophies Section */}
        <div className="mb-16">
          <div className="w-full">
            {/* Header with Number and Arrow */}
            <div className="flex items-start mb-8">
              <div className="relative">
                {/* Large Number 6 */}
                <div className="text-8xl font-bold text-blue-500 mr-4">6</div>
                {/* Curved Arrow */}
                <div className="absolute -top-4 -right-8">
                  <svg
                    width="60"
                    height="40"
                    viewBox="0 0 60 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-blue-500"
                  >
                    <path
                      d="M5 35C15 25 25 15 35 10C40 7.5 45 6 50 8"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                    <path d="M45 5L50 8L47 12" stroke="currentColor" strokeWidth="2" fill="none" />
                  </svg>
                </div>
              </div>
              <div className="flex-1 mt-4">
                {/* Hover Badge */}
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-black text-white text-sm font-medium mb-4">
                  Hover to see more
                </div>
                {/* Title */}
                <h2 className={`text-3xl font-bold text-white`}>
                  Here are 6 philosophies you can always expect from me
                </h2>
              </div>
            </div>

            {/* Philosophy Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {/* Card 1 */}
              <div
                className={`group p-6 rounded-lg transition-all duration-300 hover:scale-105 bg-gray-900 border border-gray-800 hover:bg-black hover:text-white hover:shadow-xl hover:border-blue-500`}
              >
                <div className="mb-4 group-hover:hidden">
                  <User className={`h-8 w-8 text-white`} />
                </div>
                <h3 className={`text-lg font-medium text-white group-hover:text-white`}>
                  Design should be at the strategy table
                </h3>
                <p className="hidden group-hover:block">
                  The best design decisions come from being part of the bigger conversation.
                </p>
              </div>

              {/* Card 2 */}
              <div
                className={`group p-6 rounded-lg transition-all duration-300 hover:scale-105 bg-gray-900 border border-gray-800 hover:bg-black hover:text-white hover:shadow-xl hover:border-blue-500`}
              >
                <div className="mb-4 group-hover:hidden">
                  <Target className={`h-8 w-8 text-white`} />
                </div>
                <h3 className={`text-lg font-medium text-white group-hover:text-white`}>First impressions matters</h3>
                <p className="hidden group-hover:block">
                  Visuals often speak before words. My job is to create visuals that do the talking.
                </p>
              </div>

              {/* Card 3 */}
              <div
                className={`group p-6 rounded-lg transition-all duration-300 hover:scale-105 bg-gray-900 border border-gray-800 hover:bg-black hover:text-white hover:shadow-xl hover:border-blue-500`}
              >
                <div className="mb-4 group-hover:hidden">
                  <Sparkles className={`h-8 w-8 text-white`} />
                </div>
                <h3 className={`text-lg font-medium text-white group-hover:text-white`}>
                  I get things done, the right way
                </h3>
                <p className="hidden group-hover:block">
                  No matter the challenge, I deliver — on time, every time, without sacrificing quality.
                </p>
              </div>

              {/* Card 4 */}
              <div
                className={`group p-6 rounded-lg transition-all duration-300 hover:scale-105 bg-gray-900 border border-gray-800 hover:bg-black hover:text-white hover:shadow-xl hover:border-blue-500`}
              >
                <div className="mb-4 group-hover:hidden">
                  <User className={`h-8 w-8 text-white`} />
                </div>
                <h3 className={`text-lg font-medium text-white group-hover:text-white`}>
                  I like to keep things easy for everyone
                </h3>
                <p className="hidden group-hover:block">
                  That means clear communication and going the extra mile whenever I can.
                </p>
              </div>

              {/* Card 5 */}
              <div
                className={`group p-6 rounded-lg transition-all duration-300 hover:scale-105 bg-gray-900 border border-gray-800 hover:bg-black hover:text-white hover:shadow-xl hover:border-blue-500`}
              >
                <div className="mb-4 group-hover:hidden">
                  <div className={`text-3xl font-bold text-white`}>Aa</div>
                </div>
                <h3 className={`text-lg font-medium text-white group-hover:text-white`}>I'm all about typography</h3>
                <p className="hidden group-hover:block">
                  Typography plays a crucial role in my design work. I believe it can make or break a design.
                </p>
              </div>

              {/* Card 6 */}
              <div
                className={`group p-6 rounded-lg transition-all duration-300 hover:scale-105 bg-gray-900 border border-gray-800 hover:bg-black hover:text-white hover:shadow-xl hover:border-blue-500`}
              >
                <div className="mb-4 group-hover:hidden">
                  <Search className={`h-8 w-8 text-white`} />
                </div>
                <h3 className={`text-lg font-medium text-white group-hover:text-white`}>
                  I'm curious and love learning
                </h3>
                <p className="hidden group-hover:block">
                  Especially about how creativity and technology intertwine and grow together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    {/* Footer */}
    <Footer isDarkMode={true} />
  </div>
)
}
