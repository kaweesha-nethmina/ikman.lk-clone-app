import React from 'react';
import {
  View,
  Text,
  StyleSheet,
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
    <View style={styles.container}>
      <StatusBar backgroundColor="#149777" barStyle="light-content" translucent={false} />
      
      {/* Header */}
      <SafeAreaView style={styles.headerSafeArea}>
        <View style={styles.header}>
        <Text style={styles.headerTitle}>ikman.lk</Text>
        <TouchableOpacity style={styles.searchButton} onPress={handleSearchButtonPress}>
          <Feather name="search" size={24} color="#fff" />
        </TouchableOpacity>
        </View>
      </SafeAreaView>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
        {/* Location and Category Filters */}
        <View style={styles.filtersContainer}>
          <TouchableOpacity style={styles.filterItem}>
            <Feather name="map-pin" size={20} color="#149777" />
            <Text style={styles.filterText} numberOfLines={1}>{selectedLocation}</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.filterItem}>
            <Feather name="grid" size={20} color="#149777" />
            <Text style={styles.filterText} numberOfLines={1}>{selectedCategory}</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.filterItem}>
            <Feather name="sliders" size={20} color="#149777" />
            <Text style={styles.filterText}>Filters</Text>
          </TouchableOpacity>
        </View>

        {/* Search Bar - Conditional Rendering */}
        {showSearchBar && (
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
                autoFocus={true}
              />
              <TouchableOpacity 
                style={styles.closeButton} 
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

        {/* Categories Section
        <View style={styles.section}>
          <FlatList
            key="categories3Columns"
            data={categories}
            renderItem={renderCategoryItem}
            keyExtractor={(item) => item.id}
            numColumns={3}
            scrollEnabled={false}
            contentContainerStyle={styles.categoriesContainer}
          />
        </View> */}

        {/* Published Ads Section */}
        <View style={styles.section}>
          <FlatList
            key="recentAdsGrid"
            data={getRecentProducts()}
            renderItem={renderProductItem}
            keyExtractor={(item) => item.id}
            numColumns={2}
            scrollEnabled={false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.gridContainer}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#149777',
  },
  headerSafeArea: {
    backgroundColor: '#149777',
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#149777',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    elevation: 4,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  searchButton: {
    padding: 8,
  },
  filtersContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    gap: 8,
  },
  filterItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 12,
    backgroundColor: '#f8fffe',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e8f5f3',
  },
  filterText: {
    fontSize: 12,
    color: '#149777',
    fontWeight: '600',
    marginLeft: 6,
    flex: 1,
  },
  searchContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingHorizontal: 16,
    paddingVertical: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  closeButton: {
    marginLeft: 10,
    padding: 4,
  },
  section: {
    marginBottom: 24,
  },
  categoriesContainer: {
    paddingHorizontal: 8,
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  gridContainer: {
    paddingHorizontal: 8,
  },
});

export default HomeScreen;