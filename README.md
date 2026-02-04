# Motion Lab

An evolving collection of interactive animations and micro-interactions built with Next.js 15 and Framer Motion. This project serves as both a personal playground for motion design exploration and a reference library for implementing smooth, performant animation patterns in modern React applications.

## Overview

This repository is a continuously growing showcase of animation techniques and interactive components. Each experiment focuses on a specific motion concept—from scroll-driven effects to hover interactions to complex orchestrated animations. New components are added regularly as ideas are explored and refined.

The project is structured as a gallery-style landing page where each animation is presented alongside its description and technical characteristics.

## Current Experiments

The collection currently includes:

- **Ripple Motion** — Line-by-line SVG animation with proximity-based hover effects
- **Isometric Layers** — Stacked cards with hover-driven depth expansion
- **Scroll Text** — Scroll-driven text carousel with blur and focus transitions
- **Circle Orbit** — Orbital text arrangement with scroll-controlled rotation
- **Prism Effect** — Card slicing animation with geometric decomposition

More experiments are added over time. Check back or watch the repository for updates.

## Tech Stack

- **Framework**: Next.js 15 with Turbopack
- **Animation**: Framer Motion (motion/react)
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript
- **Runtime**: React 19

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/jsmikat/MotionLab.git

# Navigate to the project directory
cd MotionLab

# Install dependencies
pnpm install

# Start the development server
pnpm dev
```

The application will be available at `http://localhost:3000`.

### Build

```bash
pnpm build
pnpm start
```

## Project Structure

```
├── app/
│   ├── page.tsx          # Main gallery page
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/
│   ├── [ComponentName].tsx
│   └── supportingComponents/
├── lib/
│   └── utils.ts
└── public/
    └── assets/
```

## Usage

Components are designed to be self-contained and reusable. Each can be dropped into any React project with minimal configuration:

```tsx
import CircleScroll from "@/components/CircleScroll";
import SmoothScrollText from "@/components/SmoothScrollText";

export default function Page() {
  return (
    <>
      <SmoothScrollText infinite={true} />
      <CircleScroll size={420} />
    </>
  );
}
```

Refer to individual component files for available props and customization options.

## Design Principles

- **Minimal aesthetic** — Neutral palette with purposeful accents
- **Performance first** — GPU-accelerated transforms and opacity
- **Isolation** — Each component is independent and portable
- **Iteration** — Components evolve and improve over time

## Contributing

This is primarily a personal exploration project, but suggestions and ideas are welcome through issues.

## License

MIT
