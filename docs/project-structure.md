# Project Structure - Life Planning Application

## 📁 Complete Directory Structure

```
claude-rr-section-page/
├── 📋 Configuration Files (Root Level)
│   ├── package.json                    # Project dependencies and scripts
│   ├── tsconfig.json                   # TypeScript configuration
│   ├── vite.config.ts                  # Vite build tool configuration
│   ├── biome.json                      # Biome linter/formatter configuration
│   ├── components.json                 # shadcn/ui component library configuration
│   ├── react-router-config.ts          # React Router configuration
│   ├── index.html                      # HTML entry point
│   └── pnpm-lock.yaml                  # Package manager lock file
├── 📚 Documentation
│   ├── README.md                       # Basic project documentation
│   ├── CLAUDE.md                       # Project instructions for Claude Code
│   └── docs/                           # Comprehensive documentation
│       ├── design-system.md            # Design system specifications
│       ├── tech-stack.md               # Technical documentation
│       ├── ui-wireframe.md             # UI layout wireframes
│       ├── project-structure.md        # This file - project structure
│       └── design.webp                 # Visual design reference
├── 💻 Source Code
│   └── src/                            # Main source directory
│       ├── main.tsx                    # Application entry point
│       ├── app.tsx                     # Main App component
│       ├── index.css                   # Global styles with Tailwind
│       ├── app.css                     # App-specific styles
│       ├── vite-env.d.ts              # Vite type definitions
│       ├── components/                 # React components
│       │   └── ui/                     # UI component library
│       │       ├── badge.tsx           # Badge component
│       │       ├── button.tsx          # Button component
│       │       ├── card.tsx            # Card component
│       │       ├── input.tsx           # Input component
│       │       ├── separator.tsx       # Separator component
│       │       └── sheet.tsx           # Sheet/Modal component
│       ├── lib/                        # Utility functions
│       │   └── utils.ts                # Common utilities (cn helper)
│       └── assets/                     # Static assets
│           └── react.svg               # React logo
├── 🌐 Public Assets
│   └── public/                         # Static files served directly
│       └── vite.svg                    # Vite logo
├── 🏗️ Build Artifacts
│   └── dist/                           # Production build output
│       ├── index.html                  # Built HTML file
│       ├── vite.svg                    # Copied static assets
│       └── assets/                     # Built assets
│           ├── index-*.js              # Bundled JavaScript
│           ├── index-*.css             # Bundled CSS
│           └── react-*.svg             # Processed SVG assets
├── 📦 Dependencies
│   └── node_modules/                   # Package dependencies
└── 🔧 Build Cache
    └── tsconfig.tsbuildinfo            # TypeScript build cache
```

## 📋 Configuration Files

### Core Configuration
| File | Purpose | Key Features |
|------|---------|-------------|
| `package.json` | Project metadata and dependencies | React 19.1.0, TypeScript 5.8.3, Vite 7.0.4, pnpm scripts |
| `tsconfig.json` | TypeScript configuration | Strict mode, ES2022 target, path aliases (`@/*` → `./src/*`) |
| `vite.config.ts` | Vite build configuration | React plugin, Tailwind CSS 4, dev server port 3000 |
| `biome.json` | Linting and formatting | Modern ESLint/Prettier replacement, 2-space indentation |
| `components.json` | shadcn/ui configuration | Component library setup with styling preferences |
| `react-router-config.ts` | Router configuration | Client-side routing with SSR disabled |

### Build and Development
- **`index.html`** - HTML entry point that loads the React application
- **`pnpm-lock.yaml`** - Package manager lock file for consistent installations
- **`tsconfig.tsbuildinfo`** - TypeScript incremental compilation cache

## 📚 Documentation Structure

### Project Documentation
- **`README.md`** - Standard React+TypeScript+Vite template documentation
- **`CLAUDE.md`** - Comprehensive project instructions with naming conventions and workflow

### Design Documentation (`docs/`)
- **`design-system.md`** - Color palette, typography, components, accessibility guidelines
- **`tech-stack.md`** - Complete technical documentation and architecture
- **`ui-wireframe.md`** - UI layout wireframes for desktop and mobile
- **`project-structure.md`** - This file - comprehensive project structure
- **`design.webp`** - Visual design reference mockup

## 💻 Source Code Organization

### Entry Points
```typescript
src/
├── main.tsx        # Application entry point with StrictMode and BrowserRouter
├── app.tsx         # Main App component with demo functionality
├── index.css       # Global styles with Tailwind CSS 4 imports
├── app.css         # App-specific styles and animations
└── vite-env.d.ts   # Vite type definitions
```

### Component Architecture
```typescript
src/components/
└── ui/             # shadcn/ui component library
    ├── badge.tsx   # Badge component with variants
    ├── button.tsx  # Button with 6 variants (default, destructive, outline, secondary, ghost, link)
    ├── card.tsx    # Card system with header, content, footer
    ├── input.tsx   # Styled input with focus states
    ├── separator.tsx # Horizontal/vertical separators
    └── sheet.tsx   # Modal/drawer with multiple positions
```

### Utilities and Assets
```typescript
src/
├── lib/
│   └── utils.ts    # Common utilities (cn helper for conditional classes)
└── assets/
    └── react.svg   # React logo for application use
```

