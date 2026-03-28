# Portfolio 2.0

A modern, interactive developer portfolio built with React, TypeScript, Vite, and Tailwind CSS. Features smooth animations, 3D elements, internationalization (EN/FR), and multiple layout versions for different audiences.

## Features

- Fast development with Vite build system
- Modern UI styled with Tailwind CSS v4
- Multi-language support: English and French with react-i18next
- Smooth animations: Framer Motion, GSAP, and Motion animations
- Interactive 3D elements: Three.js, React Three Fiber with physics (Rapier)
- Multi-version layouts: Student version and Professional (Pro) version
- Carousel components for technology showcases
- Circular gallery for project presentations
- Text animation effects: blur and split text
- Downloadable PDF resumes in both languages
- Responsive design with mobile-first approach
- Dark theme UI with language/theme switching
- Calendly integration for professional version
- Contact form with validation
- Particle effects and dynamic backgrounds

## Sections

- **Hero** - Animated introduction with particle effects (version-specific layouts)
- **Services** - Service offerings (Professional version only)
- **Stack** - Technology stack showcase with interactive carousels
- **What I Use** - Detailed tech categories
- **Projects** - Portfolio projects with circular gallery
- **Contact** - Contact form and social media links
- **Navbar & Footer** - Navigation and footer components

## Tech Stack

### Frontend Framework
- React 19 - Latest React with concurrent features
- TypeScript 5.8 - Type-safe development
- Vite 7 - Fast build tool and dev server
- React Router 7 - Client-side routing

### Styling & Animation
- Tailwind CSS v4 - Utility-first CSS framework
- Tailwind CSS Vite plugin - Optimized CSS
- Framer Motion - React animation library
- GSAP - Advanced animation engine
- Motion - Animation utilities

### 3D Graphics
- Three.js - 3D graphics library
- React Three Fiber - React renderer for Three.js
- React Three Drei - Useful helpers for Three.js
- React Three Rapier - Physics engine integration
- OGL - Lightweight WebGL library
- Meshline - Animated line drawing

### UI & Components
- Radix UI - Accessible component primitives
- Tabler Icons - Icon library
- Lucide React - Icon library
- Class Variance Authority - Component variants
- clsx & tailwind-merge - Utility functions

### Forms & Utilities
- React Hook Form - Efficient form state management
- i18next - Internationalization framework
- react-i18next - React bindings for i18next
- Intersection Observer - Viewport detection

### Build & Development
- @tailwindcss/vite - Tailwind CSS Vite integration
- ESLint - Code linting
- Puppeteer - Headless browser automation (PDF generation)
- tw-animate-css - Tailwind animation utilities

## Project Structure

```
src/
├── components/
│   ├── bits/                  # Animation and special components
│   │   ├── Backgrounds/
│   │   │   └── Particles/     # Particle effects system
│   │   └── Components/
│   │       ├── Carousel/      # Reusable carousel component
│   │       └── CircularGallery/ # Project showcase gallery
│   ├── magicui/               # Third-party UI components
│   ├── reusable/              # Reusable components (Switch, etc.)
│   ├── sections/              # Main page sections
│   │   ├── Hero.tsx           # Student version hero
│   │   ├── HeroPro.tsx        # Professional version hero
│   │   ├── Services.tsx       # Professional services section
│   │   ├── Stack.tsx          # Tech stack carousel
│   │   ├── WhatIUse.tsx       # Detailed tech categories
│   │   ├── Project.tsx        # Project showcase
│   │   ├── Contact.tsx        # Contact form
│   │   ├── Navbar.tsx         # Navigation
│   │   └── Footer.tsx         # Footer
│   └── ui/                    # Base UI components
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       ├── label.tsx
│       └── textarea.tsx
├── context/
│   └── VersionContext.tsx     # Version switching (student/pro)
├── data/                      # Static data
├── hooks/                     # Custom React hooks
│   └── useVersionT.ts         # Version context hook
├── i18n.ts                    # i18next configuration
├── lib/
│   └── utils.ts               # Utility functions
├── locales/                   # Translation files (en.json, fr.json)
├── pages/
│   └── Home.tsx               # Main page component
├── types/
│   └── portfolio.ts           # TypeScript type definitions
├── App.tsx                    # Root app component
└── main.tsx                   # React entry point
```

## Getting Started

### Prerequisites
- Node.js 18+
- pnpm or npm

### Installation

```bash
# Install dependencies
pnpm install

# Or with npm
npm install
```

### Development

```bash
# Start development server (http://localhost:5173)
pnpm dev
```

### Build & Preview

```bash
# Build for production
pnpm build

# Preview production build
pnpm preview
```

### Code Quality

```bash
# Run ESLint
pnpm lint

# Generate PDF resumes
pnpm generate-pdfs
```

## Version Modes

The portfolio supports two versions via URL routing:

- **Student Version** - Main portfolio (URL: `/` or `/etudiant`)
  - Student-focused hero section
  - Standard project showcase

- **Professional Version** - SolidScale services (URL: `/pro` if configured)
  - Professional hero section (HeroPro.tsx)
  - Services section highlighting automation offerings
  - Calendly booking widget integration

Switch between versions using the context menu or directly via routing.

## Internationalization

Translations are configured via i18next with support for:
- English (en)
- French (fr)

Translation files are located in `src/locales/` and loaded on app initialization. Language preference persists in localStorage.

## Features Breakdown

### Animations
- Text blur and split effects via Framer Motion
- Smooth component transitions using GSAP
- Particle background effects
- Page scroll animations with Intersection Observer

### Interactive Elements
- Carousel component for tech stack
- Circular gallery for project showcase
- Animated particles background
- 3D elements using Three.js and React Three Fiber

### PDF Generation
The `generate-pdfs` script uses Puppeteer to create downloadable resume PDFs in both English and French from HTML templates.

## Configuration Files

- `vite.config.ts` - Vite configuration with React and Tailwind plugins
- `tailwind.config.js` - Tailwind CSS custom configuration
- `tsconfig.json` - TypeScript configuration
- `eslint.config.js` - ESLint rules
- `components.json` - Component generator config
- `vercel.json` - Deployment configuration for Vercel

## Deployment

The portfolio is configured for Vercel deployment. Configuration is in `vercel.json`.

```bash
# Deploy to Vercel
# (Automatic on git push or manual via Vercel CLI)
```

## License

This project is for personal portfolio use. Feel free to fork and adapt for your own portfolio.

## Contributing

Contributions are welcome. Please feel free to submit issues and enhancement requests.
