# Change: Redesign Contact Section to Minimalist Design

## Why
The current Contact section uses a complex layout with multiple cards, a contact form, and detailed information blocks. The new design should adopt a minimalist approach inspired by modern portfolio sites, featuring a clean layout with essential information, a prominent call-to-action button, and simplified social links. This will improve visual hierarchy, reduce cognitive load, and create a more professional, focused user experience.

## What Changes
- **MODIFIED** Contact section layout from multi-column grid to minimalist single-column centered design
- **REMOVED** Complex contact form with multiple input fields
- **REMOVED** Detailed contact info cards (email, location, availability cards)
- **ADDED** Minimalist heading section with "Let's Build Something Amazing" and subtitle
- **ADDED** Location text: "Based in Jakarta (GMT+7), working worldwide"
- **ADDED** "Pitch your idea" button with mailto link (mailto:rangga.bagas0@gmail.com?subject=Let%27s%20build%20something%20great)
- **ADDED** Local time display showing current Jakarta time (GMT+7)
- **MODIFIED** Social links section to show only LinkedIn, GitHub, and Upwork with correct URLs
- **MODIFIED** Footer to maintain copyright and tech stack information
- **MODIFIED** Color scheme to use dark purple background (#4B1F8C or similar) with white and orange accents

## Impact
- Affected specs: `contact` (new capability)
- Affected code:
  - `src/components/Contact.tsx` - Complete redesign with minimalist layout
  - May require time zone utility or library for Jakarta time display
  - Social link URLs updated to actual profiles

