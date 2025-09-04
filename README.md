# Ikman.lk Clone App

A comprehensive React Native mobile application that replicates the core functionality and design of Ikman.lk, Sri Lanka's leading classified ads platform.

## 📱 App Overview

This is a fully functional classified ads marketplace app built with React Native and Expo, featuring a modern UI design, seamless navigation, and authentic marketplace functionality.

## 🚀 Features

### Core Functionality
- **Multi-Category Browsing**: 9 categories including Cars, Electronics, Jobs, Property, Mobile Phones, Fashion, Sports, Services, and Education
- **Product Listings**: Grid-based product display with high-quality images
- **Search & Filter**: Interactive search functionality with location and category filters
- **User Ads Management**: Personal ads management with status tracking
- **Product Details**: Comprehensive product information with seller contact details
- **Chat Support**: Integrated customer support chat system

### UI/UX Features
- **Modern Navigation**: Bottom tab navigation with special elevated Post Ad button
- **Clean Interface**: Minimalist design without unnecessary section titles
- **Responsive Grid**: 3x3 category layout and 2-column product grid
- **Interactive Elements**: Toggleable search bar, filter options
- **Professional Design**: Authentic Ikman.lk color scheme and styling

## 🛠️ Technologies & Tools

### Core Technologies
- **React Native**: Cross-platform mobile app development
- **Expo CLI**: Development platform and toolchain
- **JavaScript (ES6+)**: Programming language
- **React Hooks**: State management and lifecycle handling

### Navigation & Routing
- **@react-navigation/native**: Core navigation library
- **@react-navigation/bottom-tabs**: Bottom tab navigator
- **@react-navigation/native-stack**: Stack navigator for screen transitions
- **react-native-screens**: Native screen optimization
- **react-native-safe-area-context**: Safe area handling

### UI Components & Icons
- **@expo/vector-icons**: Feather icons for consistent iconography
- **React Native StyleSheet**: Component styling and theming
- **Custom Components**: Reusable UI components (CategoryCard, ProductCard, MyAdCard)

### Data & Images
- **Unsplash API**: High-quality stock photos for realistic product images
- **JSON Data Structure**: Organized category and product data
- **Static Assets**: Local data management for categories and products

## 📁 Project Structure

```
ikman.lk-clone-app/
├── src/
│   ├── components/
│   │   ├── CategoryCard.js       # Reusable category display component
│   │   ├── ProductCard.js        # Product listing card component
│   │   └── MyAdCard.js          # User ads management component
│   ├── screens/
│   │   ├── HomeScreen.js         # Main landing screen
│   │   ├── CategoryScreen.js     # Category-specific product listings
│   │   ├── ProductDetailsScreen.js # Detailed product view
│   │   ├── SearchScreen.js       # Search and category browsing
│   │   ├── PostAdScreen.js       # Ad posting interface
│   │   ├── ChatScreen.js         # Customer support chat
│   │   ├── MyAdsScreen.js        # User's ad management
│   │   └── ProfileScreen.js      # User profile and settings
│   ├── navigation/
│   │   └── AppNavigator.js       # Navigation structure and routing
│   └── data/
│       ├── categories.js         # Category definitions and icons
│       └── products.js           # Product data and user ads
├── App.js                        # Main application entry point
├── package.json                  # Dependencies and scripts
├── app.json                      # Expo configuration
└── README.md                     # Project documentation
```

## 🎨 Design Specifications

