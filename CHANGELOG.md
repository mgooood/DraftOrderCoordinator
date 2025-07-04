# Changelog

All notable changes to the Draft Order Coordinator project will be documented in this file.

## [Unreleased]

### Added
- Modular React component architecture
- Token-based authentication system for magic links
- Public vs authenticated view separation
- Current draft order display with skeleton placeholders
- Dynamic support for any number of coaches (not just 12)
- Admin-defined pick order system
- Real-time draft progress tracking

### Changed
- Refactored monolithic App.jsx into modular components
- Moved from hardcoded draft calculations to admin-controlled pick order
- Simplified position buttons (removed Round 2 calculations)
- Updated messaging for better UX ("Now Selecting Draft Position")
- Implemented admin-only theme control (no user-facing theme switcher)

### Technical Decisions
- Used localStorage for temporary data persistence (will migrate to AWS DynamoDB)
- Implemented React state management instead of page redirects
- Created reusable components for better maintainability
- Chose HTML data-attribute theme control over UI switcher for admin simplicity
- Selected football field theme as default for enhanced sports atmosphere

### Added
- Admin-controlled theme system with two background options
- Football field theme with subtle yard lines and green field pattern
- HTML data-attribute theme switching (data-theme="field" or "default")

### Fixed
- Coaches who complete selection now see updated PublicView with current draft order and next picker
- Removed SuccessScreen in favor of seamless public view transition

### Known Issues
- Token expiration not yet implemented (requires backend integration)
- No email automation system yet (requires AWS SES integration)

### TODO
- Implement server-side token expiration
- Add email automation for magic link distribution
- Integrate with AWS services (Cognito, DynamoDB, SES)
- Add admin panel for league management