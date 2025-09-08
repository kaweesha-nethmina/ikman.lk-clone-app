import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { cn } from '../utils/cn';

// Import types
import { MyAd } from '../types';

interface MyAdCardProps {
  ad: MyAd;
  onPress: (ad: MyAd) => void;
}

const MyAdCard: React.FC<MyAdCardProps> = ({ ad, onPress }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-500';
      case 'Sold':
        return 'bg-[#149777]';
      case 'Expired':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <TouchableOpacity className="bg-white rounded-lg my-1.5 mx-4 shadow shadow-gray-400 overflow-hidden" onPress={() => onPress(ad)}>
      <Image source={{ uri: ad.image }} className="w-full h-[150px] bg-gray-200" />
      <View className="p-4">
        <Text className="text-base font-semibold text-gray-700 mb-2" numberOfLines={2}>{ad.title}</Text>
        <Text className="text-lg font-bold text-[#149777] mb-3">{ad.price}</Text>
        
        <View className="flex-row justify-between items-center mb-2">
          <View className="flex-row items-center">
            <Feather name="eye" size={14} color="#666" />
            <Text className="text-xs text-gray-500 ml-1">{ad.views} views</Text>
          </View>
          <View className={cn("px-2 py-1 rounded-full", getStatusColor(ad.status))}>
            <Text className="text-xs text-white font-semibold">{ad.status}</Text>
          </View>
        </View>
        
        <View className="flex-row items-center mb-1">
          <Feather name="map-pin" size={14} color="#666" />
          <Text className="text-sm text-gray-500 ml-1">{ad.location}</Text>
        </View>
        
        <Text className="text-xs text-gray-500">{ad.posted}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MyAdCard;