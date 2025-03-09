# Sirius Gaming Website

![Sirius Gaming Logo](https://raw.githubusercontent.com/DoctorMorDi/sirius-gaming-website/main/public/images/Logos/sirius-gaming-logo.png)

## Overview

This is the official website for Sirius Gaming, a game development studio focused on creating immersive post-apocalyptic and survival games. The website showcases our games, team, blog posts, and company information.

## Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Vercel

## Features

- **Responsive Design**: Fully responsive website that works on all devices
- **Dynamic Blog**: Blog system with dynamic routing and rich content
- **Game Showcase**: Portfolio of our games with detailed information
- **Team Profiles**: Information about our team members
- **Contact Form**: Easy way for visitors to get in touch
- **Newsletter Signup**: Integration with email marketing service

## Project Structure

```
sirius-gaming-website/
├── app/                  # Next.js app router
│   ├── about/            # About page
│   ├── blog/             # Blog pages
│   │   └── [slug]/       # Dynamic blog post pages
│   ├── contact/          # Contact page
│   ├── games/            # Games showcase page
│   ├── components/       # Reusable components
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── public/               # Static assets
│   ├── images/           # Image files
│   └── posts/            # PDF versions of blog posts
├── styles/               # Global styles
├── types/                # TypeScript type definitions
├── next.config.js        # Next.js configuration
└── tailwind.config.js    # Tailwind CSS configuration
```

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/DoctorMorDi/sirius-gaming-website.git
   cd sirius-gaming-website
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Deployment

The website is automatically deployed to Vercel when changes are pushed to the main branch.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is proprietary and owned by Sirius Gaming. All rights reserved.

## Contact

For any inquiries, please reach out to us at contact@sirius-gaming.com