# Change: Add Light Theme Mode

## Why
The portfolio website currently only supports a dark theme with hardcoded dark colors. Adding a light theme as the default with a toggle switch will improve accessibility, provide a more professional look suitable for portfolio sites, and meet modern user expectations for theme customization.

## What Changes
- **ADDED** ThemeProvider wrapper using next-themes library (already installed)
- **ADDED** ThemeToggle component with switch UI in navigation bar (top right)
- **ADDED** Light theme as default mode
- **ADDED** CSS variables for theme-aware gradients and backgrounds
- **MODIFIED** App.tsx to use CSS variables instead of hardcoded dark colors
- **MODIFIED** Navigation component to include theme toggle
- **MODIFIED** CSS globals to support light and dark gradient variants
- Component audit to replace hardcoded Tailwind color classes with CSS variables

## Impact
- Affected specs: `theme-management` (new capability)
- Affected code:
  - `src/main.tsx` - Add ThemeProvider wrapper
  - `src/components/ThemeToggle.tsx` - New theme toggle component
  - `src/components/Navigation.tsx` - Add toggle to navigation
  - `src/styles/globals.css` - Add gradient CSS variables
  - `src/App.tsx` - Replace hardcoded gradient classes
  - Other components - Audit and replace hardcoded colors as needed
