---
description: Update memory with current project context before development
allowed-tools: Read
---

# Update Memory - Project Context

## Project Guidelines
Before any development work, always read and understand the project documentation:

### Required Reading
- **Tech Stack**: @docs/tech-stack.md - Technical architecture, tools, and development workflow
- **Design System**: @docs/design-system.md - UI specifications, color palette, and component guidelines
- **Project Structure**: @docs/project-structure.md - File organization, naming conventions, and architecture

### Project Overview
This is a **Life Planning Application** built with:
- **React 19.1.0** + **TypeScript 5.8.3** + **Vite 7.0.4**
- **Tailwind CSS 4.0** + **shadcn/ui** components
- **Biome** for linting/formatting
- **pnpm** package manager
- **Development server**: Port 3000

### Key Conventions
- **File naming**: kebab-case (e.g., `design-system.md`)
- **Component naming**: PascalCase (e.g., `ButtonComponent.tsx`)
- **Path aliases**: `@/*` → `./src/*`
- **Formatting**: 2-space indentation, single quotes
- **Responsive**: Mobile-first approach

### Color Palette
- **Green**: `#4ADE80` - Money Momentum (positive financial outcomes)
- **Black**: `#000000` - Long-Term (premium/serious planning)
- **Purple**: `#A855F7` - Focussed (focused strategies)
- **Yellow**: `#FDE047` - Fixed Income (guaranteed returns)

### Available Components
- **Button**: 6 variants (default, destructive, outline, secondary, ghost, link)
- **Card**: Header, Content, Footer system
- **Input**: Styled with focus states
- **Badge**: Variant-based labels
- **Separator**: Horizontal/vertical dividers
- **Sheet**: Modal/drawer component

### Development Commands
```bash
pnpm dev      # Start development server (port 3000)
pnpm build    # Build for production
pnpm lint     # Lint code with Biome
pnpm format   # Format code with Biome
```

### Responsive Breakpoints
- **Mobile**: < 768px (1 column)
- **Tablet**: 768px - 992px (2 columns)
- **Desktop**: > 1200px (4 columns)

## Your Task
Now that you have the project context, you're ready to work on development tasks while following the established conventions and using the existing infrastructure.

Remember to:
1. Use existing shadcn/ui components from `@/components/ui/`
2. Follow the design system color palette
3. Implement responsive design with mobile-first approach
4. Use TypeScript with strict typing
5. Follow kebab-case for file names, PascalCase for components