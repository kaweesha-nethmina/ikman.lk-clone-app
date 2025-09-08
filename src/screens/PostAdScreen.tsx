import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  FlatList,
  TextInput,
  Alert,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import CategoryCard from '../components/CategoryCard';
import { categories } from '../data/categories';
import { cn } from '../utils/cn';

// Import types
import { Category } from '../types';

interface AdDetails {
  title: string;
  description: string;
  price: string;
  location: string;
  condition: string;
}

interface PostAdScreenProps {
  navigation: any;
}

const PostAdScreen: React.FC<PostAdScreenProps> = ({ navigation }) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [adDetails, setAdDetails] = useState<AdDetails>({
    title: '',
    description: '',
    price: '',
    location: '',
    condition: '',
  });

  const handleCategorySelect = (category: Category) => {
    setSelectedCategory(category);
    setCurrentStep(2);
  };

  const handleNext = () => {
    if (currentStep < 4 && currentStep >= 2) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      if (currentStep === 2) {
        // Going back from step 2 to step 1, reset category selection
        setSelectedCategory(null);
      }
      setCurrentStep(currentStep - 1);
    }
  };

  const handleFinish = () => {
    Alert.alert('Success', 'Your ad has been posted successfully!', [
      { text: 'OK', onPress: () => navigation.navigate('Home') }
    ]);
  };

  const renderCategoryItem = ({ item }: { item: Category }) => (
    <CategoryCard category={item} onPress={handleCategorySelect} />
  );

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <View className="p-5">
            <Text className="text-2xl font-bold text-gray-700 mb-2">Choose a Category</Text>
            <Text className="text-base text-gray-500 mb-6">Select the category that best fits your ad</Text>
            <FlatList
              data={categories}
              renderItem={renderCategoryItem}
              keyExtractor={(item: Category) => item.id}
              numColumns={3}
              scrollEnabled={false}
              contentContainerStyle={{ paddingHorizontal: 0 }}
            />
          </View>
        );

      case 2:
        return (
          <View className="p-5">
            <Text className="text-2xl font-bold text-gray-700 mb-2">Location & Price</Text>
            <Text className="text-base text-gray-500 mb-6">Add location and price details</Text>
            
            <View className="mb-5">
              <Text className="text-base font-semibold text-gray-700 mb-2">Location</Text>
              <TextInput
                className="border border-gray-300 rounded-lg px-4 py-3 text-base bg-white"
                placeholder="Enter your location"
                value={adDetails.location}
                onChangeText={(text) => setAdDetails({...adDetails, location: text})}
              />
            </View>

            <View className="mb-5">
              <Text className="text-base font-semibold text-gray-700 mb-2">Price (Rs.)</Text>
              <TextInput
                className="border border-gray-300 rounded-lg px-4 py-3 text-base bg-white"
                placeholder="Enter price"
                keyboardType="numeric"
                value={adDetails.price}
                onChangeText={(text) => setAdDetails({...adDetails, price: text})}
              />
            </View>

            <View className="mb-5">
              <Text className="text-base font-semibold text-gray-700 mb-2">Condition</Text>
              <View className="flex-row gap-3">
                {['New', 'Used', 'Reconditioned'].map((condition) => (
                  <TouchableOpacity
                    key={condition}
                    className={cn(
                      "flex-1 py-3 px-4 border border-gray-300 rounded-lg items-center bg-white",
                      adDetails.condition === condition && "border-[#149777] bg-[#149777]"
                    )}
                    onPress={() => setAdDetails({...adDetails, condition})}
                  >
                    <Text className={cn(
                      "text-sm font-semibold text-gray-500",
                      adDetails.condition === condition && "text-white"
                    )}>
                      {condition}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </View>
        );

      case 3:
        return (
          <View className="p-5">
            <Text className="text-2xl font-bold text-gray-700 mb-2">Add Details</Text>
            <Text className="text-base text-gray-500 mb-6">Provide more information about your item</Text>
            
            <View className="mb-5">
              <Text className="text-base font-semibold text-gray-700 mb-2">Title</Text>
              <TextInput
                className="border border-gray-300 rounded-lg px-4 py-3 text-base bg-white"
                placeholder="Enter ad title"
                value={adDetails.title}
                onChangeText={(text) => setAdDetails({...adDetails, title: text})}
              />
            </View>

            <View className="mb-5">
              <Text className="text-base font-semibold text-gray-700 mb-2">Description</Text>
              <TextInput
                className="border border-gray-300 rounded-lg px-4 py-3 text-base bg-white h-[100] text-top"
                placeholder="Describe your item..."
                multiline
                numberOfLines={4}
                value={adDetails.description}
                onChangeText={(text) => setAdDetails({...adDetails, description: text})}
              />
            </View>
          </View>
        );

      case 4:
        return (
          <View className="p-5">
            <Text className="text-2xl font-bold text-gray-700 mb-2">Add Images</Text>
            <Text className="text-base text-gray-500 mb-6">Upload photos of your item</Text>
            
            <View className="flex-row gap-4 mb-5">
              <TouchableOpacity className="flex-1 py-10 px-5 border-2 border-dashed border-[#149777] rounded-lg items-center bg-[#f8fffe]">
                <Feather name="camera" size={32} color="#149777" />
                <Text className="text-sm font-semibold text-[#149777] mt-2">Take Photo</Text>
              </TouchableOpacity>
              
              <TouchableOpacity className="flex-1 py-10 px-5 border-2 border-dashed border-[#149777] rounded-lg items-center bg-[#f8fffe]">
                <Feather name="image" size={32} color="#149777" />
                <Text className="text-sm font-semibold text-[#149777] mt-2">Choose from Gallery</Text>
              </TouchableOpacity>
            </View>

            <View className="h-[100px] border border-gray-300 rounded-lg justify-center items-center bg-white">
              <Text className="text-sm text-gray-500">No images selected</Text>
            </View>
          </View>
        );

      default:
        return null;
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      {/* Welcome Message */}
      <View className="bg-[#149777] px-5 py-5">
        <Text className="text-2xl font-bold text-white mb-1">Welcome back!</Text>
        <Text className="text-base text-white opacity-90">Choose an option before posting your ad</Text>
      </View>

      {/* Progress Indicator */}
      <View className="flex-row justify-center items-center py-5 bg-white">
        {[1, 2, 3, 4].map((step) => (
          <View key={step} className="flex-row items-center">
            <View className={cn(
              "w-7.5 h-7.5 rounded-full bg-gray-200 justify-center items-center",
              currentStep >= step && "bg-[#149777]"
            )}>
              <Text className={cn(
                "text-sm font-bold text-gray-500",
                currentStep >= step && "text-white"
              )}>
                {step}
              </Text>
            </View>
            {step < 4 && (
              <View className={cn(
                "w-10 h-0.5 bg-gray-200 mx-2",
                currentStep > step && "bg-[#149777]"
              )} />
            )}
          </View>
        ))}
      </View>

      {/* Step Content */}
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {renderStepContent()}
      </ScrollView>

      {/* Navigation Buttons */}
      <View className="flex-row px-5 py-4 bg-white border-t border-gray-200 gap-3">
        {currentStep > 1 && (
          <TouchableOpacity className="flex-1 py-4 border border-[#149777] rounded-lg items-center" onPress={handleBack}>
            <Text className="text-base font-semibold text-[#149777]">Back</Text>
          </TouchableOpacity>
        )}
        
        {/* Only show Next/Post Ad button for steps 2, 3, and 4 */}
        {currentStep >= 2 && (
          <TouchableOpacity 
            className="flex-1 py-4 bg-[#149777] rounded-lg items-center"
            onPress={currentStep === 4 ? handleFinish : handleNext}
          >
            <Text className="text-base font-semibold text-white">
              {currentStep === 4 ? 'Post Ad' : 'Next'}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

export default PostAdScreen;