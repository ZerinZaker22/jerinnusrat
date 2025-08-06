"use client"

import Link from "next/link"
import Image from "next/image"
import Footer from "@/components/footer"
import Header from "@/components/header"

export default function IllustrationsPage() {
  return (
    <div className={`min-h-screen transition-colors duration-300 bg-transparent text-white`}>
      {/* Navigation Header */}
      <Header isDarkMode={true} />
      {/* Page Content */}
      <main className="px-8 pt-8 pb-16 max-w-6xl mx-auto">
        {/* Page Title */}
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center mb-4">
            <Image
              src="https://i.postimg.cc/x1SvNNM0/wall-8423-512.gif"
              alt="Wall illustration"
              width={64}
              height={64}
              className="mr-4"
            />
            <h1 className={`text-5xl font-bold text-white`}>Art That Tells a Story</h1>
            <Image
              src="https://i.postimg.cc/x1SvNNM0/wall-8423-512.gif"
              alt="Wall illustration"
              width={64}
              height={64}
              className="ml-4"
            />
          </div>
          <p className={`text-xl mb-8 text-gray-300`}>{"Where raw ideas evolve into refined experiences.\n"}</p>
        </div>

        {/* New Section: From Pen to Pixel Quote */}
        <section className="mb-16 text-center max-w-4xl mx-auto">
          <p className={`text-xl leading-relaxed text-gray-300`}>
            {
              "Before a user ever clicks, scrolls, or taps—there’s a story that starts on paper.“From Pen to Pixel” is the space where my process unfolds. It’s where brand concepts are first sketched in quiet corners, where interfaces are imagined with ink before they’re ever coded, and where raw ideas grow into strategic, human-centered design. Because the best digital experiences still begin with something beautifully analog."
            }
          </p>
        </section>

        {/* Illustrations Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="group transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl rounded-lg overflow-hidden">
            <Image
              src="https://i.pinimg.com/736x/32/f0/2b/32f02badd2d80aa2bfb146a0461fa519.jpg"
              alt="Abstract Digital Art"
              width={600}
              height={400}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <div className="group transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl rounded-lg overflow-hidden">
            <Image
              src="https://i.pinimg.com/736x/28/2c/74/282c749bf131b8450a226968dd6e215c.jpg"
              alt="Fantasy Landscape Illustration"
              width={600}
              height={400}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <div className="group transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl rounded-lg overflow-hidden">
            <Image
              src="https://i.pinimg.com/1200x/2b/41/49/2b4149a988edd56e83806f4f9ac599af.jpg"
              alt="Character Design Illustration"
              width={600}
              height={400}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <div className="group transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl rounded-lg overflow-hidden">
            <Image
              src="https://i.pinimg.com/736x/a5/52/40/a55240dc69bfd40f6b13ba2b63d25781.jpg"
              alt="Sci-Fi City Illustration"
              width={600}
              height={400}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <div className="group transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl rounded-lg overflow-hidden">
            <Image
              src="https://i.pinimg.com/736x/0a/b8/d1/0ab8d12fc1ceec9d8a32ceda31b84c69.jpg"
              alt="Minimalist Geometric Art"
              width={600}
              height={400}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <div className="group transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl rounded-lg overflow-hidden">
            <Image
              src="https://i.pinimg.com/originals/d5/cb/ae/d5cbae6e4a2beb6fe8b0cd0838568958.gif"
              alt="Nature Inspired Illustration"
              width={600}
              height={400}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </section>

        {/* New Section: Digital Art */}
        <section className="mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl rounded-lg overflow-hidden">
              <Image
                src="https://i.postimg.cc/Fs2cbYqn/Mokcup.jpg"
                alt="Digital Art 1"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            <div className="group transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl rounded-lg overflow-hidden">
              <Image
                src="https://i.postimg.cc/C1VmcvQX/Mockup.jpg"
                alt="Digital Art 2"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            <div className="group transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl rounded-lg overflow-hidden">
              <Image
                src="https://i.postimg.cc/Vshb1SYL/Mockup.jpg"
                alt="Digital Art 3"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* New Section: Traditional Art */}
        <section className="mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl rounded-lg overflow-hidden">
              <Image
                src="https://i.pinimg.com/originals/21/d3/33/21d333a30d5a788044b041748dd268f6.gif"
                alt="Traditional Art 1"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            <div className="group transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl rounded-lg overflow-hidden">
              <Image
                src="https://i.pinimg.com/originals/69/d1/34/69d13446d4bdb8294f7c9e575d5e59ed.gif"
                alt="Traditional Art 2"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            <div className="group transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl rounded-lg overflow-hidden">
              <Image
                src="https://i.pinimg.com/originals/2b/b4/47/2bb447c6f6b5a3f133aeee9d4d1c2b3f.gif"
                alt="Traditional Art 3"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* New Section: Sketches & Concepts */}
        <section className="mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl rounded-lg overflow-hidden">
              <Image
                src="https://i.pinimg.com/736x/55/fc/86/55fc864fdf0e5502ea1557320e2569f7.jpg"
                alt="Sketch 1"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            <div className="group transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl rounded-lg overflow-hidden">
              <Image
                src="https://i.pinimg.com/736x/8d/f4/aa/8df4aad8a1e06e0b7a2e2c6f6e604fb2.jpg"
                alt="Sketch 2"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            <div className="group transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl rounded-lg overflow-hidden">
              <Image
                src="https://i.pinimg.com/736x/53/87/5f/53875f109d381cc07e52fbc87f871f0d.jpg"
                alt="Sketch 3"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
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
