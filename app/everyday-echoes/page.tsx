"use client"

import Link from "next/link"
import Image from "next/image"
import Footer from "@/components/footer"
import Header from "@/components/header"

export default function EverydayEchoesPage() {
  return (
    <div className={`min-h-screen transition-colors duration-300 bg-transparent text-white`}>
      {/* Navigation Header */}
      <Header isDarkMode={true} />
      {/* Page Content */}
      <main className="px-8 pt-8 pb-16 max-w-6xl mx-auto">
        {/* Page Title */}
        <div className="mb-16 text-center">
          <h1 className={`text-5xl font-bold mb-4 text-white`}>Everyday Echoes</h1>
          <p className={`text-xl mb-8 text-gray-300`}>{"The small things whisper the loudest.\n"}</p>
          <p className={`text-lg leading-relaxed text-gray-300 tracking-tight`}>
            {
              "This space holds the rhythm of my daily life—the quiet reflections, creative sparks, and honest moments that shape who I am beyond the pixels and projects. Here, I share the unfiltered echoes of everyday experiences—sometimes messy, sometimes magical, always real. Because behind every brand, every interface, every design...\n there’s a human, still learning, still growing, still creating.✨"
            }
          </p>
        </div>

        {/* Stories & Snaps Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="group transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl rounded-lg overflow-hidden">
            <Image
              src="https://i.postimg.cc/zXGf6qmS/IMG-6657.jpg"
              alt="Everyday moment 1"
              width={600}
              height={400}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <div className="group transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl rounded-lg overflow-hidden">
            <Image
              src="https://i.postimg.cc/2SqSjTS1/IMG-6654.jpg"
              alt="Everyday moment 2"
              width={600}
              height={400}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <div className="group transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl rounded-lg overflow-hidden">
            <Image
              src="https://i.postimg.cc/fLszKNjd/IMG-6660.jpg"
              alt="Everyday moment 3"
              width={600}
              height={400}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <div className="group transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl rounded-lg overflow-hidden">
            <Image
              src="https://i.pinimg.com/736x/6d/8f/d3/6d8fd30a7380b1e14aff12dc938bc4ef.jpg"
              alt="Everyday moment 4"
              width={600}
              height={400}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <div className="group transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl rounded-lg overflow-hidden">
            <Image
              src="https://i.postimg.cc/C1JgsfKy/obsession-with-pasta.jpg"
              alt="Everyday moment 5"
              width={600}
              height={400}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <div className="group transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl rounded-lg overflow-hidden">
            <Image
              src="https://i.postimg.cc/N0qBscnn/IMG-6655.jpg"
              alt="Everyday moment 6"
              width={600}
              height={400}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </section>

        {/* New Section: More Snaps 1 */}
        <section className="mb-16">
          <h2 className={`text-4xl font-bold mb-8 text-white text-center`}>More Snaps</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl rounded-lg overflow-hidden">
              <Image
                src="https://i.postimg.cc/7Y5kSh8c/c58fc3c601f73c094821318cd882a963.jpg"
                alt="Everyday moment 7"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            <div className="group transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl rounded-lg overflow-hidden">
              <Image
                src="https://i.postimg.cc/JnsfZYSX/image.jpg"
                alt="Everyday moment 8"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            <div className="group transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl rounded-lg overflow-hidden">
              <Image
                src="https://i.postimg.cc/JnHFGDBc/This-romantic-whether.jpg"
                alt="Everyday moment 9"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* New Section: More Snaps 2 */}
        <section className="mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl rounded-lg overflow-hidden">
              <Image
                src="https://i.postimg.cc/902pW0dM/download-1.jpg"
                alt="Everyday moment 10"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            <div className="group transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl rounded-lg overflow-hidden">
              <Image
                src="https://i.postimg.cc/5270SrjN/butterfly-4437-512.gif"
                alt="Everyday moment 11"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            <div className="group transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl rounded-lg overflow-hidden">
              <Image
                src="https://i.postimg.cc/zGQFy0C4/Passion-And-Success.jpg"
                alt="Everyday moment 12"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* New Section: More Snaps 3 */}
        <section className="mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"></div>
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
