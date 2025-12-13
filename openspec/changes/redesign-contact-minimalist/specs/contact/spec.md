## ADDED Requirements

### Requirement: Minimalist Contact Section Layout
The contact section SHALL display a minimalist, centered layout with essential information and clear visual hierarchy.

#### Scenario: User views contact section
- **WHEN** user navigates to the contact section
- **THEN** they see a centered layout with dark purple background
- **AND** the layout contains heading, location text, call-to-action button, local time, and social links

### Requirement: Contact Section Heading
The contact section SHALL display a prominent heading with the text "Let's Build Something Amazing" and a subtitle.

#### Scenario: Heading display
- **WHEN** user views the contact section
- **THEN** they see the heading "Let's Build Something Amazing" in large, bold white text
- **AND** below the heading, they see the subtitle "Have a project in mind? Let's discuss how I can help bring your vision to life."

### Requirement: Location Information Display
The contact section SHALL display location information in a minimalist format.

#### Scenario: Location text display
- **WHEN** user views the contact section
- **THEN** they see the text "Based in Jakarta (GMT+7), working worldwide" displayed in white text

### Requirement: Pitch Your Idea Button
The contact section SHALL provide a prominent call-to-action button labeled "Pitch your idea" that opens the user's email client.

#### Scenario: Button click opens email
- **WHEN** user clicks the "Pitch your idea" button
- **THEN** their default email client opens
- **AND** the email is pre-filled with recipient: rangga.bagas0@gmail.com
- **AND** the subject line is: "Let's build something great"

### Requirement: Local Time Display
The contact section SHALL display the current local time in Jakarta (GMT+7) timezone.

#### Scenario: Time display updates
- **WHEN** user views the contact section
- **THEN** they see the current time in Jakarta displayed in the format "LOCAL TIME HH:MM AM/PM"
- **AND** the time updates automatically to reflect the current Jakarta time

### Requirement: Social Links
The contact section SHALL provide links to professional profiles on LinkedIn, GitHub, and Upwork.

#### Scenario: Social link navigation
- **WHEN** user clicks on LinkedIn link
- **THEN** they are redirected to https://www.linkedin.com/in/ranggabagas/ in a new tab
- **WHEN** user clicks on GitHub link
- **THEN** they are redirected to https://github.com/ranggabagas30?tab=repositories in a new tab
- **WHEN** user clicks on Upwork link
- **THEN** they are redirected to https://www.upwork.com/freelancers/~01ca635bc2c2002a8c in a new tab

### Requirement: Footer Information
The contact section SHALL display footer information with copyright and tech stack details.

#### Scenario: Footer display
- **WHEN** user views the contact section
- **THEN** they see copyright text: "© 2025 Rangga B. - Senior Mobile Engineer. All rights reserved."
- **AND** below that, they see: "Built with passion using React, TypeScript, and Tailwind CSS"

## REMOVED Requirements

### Requirement: Contact Form
**Reason**: Replaced with minimalist mailto button approach for simpler user experience
**Migration**: Users can click "Pitch your idea" button to open email client instead

### Requirement: Detailed Contact Info Cards
**Reason**: Simplified to minimalist text-based location information
**Migration**: Location information is now displayed as simple text

### Requirement: Availability Status Display
**Reason**: Removed to maintain minimalist design focus
**Migration**: Availability information can be inferred from location and working worldwide text

