import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { Feather } from '@expo/vector-icons';

// Import types
import { Product, RouteParams } from '../types';

interface CategoryScreenProps {
  route: {
    params: RouteParams;
  };
  navigation: {
    navigate: (screen: string, params: any) => void;
  };
}

const CategoryScreen: React.FC<CategoryScreenProps> = ({ route, navigation }) => {
  const { categoryId, categoryName, categoryColor } = route.params;
  const categoryProducts: Product[] = products[categoryId || ''] || [];

  const handleProductPress = (product: Product) => {
    navigation.navigate('ProductDetails', { product });
  };

  const renderProductItem = ({ item }: { item: Product }) => (
    <ProductCard product={item} onPress={handleProductPress} isGrid={true} />
  );

  const ListEmptyComponent = () => (
    <View style={styles.emptyContainer}>
      <Feather name="inbox" size={64} color="#ccc" />
      <Text style={styles.emptyTitle}>No ads found</Text>
      <Text style={styles.emptyDescription}>
        There are no ads in this category yet.
      </Text>
    </View>
  );

  const ListHeaderComponent = () => (
    <View style={styles.headerContainer}>
      <Text style={styles.resultCount}>
        {categoryProducts.length} ads found in {categoryName}
      </Text>
      <TouchableOpacity style={styles.filterButton}>
        <Feather name="sliders" size={20} color="#149777" />
        <Text style={styles.filterText}>Filter</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        key="categoryGrid"
        data={categoryProducts}
        renderItem={renderProductItem}
        keyExtractor={(item: Product) => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
        ListHeaderComponent={ListHeaderComponent}
        ListEmptyComponent={ListEmptyComponent}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  listContainer: {
    paddingBottom: 20,
    paddingHorizontal: 8,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#fff',
    marginBottom: 8,
  },
  resultCount: {
    fontSize: 16,
    color: '#333',
    fontWeight: '600',
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#149777',
    borderRadius: 20,
  },
  filterText: {
    fontSize: 14,
    color: '#149777',
    marginLeft: 6,
    fontWeight: '600',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 100,
  },
  emptyTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 16,
    marginBottom: 8,
  },
  emptyDescription: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    paddingHorizontal: 40,
  },
});

export default CategoryScreen;