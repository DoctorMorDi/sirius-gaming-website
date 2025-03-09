import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Sirius Gaming',
  description: 'Read the latest news, development updates, and insights from the Sirius Gaming team.',
};

// This would typically come from a database or CMS
const blogPosts = [
  {
    slug: 'evolution-survival-games',
    title: 'The Evolution of Survival Games',
    date: 'November 18, 2024',
    author: 'Bon Gevann',
    excerpt: 'Exploring how survival games have evolved from simple text adventures to complex, immersive experiences.',
    image: '/images/the-evolution-of-survival-games/title-image.png',
  },
  {
    slug: 'art-direction-post-apocalyptic-games',
    title: 'Art Direction in Post-Apocalyptic Games',
    date: 'February 15, 2025',
    author: 'Enrico Kanutè',
    excerpt: 'A deep dive into the visual aesthetics of post-apocalyptic games and how they've evolved over time.',
    image: '/images/art-direction-in-post-apocalyptic-games/collage.png',
  },
  {
    slug: 'virtual-apocalypse',
    title: 'Virtual Apocalypse: Crafting Immersive Post-Apocalyptic Worlds in VR and AR',
    date: 'February 28, 2025',
    author: 'Bon Gevann',
    excerpt: 'How virtual and augmented reality are transforming the way we create and experience post-apocalyptic worlds.',
    image: '/images/virtual_apocalypse/vr1.png',
  },
  {
    slug: 'character-design-process',
    title: 'Character Design Process',
    date: 'December 5, 2024',
    author: 'Enrico Kanutè',
    excerpt: 'An inside look at how we design and develop characters for our post-apocalyptic games.',
    image: '/images/character-design-process/Sami Banner.png',
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-primary">
        <div className="container-custom text-center text-white">
          <h1 className="mb-6">Blog</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Insights, updates, and stories from the Sirius Gaming team
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group"
              >
                <div className="card h-full flex flex-col transition-transform duration-300 group-hover:shadow-lg">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="mb-2 group-hover:text-secondary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-500 text-sm mb-3">
                      {post.date} • {post.author}
                    </p>
                    <p className="text-gray-600 mb-4 flex-grow">{post.excerpt}</p>
                    <div className="text-secondary font-medium group-hover:text-secondary-dark transition-colors">
                      Read More →
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-100">
        <div className="container-custom max-w-4xl mx-auto text-center">
          <h2 className="mb-6">Subscribe to Our Newsletter</h2>
          <p className="text-gray-600 mb-8">
            Get the latest blog posts, game updates, and exclusive content delivered directly to your inbox.
          </p>
          <form className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary"
                required
              />
              <button
                type="submit"
                className="btn btn-primary whitespace-nowrap"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}