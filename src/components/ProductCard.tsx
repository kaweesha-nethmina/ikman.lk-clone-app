import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { cn } from '../utils/cn';

// Import types
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onPress: (product: Product) => void;
  isGrid?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onPress, isGrid = false }) => {
  return (
    <TouchableOpacity 
      className={cn(
        "bg-white rounded-lg my-1.5 mx-4 shadow shadow-gray-400 overflow-hidden",
        isGrid && "flex-1 mx-2 my-2"
      )}
      onPress={() => onPress(product)}
    >
      <Image source={{ uri: product.image }} className={cn("w-full bg-gray-200", isGrid ? "h-[140px]" : "h-[200px]")} />
      <View className="p-3">
        <Text className="text-sm font-semibold text-gray-700 mb-1.5 leading-4.5" numberOfLines={2}>{product.title}</Text>
        <Text className="text-base font-bold text-[#149777] mb-1.5">{product.price}</Text>
        <View className="flex-row items-center mb-1">
          <Feather name="map-pin" size={12} color="#666" />
          <Text className="text-xs text-gray-500 ml-1 flex-1" numberOfLines={1}>{product.location}</Text>
        </View>
        <View className="flex-row items-center">
          <Feather name="clock" size={12} color="#666" />
          <Text className="text-[11px] text-gray-500 ml-1">{product.posted}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;