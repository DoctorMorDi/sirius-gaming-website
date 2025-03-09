import './globals.css';
import { Inter, Montserrat } from 'next/font/google';
import Header from './components/Header';
import Footer from './components/Footer';
import { Metadata } from 'next';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: {
    default: 'Sirius Gaming | Game Development Studio',
    template: '%s | Sirius Gaming',
  },
  description: 'Sirius Gaming is a game development studio focused on creating immersive post-apocalyptic and survival games.',
  keywords: ['game development', 'post-apocalyptic', 'survival games', 'indie games', 'game studio'],
  authors: [{ name: 'Sirius Gaming Team' }],
  creator: 'Sirius Gaming',
  publisher: 'Sirius Gaming',
  openGraph: {
    title: 'Sirius Gaming | Game Development Studio',
    description: 'Sirius Gaming is a game development studio focused on creating immersive post-apocalyptic and survival games.',
    url: 'https://sirius-gaming.com',
    siteName: 'Sirius Gaming',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sirius Gaming | Game Development Studio',
    description: 'Sirius Gaming is a game development studio focused on creating immersive post-apocalyptic and survival games.',
    creator: '@siriusgaming',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}