## ADDED Requirements

### Requirement: Real Project Portfolio Items
The Portfolio section SHALL display actual completed projects with authentic project details, official URLs, and promotional videos.

#### Scenario: Display CuanX project
- **WHEN** a user views the Portfolio section
- **THEN** they see the CuanX project card with:
  - Project title: "CuanX | Super-app (PPOB & Ride-hailing)"
  - Project hero image
  - Role: "React Native Developer"
  - Project description
  - Tech stack tags
  - Official website link (cuanx.co.id)
  - Google Play Store link
  - YouTube promotional video link

#### Scenario: Display Football Money project
- **WHEN** a user views the Portfolio section
- **THEN** they see the Football Money project card with:
  - Project title: "Football Money | Fantasy Sport Game"
  - Project hero image
  - Role: "React Native Developer"
  - Project description
  - Tech stack tags
  - App Store link
  - YouTube promotional video link

### Requirement: Multiple Link Types Support
Each portfolio item SHALL support multiple link types including official website, app store links, and YouTube video links.

#### Scenario: Display multiple links per project
- **WHEN** a portfolio item has multiple links
- **THEN** all available links are displayed with appropriate icons
- **AND** links open in new tabs
- **AND** YouTube links open the video in YouTube

### Requirement: Project Role Display
Each portfolio item SHALL display the developer's role for that project.

#### Scenario: Display role information
- **WHEN** viewing a portfolio item
- **THEN** the role (e.g., "React Native Developer") is displayed
- **AND** it is clearly associated with the project

## REMOVED Requirements

### Requirement: Placeholder Portfolio Items
The Portfolio section SHALL no longer display placeholder or example portfolio items.

**Reason**: Replaced with actual completed projects to provide authentic portfolio showcase.

**Migration**: All placeholder items (Hello E-Wallet, Hourly Monitoring, MediCare, ShopEase, FitPro, CryptoVault) will be removed and replaced with real projects.

## MODIFIED Requirements

### Requirement: Portfolio Data Structure
The Portfolio component data structure SHALL support role, official URLs, app store links, and YouTube video links.

#### Scenario: Portfolio item data structure
- **WHEN** defining a portfolio item
- **THEN** it includes:
  - title, description, image (existing)
  - role (new)
  - websiteUrl (new, optional)
  - appStoreUrl (new, optional)
  - youtubeUrl (new, optional)
  - tech stack (existing)

