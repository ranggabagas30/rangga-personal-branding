# OpenSpec Change Proposal: Light Theme Mode Implementation

## Metadata
- **Date:** 2025-12-13
- **Status:** Proposed
- **Project:** Personal Branding Profile
- **Author:** Design Collaboration

## Summary

Implement light theme mode with a toggle switch in the navigation bar. The light theme will be the default theme, with full theme adaptation replacing all hardcoded dark colors with theme-aware CSS variables.

## Background

The personal branding website currently has:
- Hardcoded dark theme styling throughout the application
- `next-themes` package installed but not utilized
- Light and dark CSS variables already defined in `globals.css`
- No theme switching capability

## Requirements

### Functional Requirements
1. Light theme as the default theme
2. Toggle switch to switch between light and dark themes
3. Theme preference persists across page refreshes
4. Full theme adaptation - all colors adapt to the active theme

### UI/UX Requirements
1. Theme toggle positioned in the navigation bar (top right)
2. Switch/Toggle UI control (not icon button or dropdown)
3. Visual indicator showing current theme (Sun/Moon icons)
4. No system preference detection (just Light/Dark modes)

### Technical Requirements
1. Use existing `next-themes` package
2. Leverage existing CSS variable system
3. Replace all hardcoded Tailwind color classes with CSS variables
4. Smooth theme transitions without visual glitches

## Design

### Architecture Overview

The implementation leverages the **next-themes** package combined with the existing CSS variable system:

1. **ThemeProvider** wrapper (from next-themes) around the app
2. **ThemeToggle** component with a switch UI in the navigation
3. **CSS variable refactoring** to replace hardcoded dark colors
4. **Default theme** set to "light"

**How it works:**
- next-themes adds a `.dark` class to the HTML element when dark mode is active
- Existing CSS has theme variables defined for both `:root` (light) and `.dark` (dark)
- Hardcoded Tailwind classes (like `bg-slate-950`) will be replaced with CSS variables
- The toggle switch calls next-themes' `setTheme()` function

### Component Structure

#### 1. ThemeProvider Setup

**File:** `src/main.tsx`

```tsx
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "next-themes";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
    <App />
  </ThemeProvider>
);
```

**Configuration:**
- `attribute="class"` → Adds `.dark` class to HTML element
- `defaultTheme="light"` → Light mode as default
- `enableSystem={false}` → Disable system preference detection

#### 2. ThemeToggle Component

**File:** `src/components/ThemeToggle.tsx` (new file)

```tsx
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="flex items-center gap-2">
      <Sun className="h-4 w-4 text-muted-foreground" />
      <Switch
        checked={isDark}
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
        aria-label="Toggle theme"
      />
      <Moon className="h-4 w-4 text-muted-foreground" />
    </div>
  );
}
```

#### 3. Navigation Integration

**File:** `src/components/Navigation.tsx`

Add the ThemeToggle component to the navigation bar in the top-right position, alongside or near existing navigation items.

### CSS Variable Strategy

#### New Variables to Add

**File:** `src/styles/globals.css`

Add gradient-specific variables to both `:root` and `.dark` sections:

```css
:root {
  /* Existing variables... */

  /* Background gradient variants for light theme */
  --background-gradient-start: #f8fafc; /* slate-50 equivalent */
  --background-gradient-mid: #f1f5f9;   /* slate-100 equivalent */
  --background-gradient-end: #e2e8f0;   /* slate-200 equivalent */

  /* Grid pattern color for light theme */
  --grid-pattern: #e2e8f0; /* slate-200 */
}

.dark {
  /* Existing variables... */

  /* Background gradient variants for dark theme */
  --background-gradient-start: oklch(0.129 0.042 264.695); /* slate-950 */
  --background-gradient-mid: oklch(0.208 0.042 265.755);   /* slate-900 */
  --background-gradient-end: oklch(0.129 0.042 264.695);   /* slate-950 */

  /* Grid pattern color for dark theme */
  --grid-pattern: #1e293b; /* slate-800 */
}
```

#### Refactoring Pattern

**Before (hardcoded):**
```tsx
<div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
  <div className="fixed inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),...]">
```

**After (theme-aware):**
```tsx
<div className="min-h-screen bg-gradient-to-br from-[var(--background-gradient-start)] via-[var(--background-gradient-mid)] to-[var(--background-gradient-end)]">
  <div className="fixed inset-0 bg-[linear-gradient(to_right,var(--grid-pattern)_1px,transparent_1px),...]">
```

