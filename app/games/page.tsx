import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Games | Sirius Gaming',
  description: 'Explore our portfolio of immersive post-apocalyptic and survival games, including The Voyage: ARISE and Frost Haven.',
};

const games = [
  {
    id: 'the-voyage-arise',
    title: 'The Voyage: ARISE',
    status: 'In Development',
    releaseDate: 'Coming 2025',
    platforms: ['PC', 'PlayStation 5', 'Xbox Series X|S'],
    description:
      'A post-apocalyptic survival game set in the harsh wilderness of Northern Norway. After a global catastrophe, you must navigate a world where nature has reclaimed civilization and the few remaining humans struggle to survive.',
    features: [
      'Open-world survival in a meticulously crafted Northern Norwegian landscape',
      'Dynamic weather system with realistic effects on gameplay',
      'Deep crafting and building mechanics',
      'Narrative-driven quests and environmental storytelling',
      'Cooperative multiplayer for up to 4 players',
    ],
    images: [
      {
        src: '/images/Games Page/the-voyage-arise-1.jpg',
        alt: 'The Voyage: ARISE - Snowy landscape',
      },
      {
        src: '/images/Games Page/the-voyage-arise-2.jpg',
        alt: 'The Voyage: ARISE - Character crafting',
      },
      {
        src: '/images/Games Page/the-voyage-arise-3.jpg',
        alt: 'The Voyage: ARISE - Abandoned settlement',
      },
    ],
    mainImage: '/images/Games Page/the-voyage-arise.jpg',
  },
  {
    id: 'frost-haven',
    title: 'Frost Haven',
    status: 'Released',
    releaseDate: 'November 2022',
    platforms: ['PC', 'PlayStation 5', 'Xbox Series X|S'],
    description:
      'A cooperative survival game where players must work together to survive in a frozen wasteland. Build shelters, gather resources, and defend against the elements and hostile wildlife.',
    features: [
      'Cooperative gameplay for up to 8 players',
      'Procedurally generated world ensures each playthrough is unique',
      'Complex survival mechanics including temperature, hunger, and thirst',
      'Base building and defense systems',
      'Day/night cycle with increased dangers after dark',
    ],
    images: [
      {
        src: '/images/Games Page/frost-haven-1.jpg',
        alt: 'Frost Haven - Base camp',
      },
      {
        src: '/images/Games Page/frost-haven-2.jpg',
        alt: 'Frost Haven - Hunting',
      },
      {
        src: '/images/Games Page/frost-haven-3.jpg',
        alt: 'Frost Haven - Blizzard survival',
      },
    ],
    mainImage: '/images/Games Page/frost-haven.jpg',
  },
  {
    id: 'project-nova',
    title: 'Project Nova',
    status: 'Coming Soon',
    releaseDate: 'TBA 2025',
    platforms: ['PC', 'PlayStation 5', 'Xbox Series X|S'],
    description:
      'Our upcoming title that will redefine the survival genre. More information coming soon.',
    features: [
      'Revolutionary survival mechanics',
      'Stunning next-gen visuals',
      'Innovative multiplayer integration',
      'Dynamic world events',
      'Advanced AI systems',
    ],
    images: [
      {
        src: '/images/Games Page/project-nova-teaser.jpg',
        alt: 'Project Nova - Teaser image',
      },
    ],
    mainImage: '/images/Games Page/project-nova.jpg',
  },
];

export default function GamesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <Image
          src="/images/Games Page/games-hero.jpg"
          alt="Sirius Gaming Games"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="container-custom relative z-10 text-center text-white">
          <h1 className="mb-6">Our Games</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Immersive post-apocalyptic and survival experiences that challenge players and tell compelling stories.
          </p>
        </div>
      </section>

      {/* Games Showcase */}
      <section className="py-16">
        <div className="container-custom">
          {games.map((game, index) => (
            <div
              key={game.id}
              className={`mb-24 ${
                index === games.length - 1 ? 'mb-0' : ''
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
                <div
                  className={`${
                    index % 2 === 1 ? 'lg:order-2' : ''
                  }`}
                >
                  <div className="relative h-96 rounded-lg overflow-hidden">
                    <Image
                      src={game.mainImage}
                      alt={game.title}
                      fill
                      className="object-cover"
                    />
                    {game.status === 'Coming Soon' && (
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <span className="text-white text-xl font-bold px-4 py-2 border-2 border-white rounded-md">
                          Coming Soon
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                <div
                  className={`${
                    index % 2 === 1 ? 'lg:order-1' : ''
                  }`}
                >
                  <div className="flex items-center mb-4">
                    <h2 className="mb-0 mr-4">{game.title}</h2>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        game.status === 'Released'
                          ? 'bg-green-100 text-green-800'
                          : game.status === 'In Development'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-purple-100 text-purple-800'
                      }`}
                    >
                      {game.status}
                    </span>
                  </div>
                  <p className="text-gray-500 mb-4">
                    {game.releaseDate} • {game.platforms.join(', ')}
                  </p>
                  <p className="text-gray-600 mb-6">{game.description}</p>
                  <h3 className="text-xl mb-4">Key Features</h3>
                  <ul className="list-disc pl-5 mb-6 text-gray-600">
                    {game.features.map((feature, i) => (
                      <li key={i} className="mb-2">
                        {feature}
                      </li>
                    ))}
                  </ul>
                  {game.status !== 'Coming Soon' && (
                    <Link
                      href={`/games/${game.id}`}
                      className="btn btn-primary"
                    >
                      Learn More
                    </Link>
                  )}
                </div>
              </div>

              {/* Game Gallery */}
              {game.status !== 'Coming Soon' && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {game.images.map((image, i) => (
                    <div
                      key={i}
                      className="relative h-64 rounded-lg overflow-hidden"
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="mb-6">Stay Updated</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Follow us on social media and join our newsletter to get the latest updates on our games, development insights, and exclusive content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="btn bg-white text-primary hover:bg-gray-100"
            >
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