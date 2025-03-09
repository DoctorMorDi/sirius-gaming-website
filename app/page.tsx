import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home | Sirius Gaming',
  description: 'Welcome to Sirius Gaming - a game development studio focused on creating immersive post-apocalyptic and survival games.',
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Landing Page/hero-background.jpg"
            alt="Sirius Gaming Hero Background"
            width={1920}
            height={1080}
            className="object-cover w-full h-full"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        <div className="container-custom relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Crafting Immersive Gaming Experiences
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            We create post-apocalyptic and survival games that challenge players and tell compelling stories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/games" className="btn btn-primary">
              Explore Our Games
            </Link>
            <Link href="/about" className="btn btn-secondary">
              About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Games Section */}
      <section className="section bg-gray-100">
        <div className="container-custom">
          <h2 className="text-center mb-12">Featured Games</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Game Card 1 */}
            <div className="card group">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/images/Games Page/the-voyage-arise.jpg"
                  alt="The Voyage: ARISE"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2">The Voyage: ARISE</h3>
                <p className="text-gray-600 mb-4">
                  A post-apocalyptic survival game set in the harsh wilderness of Northern Norway.
                </p>
                <Link href="/games/the-voyage-arise" className="btn btn-primary">
                  Learn More
                </Link>
              </div>
            </div>

            {/* Game Card 2 */}
            <div className="card group">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/images/Games Page/frost-haven.jpg"
                  alt="Frost Haven"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2">Frost Haven</h3>
                <p className="text-gray-600 mb-4">
                  A cooperative survival game where players must work together to survive in a frozen wasteland.
                </p>
                <Link href="/games/frost-haven" className="btn btn-primary">
                  Learn More
                </Link>
              </div>
            </div>

            {/* Coming Soon Card */}
            <div className="card group">
              <div className="relative h-64 overflow-hidden bg-gray-200">
                <Image
                  src="/images/Games Page/project-nova.jpg"
                  alt="Project Nova"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <span className="text-white text-xl font-bold px-4 py-2 border-2 border-white rounded-md">
                    Coming Soon
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-2">Project Nova</h3>
                <p className="text-gray-600 mb-4">
                  Our upcoming title that will redefine the survival genre. Stay tuned for more information.
                </p>
                <button className="btn btn-secondary" disabled>
                  Coming 2025
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">About Sirius Gaming</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2020, Sirius Gaming is an independent game development studio focused on creating immersive post-apocalyptic and survival games that challenge players and tell compelling stories.
              </p>
              <p className="text-gray-600 mb-6">
                Our team of passionate developers, artists, and storytellers work together to create unique gaming experiences that push the boundaries of the genre.
              </p>
              <Link href="/about" className="btn btn-primary">
                Learn More About Us
              </Link>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/images/About Page/team-photo.jpg"
                alt="Sirius Gaming Team"
                width={800}
                height={600}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="section bg-gray-100">
        <div className="container-custom">
          <h2 className="text-center mb-12">Latest from Our Blog</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blog Post 1 */}
            <div className="card group">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/images/the-evolution-of-survival-games/title-image.png"
                  alt="The Evolution of Survival Games"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2">The Evolution of Survival Games</h3>
                <p className="text-gray-500 mb-2">November 18, 2024</p>
                <p className="text-gray-600 mb-4">
                  Exploring how survival games have evolved from simple text adventures to complex, immersive experiences.
                </p>
                <Link href="/blog/evolution-survival-games" className="text-secondary hover:text-secondary-dark">
                  Read More →
                </Link>
              </div>
            </div>

            {/* Blog Post 2 */}
            <div className="card group">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/images/art-direction-in-post-apocalyptic-games/collage.png"
                  alt="Art Direction in Post-Apocalyptic Games"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2">Art Direction in Post-Apocalyptic Games</h3>
                <p className="text-gray-500 mb-2">February 15, 2025</p>
                <p className="text-gray-600 mb-4">
                  A deep dive into the visual aesthetics of post-apocalyptic games and how they've evolved over time.
                </p>
                <Link href="/blog/art-direction-post-apocalyptic-games" className="text-secondary hover:text-secondary-dark">
                  Read More →
                </Link>
              </div>
            </div>

            {/* Blog Post 3 */}
            <div className="card group">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/images/character-design-process/Sami Banner.png"
                  alt="Character Design Process"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2">Character Design Process</h3>
                <p className="text-gray-500 mb-2">December 5, 2024</p>
                <p className="text-gray-600 mb-4">
                  An inside look at how we design and develop characters for our post-apocalyptic games.
                </p>
                <Link href="/blog/character-design-process" className="text-secondary hover:text-secondary-dark">
                  Read More →
                </Link>
              </div>
            </div>
          </div>
          <div className="text-center mt-10">
            <Link href="/blog" className="btn btn-primary">
              View All Blog Posts
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="mb-6">Join Our Community</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Stay updated on our latest games, development updates, and exclusive content by joining our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn bg-white text-primary hover:bg-gray-100">
              Contact Us
            </Link>
            <a
              href="https://discord.gg/siriusgaming"
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-[#5865F2] text-white hover:bg-[#4752C4]"
            >
              Join Our Discord
            </a>
          </div>
        </div>
      </section>
    </>
  );
}