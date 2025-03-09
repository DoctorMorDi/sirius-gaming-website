import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { FaDownload } from 'react-icons/fa';
import type { BlogPost } from '@/types/blog';

// This would typically come from a database or CMS
const blogPosts: Record<string, BlogPost> = {
  'evolution-survival-games': {
    title: 'The Evolution of Survival Games',
    date: 'November 18, 2024',
    author: {
      name: 'Bon Gevann',
      role: 'Lead Developer',
      image: '/images/Blog Post Page/Knut Erik Bonnier (small)-1.png'
    },
    heroImage: '/images/the-evolution-of-survival-games/title-image.png',
    content: [
      {
        type: 'text',
        content: 'Survival games have become a cornerstone of the gaming industry, challenging players to overcome harsh conditions, manage resources, and outlast natural and supernatural threats. But this thriving genre wasn&apos;t fully formed—it evolved through decades of innovation and experimentation. Let&apos;s explore how survival games transformed from simple text adventures to the complex, immersive experiences we enjoy today.'
      },
      {
        type: 'image',
        src: '/images/the-evolution-of-survival-games/unreal-world 1.png',
        alt: 'UnReal World - One of the first true survival games',
        caption: 'UnReal World (1992) pioneered the survival genre with its open world and realistic survival mechanics.'
      },
      {
        type: 'text',
        content: 'In 1992, "UnReal World" emerged as perhaps the first true survival game. It featured an open world set in ancient Finland, where players hunted, fished, and crafted to survive. This indie title continues to receive updates even today, making it one of the longest-supported games in history.'
      },
      // Additional content blocks would be here
    ],
    pdf: {
      title: 'The Evolution of Survival Games: Past, Present, and Future',
      path: '/posts/the-evolution-of-survival-games/The Evolution of Survival Games_ Past, Present, and Future.pdf'
    }
  },
  'art-direction-post-apocalyptic-games': {
    title: 'Art Direction in Post-Apocalyptic Games',
    date: 'February 15, 2025',
    author: {
      name: 'Enrico Kanutè',
      role: 'Art Director',
      image: '/images/Blog Post Page/Knut Erik Bonnier (small)-1.png'
    },
    heroImage: '/images/art-direction-in-post-apocalyptic-games/collage.png',
    content: [
      {
        type: 'text',
        content: 'Few settings in the vast landscape of video game genres capture the imagination quite like the post-apocalyptic world. These broken civilizations, ravaged environments, and struggling survivors have become a staple of gaming, evolving dramatically in their visual representation over the decades. As we look toward the future, emerging technologies reshape how we envision and create these desolate yet captivating worlds.'
      },
      {
        type: 'image',
        src: '/images/art-direction-in-post-apocalyptic-games/post-apocalyptic1.png',
        alt: 'Early post-apocalyptic game aesthetics',
        caption: 'Early post-apocalyptic games relied on limited color palettes and simplistic representations.'
      },
      {
        type: 'text',
        content: 'The earliest post-apocalyptic games relied heavily on limited color palettes and simplistic representations. Games like "Wasteland" (1988) used sparse pixel art to convey desolation, while "Fallout" (1997) established the retro-futuristic aesthetic that would become iconic to the genre—combining 1950s Americana with nuclear devastation.'
      },
      // Additional content blocks would be here
    ],
    pdf: {
      title: 'Art Direction in Post-Apocalyptic Games: From Ruins to Renaissance',
      path: '/posts/art-direction-in-post-apocalyptic-games/Art Direction in Post-Apocalyptic Games_ From Ruins to Renaissance.pdf'
    }
  },
  // Additional blog posts would be defined here
};

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts[params.slug];
  
  if (!post) {
    return {
      title: 'Blog Post Not Found',
    };
  }
  
  return {
    title: post.title,
    description: post.content.find(block => block.type === 'text')?.content.substring(0, 160) + '...',
    openGraph: {
      title: post.title,
      description: post.content.find(block => block.type === 'text')?.content.substring(0, 160) + '...',
      type: 'article',
      authors: [post.author.name],
      publishedTime: post.date,
      images: [
        {
          url: post.heroImage,
          alt: post.title,
        },
      ],
    },
  };
}

export default function BlogPost({ params }: Props) {
  const post = blogPosts[params.slug];
  
  if (!post) {
    notFound();
  }
  
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  
  return (
    <article className="pt-24 pb-16">
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[60vh] mb-8">
        <Image
          src={post.heroImage}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
          <div className="container-custom pb-12">
            <h1 className="text-white mb-4">{post.title}</h1>
            <div className="flex items-center text-white">
              <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                <Image
                  src={post.author.image}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-semibold">{post.author.name}</p>
                <p className="text-sm opacity-80">{post.author.role} • {formattedDate}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* PDF Download */}
          {post.pdf && (
            <div className="bg-gray-100 p-6 rounded-lg mb-8 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-1">Download PDF Version</h3>
                <p className="text-gray-600">{post.pdf.title}</p>
              </div>
              <a
                href={post.pdf.path}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary flex items-center"
              >
                <FaDownload className="mr-2" />
                Download
              </a>
            </div>
          )}
          
          {/* Post Content */}
          <div className="prose prose-lg max-w-none">
            {post.content.map((block, index) => (
              <div key={index}>
                {block.type === 'text' && (
                  <p>{block.content}</p>
                )}
                
                {block.type === 'image' && (
                  <div className="my-8">
                    <div className="relative w-full rounded-lg overflow-hidden">
                      <Image
                        src={block.src}
                        alt={block.alt}
                        width={1200}
                        height={800}
                        className="w-full h-auto object-contain"
                        style={{ maxHeight: '80vh' }}
                      />
                    </div>
                    {block.caption && (
                      <p className="text-center text-gray-400 mt-2">{block.caption}</p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Back to Blog */}
          <div className="mt-12 text-center">
            <Link href="/blog" className="btn btn-secondary">
              Back to Blog
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}