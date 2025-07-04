# Issues & Technical Debt

This file tracks known issues, bugs, and technical debt that we're aware of but haven't addressed yet.

## 🐛 Known Issues

### Data Persistence
- **localStorage only** - Selections don't persist across devices or browsers
- **No data validation** - localStorage data could be corrupted or manually edited
- **Browser data clearing** - Clearing browser data loses all draft progress

### Token Security
- **No token expiration** - Magic links work indefinitely once created
- **No server-side validation** - Tokens are only validated client-side
- **Token reuse** - Same token can be used multiple times

### Edge Cases
- **Multiple device access** - Coach could use magic link on multiple devices simultaneously
- **Concurrent selections** - Two coaches could theoretically select same position
- **Browser refresh during submission** - Could cause duplicate or lost selections

### UI/UX Minor Issues
- **No loading states** - Some operations don't show loading indicators
- **No error handling** - Network failures or errors aren't handled gracefully
- **No confirmation dialogs** - No "are you sure?" before locking in selection

## 🔧 Technical Debt

### Code Quality
- **Commented out imports** - `SuccessScreen` import is commented but not removed
- **TODO comments** - Several TODO items in code that need addressing
- **Magic numbers** - Hardcoded values like `2000ms` timeout in code

### Architecture
- **Mixed data sources** - Some data from mockData, some from localStorage
- **No error boundaries** - React error boundaries not implemented
- **No logging** - No error tracking or analytics
- **CSS Architecture Debt** - Desktop-first approach instead of mobile-first creates maintenance burden

### Testing (Moving to Planned Development)
- **Testing implementation planned** - 7-hour effort across 3 phases
- **Starting with utils testing** - tokenUtils, selectionUtils, draftStatusUtils
- **Jest + React Testing Library** - Modern testing stack selected

## 🚀 Future Improvements

### Performance
- **No caching** - API calls (when implemented) won't be cached
- **No optimization** - Bundle size and performance not optimized
- **No lazy loading** - All components load immediately

### Accessibility
- **Keyboard navigation** - Not fully keyboard accessible
- **Screen reader support** - ARIA labels and descriptions missing
- **Color contrast** - Haven't verified WCAG compliance

### User Experience Enhancements
- **Lock icon visual feedback** - Add distinct icons to selected positions (e.g., "PICK" → "READY ✅") to reinforce lock-in concept
- **Visual state progression** - Clear indication of pick → ready → locked states

### Mobile Experience
- **Touch interactions** - Could be improved for mobile devices
- **Responsive breakpoints** - May need fine-tuning for various screen sizes

## 📋 Priority Levels

### 🔴 High Priority (Blocks Production)
- Token expiration system
- Server-side data persistence (DynamoDB migration: ~90 minutes)
- Error handling for network failures

### 🟠 Architecture Debt (Should Address)
- **CSS Mobile-First Refactor** - Current desktop-first approach conflicts with mobile optimizations and creates override complexity

### 🟡 Medium Priority (Should Fix)
- Multiple device access handling
- Loading states and user feedback
- Code cleanup (remove commented imports)
- **Testing implementation** - Start with Phase 1 utils testing

### 🟢 Low Priority (Nice to Have)
- Unit test coverage
- Accessibility improvements
- Performance optimizations
- Lock icon visual feedback for selected positions
- Enhanced visual state indicators for selection flow

## 📝 Notes

- Most issues will be resolved when we implement AWS backend
- **DynamoDB Migration**: Simple 90-minute task, zero configuration required
- Some issues are acceptable for MVP but should be addressed for production
- **CSS Architecture**: Desktop-first approach was used instead of mobile-first, creating maintenance debt
- Mobile-first refactor would require 4-6 hours and carries high regression risk
- Keep this list updated as we discover new issues or resolve existing ones

---

*Last Updated: December 2024*