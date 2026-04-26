# Modern Bold Portfolio | Ayush Ghosh

A premium, high-contrast personal portfolio designed for UI/UX Designers and Full Stack Developers. This project features a modern, bold aesthetic with a signature orange accent, smooth animations, and a multi-page architecture.

## ✨ Features

- **🎯 Bold Design System:** High-contrast Black, White, and Grey theme with a strong International Orange (`#FF5722`) accent.
- **🚀 Multi-Page Architecture:** Organized into logical routes (Home, About, Skills, Projects, Contact) using Next.js App Router.
- **🎭 Smooth Animations:** Powered by `framer-motion` for fluid entrance transitions, hover effects, and parallax-style typography.
- **📱 Fully Responsive:** Optimized for all devices with a modern floating capsule navbar for mobile and desktop.
- **🖼️ Grayscale Aesthetics:** Professional grayscale image treatments that transition to color on interaction.
- **🌓 Dark Mode:** Built-in dark mode support with `next-themes`.

## 🛠️ Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Theme Management:** [Next Themes](https://github.com/pacocoursey/next-themes)

## 📁 Project Structure

```text
src/
├── app/               # Next.js App Router (Pages & Layout)
│   ├── about/         # About & Experience page
│   ├── contact/       # Contact page
│   ├── projects/      # Projects showcase page
│   ├── skills/        # Technical skills page
│   └── layout.tsx     # Global layout (Navbar, Footer, Providers)
├── components/        # Reusable UI Components
│   ├── hero.tsx       # Bold landing section
│   ├── about.tsx      # Split-layout about section
│   ├── navbar.tsx     # Floating capsule navigation
│   ├── featured-projects.tsx # High-contrast project cards
│   └── ...            # Other UI elements
└── globals.css        # Tailwind directives and global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or later
- npm / yarn / pnpm / bun

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open the project:**
   Visit [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 License

This project is open-source and available under the [MIT License](LICENSE).

---

Designed and Developed by **Ayush Ghosh**
