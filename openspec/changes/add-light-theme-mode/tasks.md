## 1. CSS Variables Setup
- [ ] 1.1 Add `--background-gradient-start` variable for light theme in `:root`
- [ ] 1.2 Add `--background-gradient-mid` variable for light theme in `:root`
- [ ] 1.3 Add `--background-gradient-end` variable for light theme in `:root`
- [ ] 1.4 Add `--grid-pattern` variable for light theme in `:root`
- [ ] 1.5 Add corresponding dark theme variables in `.dark` selector
- [ ] 1.6 Test CSS variables compile correctly

## 2. ThemeProvider Setup
- [ ] 2.1 Import ThemeProvider from next-themes in main.tsx
- [ ] 2.2 Wrap App component with ThemeProvider
- [ ] 2.3 Configure attribute="class" prop
- [ ] 2.4 Configure defaultTheme="light" prop
- [ ] 2.5 Configure enableSystem={false} prop
- [ ] 2.6 Test theme provider initializes correctly

## 3. ThemeToggle Component
- [ ] 3.1 Create src/components/ThemeToggle.tsx file
- [ ] 3.2 Import useTheme hook from next-themes
- [ ] 3.3 Import Switch component from ui/switch
- [ ] 3.4 Import Sun and Moon icons from lucide-react
- [ ] 3.5 Implement toggle component with switch UI
- [ ] 3.6 Add Sun/Moon icons with proper styling
- [ ] 3.7 Connect switch to theme state
- [ ] 3.8 Add accessibility attributes (aria-label)
- [ ] 3.9 Test component renders correctly

## 4. Navigation Integration
- [ ] 4.1 Import ThemeToggle component in Navigation.tsx
- [ ] 4.2 Add ThemeToggle to navigation bar in top-right position
- [ ] 4.3 Ensure proper spacing and alignment
- [ ] 4.4 Test responsive layout with toggle

## 5. App.tsx Refactoring
- [ ] 5.1 Replace `from-slate-950` with `from-[var(--background-gradient-start)]`
- [ ] 5.2 Replace `via-slate-900` with `via-[var(--background-gradient-mid)]`
- [ ] 5.3 Replace `to-slate-950` with `to-[var(--background-gradient-end)]`
- [ ] 5.4 Replace grid pattern color `#1e293b` with `var(--grid-pattern)`
- [ ] 5.5 Test gradient renders correctly in both themes

## 6. Component Audit
- [ ] 6.1 Audit Hero.tsx for hardcoded colors
- [ ] 6.2 Audit About.tsx for hardcoded colors
- [ ] 6.3 Audit Portfolio.tsx for hardcoded colors
- [ ] 6.4 Audit Expertise.tsx for hardcoded colors
- [ ] 6.5 Audit Navigation.tsx for hardcoded colors
- [ ] 6.6 Replace hardcoded colors with semantic CSS variables
- [ ] 6.7 Test all components in both light and dark themes

## 7. Testing & Validation
- [ ] 7.1 Verify light theme loads by default on first visit
- [ ] 7.2 Verify toggle switches from light to dark theme
- [ ] 7.3 Verify toggle switches from dark to light theme
- [ ] 7.4 Verify theme preference persists across page refreshes
- [ ] 7.5 Verify all text remains readable in both themes
- [ ] 7.6 Verify background gradients adapt properly in both themes
- [ ] 7.7 Verify grid pattern adapts properly in both themes
- [ ] 7.8 Verify no flash of incorrect theme on page load
- [ ] 7.9 Verify no visual glitches during theme transition
- [ ] 7.10 Verify toggle is accessible via keyboard
- [ ] 7.11 Verify toggle has proper ARIA labels
- [ ] 7.12 Test on mobile, tablet, and desktop viewports
