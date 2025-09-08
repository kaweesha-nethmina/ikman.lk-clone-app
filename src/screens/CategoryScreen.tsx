import React from 'react';
import {
  View,
  Text,
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
    <View className="flex-1 justify-center items-center py-25">
      <Feather name="inbox" size={64} color="#ccc" />
      <Text className="text-2xl font-bold text-gray-700 mt-4 mb-2">No ads found</Text>
      <Text className="text-base text-gray-500 text-center px-10">
        There are no ads in this category yet.
      </Text>
    </View>
  );

  const ListHeaderComponent = () => (
    <View className="flex-row justify-between items-center px-4 py-4 bg-white mb-2">
      <Text className="text-base text-gray-700 font-semibold">
        {categoryProducts.length} ads found in {categoryName}
      </Text>
      <TouchableOpacity className="flex-row items-center px-3 py-2 border border-[#149777] rounded-full">
        <Feather name="sliders" size={20} color="#149777" />
        <Text className="text-sm text-[#149777] ml-1.5 font-semibold">Filter</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <FlatList
        key="categoryGrid"
        data={categoryProducts}
        renderItem={renderProductItem}
        keyExtractor={(item: Product) => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20, paddingHorizontal: 8 }}
        ListHeaderComponent={ListHeaderComponent}
        ListEmptyComponent={ListEmptyComponent}
      />
    </SafeAreaView>
  );
};

export default CategoryScreen;