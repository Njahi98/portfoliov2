# Portfolio V2

A modern, full-featured portfolio website built with Next.js, and TypeScript. Features multiple language support, dark mode, and a fully responsive design.

## Features

- Next.js 16 with App Router
- TypeScript for type safety
- Internationalization (i18n) support - English and French
- Dark/Light theme switching
- Fully responsive design (mobile, tablet, desktop)
- shadcn/ui component library
- Smooth carousel component for projects
- Organized sections: Home, Experience, Projects, Stack, Contact

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (or npm/yarn)

### Installation

1. Clone the repository
2. Install dependencies:

```bash
pnpm install
```

3. Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
app/                    # Next.js app directory
├── [lng]/              # Language-based routing
│   ├── page.tsx        # Home page
│   ├── layout.tsx      # Root layout
│   ├── contact/        # Contact page
│   ├── experience/     # Experience page
│   ├── projects/       # Projects page & details
│   └── stack/          # Tech stack page
├── i18n/               # Internationalization config

components/            # React components
├── ui/                 # shadcn/ui components
├── layout/             # Page layout components
└── data/               # Static data (experience, projects, stack, etc.)

public/               # Static assets
hooks/                # Custom React hooks
lib/                  # Utilities and helpers
```

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint


## Customization

### Edit Portfolio Data

- **Experience**: `components/data/experience.ts`
- **Projects**: `components/data/projects.ts`
- **Tech Stack**: `components/data/stack-category.ts`
- **Contact Info**: `components/data/contact-data.ts`
- **Navigation**: `components/data/nav-items.ts`

### Add Translations

Add new translation keys in:
- `app/i18n/locales/en/` - English translations
- `app/i18n/locales/fr/` - French translations

## Tech Stack

- Next.js 16
- React 19
- TypeScript 5.9
- Tailwind CSS
- shadcn/ui
- next-i18next (for i18n)
- PostCSS
