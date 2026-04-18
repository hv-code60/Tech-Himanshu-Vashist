# Nexah Technologies Portal - Agent Guidelines

> AI assistant workspace conventions for the React Vite portfolio website

## Code Style

**Component & File Naming**: Use PascalCase for both component names and file names (e.g., `Hero.jsx`, `FAQSection.jsx`). Export components as defaults.

**Import/Export Pattern**: Use ES6 default exports exclusively. See [src/components/common/Navbar.jsx](src/components/common/Navbar.jsx) for the pattern.

**Styling Approach**: 
- Primary: Tailwind CSS utility classes
- Secondary: Inline styles for complex animations/absolute positioning (z-index, transforms)
- Avoid: Redundant inline styles that duplicate Tailwind functionality

See [src/index.css](src/index.css) for global reset and Tailwind setup. Colors defined in [src/utils/constants.js](src/utils/constants.js)—use this as the single source of truth.

**React Conventions**:
- Function components only (no class components)
- Use React Router v7 for all routing
- Keep component side effects minimal; prefer composition over complex state logic
- Follow [ESLint rules](eslint.config.js) (catches unused variables, React Hook violations)

## Architecture

**Directory Layout**:
- [`src/pages/`](src/pages/) – Route-specific pages (Home, Contact, About, Services)
- [`src/components/common/`](src/components/common/) – Globally reused (Navbar, Footer)
- [`src/components/layout/`](src/components/layout/) – Master layout wrapper ([MainLayout.jsx](src/components/layout/MainLayout.jsx))
- [`src/components/`](src/components/) – Feature/section components (Hero, OurClients, Technology, etc.)
- [`src/routes/`](src/routes/) – Centralized routing logic
- [`src/utils/`](src/utils/) – Constants, helpers, shared utilities

**Routing Structure**: All pages wrap in [MainLayout.jsx](src/components/layout/MainLayout.jsx), which provides Navbar + Footer + Outlet. Define new routes in [src/routes/AppRoutes.jsx](src/routes/AppRoutes.jsx).

**Component Composition**: Pages compose multiple feature sections (e.g., [Home.jsx](src/pages/Home.jsx) = Hero + OurClients + Technology + OurCapabilities + Testimonials + FAQ + GetInTouch). Keep sections focused and reusable.

## Build and Test

```bash
npm run dev       # Start Vite dev server (http://localhost:5173)
npm run build     # Create production build in /dist
npm run lint      # Run ESLint (enforces React Hooks, unused vars)
npm run preview   # Serve built dist locally for testing
```

**Environment**: No `.env` file configured; adjust hardcoded values in [src/utils/constants.js](src/utils/constants.js) or relevant component files as needed.

## Key Technologies & Conventions

**Animation Library**: GSAP 3.14.2 + OGL 1.0.11 for WebGL effects. See [src/components/Ribbons.jsx](src/components/Ribbons.jsx) for complex animation patterns (handles responsive resizing, render loops).

**Responsive Behavior**: Check `window.innerWidth > 1024` for desktop-specific effects (e.g., Ribbons background). Ensure animations degrade gracefully on mobile.

**Hash-based Navigation**: [MainLayout.jsx](src/components/layout/MainLayout.jsx) handles `#about`, `#services` style links with smooth scrolling. Maintain this pattern when adding new sections.

**Color Palette** ([src/utils/constants.js](src/utils/constants.js)):
- Primary dark: `#081F2D`
- Secondary dark: `#0B3C5D`
- Accent green: `#2ECC71`
- Use these for theme consistency

**Font & Typography**: Poppins loaded globally; apply via Tailwind's `font-sans` or custom CSS. No custom font imports needed.

## Before You Code

1. **New page?** Add to [src/pages/](src/pages/), define route in [src/routes/AppRoutes.jsx](src/routes/AppRoutes.jsx), wrap in MainLayout automatically.
2. **New reusable component?** Add to [src/components/](src/components/) as a feature section, or [src/components/common/](src/components/common/) if globally used.
3. **New color/constant?** Add to [src/utils/constants.js](src/utils/constants.js), then import.
4. **Styling?** Prefer Tailwind classes; use inline styles only for animations/positioning.
5. **Animation?** Reference [Ribbons.jsx](src/components/Ribbons.jsx) for GSAP + OGL patterns; ensure mobile-responsive.

## Team Notes

- **ESLint pre-commit hook recommended**: Catch unused variables and hook violations before commit.
- **Avoid breaking existing routes**: New pages should follow the existing MainLayout + AppRoutes pattern.
- **Keep constants.js updated**: It's the shared config file for the project.
- **Test on mobile**: Many features degrade gracefully; verify responsive behavior.
