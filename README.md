# 🏈 Draft Order Coordinator

A modern, serverless fantasy football draft order selection app that eliminates email chaos and provides a smooth, secure experience for league commissioners and coaches.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm test

# Build for production
npm run build
```

## 🏗️ Architecture

### Frontend Stack
- **React 19** + **Vite** - Modern development experience
- **CSS Variables** - Theme system with football field background
- **Mobile-first responsive design**
- **Component-based architecture**

### Authentication
- **Magic link system** - No passwords, secure token-based access
- **Admin-controlled flow** - Commissioners control selection order
- **Public/private views** - Authenticated selection vs public progress

## 📱 Component API

### CoachName
Flexible name display component with multiple variants.

```jsx
import CoachName from './components/ui/CoachName';

// Full name (default)
<CoachName firstName="Sarah" lastName="Chen" />
// Output: "Sarah Chen"

// First name only (mobile-friendly)
<CoachName firstName="Sarah" lastName="Chen" variant="first" />
// Output: "Sarah"

// Last name only
<CoachName firstName="Sarah" lastName="Chen" variant="last" />
// Output: "Chen"
```

**Props:**
- `firstName` (string, required) - Coach's first name
- `lastName` (string, required) - Coach's last name  
- `variant` (string, optional) - Display variant: `"full"` | `"first"` | `"last"` (default: `"full"`)

### Theme System
Admin-controlled themes via HTML data attributes.

```html
<!-- Default dark theme -->
<body data-theme="default">

<!-- Football field theme -->
<body data-theme="field">
```

**Available themes:**
- `default` - Dark gradient background
- `field` - Green football field with yard lines

## 📊 Data Model

### Coach Object
```javascript
{
  rank: Number,           // Last season finish (1-12)
  firstName: String,      // First name
  lastName: String,       // Last name
  team: String,           // Fantasy team name
  hasSelected: Boolean,   // Selection status
  selectedPosition: Number|null, // Chosen draft position (1-12)
  token: String,          // Magic link authentication token
  email: String,          // Email for magic links
  pickOrder: Number       // Admin-controlled selection order (1-12)
}
```

### Selection Storage (localStorage)
```javascript
{
  "4": {
    coachId: 4,
    selectedPosition: 7,
    timestamp: "2024-01-15T10:30:00.000Z"
  }
}
```

## 🧪 Testing

### Test Stack
- **Vitest** - Fast test runner with Vite integration
- **React Testing Library** - Component testing utilities
- **@testing-library/jest-dom** - Custom DOM matchers

### Running Tests
```bash
# Run all tests
npm test

# Run specific test file
npm test tokenUtils

# Run tests with UI
npm run test:ui
```

### Test Structure
```
src/
├── components/
│   └── ui/
│       └── __tests__/
│           └── CoachName.test.jsx
└── utils/
    └── __tests__/
        └── tokenUtils.test.js
```

## 📱 Mobile Optimizations

### Responsive Features
- **Smaller position buttons** on mobile (0.5rem padding vs 1.2rem)
- **Hidden taken positions** to save vertical space
- **First name only display** in compact views
- **Tighter spacing** throughout mobile interface

### CSS Architecture
- **Desktop-first approach** (technical debt - should be mobile-first)
- **CSS custom properties** for consistent theming
- **Media queries** at 768px breakpoint

## 🔧 Development

### Project Structure
```
src/
├── components/
│   ├── coach/          # Coach-related components
│   ├── draft/          # Draft selection components
│   ├── layout/         # Layout components
│   ├── standings/      # Standings display
│   └── ui/             # Reusable UI components
├── data/
│   └── mockData.js     # Coach data (will migrate to DynamoDB)
└── utils/
    ├── tokenUtils.js   # Authentication logic
    ├── selectionUtils.js # Draft selection logic
    └── draftStatusUtils.js # Draft state management
```

### Key Utilities

#### Token Authentication
```javascript
import { getTokenFromUrl, validateToken } from './utils/tokenUtils';

const token = getTokenFromUrl();           // Extract from URL params
const coach = validateToken(token);        // Validate and get coach data
```

#### Selection Management
```javascript
import { getTakenPositions } from './utils/selectionUtils';

const taken = getTakenPositions();         // Get array of selected positions
```

#### Draft Status
```javascript
import { getDraftStatus, startDraft } from './utils/draftStatusUtils';

const status = getDraftStatus();           // 'NOT_STARTED' | 'IN_PROGRESS' | 'COMPLETED'
startDraft();                             // Mark draft as started
```

## 🚀 Deployment

### Current: Development Only
- **Local development** with Vite dev server
- **Mock data** stored in JavaScript files
- **localStorage** for temporary persistence

### Planned: AWS Serverless
- **AWS Amplify** - Static hosting + CI/CD
- **DynamoDB** - Coach data and selections (~90 minute migration)
- **Lambda** - Business logic and API endpoints
- **SES** - Automated email system

## 📋 Known Issues

### High Priority
- **No data persistence** - localStorage only
- **No token expiration** - Magic links work indefinitely
- **No email automation** - Manual magic link distribution

### Technical Debt
- **Desktop-first CSS** - Should be mobile-first architecture
- **No error boundaries** - React error handling missing
- **Limited test coverage** - Core utils tested, components need coverage

## 🎯 Contributing

### Code Style
- **Mobile-first approach** for new CSS
- **Component composition** over prop drilling
- **Test-driven development** for new features
- **Semantic commit messages**

### Testing Requirements
- **Unit tests** for all utility functions
- **Component tests** for UI components
- **Integration tests** for user flows

## 📚 Documentation

- **CHANGELOG.md** - Version history and changes
- **ROADMAP.md** - Development phases and architecture
- **PLAN.md** - Implementation strategy
- **ISSUES.md** - Known issues and technical debt
- **Purpose.md** - Project goals and requirements

## 💰 Cost Structure

### Current: $0
- **Development** - Local only
- **No cloud services** - Mock data and localStorage

### Production: ~$0-15/year
- **AWS Free Tier** covers expected usage (10-15 users)
- **Domain** - Optional ~$12/year
- **Scaling** - Linear cost increase with usage

---

*Last Updated: December 2024*