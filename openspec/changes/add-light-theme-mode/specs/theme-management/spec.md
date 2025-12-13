## ADDED Requirements

### Requirement: Light Theme as Default
The application SHALL load with light theme enabled by default for all users on their first visit.

#### Scenario: First visit loads light theme
- **WHEN** a user visits the website for the first time
- **THEN** the light theme is active by default
- **AND** the page background uses light color gradients
- **AND** text colors are optimized for light backgrounds

### Requirement: Theme Toggle Control
The application SHALL provide a toggle switch in the navigation bar (top right) to switch between light and dark themes.

#### Scenario: Toggle is visible in navigation
- **WHEN** a user views the navigation bar
- **THEN** they see a theme toggle switch in the top-right position
- **AND** the toggle displays Sun and Moon icons
- **AND** the switch state reflects the current theme

#### Scenario: Toggle switches to dark theme
- **WHEN** a user clicks the toggle from light theme
- **THEN** the theme changes to dark mode
- **AND** all background gradients adapt to dark colors
- **AND** text colors adapt for dark backgrounds
- **AND** the toggle state updates to show dark mode is active

#### Scenario: Toggle switches to light theme
- **WHEN** a user clicks the toggle from dark theme
- **THEN** the theme changes to light mode
- **AND** all background gradients adapt to light colors
- **AND** text colors adapt for light backgrounds
- **AND** the toggle state updates to show light mode is active

### Requirement: Theme Persistence
The application SHALL persist the user's theme preference across page refreshes and browser sessions.

#### Scenario: Theme preference is remembered
- **WHEN** a user selects a theme (light or dark)
- **AND** refreshes the page
- **THEN** the previously selected theme is still active
- **AND** there is no flash of incorrect theme on page load

### Requirement: Theme-Aware CSS Variables
The application SHALL use CSS variables that automatically adapt to the active theme for all background gradients and colors.

#### Scenario: Background gradients adapt to theme
- **WHEN** the theme changes
- **THEN** background gradients use theme-specific CSS variables
- **AND** `--background-gradient-start`, `--background-gradient-mid`, `--background-gradient-end` adapt to light/dark values
- **AND** grid pattern colors use `--grid-pattern` variable

#### Scenario: Light theme gradient colors
- **WHEN** light theme is active
- **THEN** gradient uses light slate colors (50, 100, 200 equivalents)
- **AND** grid pattern uses light slate-200 equivalent

#### Scenario: Dark theme gradient colors
- **WHEN** dark theme is active
- **THEN** gradient uses dark slate colors (950, 900 equivalents)
- **AND** grid pattern uses dark slate-800 equivalent

### Requirement: Accessibility
The theme toggle SHALL be accessible via keyboard navigation and include proper ARIA labels.

#### Scenario: Keyboard accessibility
- **WHEN** a user navigates with keyboard
- **THEN** they can focus on the theme toggle
- **AND** they can activate it with Enter or Space key
- **AND** focus state is visible

#### Scenario: Screen reader support
- **WHEN** a screen reader encounters the toggle
- **THEN** it announces "Toggle theme" or similar label
- **AND** it indicates the current state (light/dark)

### Requirement: No System Preference Detection
The application SHALL NOT automatically detect or follow the operating system's theme preference. Only manual toggle control is provided.

#### Scenario: System preference is ignored
- **WHEN** a user has dark mode enabled at the OS level
- **THEN** the application still loads in light theme by default
- **AND** only manual toggle changes the theme

### Requirement: Component Theme Adaptation
All application components SHALL use semantic CSS variables that adapt to the active theme instead of hardcoded Tailwind color classes.

#### Scenario: Semantic color variables
- **WHEN** components need background colors
- **THEN** they use `bg-background`, `bg-card`, or similar semantic variables
- **AND** they avoid hardcoded colors like `bg-slate-800`

#### Scenario: Text color adaptation
- **WHEN** components display text
- **THEN** they use `text-foreground`, `text-muted-foreground` variables
- **AND** text remains readable in both light and dark themes