### Color Scheme
- **Primary Green**: #149777 (Headers, buttons, active elements)
- **Secondary Colors**: Muted grays and whites for clean contrast
- **Post Ad Button**: 3-circle design with yellow (#FFC000) and orange (#B35E04) accents

### Layout & Spacing
- **Category Grid**: 3x3 layout for perfect visual symmetry
- **Product Grid**: 2-column layout for optimal mobile viewing
- **Navigation Height**: 70px with optimized padding for thumb accessibility
- **Status Bar**: Seamless integration with green theme

### Typography
- **Navigation Labels**: 12px, medium weight
- **Product Titles**: 14-16px, semi-bold
- **Prices**: Prominent green color for visibility
- **Consistent Line Heights**: Optimized for readability

## 🔧 Development Steps

### Phase 1: Project Setup
1. **Expo Initialization**: Created React Native project with Expo CLI
2. **Dependency Installation**: Added navigation libraries and icon packages
3. **Project Structure**: Organized folders for components, screens, navigation, and data
4. **Basic Configuration**: Set up app.json and package.json

### Phase 2: Navigation Implementation
1. **Bottom Tab Navigator**: Created 5-tab navigation (Home, Search, Post Ad, Chat, Account)
2. **Stack Navigators**: Implemented nested navigation for screen flows
3. **Special Post Ad Button**: Designed elevated 3-circle button with overflow effect
4. **Navigation Optimization**: Shared stack navigators for cross-tab accessibility

### Phase 3: Data Structure & Content
1. **Category System**: Created 9 categories with consistent data structure
2. **Product Database**: Added diverse products for each category
3. **Realistic Images**: Integrated Unsplash API for high-quality product photos
4. **User Ads**: Implemented personal ads management system

### Phase 4: UI Component Development
1. **CategoryCard**: Reusable category display with icons and styling
2. **ProductCard**: Flexible product card for grid and list layouts
3. **MyAdCard**: Specialized component for user ad management
4. **Responsive Design**: Optimized for various screen sizes

### Phase 5: Screen Implementation
1. **HomeScreen**: Clean interface with toggleable search and product grid
2. **CategoryScreen**: Category-specific product listings with filtering
3. **ProductDetailsScreen**: Comprehensive product information display
4. **SearchScreen**: Category browsing and search functionality
5. **Additional Screens**: Post Ad, Chat, My Ads, and Profile screens

### Phase 6: UI/UX Optimization
1. **Color Scheme**: Implemented authentic Ikman.lk green theme (#149777)
2. **Status Bar Integration**: Seamless system UI integration
3. **Grid Layout**: Optimized 3x3 category and 2x1 product layouts
4. **Search Functionality**: Interactive search bar with auto-focus
5. **Navigation Polish**: Fine-tuned spacing and proportions

### Phase 7: Feature Enhancement
1. **Image Quality**: Replaced placeholders with professional stock photos
2. **Navigation Refinement**: Enhanced Post Ad button with 3-circle design
3. **Spacing Optimization**: User-friendly icon positioning and text visibility
4. **Final Polish**: Comprehensive testing and bug fixes

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager
- Expo CLI installed globally
- Expo Go app on your mobile device

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ikman.lk-clone-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   expo start
   ```

4. **Run on device**
   - Scan QR code with Expo Go app (Android/iOS)
   - Or use Android/iOS simulator

### Available Scripts

```bash
npm start          # Start Expo development server
npm run android    # Run on Android emulator
npm run ios        # Run on iOS simulator
npm run web        # Run in web browser
npm run eject      # Eject from Expo (irreversible)
```

## 📱 App Screens & Navigation

### Bottom Navigation Tabs
1. **Home**: Main product feed with search and filters
2. **Search**: Category browsing and advanced search
3. **Post Ad**: Elevated 3-circle button for ad posting
4. **Chat**: Customer support and messaging
5. **Account**: User profile and app settings

### Screen Flow
- **Home** → Product Details → Contact Seller
- **Search** → Categories → Products → Details
- **Post Ad** → Category Selection → Ad Form
- **My Ads** → Ad Management → Edit/Delete
- **Profile** → Settings → Support → About

## 🎯 Key Features Implemented

### Search & Discovery
- ✅ Interactive search bar with toggle functionality
- ✅ Location and category filtering
- ✅ 3x3 category grid for easy browsing
- ✅ 2-column product grid for optimal viewing

### User Experience
- ✅ Seamless navigation with shared stack navigators
- ✅ Authentic Ikman.lk color scheme and branding
- ✅ High-quality product images from Unsplash
- ✅ Responsive design for all screen sizes

### Technical Excellence
- ✅ Clean, modular code structure
- ✅ Reusable component architecture
- ✅ Optimized performance and memory usage
- ✅ Professional UI/UX design patterns

## 🔮 Future Enhancements

### Technical Improvements
- [ ] Integration with real backend API
- [ ] User authentication and registration
- [ ] Real-time chat functionality
- [ ] Push notifications for new messages
- [ ] Offline data caching

### Feature Additions
- [ ] Advanced search filters (price range, condition, etc.)
- [ ] Favorites/Wishlist functionality
- [ ] Map integration for location-based search
- [ ] Image upload for ad posting
- [ ] Payment integration for premium listings

### UI/UX Enhancements
- [ ] Dark mode support
- [ ] Advanced animations and transitions
- [ ] Accessibility improvements
- [ ] Multi-language support (Sinhala, Tamil, English)

## 📝 Development Notes

### Design Decisions
- **Clean Interface**: Removed section titles for minimalist design
- **3-Circle Post Ad Button**: Enhanced visual hierarchy with layered design
- **Consistent Spacing**: Optimized for mobile thumb accessibility
- **Professional Images**: Used Unsplash for authentic marketplace feel

### Technical Considerations
- **Navigation Structure**: Shared stack navigators prevent navigation conflicts
- **Component Reusability**: Flexible components support multiple use cases
- **Performance**: Optimized FlatList rendering for smooth scrolling
- **Scalability**: Modular structure supports easy feature additions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Ikman.lk**: Inspiration for design and functionality
- **Expo Team**: Excellent development platform and documentation
- **React Navigation**: Comprehensive navigation solution
- **Unsplash**: High-quality stock photos for realistic product images
- **Feather Icons**: Beautiful and consistent iconography

## 📞 Contact & Support

For questions, suggestions, or support, please contact:
- **Developer**: [Kaweesha Nethmina]
- **Email**: [kaweesha.nj@gmail.com]
- **GitHub**: [github.com/kaweesha-nethmina]

---

