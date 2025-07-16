# Life Planning Application

A modern Life Planning application built with React 19 and TypeScript, featuring a complete UI component library and responsive design system.

## 🚀 Project Overview

This application helps users plan their financial future with intuitive interfaces for investment strategies, long-term planning, and financial goal tracking. Built with modern web technologies and a comprehensive design system.

## 🛠️ Tech Stack

- **React 19.1.0** - Latest React with concurrent features
- **TypeScript 5.8.3** - Full type safety with strict configuration
- **Vite 7.0.4** - Lightning-fast build tool and development server
- **Tailwind CSS 4.0** - Utility-first CSS framework (latest version)
- **shadcn/ui** - High-quality component library built on Radix UI
- **Biome 2.1.1** - Modern linter and formatter
- **pnpm** - Fast, disk space efficient package manager

## 🎨 Design System

### Color Palette
- **Green (#4ADE80)** - Money Momentum (positive financial outcomes)
- **Black (#000000)** - Long-Term (premium/serious planning)
- **Purple (#A855F7)** - Focussed (focused strategies)
- **Yellow (#FDE047)** - Fixed Income (guaranteed returns)

### Components
- **Button** - 6 variants (default, destructive, outline, secondary, ghost, link)
- **Card** - Header, Content, Footer system
- **Input** - Styled with focus states and accessibility
- **Badge** - Variant-based labels for categories
- **Separator** - Horizontal/vertical dividers
- **Sheet** - Modal/drawer component

## 📁 Project Structure

```
claude-rr-section-page/
├── src/
│   ├── main.tsx              # Application entry point
│   ├── app.tsx               # Main App component
│   ├── components/
│   │   └── ui/               # shadcn/ui components
│   ├── lib/
│   │   └── utils.ts          # Utility functions
│   └── assets/               # Static assets
├── docs/                     # Comprehensive documentation
│   ├── design-system.md      # Design system specifications
│   ├── tech-stack.md         # Technical documentation
│   ├── project-structure.md  # Project organization
│   └── ui-wireframe.md       # UI layout wireframes
├── public/                   # Static files
└── Configuration files...
```

## 🔧 Development

### Prerequisites
- Node.js 18+ 
- pnpm (recommended package manager)

### Setup
```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Available Scripts
```bash
pnpm dev      # Start development server (port 3000)
pnpm build    # Build for production
pnpm preview  # Preview production build
pnpm lint     # Lint code with Biome
pnpm lint:fix # Lint and fix code
pnpm format   # Format code with Biome
```

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 768px (1 column layout)
- **Tablet**: 768px - 992px (2 columns layout)
- **Desktop**: > 1200px (4 columns layout)

### Layout Strategy
- Mobile-first approach
- Progressive enhancement
- Touch-friendly interactions
- Accessible components

## 🎯 Key Features

### Modern Development
- Hot Module Replacement for instant updates
- TypeScript with strict type checking
- Path aliases (`@/*` → `./src/*`)
- Modern JavaScript (ES2022)

### Accessibility
- WCAG 2.1 AA compliant components
- Keyboard navigation support
- Screen reader optimized
- High contrast color schemes

### Performance
- Optimized bundle splitting
- Tree shaking for smaller bundles
- Lazy loading components
- Asset optimization

## 📋 Development Guidelines

### Code Quality
- **File Naming**: kebab-case (e.g., `design-system.md`)
- **Components**: PascalCase (e.g., `ButtonComponent.tsx`)
- **Formatting**: 2-space indentation, single quotes
- **TypeScript**: Strict mode enabled

### Architecture
- Component-based architecture
- Responsive design patterns
- Accessible UI components
- Type-safe development

## 📚 Documentation

Comprehensive documentation is available in the `/docs` directory:

- **[Tech Stack](docs/tech-stack.md)** - Technical architecture and tools
- **[Design System](docs/design-system.md)** - UI specifications and guidelines
- **[Project Structure](docs/project-structure.md)** - File organization and conventions
- **[UI Wireframes](docs/ui-wireframe.md)** - Layout specifications

## 🚀 Getting Started

1. **Clone the repository**
2. **Install dependencies**: `pnpm install`
3. **Start development**: `pnpm dev`
4. **Read documentation**: Check `/docs` for comprehensive guides
5. **Start building**: Use existing components from `@/components/ui/`

## 🎨 Design Reference

The application follows a comprehensive design system with:
- Consistent color palette for different plan types
- Responsive card layouts for financial plans
- Accessible form inputs and buttons
- Mobile-optimized navigation

## 🔐 Code Quality

- **Biome** for modern linting and formatting
- **TypeScript** strict mode for type safety
- **Component testing** ready infrastructure
- **Performance monitoring** setup

## 📄 License

This project is part of a Life Planning application development.

---

*Built with modern web technologies for excellent developer experience and user experience.*