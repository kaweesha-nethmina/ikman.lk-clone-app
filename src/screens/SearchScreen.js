import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import CategoryCard from '../components/CategoryCard';
import { categories } from '../data/categories';

const SearchScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('All Sri Lanka');

  const locations = [
    'All Sri Lanka',
    'Colombo',
    'Kandy',
    'Galle',
    'Jaffna',
    'Negombo',
    'Kurunegala',
    'Anuradhapura',
  ];

  const handleCategoryPress = (category) => {
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

  const renderCategoryItem = ({ item }) => (
    <CategoryCard category={item} onPress={handleCategoryPress} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <Feather name="search" size={20} color="#666" style={styles.searchIcon} />
            <TextInput
              placeholder="What are you looking for?"
              style={styles.searchInput}
              placeholderTextColor="#666"
              value={searchText}
              onChangeText={setSearchText}
              onSubmitEditing={handleSearch}
            />
          </View>
        </View>

        {/* Location Filter */}
        <View style={styles.filterContainer}>
          <TouchableOpacity style={styles.locationFilter}>
            <Feather name="map-pin" size={18} color="#149777" />
            <Text style={styles.locationText}>{selectedLocation}</Text>
            <Feather name="chevron-down" size={18} color="#666" />
          </TouchableOpacity>
        </View>

        {/* Categories Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Browse Categories</Text>
          <FlatList
            key="searchCategories3Columns"
            data={categories}
            renderItem={renderCategoryItem}
            keyExtractor={(item) => item.id}
            numColumns={3}
            scrollEnabled={false}
            contentContainerStyle={styles.categoriesContainer}
          />
        </View>

        {/* Popular Searches */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Popular Searches</Text>
          <View style={styles.popularSearches}>
            {['iPhone', 'Car for sale', 'House rent', 'Job vacancy', 'Laptop'].map((search, index) => (
              <TouchableOpacity key={index} style={styles.popularSearchTag}>
                <Text style={styles.popularSearchText}>{search}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  searchContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#fff',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 25,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  filterContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  locationFilter: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  locationText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 8,
    marginRight: 8,
    flex: 1,
  },
  section: {
    marginBottom: 24,
    backgroundColor: '#fff',
    paddingVertical: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  categoriesContainer: {
    paddingHorizontal: 8,
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  popularSearches: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 16,
  },
  popularSearchTag: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 8,
  },
  popularSearchText: {
    fontSize: 14,
    color: '#666',
  },
});

export default SearchScreen;