## 🎨 Component Library Details

### Button Component
- **6 variants**: default, destructive, outline, secondary, ghost, link
- **3 sizes**: default, sm, lg, icon
- **Accessibility**: Full keyboard navigation and ARIA support
- **Styling**: Tailwind classes with hover/focus states

### Card Component
- **Structure**: CardHeader, CardContent, CardFooter, CardTitle, CardDescription
- **Flexibility**: Composable sections for different layouts
- **Responsive**: Mobile-first responsive design

### Input Component
- **States**: Default, focus, disabled, error
- **Accessibility**: Proper labeling and keyboard navigation
- **Styling**: Consistent with design system

### Badge Component
- **Variants**: default, secondary, destructive, outline
- **Usage**: Labels, status indicators, categories
- **Sizes**: Responsive sizing with proper spacing

### Sheet Component
- **Positions**: top, right, bottom, left
- **Features**: Overlay, close button, keyboard navigation
- **Responsive**: Mobile-optimized drawer behavior

### Separator Component
- **Orientations**: horizontal, vertical
- **Usage**: Content dividers, section breaks
- **Styling**: Consistent with design system

## 🏗️ Build System

### Development Build
```bash
pnpm dev          # Start development server on port 3000
```
- **Hot Module Replacement**: Instant updates during development
- **TypeScript checking**: Real-time type checking
- **CSS processing**: Tailwind CSS compilation
- **Asset serving**: Static files from public directory

### Production Build
```bash
pnpm build        # Build for production
```
- **Code splitting**: Automatic bundle splitting
- **Tree shaking**: Dead code elimination
- **Minification**: JavaScript and CSS optimization
- **Asset optimization**: Image and SVG processing
- **Hash-based naming**: Cache busting for assets

### Build Output (`dist/`)
- **`index.html`** - Built HTML with optimized asset references
- **`assets/index-*.js`** - Bundled and minified JavaScript
- **`assets/index-*.css`** - Processed CSS with Tailwind optimizations
- **Static assets** - Copied and optimized files

## 🔧 Development Workflow

### Code Quality
```bash
pnpm lint         # Lint code with Biome
pnpm lint:fix     # Lint and fix code
pnpm format       # Format code with Biome
```

### Tools Integration
- **Biome**: Modern linting and formatting
- **TypeScript**: Strict type checking
- **Vite**: Fast development and build
- **pnpm**: Efficient package management

## 📦 Dependencies Architecture

### Production Dependencies
```json
{
  "react": "19.1.0",
  "react-dom": "19.1.0",
  "react-router-dom": "7.6.3",
  "@radix-ui/react-*": "Latest",
  "tailwindcss": "4.0",
  "lucide-react": "0.525.0",
  "class-variance-authority": "0.7.1",
  "clsx": "Latest",
  "tailwind-merge": "Latest"
}
```

### Development Dependencies
```json
{
  "vite": "7.0.4",
  "typescript": "5.8.3",
  "@vitejs/plugin-react": "Latest",
  "@tailwindcss/vite": "Latest",
  "@biomejs/biome": "2.1.1",
  "@types/react": "Latest",
  "@types/react-dom": "Latest"
}
```

## 🎯 Naming Conventions

### File Naming
- **Files**: kebab-case (e.g., `design-system.md`, `project-structure.md`)
- **Components**: PascalCase (e.g., `ButtonComponent.tsx`)
- **Utilities**: camelCase (e.g., `utils.ts`)
- **CSS files**: kebab-case (e.g., `app.css`)

### Directory Structure
- **Descriptive names**: Clear purpose for each directory
- **Consistent organization**: Similar file types grouped together
- **Scalable structure**: Easy to extend as project grows

## 🔄 Asset Management

### Static Assets Strategy
- **Public assets**: Files served directly without processing
- **Source assets**: Files imported in components and processed by Vite
- **Build assets**: Optimized and hashed files in production

### Icon and Image Handling
- **SVG optimization**: Vector graphics optimized for web
- **Component integration**: Assets imported directly in components
- **Responsive ready**: Structure prepared for responsive images

## 📱 Responsive Organization

### Breakpoint Strategy
- **Mobile-first**: Design starts with mobile layout
- **Progressive enhancement**: Features added for larger screens
- **Component responsiveness**: Each component handles its own responsive behavior

### Layout Components
- **Header**: Navigation and branding
- **Hero**: Main call-to-action section
- **Cards**: Plan display with responsive grid
- **Footer**: Links and additional navigation

## 🚀 Current Status

### ✅ Completed Infrastructure
- Complete modern React 19 setup with TypeScript
- Comprehensive UI component library (shadcn/ui)
- Design system documentation with specifications
- Development tooling configured with Biome
- Build system optimized for production
- Project structure documented and organized

### 🔨 Ready for Implementation
- Life Planning application features
- Component integration with design system
- Route configuration and navigation
- Business logic development
- API integration layer
- State management (if needed)

### 📋 Future Enhancements
- Testing framework integration
- Performance optimization
- Authentication system
- Backend API integration
- Deployment configuration
- Monitoring and analytics

---

*This project structure provides a solid foundation for building a modern, scalable, and maintainable Life Planning application with excellent developer experience and clear organization patterns.*