"use client"

import Link from "next/link"
import Image from "next/image"
import Footer from "@/components/footer"
import Header from "@/components/header" // Import the shared Header component

export default function FarmSwarmingProject() {
  return (
    <div className={`min-h-screen transition-colors duration-300 bg-transparent text-white`}>
      {/* Navigation Header */}
      <Header isDarkMode={true} />
      {/* Project Content */}
      <main className="px-8 pt-8 pb-16 max-w-4xl mx-auto">
        {/* Project Title and Details */}
        <div className="mb-16">
          <h1 className={`text-5xl font-bold mb-4 text-white`}>Farm Swarming</h1>
          <h2 className={`text-2xl mb-8 text-gray-300`}>Born from necessity, built for community.</h2>

          {/* Project Details Grid */}
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className={`text-sm font-medium mb-2 uppercase tracking-wider text-gray-400`}>Role</h3>
              <p className={`text-gray-300`}>Senior Designer</p>
            </div>
            <div>
              <h3 className={`text-sm font-medium mb-2 uppercase tracking-wider text-gray-400`}>Agency</h3>
              <p className={`text-gray-300`}>Independent</p>
            </div>
            <div>
              <h3 className={`text-sm font-medium mb-2 uppercase tracking-wider text-gray-400`}>Deliverables</h3>
              <p className={`text-gray-300`}>
                Brand Identity & Website
                <br />
                Marketing Materials
              </p>
            </div>
            <div>
              <h3 className={`text-sm font-medium mb-2 uppercase tracking-wider text-gray-400`}>My Role</h3>
              <p className={`text-gray-300`}>Brand Designer</p>
            </div>
          </div>
        </div>

        {/* Project Overview */}
        <section className="mb-16">
          <p className={`text-lg leading-relaxed mb-8 text-gray-300`}>
            When the pandemic disrupted food systems, our general store became an opportunity where an online
            marketplace that connects neighborhood families with nearby farmers and makers that existed as a resource
            became a lifeline for our community. Farm Swarming was born.
          </p>
          <p className={`text-lg leading-relaxed text-gray-300`}>
            Farm Swarming wasn't just about transactions, it was about relationships. We designed an e-commerce
            experience that honored that connection - clean, approachable, and grounded in the real stories behind the
            food.
          </p>
        </section>

        {/* Hero Image Section */}
        <div className="mb-16 group transition-all duration-300 ease-in-out hover:scale-[1.005] hover:shadow-xl">
          <Image
            src="https://www.ngan-nguyen.com/images/FS-1-min_1FS-1-min.avif"
            alt="Farm Swarming Hero"
            width={1200}
            height={800}
            className="w-full h-auto rounded-2xl"
          />
        </div>

        {/* Eggs Section */}
        <section className="mb-16">
          <div className="mb-8 group transition-all duration-300 ease-in-out hover:scale-[1.005] hover:shadow-xl">
            <Image
              src="https://www.ngan-nguyen.com/images/FS-2-min_1FS-2-min.avif"
              alt="Farm Fresh Eggs"
              width={1200}
              height={600}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </section>

        {/* Fresh Produce Section */}
        <section className="mb-16">
          <div className="mb-8 group transition-all duration-300 ease-in-out hover:scale-[1.005] hover:shadow-xl">
            <Image
              src="https://www.ngan-nguyen.com/images/FS-3-min_1FS-3-min.avif"
              alt="Fresh Produce"
              width={1200}
              height={600}
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="text-center">
            <h3 className={`text-3xl font-bold mb-4 text-white`}>
              Taste the difference with Farm Swarming's farm-fresh produce, picked at the peak of ripeness.
            </h3>
          </div>
        </section>

        {/* Product Categories */}
        <section className="mb-16">
          <div className="mb-8 group transition-all duration-300 ease-in-out hover:scale-[1.005] hover:shadow-xl">
            <Image
              src="https://www.ngan-nguyen.com/images/FS-4-min_1FS-4-min.avif"
              alt="Product Categories"
              width={1200}
              height={800}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </section>

        {/* Community Map */}
        <section className="mb-16">
          <div className="mb-8 group transition-all duration-300 ease-in-out hover:scale-[1.005] hover:shadow-xl">
            <Image
              src="https://www.ngan-nguyen.com/images/FS-5-min_1.avif"
              alt="Upstate New York Community"
              width={1200}
              height={800}
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="text-center">
            <h3 className={`text-3xl font-bold mb-4 text-white`}>Upstate New York Proud</h3>
            <p className={`text-lg leading-relaxed text-gray-300`}>
              Supporting our local farming community and connecting neighbors with fresh, sustainable produce from farms
              within a 50-mile radius.
            </p>
          </div>
        </section>

        {/* Brand Identity */}
        <section className="mb-16">
          <div className="mb-8 group transition-all duration-300 ease-in-out hover:scale-[1.005] hover:shadow-xl">
            <Image
              src="https://www.ngan-nguyen.com/images/FS-6-min_1FS-6-min.avif"
              alt="Brand Identity"
              width={1200}
              height={600}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </section>

        {/* Interactive Animation */}
        <section className="mb-16">
          <div className="mb-8">
            <Image
              src="https://www.ngan-nguyen.com/images/FS-8-min-min.gif"
              alt="Interactive Animation"
              width={800}
              height={600}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </section>

        {/* Typography */}
        <section className="mb-16">
          <div className="mb-8 group transition-all duration-300 ease-in-out hover:scale-[1.005] hover:shadow-xl">
            <Image
              src="https://www.ngan-nguyen.com/images/FS-8-1-min_1FS-8-1-min.avif"
              alt="Typography System"
              width={1200}
              height={800}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </section>

        {/* Final Logo */}
        <section className="mb-16">
          <div className="mb-8 group transition-all duration-300 ease-in-out hover:scale-[1.005] hover:shadow-xl">
            <Image
              src="https://www.ngan-nguyen.com/images/FS-9-min_1FS-9-min.avif"
              alt="Farm Swarming Logo"
              width={1200}
              height={800}
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="text-center">
            <h3 className={`text-2xl font-bold mb-4 text-white`}>
              The design direction pairs simplicity with function—a fresh, versatile logo a dynamic layout showcases
              products and seamlessly integrates multiple touchpoints for a streamlined brand experience.
            </h3>
          </div>
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
