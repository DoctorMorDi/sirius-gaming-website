'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FaTwitter, FaDiscord, FaYoutube, FaTwitch, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your newsletter service
    console.log('Subscribing email:', email);
    setSubscribed(true);
    setEmail('');
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link href="/">
              <Image
                src="/images/Sirius Gaming Logo (with text).png"
                alt="Sirius Gaming"
                width={180}
                height={50}
                className="h-10 w-auto mb-4"
              />
            </Link>
            <p className="text-gray-300 mb-4">
              Creating immersive post-apocalyptic and survival games that challenge players and tell compelling stories.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/siriusgaming"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://discord.gg/siriusgaming"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Discord"
              >
                <FaDiscord size={24} />
              </a>
              <a
                href="https://youtube.com/siriusgaming"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <FaYoutube size={24} />
              </a>
              <a
                href="https://twitch.tv/siriusgaming"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Twitch"
              >
                <FaTwitch size={24} />
              </a>
              <a
                href="https://instagram.com/siriusgaming"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/games" className="text-gray-300 hover:text-white transition-colors">
                  Games
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-gray-300 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="text-gray-300 hover:text-white transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter to receive updates on our latest games and blog posts.
            </p>
            {subscribed ? (
              <div className="bg-green-800 text-white p-3 rounded-md">
                Thanks for subscribing! Check your email to confirm.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-2">
                <div className="flex">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    required
                    className="flex-grow px-4 py-2 rounded-l-md text-gray-900 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="bg-secondary hover:bg-secondary-dark px-4 py-2 rounded-r-md transition-colors"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Sirius Gaming. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-2 md:mt-0">
            Designed and developed with ❤️ in Norway
          </p>
        </div>
      </div>
    </footer>
  );
}