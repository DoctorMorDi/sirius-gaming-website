import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Sirius Gaming',
  description: 'Learn about Sirius Gaming, our team, our mission, and our passion for creating immersive post-apocalyptic and survival games.',
};

const teamMembers = [
  {
    name: 'Bon Gevann',
    role: 'Lead Developer',
    image: '/images/About Page/team-member-1.jpg',
    bio: 'With over 15 years of experience in game development, Bon leads our development team with a focus on creating immersive gameplay mechanics and innovative systems.',
  },
  {
    name: 'Enrico Kanutè',
    role: 'Art Director',
    image: '/images/About Page/team-member-2.jpg',
    bio: 'Enrico brings his unique artistic vision to our games, creating the distinctive visual style that defines Sirius Gaming's post-apocalyptic worlds.',
  },
  {
    name: 'Lina Nordberg',
    role: 'Narrative Designer',
    image: '/images/About Page/team-member-3.jpg',
    bio: 'Lina crafts the compelling stories and characters that bring our game worlds to life, with a background in both literature and game design.',
  },
  {
    name: 'Mikkel Johansen',
    role: 'Technical Artist',
    image: '/images/About Page/team-member-4.jpg',
    bio: 'Bridging the gap between art and technology, Mikkel ensures our visual assets are both beautiful and technically optimized.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <Image
          src="/images/About Page/about-hero.jpg"
          alt="Sirius Gaming Team"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="container-custom relative z-10 text-center text-white">
          <h1 className="mb-6">About Sirius Gaming</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We are a passionate team of developers, artists, and storytellers creating immersive post-apocalyptic and survival games.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2020, Sirius Gaming was born from a shared passion for post-apocalyptic fiction and survival games. Our founding team had previously worked at various AAA studios but wanted to create games with more creative freedom and narrative depth.
              </p>
              <p className="text-gray-600 mb-4">
                Starting with a small team of five developers working remotely, we released our first title, "Frost Haven," in 2022. The game's success allowed us to expand our team and establish our studio in Tromsø, Norway.
              </p>
              <p className="text-gray-600">
                Today, we're a team of 15 dedicated professionals working on our most ambitious project yet: "The Voyage: ARISE," a post-apocalyptic survival game set in the harsh wilderness of Northern Norway.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/images/About Page/our-story.jpg"
                alt="Sirius Gaming Studio"
                width={800}
                height={600}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="section bg-gray-100">
        <div className="container-custom text-center">
          <h2 className="mb-6">Our Mission</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
            We create games that challenge players to survive, explore, and connect in richly detailed post-apocalyptic worlds that tell meaningful stories about human resilience and the consequences of our choices.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-6">
                1
              </div>
              <h3 className="mb-4">Immersive Worlds</h3>
              <p className="text-gray-600">
                We craft detailed, believable environments that react to player choices and tell environmental stories.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-6">
                2
              </div>
              <h3 className="mb-4">Meaningful Choices</h3>
              <p className="text-gray-600">
                Our games present players with difficult decisions that have real consequences for their character and the world.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-6">
                3
              </div>
              <h3 className="mb-4">Human Stories</h3>
              <p className="text-gray-600">
                At the heart of our apocalyptic settings are stories about human connection, loss, hope, and resilience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section">
        <div className="container-custom">
          <h2 className="text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden mb-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="object-cover"
                  />
                </div>
                <h3 className="mb-2">{member.name}</h3>
                <p className="text-secondary font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="section bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="mb-6">Join Our Team</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            We're always looking for talented individuals who are passionate about creating immersive gaming experiences. Check out our current openings or send us your portfolio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/careers" className="btn bg-white text-primary hover:bg-gray-100">
              View Open Positions
            </Link>
            <Link href="/contact" className="btn border-2 border-white text-white hover:bg-white hover:text-primary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}