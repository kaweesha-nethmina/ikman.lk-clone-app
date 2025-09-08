import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import CategoryCard from '../components/CategoryCard';
import { categories } from '../data/categories';

// Import types
import { Category, RouteParams } from '../types';

interface SearchScreenProps {
  navigation: any;
  route: {
    params?: RouteParams;
  };
}

const SearchScreen: React.FC<SearchScreenProps> = ({ navigation, route }) => {
  const [searchText, setSearchText] = useState<string>('');
  const [selectedLocation, setSelectedLocation] = useState<string>('All Sri Lanka');

  // Handle search query from navigation params
  useEffect(() => {
    if (route.params?.searchQuery) {
      setSearchText(route.params.searchQuery);
    }
  }, [route.params?.searchQuery]);

  const locations: string[] = [
    'All Sri Lanka',
    'Colombo',
    'Kandy',
    'Galle',
    'Jaffna',
    'Negombo',
    'Kurunegala',
    'Anuradhapura',
  ];

  const handleCategoryPress = (category: Category) => {
    navigation.navigate('Category', { 
      categoryId: category.id,
      categoryName: category.name,
      categoryColor: category.color
    });
  };

  const handleSearch = () => {
    // Handle search functionality
    console.log('Searching for:', searchText, 'in', selectedLocation);
  };

  const renderCategoryItem = ({ item }: { item: Category }) => (
    <CategoryCard category={item} onPress={handleCategoryPress} />
  );

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Search Bar */}
        <View className="px-4 py-4 bg-white">
          <View className="flex-row items-center bg-gray-100 rounded-full px-4 py-3">
            <Feather name="search" size={20} color="#666" />
            <TextInput
              placeholder="What are you looking for?"
              className="flex-1 text-base text-gray-700 ml-2.5"
              placeholderTextColor="#666"
              value={searchText}
              onChangeText={setSearchText}
              onSubmitEditing={handleSearch}
            />
          </View>
        </View>

        {/* Location Filter */}
        <View className="px-4 py-3 bg-white border-b border-gray-200">
          <TouchableOpacity className="flex-row items-center py-2">
            <Feather name="map-pin" size={18} color="#149777" />
            <Text className="text-base text-gray-700 ml-2 mr-2 flex-1">{selectedLocation}</Text>
            <Feather name="chevron-down" size={18} color="#666" />
          </TouchableOpacity>
        </View>

        {/* Categories Section */}
        <View className="mb-6 bg-white py-4">
          <Text className="text-xl font-bold text-gray-700 px-4 mb-4">Browse Categories</Text>
          <FlatList
            key="searchCategories3Columns"
            data={categories}
            renderItem={renderCategoryItem}
            keyExtractor={(item: Category) => item.id}
            numColumns={3}
            scrollEnabled={false}
            contentContainerStyle={{ paddingHorizontal: 8 }}
          />
        </View>

        {/* Popular Searches */}
        <View className="mb-6 bg-white py-4">
          <Text className="text-xl font-bold text-gray-700 px-4 mb-4">Popular Searches</Text>
          <View className="flex-row flex-wrap px-4">
            {['iPhone', 'Car for sale', 'House rent', 'Job vacancy', 'Laptop'].map((search, index) => (
              <TouchableOpacity key={index} className="bg-gray-200 px-3 py-2 rounded-full mr-2 mb-2">
                <Text className="text-sm text-gray-500">{search}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchScreen;