# Draft Order Coordinator - Roadmap

## 🎯 Project Vision
A modern, serverless fantasy football draft order selection app that eliminates email chaos and provides a smooth, secure experience for league commissioners and coaches.

## 🏗️ Architecture Overview

### Frontend (React + Vite)
```
Public View (No Auth)
├── Welcome message
├── Current picker status
├── Live draft order display
└── Last season standings

Authenticated View (Magic Link)
├── Coach selection interface
├── Position selector with taken/available states
├── Selection confirmation
└── Automatic transition to public view
```

### Backend (AWS Serverless)
```
AWS Amplify (Hosting + CI/CD)
├── Static React app hosting
├── Custom domain support
└── Automatic deployments

AWS Lambda (Business Logic)
├── Token validation
├── Email automation triggers
├── Draft state management
└── Admin functions

Amazon DynamoDB (Data Layer)
├── Coach information
├── Draft selections
├── Token management
└── Audit logs

Amazon SES (Email Service)
├── Magic link distribution
├── Automated email chains
└── Custom email templates
```

## 📋 Development Phases

### ✅ Phase 1: Core Frontend (COMPLETED)
- [x] Modular React component architecture
- [x] Token-based authentication flow
- [x] Public vs authenticated view separation
- [x] Real-time draft order display with skeletons
- [x] Dynamic support for any league size
- [x] Mobile-responsive design
- [x] Admin-controlled theme system with football field background

### 🚧 Phase 2: AWS Integration (IN PROGRESS)
- [ ] AWS Amplify setup and deployment
- [ ] DynamoDB table creation: `draft-order-coaches` (partition key: rank) - 10 minutes
- [ ] Lambda functions for core business logic (read/update coaches) - 30 minutes
- [ ] API Gateway endpoints - 20 minutes
- [ ] Frontend integration (replace localStorage) - 20 minutes
- [ ] One-time data migration from mockData.js - 10 minutes
- **Total Phase 2 Estimate: ~90 minutes**

### 📅 Phase 3: Email Automation (PLANNED)
- [ ] Amazon SES configuration and verification
- [ ] Email template design
- [ ] Automated email chain system
- [ ] Token expiration and regeneration
- [ ] Error handling and retry logic

### 📅 Phase 4: Admin Features (PLANNED)
- [ ] Admin authentication system
- [ ] League setup and management
- [ ] Coach data import/export
- [ ] Draft reset and override capabilities
- [ ] System monitoring and logs

### 📅 Phase 4.5: Testing Implementation (PLANNED)
- [ ] Setup testing environment (Jest + React Testing Library)
- [ ] Phase 1: Utils testing (tokenUtils, selectionUtils, draftStatusUtils) - 2 hours
- [ ] Phase 2: Component testing (PositionButton, CurrentDraftOrder) - 3 hours
- [ ] Phase 3: Integration testing (full user flows) - 2 hours
- **Total Testing Effort: ~7 hours**

### 📅 Phase 5: Polish & Production (PLANNED)
- [ ] Comprehensive error handling
- [ ] Performance optimization
- [ ] Security audit and hardening
- [ ] User acceptance testing
- [ ] Production deployment

## 🎛️ Technical Decisions

### Why Serverless?
- **Cost**: Free tier covers 10-15 users easily (DynamoDB: 25GB + 200M requests/month)
- **Scalability**: Handles seasonal usage patterns
- **Maintenance**: No server management required
- **Reliability**: AWS handles infrastructure
- **Setup Simplicity**: DynamoDB requires zero configuration, fully managed

### Why Magic Links?
- **Security**: No passwords to manage or forget
- **UX**: One-click access from email
- **Control**: Tokens can be expired/regenerated
- **Simplicity**: Perfect for seasonal use

### Why React + Vite?
- **Performance**: Fast builds and hot reload
- **Modern**: Latest React features and patterns
- **Maintainable**: Component-based architecture
- **Deployable**: Static build for Amplify hosting

### Why HTML Data-Attribute Themes?
- **Admin Control**: Simple one-line change in HTML
- **No UI Clutter**: No user-facing theme switcher
- **Professional**: Clean separation of admin vs user features
- **Maintainable**: Easy to modify without code changes

## 🎯 Success Metrics

### User Experience
- Zero "reply all" email threads about draft order
- < 2 minutes from email to draft selection
- 100% mobile compatibility
- Intuitive interface requiring no instructions

### Technical Performance
- < 2 second page load times
- 99.9% uptime during draft season
- Zero data loss or corruption
- Seamless email delivery

### Business Value
- Eliminates 2-3 hours of commissioner coordination time
- Reduces league member frustration
- Provides professional league management experience
- Scales to support multiple leagues (future)

## 🔮 Future Enhancements

### Multi-League Support
- Support multiple fantasy leagues per admin
- League-specific branding and customization
- Bulk operations across leagues

### Advanced Features
- Draft position trading between coaches
- Deadline enforcement with automatic assignments
- Integration with ESPN/Yahoo/Sleeper APIs
- Historical draft order analytics

### Mobile App
- Native iOS/Android apps
- Push notifications for draft turns
- Offline capability with sync

## 💰 Cost Projections

### Year 1 (AWS Free Tier)
- **Hosting**: $0 (Amplify free tier: 1K build minutes + 5GB storage)
- **Database**: $0 (DynamoDB free tier: 25GB storage + 200M requests)
- **Email**: $0 (SES free tier: 200 emails/day from Lambda)
- **Functions**: $0 (Lambda free tier: 1M requests + 400K GB-seconds)
- **Domain**: ~$12/year (optional)
- **Your Usage**: Well within all free tier limits

### Year 2+ (Post Free Tier)
- **Estimated**: $5-15/year for 10-15 users
- **Scaling**: Linear cost increase with usage

## 🚀 Deployment Strategy

### Development
- Local development with Vite
- Mock data and localStorage
- Component testing and iteration

### Staging
- AWS Amplify preview deployments
- Real AWS services integration
- User acceptance testing

### Production
- Custom domain configuration
- Production data migration
- Monitoring and alerting setup
- Backup and disaster recovery

---

*Last Updated: December 2024*