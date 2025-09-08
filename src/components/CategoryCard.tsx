import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { cn } from '../utils/cn';

// Import types
import { Category } from '../types';

interface CategoryCardProps {
  category: Category;
  onPress: (category: Category) => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, onPress }) => {
  return (
    <TouchableOpacity className="items-center justify-start my-2.5 mx-4 flex-1 max-w-[33%] h-[100px]" onPress={() => onPress(category)}>
      <View className="w-[60px] h-[60px] rounded-full justify-center items-center mb-0 bg-[#f8fffe] border border-[#e8f5f3] shadow shadow-gray-400">
        <Feather 
          name={category.icon as any} 
          size={24} 
          color="#149777" 
        />
      </View>
      <Text className="text-xs font-semibold text-center text-gray-700 mt-2 leading-3.5 w-full h-7 text-top px-1" numberOfLines={2}>{category.name}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;