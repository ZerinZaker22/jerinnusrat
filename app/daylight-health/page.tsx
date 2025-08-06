"use client"

import Link from "next/link"
import Image from "next/image"
import Footer from "@/components/footer"
import Header from "@/components/header"

export default function DaylightHealthProject() {
  const heroMediaUrl = "https://framerusercontent.com/assets/iw6M3hqxNfeVWLNMMGm8walMRUI.mp4"
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
              alt="Daylight Health Project Overview"
              width={1200}
              height={600}
              className="w-full h-auto rounded-2xl"
            />
          )}
        </div>

        {/* Project Title */}
        <div className="mb-12">
          <h1 className={`text-5xl font-bold mb-8 text-white`}>Daylight Health</h1>

          {/* Project Details Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <h3 className={`text-sm font-medium mb-2 uppercase tracking-wider text-gray-400`}>Role</h3>
              <p className={`text-gray-300`}> Strategic Branding Specialist         </p>
            </div>
            <div>
              <h3 className={`text-sm font-medium mb-2 uppercase tracking-wider text-gray-400`}>Project Type</h3>
              <p className={`text-gray-300`}>{"Brand Identity & Website\nMarketing Materials"}     </p>
            </div>
            <div>
              <h3 className={`text-sm font-medium mb-2 uppercase tracking-wider text-gray-400`}>Duration</h3>
              <p className={`text-gray-300`}>6 weeks (2025)</p>
            </div>
          </div>
        </div>

        {/* Brief Section */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold mb-6 text-white`}>Brief</h2>
          <div className="mb-6">
            <h3 className={`text-xl font-semibold mb-4 text-white`}>
              Creating an intuitive digital health platform for personalized wellness.
            </h3>
            <p className={`text-lg leading-relaxed text-gray-300`}>
              This project focuses on designing a comprehensive mobile application that helps users track their health
              metrics, set wellness goals, and receive personalized recommendations to improve their overall well-being.
            </p>
          </div>
        </section>

        {/* Problem Section */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold mb-6 text-white`}>Problem</h2>
          <h3 className={`text-xl font-semibold mb-6 text-white`}>
            Existing health apps often lack personalization and struggle with user engagement, leading to inconsistent
            health tracking.
          </h3>
          <p className={`text-lg leading-relaxed mb-8 text-gray-300`}>
            Many users find it challenging to maintain consistent health habits due to generic advice and complex
            interfaces in current health applications. There's a need for a more tailored and motivating experience.
          </p>
          <div className="mb-8 group transition-all duration-300 ease-in-out hover:scale-[1.005] hover:shadow-xl">
            <Image
              src="https://framerusercontent.com/images/JSdzvXltTovXkYmGKXkOvcPKg4.jpg?scale-down-to=2048"
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
            To design a highly personalized and engaging health application that simplifies wellness tracking and
            promotes long-term healthy habits.
          </h3>
        </section>

        {/* Research Section */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold mb-6 text-white`}>Research</h2>
          <p className={`text-lg leading-relaxed mb-6 text-gray-300`}>
            Conducted user interviews and surveys to understand user needs, pain points with existing health apps, and
            desired features. Analyzed competitor apps to identify market gaps and opportunities for innovation.
          </p>

          <h3 className={`text-xl font-semibold mb-4 text-white`}>Key Findings</h3>
          <ul className={`space-y-3 text-lg text-gray-300`}>
            <li>• Users want clear, actionable insights from their health data.</li>
            <li>• Gamification and social features can significantly boost engagement.</li>
            <li>• Seamless integration with wearable devices is highly valued.</li>
          </ul>
        </section>

        {/* Design Solutions Section */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold mb-6 text-white`}>Design Solutions</h2>
          <p className={`text-lg leading-relaxed mb-6 text-gray-300`}>
            Implemented a personalized dashboard, intuitive data visualization, and interactive goal-setting features to
            enhance the user experience.
          </p>

          <div className="mb-8 group transition-all duration-300 ease-in-out hover:scale-[1.005] hover:shadow-xl">
            <Image
              src="https://framerusercontent.com/images/vEvgmu86NmD1Ox0aUJJyuikjFf0.png?scale-down-to=2048"
              alt="Daylight Health Dashboard Redesign"
              width={800}
              height={500}
              className="w-full h-auto rounded-lg"
            />
          </div>

          <h3 className={`text-xl font-semibold mb-4 text-white`}>Personalized Insights</h3>
          <p className={`text-lg leading-relaxed text-gray-300`}>
            Designed a dynamic dashboard that adapts to individual user data, providing relevant insights and progress
            updates at a glance.
          </p>
        </section>

        {/* Interactive Elements Section */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold mb-6 text-white`}>Interactive Elements</h2>
          <h3 className={`text-xl font-semibold mb-4 text-white`}>Motivating Progress Tracking</h3>
          <p className={`text-lg leading-relaxed mb-8 text-gray-300`}>
            Introduced interactive charts, badges, and streaks to visualize progress and motivate users to achieve their
            wellness goals.
          </p>

          <div className="mb-8 group transition-all duration-300 ease-in-out hover:scale-[1.005] hover:shadow-xl">
            <Image
              src="https://framerusercontent.com/images/lnYzIEfBGvwg8i6YVZRtWrP0vg.jpg?scale-down-to=2048"
              alt="Interactive Elements"
              width={800}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
        </section>

        {/* New Section: User Flow */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold mb-6 text-white`}>User Flow</h2>
          <p className={`text-lg leading-relaxed mb-8 text-gray-300`}>
            A simplified user flow ensures a smooth and intuitive experience from onboarding to daily health tracking.
          </p>
          <div className="mb-8 group transition-all duration-300 ease-in-out hover:scale-[1.005] hover:shadow-xl">
            <video
              src="https://framerusercontent.com/assets/Tc4X6bdjfrULd64LpXMhQTRTgIo.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        </section>

        {/* New Section: Mobile Screens */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold mb-6 text-white`}>Mobile Screens</h2>
          <p className={`text-lg leading-relaxed mb-8 text-gray-300`}>
            Key mobile screens showcasing the responsive design and core functionalities.
          </p>
          <div className="mb-8 group transition-all duration-300 ease-in-out hover:scale-[1.005] hover:shadow-xl">
            <video
              src="https://framerusercontent.com/assets/lXLx4LkEv9y7OnUpL6xj21UVGmc.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        </section>

        {/* New Section: Data Visualization */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold mb-6 text-white`}>Visualization</h2>
          <p className={`text-lg leading-relaxed mb-8 text-gray-300`}>
            Clear and concise data visualizations help users understand their health trends at a glance.
          </p>
          <div className="mb-8 group transition-all duration-300 ease-in-out hover:scale-[1.005] hover:shadow-xl">
            <Image
              src="https://framerusercontent.com/images/51wSm7cKiljXGXRxeBHQKrNVlg.png?scale-down-to=2048"
              alt="Health Data Visualization"
              width={800}
              height={600}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </section>

        {/* New Section: Onboarding Experience */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold mb-6 text-white`}>Onboarding Experience</h2>
          <p className={`text-lg leading-relaxed mb-8 text-gray-300`}>
            A smooth onboarding process guides new users through setting up their profile and initial goals.
          </p>
          <div className="mb-8 group transition-all duration-300 ease-in-out hover:scale-[1.005] hover:shadow-xl">
            <Image
              src="https://framerusercontent.com/images/zNe31eKRQ2uSLHA6kdPTfKZibE.jpg?scale-down-to=2048"
              alt="Onboarding Experience"
              width={800}
              height={600}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </section>

        {/* New Section: Key Features */}
        <section className="mb-16">
          
          <p className={`text-lg leading-relaxed mb-8 text-gray-300`}>
            Highlighting the core functionalities that make Daylight Health stand out.
          </p>
          <div className="mb-8 group transition-all duration-300 ease-in-out hover:scale-[1.005] hover:shadow-xl">
            <Image
              src="https://framerusercontent.com/images/BenlVsd7fsK9vFH9Fq7sKgZXJM.png?scale-down-to=2048"
              alt="Key Features"
              width={800}
              height={600}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </section>

        {/* New Section: Design System */}
        <section className="mb-16">
          
          <p className={`text-lg leading-relaxed mb-8 text-gray-300`}>
            A consistent design system ensures scalability and a cohesive user experience across the platform.
          </p>
          <div className="mb-8 group transition-all duration-300 ease-in-out hover:scale-[1.005] hover:shadow-xl">
            <Image
              src="https://framerusercontent.com/images/CmZPfMI7OdjCkZUCqnWcI2o8hNE.jpg?scale-down-to=2048"
              alt="Design System"
              width={800}
              height={600}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </section>

        {/* Takeaways Section */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold mb-6 text-white`}>Takeaways</h2>
          <h3 className={`text-xl font-semibold mb-4 text-white`}>
            User-centered design, data visualization, and motivational design.
          </h3>
          <p className={`text-lg leading-relaxed text-gray-300`}>
            This project highlighted the importance of understanding individual health journeys and translating complex
            data into easily digestible and motivating visual formats. The iterative design process, driven by user
            feedback, was crucial in creating a truly impactful health application.
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
