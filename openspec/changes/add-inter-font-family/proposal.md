# Change: Add Inter Font Family

## Why
The website currently uses a generic system font stack. Implementing a prioritized font family with Inter as the primary font will provide a more consistent, modern, and professional typography experience across all devices. The font stack prioritizes Inter when available, with fallbacks to system fonts for optimal performance and compatibility.

## What Changes
- **MODIFIED** Font family stack to prioritize "Inter" with system font fallbacks
- **MODIFIED** CSS variable `--font-sans` to use the new font stack: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial
- **ADDED** Inter font loading mechanism (via Google Fonts or self-hosted)
- **MODIFIED** HTML element and CSS base styles to use the updated font stack

## Impact
- Affected specs: `typography` (new capability)
- Affected code:
  - `index.html` - Add Inter font link/import
  - `src/index.css` - Update `--font-sans` CSS variable
  - `src/styles/globals.css` - Ensure font family is applied correctly
  - All components inherit the new font family automatically

