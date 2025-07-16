# Tech Stack - Life Planning Application

## 🚀 Project Overview
Modern Life Planning application built with React 19 and TypeScript, featuring a complete UI component library and responsive design system.

## 🛠️ Core Technologies

### Frontend Framework
- **React 19.1.0** - Latest React with concurrent features
- **TypeScript 5.8.3** - Full type safety with strict configuration
- **Vite 7.0.4** - Lightning-fast build tool and dev server

### UI & Styling
- **Tailwind CSS 4.0** - Utility-first CSS framework (latest version)
- **shadcn/ui** - High-quality component library built on Radix UI
- **Radix UI Primitives** - Accessible, unstyled component primitives
  - `@radix-ui/react-dialog` (1.1.14)
  - `@radix-ui/react-separator` (1.1.7) 
  - `@radix-ui/react-slot` (1.2.3)
- **Lucide React** (0.525.0) - Beautiful, customizable icons
- **Class Variance Authority** (0.7.1) - Component variant management
- **clsx** & **tailwind-merge** - Utility functions for conditional classes

### Routing
- **React Router DOM 7.6.3** - Client-side routing (SSR disabled)

### Development Tools
- **Biome 2.1.1** - Modern linter and formatter (ESLint + Prettier replacement)
- **pnpm** - Fast, disk space efficient package manager
- **tw-animate-css** (1.3.5) - Animation utilities

## 📁 Project Structure

```
claude-rr-section-page/
├── src/
│   ├── main.tsx              # Application entry point
│   ├── app.tsx               # Main App component
│   ├── index.css             # Global styles with Tailwind imports
│   ├── app.css               # App-specific styles
│   ├── components/
│   │   └── ui/               # shadcn/ui components
│   │       ├── badge.tsx     # Badge component with variants
│   │       ├── button.tsx    # Button component with multiple variants
│   │       ├── card.tsx      # Card component system
│   │       ├── input.tsx     # Styled input component
│   │       ├── separator.tsx # Horizontal/vertical separators
│   │       └── sheet.tsx     # Modal/drawer component
│   ├── lib/
│   │   └── utils.ts          # Utility functions (cn helper)
│   └── assets/
│       └── react.svg         # Assets
├── docs/                     # Design documentation
│   ├── design-system.md      # Comprehensive design system
│   ├── ui-wireframe.md       # UI layout wireframes
│   ├── design.webp           # Design reference mockup
│   └── tech-stack.md         # Technical stack documentation
├── public/
│   └── vite.svg
├── Configuration files...
└── Package files...
```

## ⚙️ Configuration

### TypeScript Configuration
- **Target**: ES2022 with modern JavaScript features
- **Strict mode**: Enabled with comprehensive type checking
- **Path mapping**: `@/*` aliases to `./src/*`
- **JSX**: React JSX transform
- **Module resolution**: Bundler mode for Vite

### Vite Configuration
- **Plugins**: React + Tailwind CSS 4 integration
- **Dev server**: Port 3000
- **Path aliases**: `@` resolves to `./src`
- **Build optimizations**: Modern bundle splitting and optimization

### Biome Configuration
- **Formatting**: 2-space indentation, single quotes, minimal semicolons
- **Linting**: Recommended rules with TypeScript support
- **Import organization**: Automatic import sorting
- **Code quality**: Consistent formatting and error detection

### Tailwind CSS Setup
- **Version**: 4.0 (latest with Vite integration)
- **Design system**: Comprehensive CSS variables for theming
- **Dark mode**: Built-in support
- **Components**: Extensive component styling system
- **Responsive**: Mobile-first responsive design

## 🎨 Design System

### Color Palette
- **Green theme**: Primary actions and success states
- **Black theme**: Premium/professional elements
- **Purple theme**: Secondary actions and highlights
- **Yellow theme**: Warnings and attention-grabbing elements

### Typography
- **Headlines**: Structured hierarchy for different content levels
- **Body text**: Optimized for readability and accessibility
- **Font system**: System font stack with fallbacks

### Component Library
**Complete UI component set:**
- **Button**: Multiple variants (default, destructive, outline, secondary, ghost, link)
- **Card**: Full card system with header, content, footer, action areas
- **Input**: Styled input with focus states and accessibility
- **Badge**: Variant-based badge system for labels
- **Separator**: Horizontal/vertical separators
- **Sheet**: Modal/drawer component with multiple positions

## 🔧 Development Workflow

### Scripts
```bash
pnpm dev      # Start development server (port 3000)
pnpm build    # Build for production
pnpm preview  # Preview production build
pnpm lint     # Lint code with Biome
pnpm lint:fix # Lint and fix code
pnpm format   # Format code with Biome
```

### Code Quality
- **Linting**: Biome handles JavaScript/TypeScript linting
- **Formatting**: Consistent code formatting with Biome
- **Type checking**: TypeScript strict mode enabled
- **Import organization**: Automatic import sorting

### Build Process
- **TypeScript compilation**: Full type checking during build
- **Vite optimization**: Modern bundle splitting and tree shaking
- **CSS processing**: Tailwind CSS compilation and optimization
- **Asset optimization**: Image and asset optimization

## 🎯 Key Features

### Modern Development
- **Hot Module Replacement**: Instant updates during development
- **TypeScript**: Full type safety and IDE support
- **Path aliases**: Clean import paths with `@/` prefix
- **Modern JavaScript**: ES2022 features and syntax

### Accessibility
- **Radix UI**: Accessible components by default
- **Keyboard navigation**: Full keyboard support
- **Screen reader**: Proper ARIA attributes and semantic HTML
- **Focus management**: Logical focus flow

### Performance
- **React 19**: Latest performance optimizations
- **Vite**: Fast build times and optimized bundles
- **Tree shaking**: Dead code elimination
- **Code splitting**: Optimized bundle splitting

### Design System
- **Consistent styling**: Unified design language
- **Responsive design**: Mobile-first approach
- **Component variants**: Flexible component system
- **Theme support**: Light/dark mode ready

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 768px (1 column layout)
- **Tablet**: 768px - 992px (2 column layout)
- **Desktop**: > 1200px (4 column layout)

### Layout Strategy
- **Mobile-first**: Progressive enhancement approach
- **Flexible grid**: CSS Grid and Flexbox
- **Responsive components**: Adaptive component behavior
- **Touch-friendly**: Optimized for mobile interaction

## 🔐 Code Quality Standards

### Naming Conventions
- **Files**: kebab-case (e.g., `design-system.md`)
- **Components**: PascalCase (e.g., `ButtonComponent`)
- **Variables**: camelCase (e.g., `userName`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `API_URL`)

### File Organization
- **Components**: Organized by feature/UI library
- **Utilities**: Centralized in `lib/` directory
- **Styles**: Global and component-specific styles
- **Assets**: Images and static files in `assets/`

## 🚀 Current Status

### ✅ Completed
- Modern React 19 + TypeScript setup
- Complete UI component library (shadcn/ui)
- Comprehensive design system documentation
- Development tooling configuration
- Responsive design wireframes
- Build and deployment configuration

### 🔨 In Progress
- Application feature implementation
- Component integration with design system
- Route configuration and navigation
- Business logic development

### 📋 Next Steps
- Implement Life Planning features
- Integrate with backend API
- Add state management (if needed)
- Implement authentication
- Add testing framework
- Performance optimization

---

*This tech stack provides a solid foundation for building a modern, scalable, and maintainable Life Planning application with excellent developer experience and user experience.*