import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  FlatList,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

// Import components
import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';

// Import data
import { categories } from '../data/categories';
import { products } from '../data/products';

// Import types
import { Category, Product } from '../types';

interface HomeScreenProps {
  navigation: any;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [selectedLocation, setSelectedLocation] = React.useState<string>('All Sri Lanka');
  const [selectedCategory, setSelectedCategory] = React.useState<string>('All Categories');
  const [showSearchBar, setShowSearchBar] = React.useState<boolean>(false);
  const [searchText, setSearchText] = React.useState<string>('');

  // Get recent products from all categories
  const getRecentProducts = (): (Product & { categoryId?: string })[] => {
    const allProducts: (Product & { categoryId?: string })[] = [];
    Object.keys(products).forEach(categoryId => {
      products[categoryId].forEach(product => {
        allProducts.push({ ...product, categoryId });
      });
    });
    return allProducts.slice(0, 10); // Show first 10 products
  };

  const handleCategoryPress = (category: Category) => {
    console.log('Category clicked:', category.name); // Debug message
    navigation.navigate('Category', { 
      categoryId: category.id,
      categoryName: category.name,
      categoryColor: category.color
    });
  };

  const handleProductPress = (product: Product & { categoryId?: string }) => {
    navigation.navigate('ProductDetails', { product });
  };

  const handleSearchButtonPress = () => {
    setShowSearchBar(!showSearchBar);
  };

  const handleSearch = () => {
    if (searchText.trim()) {
      console.log('Searching for:', searchText);
      // Navigate to search screen with search query
      navigation.navigate('Search', { searchQuery: searchText });
    }
  };

  const renderCategoryItem = ({ item }: { item: Category }) => (
    <CategoryCard category={item} onPress={handleCategoryPress} />
  );

  const renderProductItem = ({ item }: { item: Product & { categoryId?: string } }) => (
    <ProductCard product={item} onPress={handleProductPress} isGrid={true} />
  );

  return (
    <View className="flex-1 bg-[#149777]">
      <StatusBar backgroundColor="#149777" barStyle="light-content" translucent={false} />
      
      {/* Header */}
      <SafeAreaView className="bg-[#149777]">
        <View className="bg-[#149777] flex-row justify-between items-center px-5 py-4">
          <Text className="text-2xl font-bold text-white">ikman.lk</Text>
          <TouchableOpacity className="p-2" onPress={handleSearchButtonPress}>
            <Feather name="search" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <ScrollView showsVerticalScrollIndicator={false} className="flex-1 bg-gray-100">
        {/* Location and Category Filters */}
        <View className="flex-row px-4 py-3 bg-white border-b border-gray-200 gap-2">
          <TouchableOpacity className="flex-1 flex-row items-center py-3 px-3 bg-[#f8fffe] rounded-lg border border-[#e8f5f3]">
            <Feather name="map-pin" size={20} color="#149777" />
            <Text className="text-xs text-[#149777] font-semibold ml-1.5 flex-1" numberOfLines={1}>{selectedLocation}</Text>
          </TouchableOpacity>
          
          <TouchableOpacity className="flex-1 flex-row items-center py-3 px-3 bg-[#f8fffe] rounded-lg border border-[#e8f5f3]">
            <Feather name="grid" size={20} color="#149777" />
            <Text className="text-xs text-[#149777] font-semibold ml-1.5 flex-1" numberOfLines={1}>{selectedCategory}</Text>
          </TouchableOpacity>
          
          <TouchableOpacity className="flex-1 flex-row items-center py-3 px-3 bg-[#f8fffe] rounded-lg border border-[#e8f5f3]">
            <Feather name="sliders" size={20} color="#149777" />
            <Text className="text-xs text-[#149777] font-semibold ml-1.5">Filters</Text>
          </TouchableOpacity>
        </View>

        {/* Search Bar - Conditional Rendering */}
        {showSearchBar && (
          <View className="px-4 py-4">
            <View className="flex-row items-center bg-white rounded-full px-4 py-3 shadow shadow-gray-400">
              <Feather name="search" size={20} color="#666" />
              <TextInput
                placeholder="What are you looking for?"
                className="flex-1 text-base text-gray-700 ml-2.5"
                placeholderTextColor="#666"
                value={searchText}
                onChangeText={setSearchText}
                onSubmitEditing={handleSearch}
                autoFocus={true}
              />
              <TouchableOpacity 
                className="ml-2.5 p-1"
                onPress={() => {
                  setShowSearchBar(false);
                  setSearchText('');
                }}
              >
                <Feather name="x" size={20} color="#666" />
              </TouchableOpacity>
            </View>
          </View>
        )}

        {/* Published Ads Section */}
        <View className="mb-6">
          <FlatList
            key="recentAdsGrid"
            data={getRecentProducts()}
            renderItem={renderProductItem}
            keyExtractor={(item) => item.id}
            numColumns={2}
            scrollEnabled={false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 8 }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;