# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Status

This is a Life Planning application project built with modern web technologies:
- React 19.1.0 with TypeScript
- Vite 7.0.4 for build tooling
- React Router DOM 7.6.3 for routing (SSR disabled)
- Tailwind CSS 4.0 for styling
- Biome 2.1.1 for linting and formatting
- pnpm for package management

## Project Structure

```
/
├── src/
│   ├── app.tsx          # Main App component
│   ├── app.css          # App-specific styles
│   ├── main.tsx         # App entry point
│   ├── index.css        # Global styles (Tailwind imports)
│   ├── vite-env.d.ts    # Vite type definitions
│   └── assets/
│       └── react.svg
├── public/
│   └── vite.svg
├── docs/
│   ├── design-system.md
│   ├── ui-wireframe.md
│   └── design.webp
├── tsconfig.json        # TypeScript configuration
├── vite.config.ts       # Vite configuration
├── biome.json           # Biome configuration
├── react-router-config.ts # React Router configuration
└── package.json
```

## Naming Conventions

**IMPORTANT**: This project uses kebab-case for all file and folder names.

Examples:
- ✅ `design-system.md`
- ✅ `ui-wireframe.md`
- ✅ `app.tsx`
- ❌ `designSystem.md`
- ❌ `uiWireframe.md`
- ❌ `App.tsx`

## Development Commands

```bash
# Install dependencies
pnpm install

# Start development server (port 3000)
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Lint code
pnpm lint

# Lint and fix code
pnpm lint:fix

# Format code
pnpm format
```

## Configuration Details

### TypeScript
- Single `tsconfig.json` file (no project references)
- Strict mode enabled
- Modern ES2022 target
- React JSX support
- Covers all TypeScript files in project

### Biome
- Replaces ESLint and Prettier
- Single quotes, minimal semicolons
- 2-space indentation
- Auto-imports organization
- Supports TypeScript via overrides

### Vite
- React plugin with TypeScript support
- Tailwind CSS 4 plugin
- Development server on port 3000
- Modern build optimizations

### React Router
- Client-side routing only (SSR disabled)
- Configured in `react-router-config.ts`

### Tailwind CSS
- Version 4.0 with Vite integration
- Imported via `@import "tailwindcss"` in `index.css`

## Notes

- No ESLint configuration (using Biome instead)
- All files follow kebab-case naming convention
- TypeScript is used throughout the project
- Modern React patterns with hooks and function components