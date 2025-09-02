# Ikman.lk Clone App

A React Native mobile application that clones the popular Sri Lankan classified advertisement platform Ikman.lk. Built with Expo for easy development and testing.

## 📱 Features

### Core Features
- **Browse Categories**: Cars, Electronics, Jobs, Property, Mobile Phones, Fashion, Sports, Services
- **Product Listings**: View products with details like title, price, location, and posting date  
- **Product Details**: Comprehensive product information including images, descriptions, seller details
- **My Ads Management**: View your posted ads with status tracking (Active, Sold, Expired)
- **User Profile**: Complete profile management with settings and preferences

### Navigation
- **Bottom Tab Navigation**: Home, My Ads, Profile
- **Stack Navigation**: Seamless navigation between screens
- **Category Filtering**: Browse products by specific categories

### UI/UX Features
- **Search Functionality**: Search bar on home screen
- **Responsive Design**: Works on different screen sizes
- **Modern UI**: Clean, intuitive interface matching Ikman.lk's design language
- **2-Column Grid Layout**: Product cards displayed in grid format like the real app
- **Status Indicators**: Visual status indicators for ads (Active, Sold, etc.)
- **Contact Options**: Call and message sellers directly

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or later)
- npm or yarn
- Expo CLI
- Expo Go app (for mobile testing)

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
```

4. **Run on different platforms**
- **Mobile**: Scan QR code with Expo Go app
- **Web**: Press `w` in terminal or visit http://localhost:19006
- **Android**: Press `a` (requires Android Studio/emulator)
- **iOS**: Press `i` (requires Xcode - macOS only)

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── CategoryCard.js  # Category display component
│   ├── ProductCard.js   # Product listing component
│   └── MyAdCard.js      # User's ad component
├── data/               # Static data and mock data
│   ├── categories.js   # Categories data
│   └── products.js     # Products and user ads data
├── navigation/         # Navigation configuration
│   └── AppNavigator.js # Main navigation setup
└── screens/           # Application screens
    ├── HomeScreen.js       # Main home screen
    ├── CategoryScreen.js   # Category product listings
    ├── ProductDetailsScreen.js # Individual product details
    ├── MyAdsScreen.js     # User's ads management
    └── ProfileScreen.js    # User profile and settings
```

## 🎨 Design Features

### Color Scheme
- **Primary**: #149777 (Ikman Green)
- **Background**: #f5f5f5 (Light Gray)
- **Text**: #333 (Dark Gray)
- **Cards**: #fff (White)

### Components
- **CategoryCard**: Displays categories with icons and colors
- **ProductCard**: Shows product information in a card layout
- **MyAdCard**: Special card for user's own advertisements

## 📊 Data Structure

### Categories
- 8 main categories with unique icons and colors
- Each category has associated products

### Products
- Detailed product information including:
  - Basic info (title, price, location)
  - Images and descriptions  
  - Category-specific details (year, mileage for cars, etc.)
  - Seller contact information

### User Ads
- Status tracking (Active, Sold, Expired)
- View count and posting date
- Management capabilities

## 🔧 Technical Details

### Dependencies
- **React Navigation**: Navigation between screens
- **Expo Vector Icons**: Icon components
- **React Native**: Core framework

### Navigation Structure
```
TabNavigator (Bottom Tabs)
├── HomeStack
│   ├── Home
│   ├── Category
│   └── ProductDetails
├── MyAds
└── Profile
```

## 📱 Screens Overview

### Home Screen
- Search functionality
- Category grid (4 columns)
- Recent ads listing
- Clean header with app branding

### Category Screen  
- Filtered product listings by category
- Filter button for advanced options
- Empty state handling

### Product Details Screen
- Full product information
- Image display
- Seller contact options (Call/Message)
- Favorite and share functionality

### My Ads Screen
- Tab filtering (All, Active, Sold)
- Add new ad functionality
- Status indicators and metrics

### Profile Screen
- User information display
- Settings and preferences
- Menu items with navigation
- Logout functionality

## 🚧 Future Enhancements

- **Backend Integration**: Connect to real API
- **User Authentication**: Login/Register functionality  
- **Push Notifications**: Real-time notifications
- **Image Upload**: Camera and gallery integration
- **Location Services**: GPS-based location
- **Advanced Search**: Filters and sorting
- **Chat System**: In-app messaging
- **Payment Integration**: Secure payments

## 📄 License

This project is created for educational purposes as part of an internship assignment.

## 🤝 Contributing

This is a learning project. Feel free to suggest improvements or report issues.

## 📞 Contact

For questions or support regarding this project, please contact the development team.