**Other common replacements:**
- `bg-slate-800` → `bg-card`
- `text-gray-400` → `text-muted-foreground`
- `border-slate-700` → `border-border`
- Component-specific colors → Create semantic variables as needed

## Implementation Plan

### Files to Create
1. `src/components/ThemeToggle.tsx` - Theme toggle switch component
2. `docs/plans/2025-12-13-light-theme-implementation-design.md` - This document

### Files to Modify
1. `src/main.tsx` - Add ThemeProvider wrapper
2. `src/components/Navigation.tsx` - Add ThemeToggle component
3. `src/styles/globals.css` - Add gradient and grid CSS variables
4. `src/App.tsx` - Replace hardcoded dark gradient classes
5. Other component files - Audit and replace hardcoded colors as needed

### Implementation Steps

1. **Add CSS Variables** (globals.css)
   - Add `--background-gradient-start/mid/end` variables
   - Add `--grid-pattern` variable
   - Define values for both light and dark themes

2. **Setup ThemeProvider** (main.tsx)
   - Import ThemeProvider from next-themes
   - Wrap App component with proper configuration
   - Set defaultTheme to "light"

3. **Create ThemeToggle Component** (ThemeToggle.tsx)
   - Implement switch with Sun/Moon icons
   - Connect to next-themes useTheme hook
   - Add proper accessibility attributes

4. **Integrate Toggle** (Navigation.tsx)
   - Import and place ThemeToggle in top-right
   - Ensure proper spacing and alignment

5. **Refactor App.tsx**
   - Replace background gradient classes
   - Replace grid pattern color
   - Test theme switching

6. **Component Audit**
   - Review all component files
   - Replace hardcoded color classes
   - Test each component in both themes

7. **Testing & Validation**
   - Verify light theme loads by default
   - Test toggle functionality
   - Verify theme persistence
   - Check readability in both themes
   - Test gradient transitions
   - Verify no visual glitches

### Testing Checklist

- [ ] Light theme loads by default on first visit
- [ ] Toggle switches from light to dark theme
- [ ] Toggle switches from dark to light theme
- [ ] Theme preference persists across page refreshes
- [ ] All text remains readable in both themes
- [ ] Background gradients adapt properly in both themes
- [ ] Grid pattern adapts properly in both themes
- [ ] No flash of incorrect theme on page load
- [ ] No visual glitches during theme transition
- [ ] Toggle is accessible via keyboard
- [ ] Toggle has proper ARIA labels

## Benefits

1. **Improved Accessibility:** Users can choose their preferred theme
2. **Better UX:** Light theme default is more common for portfolio/branding sites
3. **Professional Polish:** Modern expectation for web applications
4. **Maintainability:** CSS variable approach makes theme management easier
5. **Future-Proof:** Easy to add more themes or customize colors later

## Risks & Mitigation

### Risk: Theme Flash on Page Load
**Mitigation:** next-themes handles this automatically by storing preference in localStorage and applying theme before React hydrates.

### Risk: Missed Hardcoded Colors
**Mitigation:** Systematic component audit during implementation. Use browser DevTools to inspect elements in both themes.

### Risk: Poor Contrast in Light Theme
**Mitigation:** Follow existing CSS variable color palette which already defines proper contrast ratios for light theme.

### Risk: Components Not Adapting
**Mitigation:** Use semantic CSS variables (`text-foreground`, `bg-background`) instead of creating new variables unnecessarily.

## Alternatives Considered

### 1. Icon Button Toggle (Sun/Moon)
**Rejected:** User preference was for a switch/toggle control.

### 2. Dropdown with System Preference
**Rejected:** User wanted simple two-state toggle without system detection.

### 3. Keep Some Dark Aesthetics in Light Theme
**Rejected:** User wanted full theme adaptation for consistency.

### 4. Manual Theme Implementation
**Rejected:** next-themes provides better persistence, SSR support, and edge case handling.

## Open Questions

None. Design is complete and approved.

## References

- [next-themes Documentation](https://github.com/pacocoursey/next-themes)
- [shadcn/ui Theming Guide](https://ui.shadcn.com/docs/theming)
- [Tailwind CSS Custom Properties](https://tailwindcss.com/docs/customizing-colors#using-css-variables)

## Approval

- [x] Design approved by stakeholder
- [ ] Implementation pending
