# Change: Update Portfolio with Real Projects

## Why
Replace placeholder portfolio items with actual completed projects (CuanX and Football Money) to showcase real work and provide authentic project details, official URLs, and promotional videos. This builds credibility and allows potential clients to see actual deployed applications.

## What Changes
- **REMOVED** All placeholder portfolio items (Hello E-Wallet, Hourly Monitoring, MediCare, ShopEase, FitPro, CryptoVault)
- **ADDED** CuanX | Super-app (PPOB & Ride-hailing) project with:
  - Project image/hero image
  - Official website URL (cuanx.co.id)
  - Google Play Store link
  - YouTube promotional video link
  - Project description
  - Role information (React Native Developer)
  - Tech stack and skills
- **ADDED** Football Money | Fantasy Sport Game project with:
  - Project image/hero image
  - Official App Store link
  - YouTube promotional video link
  - Project description
  - Role information (React Native Developer)
  - Tech stack and skills
- **MODIFIED** Portfolio component to support YouTube video links
- **MODIFIED** Portfolio component to support multiple link types (website, app store, YouTube)
- **MODIFIED** Data structure to include role, official URLs, and YouTube links

## Impact
- Affected specs: `portfolio` (new capability)
- Affected code:
  - `src/components/Portfolio.tsx` - Update data structure and add link handling
  - Component props and data structure changes
  - UI updates to display YouTube links and multiple link types

