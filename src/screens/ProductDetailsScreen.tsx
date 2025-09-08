import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  Linking,
  Alert,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

// Import types
import { Product, RouteParams } from '../types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  ProductDetails: RouteParams;
};

type ProductDetailsScreenProps = NativeStackScreenProps<RootStackParamList, 'ProductDetails'>;

const ProductDetailsScreen: React.FC<ProductDetailsScreenProps> = ({ route }) => {
  const { product } = route.params;

  const handleCallPress = () => {
    if (product?.phone) {
      Linking.openURL(`tel:${product.phone}`);
    }
  };

  const handleMessagePress = () => {
    Alert.alert('Message', 'This would open a messaging interface');
  };

  const handleSharePress = () => {
    Alert.alert('Share', 'This would share the product details');
  };

  const handleFavoritePress = () => {
    Alert.alert('Favorite', 'Added to favorites!');
  };

  const renderDetailRow = (icon: string, label: string, value: string | undefined) => {
    if (!value) return null;
    return (
      <View className="flex-row items-center mb-3">
        <Feather name={icon as any} size={18} color="#666" />
        <Text className="text-base text-gray-500 ml-2 flex-1">{label}:</Text>
        <Text className="text-base font-semibold text-gray-700 flex-2">{value}</Text>
      </View>
    );
  };

  if (!product) {
    return (
      <SafeAreaView className="flex-1">
        <Text>Product not found</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Product Image */}
        <Image source={{ uri: product.image }} className="w-full h-[300px] bg-gray-200" />
        
        {/* Action Buttons */}
        <View className="absolute top-5 right-4 flex-col">
          <TouchableOpacity className="bg-white/90 p-3 rounded-full mb-2 shadow shadow-gray-400" onPress={handleFavoritePress}>
            <Feather name="heart" size={24} color="#149777" />
          </TouchableOpacity>
          <TouchableOpacity className="bg-white/90 p-3 rounded-full shadow shadow-gray-400" onPress={handleSharePress}>
            <Feather name="share-2" size={24} color="#149777" />
          </TouchableOpacity>
        </View>

        {/* Product Info */}
        <View className="p-5 border-b border-gray-200">
          <Text className="text-2xl font-bold text-gray-700 mb-2">{product.title}</Text>
          <Text className="text-3xl font-bold text-[#149777] mb-4">{product.price}</Text>
          
          <View className="flex-row justify-between">
            <View className="flex-row items-center">
              <Feather name="map-pin" size={16} color="#666" />
              <Text className="text-base text-gray-500 ml-1.5">{product.location}</Text>
            </View>
            <View className="flex-row items-center">
              <Feather name="clock" size={16} color="#666" />
              <Text className="text-sm text-gray-500 ml-1.5">{product.posted}</Text>
            </View>
          </View>
        </View>

        {/* Product Details */}
        <View className="p-5 border-b border-gray-200">
          <Text className="text-xl font-bold text-gray-700 mb-4">Details</Text>
          
          {renderDetailRow('info', 'Condition', product.condition)}
          {renderDetailRow('calendar', 'Year', product.year)}
          {renderDetailRow('navigation', 'Mileage', product.mileage)}
          {renderDetailRow('settings', 'Transmission', product.transmission)}
          {renderDetailRow('battery', 'Fuel Type', product.fuelType)}
          {renderDetailRow('tag', 'Brand', product.brand)}
          {renderDetailRow('smartphone', 'Model', product.model)}
          {renderDetailRow('shield', 'Warranty', product.warranty)}
          {renderDetailRow('briefcase', 'Job Type', product.jobType)}
          {renderDetailRow('trending-up', 'Experience', product.experience)}
          {renderDetailRow('building', 'Company', product.company)}
          {renderDetailRow('home', 'Property Type', product.propertyType)}
          {renderDetailRow('bed', 'Bedrooms', product.bedrooms)}
          {renderDetailRow('droplet', 'Bathrooms', product.bathrooms)}
          {renderDetailRow('square', 'Land Size', product.landSize)}
          {renderDetailRow('check-circle', 'Furnished', product.furnished)}
          {renderDetailRow('smartphone', 'Storage', product.storage)}
          {renderDetailRow('package', 'Size', product.size)}
          {renderDetailRow('weight', 'Weight', product.weight)}
          {renderDetailRow('tool', 'Service Type', product.serviceType)}
          {renderDetailRow('calendar', 'Availability', product.availability)}
          {renderDetailRow('book', 'Subject', product.subject)}
          {renderDetailRow('award', 'Level', product.level)}
        </View>

        {/* Description */}
        <View className="p-5 border-b border-gray-200">
          <Text className="text-xl font-bold text-gray-700 mb-4">Description</Text>
          <Text className="text-base leading-6 text-gray-700">{product.description}</Text>
        </View>

        {/* Seller Info */}
        <View className="p-5 mb-25">
          <Text className="text-xl font-bold text-gray-700 mb-4">Seller Information</Text>
          <View className="flex-row items-center">
            <View className="w-12.5 h-12.5 rounded-full bg-[#149777] justify-center items-center mr-4">
              <Feather name="user" size={24} color="#fff" />
            </View>
            <View className="flex-1">
              <Text className="text-lg font-semibold text-gray-700 mb-1">{product.seller}</Text>
              <Text className="text-base text-gray-500">{product.phone}</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Contact Buttons */}
      <View className="absolute bottom-0 left-0 right-0 flex-row bg-white px-4 py-3 border-t border-gray-200">
        <TouchableOpacity 
          className="flex-1 flex-row justify-center items-center py-4 rounded-lg mx-1 border-2 border-[#149777] bg-white"
          onPress={handleMessagePress}
        >
          <Feather name="message-circle" size={20} color="#149777" />
          <Text className="text-base font-semibold text-[#149777] ml-2">Message</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          className="flex-1 flex-row justify-center items-center py-4 rounded-lg mx-1 bg-[#149777]"
          onPress={handleCallPress}
        >
          <Feather name="phone" size={20} color="#fff" />
          <Text className="text-base font-semibold text-white ml-2">Call Now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetailsScreen;