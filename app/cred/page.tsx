"use client"

import Link from "next/link"
import Image from "next/image"
import Footer from "@/components/footer"
import Header from "@/components/header"

export default function CredProject() {
  const heroMediaUrl = "https://framerusercontent.com/assets/bGQbVffkFOkMoDMchrd0EXiO2BU.mp4"
  const isHeroVideo = heroMediaUrl.endsWith(".mp4") || heroMediaUrl.endsWith(".webm") || heroMediaUrl.endsWith(".ogg")

  return (
    <div className={`min-h-screen transition-colors duration-300 bg-transparent text-white`}>
      {/* Navigation Header */}
      <Header isDarkMode={true} />
      {/* Project Content */}
      <main className="px-8 pt-8 pb-16 max-w-4xl mx-auto">
        {/* Hero Media (Image or Video) */}
        <div className="mb-16 group transition-all duration-300 ease-in-out hover:scale-[1.005] hover:shadow-xl">
          {isHeroVideo ? (
            <video
              src={heroMediaUrl}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto rounded-2xl object-cover"
            />
          ) : (
            <Image
              src={heroMediaUrl || "/placeholder.svg"}
              alt="CRED Project Overview"
              width={1200}
              height={600}
              className="w-full h-auto rounded-2xl"
            />
          )}
        </div>

        {/* Project Title */}
        <div className="mb-12">
          <h1 className={`text-5xl font-bold mb-8 text-white`}>CRED</h1>

          {/* Project Details Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <h3 className={`text-sm font-medium mb-2 uppercase tracking-wider text-gray-400`}>Role</h3>
              <p className={`text-gray-300`}>Product Designer</p>
            </div>
            <div>
              <h3 className={`text-sm font-medium mb-2 uppercase tracking-wider text-gray-400`}>Project Type</h3>
              <p className={`text-gray-300`}>Case Study</p>
            </div>
            <div>
              <h3 className={`text-sm font-medium mb-2 uppercase tracking-wider text-gray-400`}>Duration</h3>
              <p className={`text-gray-300`}>8 weeks (2024)</p>
            </div>
          </div>
        </div>

        {/* Brief Section */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold mb-6 text-white`}>Brief</h2>
          <div className="mb-6">
            <h3 className={`text-xl font-semibold mb-4 text-white`}>
              Enhancing the user experience for a leading financial app.
            </h3>
            <p className={`text-lg leading-relaxed text-gray-300`}>
              This project focuses on identifying key areas for improvement within the CRED app's user interface and
              experience, aiming to make financial management more intuitive and engaging for users.
            </p>
          </div>
        </section>

        {/* Problem Section */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold mb-6 text-white`}>Problem</h2>
          <h3 className={`text-xl font-semibold mb-6 text-white`}>
            Users often find financial apps overwhelming and difficult to navigate, leading to low engagement.
          </h3>
          <p className={`text-lg leading-relaxed mb-8 text-gray-300`}>
            Despite offering valuable services, many financial applications struggle with user retention due to complex
            interfaces and a lack of clear guidance. This project aims to address these pain points by simplifying flows
            and enhancing visual clarity.
          </p>
          <div className="mb-8 group transition-all duration-300 ease-in-out hover:scale-[1.005] hover:shadow-xl">
            <Image
              src="https://framerusercontent.com/images/PSRwJs7qjUEMfmxdu6JpuoAk64g.png"
              alt="Problem illustration"
              width={1200}
              height={800}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </section>

        {/* Goal Section */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold mb-6 text-white`}>Goal</h2>
          <h3 className={`text-xl font-semibold text-white`}>
            To design a more user-friendly and engaging experience that encourages consistent use and simplifies
            financial tasks.
          </h3>
        </section>

        {/* Research Section */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold mb-6 text-white`}>Research</h2>
          <p className={`text-lg leading-relaxed mb-6 text-gray-300`}>
            Conducted user surveys and interviews to understand common frustrations and desired features in financial
            apps. Analyzed competitor apps to identify best practices and areas for differentiation.
          </p>

          <h3 className={`text-xl font-semibold mb-4 text-white`}>Key Findings</h3>
          <ul className={`space-y-3 text-lg text-gray-300`}>
            <li>• Users desire clearer categorization of expenses and income.</li>
            <li>• Simplified onboarding and goal-setting processes are crucial.</li>
            <li>• Visual feedback and progress tracking enhance motivation.</li>
          </ul>
        </section>

        {/* Design Solutions Section */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold mb-6 text-white`}>Design Solutions</h2>
          <p className={`text-lg leading-relaxed mb-6 text-gray-300`}>
            Implemented a redesigned dashboard, intuitive navigation, and interactive elements to improve user flow.
          </p>

          <div className="mb-8 group transition-all duration-300 ease-in-out hover:scale-[1.005] hover:shadow-xl">
            <Image
              src="https://framerusercontent.com/images/hNwvqewFEPVo9O0mPTxUra7VgQ.png"
              alt="CRED Dashboard Redesign"
              width={800}
              height={500}
              className="w-full h-auto rounded-lg"
            />
          </div>

          <h3 className={`text-xl font-semibold mb-4 text-white`}>Improved Navigation</h3>
          <p className={`text-lg leading-relaxed text-gray-300`}>
            Streamlined the main navigation to reduce cognitive load and make frequently used features more accessible.
          </p>
        </section>

        {/* Interactive Elements Section */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold mb-6 text-white`}>Interactive Elements</h2>
          <h3 className={`text-xl font-semibold mb-4 text-white`}>Visualizing Financial Health</h3>
          <p className={`text-lg leading-relaxed mb-8 text-gray-300`}>
            Introduced interactive charts and progress bars to give users a quick overview of their financial status and
            goals.
          </p>

          <div className="mb-8 group transition-all duration-300 ease-in-out hover:scale-[1.005] hover:shadow-xl">
            <video
              src="https://framerusercontent.com/assets/WloSXOhxSsN0ua0QgUijXNpBuU.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        </section>

        {/* Transaction Framework Section */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold mb-6 text-white`}>Transaction Framework</h2>
          <h3 className={`text-xl font-semibold mb-4 text-white`}>
            A unified design framework for all transaction types.
          </h3>
          <p className={`text-lg leading-relaxed mb-6 text-gray-300`}>
            CRED has over 8 business units now. All teams separately maintained transaction ledgers for their product as
            there was no aggregator service to consolidate all orders in one place. This led to high back-end effort and
            no consistent design framework to fit all transaction types—a problem that manifested as CRED scaled.
          </p>
          <p className={`text-lg leading-relaxed text-gray-300`}>
            I solved the design framework part and lobbied a little to get this through. However, it's hard to push for
            something with no direct ROI besides hygiene and NPS.
          </p>
        </section>

        {/* Transaction Framework Video */}
        <section className="mb-16">
          <div className="mb-8 group transition-all duration-300 ease-in-out hover:scale-[1.005] hover:shadow-xl">
            <video
              src="https://framerusercontent.com/assets/50xCXcWtdmW6y0OZKKCQglHU658.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        </section>

        {/* Takeaways Section */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold mb-6 text-white`}>Takeaways</h2>
          <h3 className={`text-xl font-semibold mb-4 text-white`}>
            User-centric design, iterative process, and visual communication.
          </h3>
          <p className={`text-lg leading-relaxed text-gray-300`}>
            This project reinforced the importance of continuous user feedback and iterative design. Focusing on clear
            visual communication and simplifying complex information proved key to improving the user experience in a
            financial context.
          </p>
        </section>

        {/* Back to Top */}
        <div className="text-center pt-8">
          <Link href="#top" className={`text-lg font-medium transition-colors text-white hover:text-gray-300`}>
            Back to Top ↑
          </Link>
        </div>
      </main>
      {/* Footer */}
      <Footer isDarkMode={true} />
    </div>
  )
}
