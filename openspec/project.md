# Project Context

## Purpose
A professional portfolio website for a Senior Mobile Engineer to showcase portfolio, past projects, and work experiences to attract potential clients. The site serves as a personal branding tool to demonstrate expertise in mobile development (React Native, Flutter, Android, iOS) and connect with potential clients, recruiters, and collaborators.

**Goals:**
- Showcase 7+ years of mobile development experience
- Display portfolio of 50+ completed projects
- Highlight technical expertise and certifications
- Provide contact mechanism for client inquiries
- Demonstrate professional capabilities through interactive UI

## Tech Stack
- **React** 18.3.1 - UI library with functional components
- **TypeScript** - Type safety and developer experience
- **Vite** 6.3.5 - Build tool and development server
- **Tailwind CSS** v4.1.3 - Utility-first CSS framework
- **Radix UI** - Accessible UI primitives (accordion, dialog, dropdown, etc.)
- **Lucide React** - Icon library
- **React Hook Form** - Form state management
- **class-variance-authority** - Component variant management
- **clsx** & **tailwind-merge** - Conditional class utilities

## Project Conventions

### Code Style
- **Component Structure:** Functional components with TypeScript
- **Naming:** PascalCase for components, camelCase for variables/functions, kebab-case for files
- **File Organization:** One component per file, co-located with related files
- **Imports:** Group imports (React, third-party, local) with blank lines
- **Formatting:** Use consistent spacing (2 spaces for indentation)
- **TypeScript:** Explicit types for props, avoid `any` type
- **Comments:** Minimal comments, prefer self-documenting code

### Architecture Patterns
- **Component-Based:** Modular, reusable components in `src/components/`
- **UI Library Separation:** Reusable UI primitives in `src/components/ui/`
- **Section Components:** Each major page section is a separate component
- **Props Interface:** TypeScript interfaces for all component props
- **State Management:** React hooks (useState) for local component state
- **Styling:** Utility-first with Tailwind CSS, custom CSS variables for theming
- **Responsive Design:** Mobile-first approach with Tailwind breakpoints
- **Dark Theme:** Consistent dark color scheme (slate-950/900/800) with cyan-blue-purple accents

### Testing Strategy
- **Current State:** No testing framework configured
- **Future Considerations:**
  - Unit tests for utility functions
  - Component tests for critical UI components
  - Integration tests for form submissions
  - E2E tests for user flows (optional)

### Git Workflow
- **Branching:** Main branch for production-ready code
- **Commits:** Conventional commits preferred (feat:, fix:, refactor:, etc.)
- **PR Process:** Review before merging to main
- **Versioning:** Semantic versioning (currently 0.1.0)

## Domain Context
**Personal Branding Website Domain:**
- **Target Audience:** Potential clients, recruiters, tech companies seeking mobile developers
- **Developer Profile:** Senior Mobile Engineer with 7+ years experience
- **Location:** Jakarta, Indonesia (GMT+7), available for remote work
- **Rate:** $35/hour, flexible for long-term projects
- **Availability:** 30+ hours/week
- **Specializations:**
  - Mobile Frameworks: React Native, Flutter, Android Native, iOS Native
  - Languages: JavaScript, TypeScript, Kotlin, Swift, Dart
  - Backend: Node.js, Express, Firebase, MongoDB, MySQL, PostgreSQL
  - State Management: Redux, MobX, Context API, Provider, Riverpod
  - DevOps: Git, CI/CD, Docker, AWS, Google Cloud

**Key Sections:**
- **Hero:** Introduction with key stats (7+ years, 50+ projects, 100% satisfaction)
- **About:** Professional background, location, availability, rate
- **Expertise:** Technical skills organized by category
- **Work Showcase:** Featured projects with client details, ratings, impact metrics
- **Portfolio:** Filterable project grid (Mobile Apps, E-Commerce, FinTech, Healthcare)
- **Journey:** Career timeline with work experience and education
- **Contact:** Contact form, social links, availability status

**Content Patterns:**
- Portfolio items include: title, category, image, description, tech stack, featured status
- Work experience includes: title, company, location, period, description, highlights
- Skills organized by category with visual icons
- Certifications and education displayed with dates

## Important Constraints
- **Design Source:** Based on Figma design (https://www.figma.com/design/nJwAj5WILZQxjD5e5fh2Id/Personal-Branding-Profile-Design)
- **Performance:** Must load quickly, optimize images and assets
- **Accessibility:** WCAG guidelines, semantic HTML, keyboard navigation
- **Browser Support:** Modern browsers (Chrome, Firefox, Safari, Edge)
- **Mobile Responsive:** Must work on mobile, tablet, and desktop
- **SEO:** Meta tags, Open Graph, structured data for better discoverability
- **Privacy:** Contact form should handle user data securely
- **No Backend Required:** Currently static site, form submission needs integration (future)

## External Dependencies
- **Unsplash Images:** Portfolio project images (via Unsplash API URLs)
- **Lucide Icons:** Icon library for UI elements
- **Radix UI:** Accessible component primitives
- **Future Considerations:**
  - **Form Submission:** Email service (Formspree, EmailJS, or custom backend)
  - **Analytics:** Google Analytics or similar for visitor tracking
  - **CDN:** For optimized asset delivery
  - **Hosting:** Vercel, Netlify, or similar static site hosting
