import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import MyAdCard from '../components/MyAdCard';
import { myAds } from '../data/products';
import { Feather } from '@expo/vector-icons';
import { cn } from '../utils/cn';

// Import types
import { MyAd } from '../types';

interface MyAdsScreenProps {
  navigation: any;
}

const MyAdsScreen: React.FC<MyAdsScreenProps> = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const getFilteredAds = (): MyAd[] => {
    switch (activeTab) {
      case 'active':
        return myAds.filter((ad: MyAd) => ad.status === 'Active');
      case 'sold':
        return myAds.filter((ad: MyAd) => ad.status === 'Sold');
      default:
        return myAds;
    }
  };

  const handleAdPress = (ad: MyAd) => {
    Alert.alert('My Ad', `You clicked on ${ad.title}`);
  };

  const handlePostAdPress = () => {
    Alert.alert('Post Ad', 'This would open the post ad screen');
  };

  const renderAdItem = ({ item }: { item: MyAd }) => (
    <MyAdCard ad={item} onPress={handleAdPress} />
  );

  interface TabButtonProps {
    title: string;
    isActive: boolean;
    onPress: () => void;
  }

  const TabButton: React.FC<TabButtonProps> = ({ title, isActive, onPress }) => (
    <TouchableOpacity
      className={cn(
        "flex-1 py-3 items-center justify-center border-b-3",
        isActive ? "border-[#149777]" : "border-transparent"
      )}
      onPress={onPress}
    >
      <Text className={cn(
        "text-base font-semibold",
        isActive ? "text-[#149777]" : "text-gray-500"
      )}>
        {title}
      </Text>
    </TouchableOpacity>
  );

  const ListEmptyComponent = () => (
    <View className="flex-1 justify-center items-center py-25 px-10">
      <Feather name="plus-circle" size={64} color="#ccc" />
      <Text className="text-2xl font-bold text-gray-700 mt-4 mb-2">No ads yet</Text>
      <Text className="text-base text-gray-500 text-center mb-6">
        You haven't posted any ads yet. Start selling your items!
      </Text>
      <TouchableOpacity className="bg-[#149777] px-8 py-4 rounded-full" onPress={handlePostAdPress}>
        <Text className="text-base text-white font-semibold">Post Your First Ad</Text>
      </TouchableOpacity>
    </View>
  );

  const ListHeaderComponent = () => (
    <View className="bg-white mb-2">
      <View className="flex-row px-4 pt-4">
        <TabButton
          title="All"
          isActive={activeTab === 'all'}
          onPress={() => setActiveTab('all')}
        />
        <TabButton
          title="Active"
          isActive={activeTab === 'active'}
          onPress={() => setActiveTab('active')}
        />
        <TabButton
          title="Sold"
          isActive={activeTab === 'sold'}
          onPress={() => setActiveTab('sold')}
        />
      </View>
      
      {getFilteredAds().length > 0 && (
        <View className="flex-row justify-between items-center px-4 py-4">
          <Text className="text-base text-gray-700 font-semibold">
            {getFilteredAds().length} ads found
          </Text>
          <TouchableOpacity className="flex-row items-center bg-[#149777] px-4 py-2.5 rounded-full" onPress={handlePostAdPress}>
            <Feather name="plus" size={20} color="#fff" />
            <Text className="text-sm text-white font-semibold ml-1.5">Post Ad</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <FlatList
        data={getFilteredAds()}
        renderItem={renderAdItem}
        keyExtractor={(item: MyAd) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
        ListHeaderComponent={ListHeaderComponent}
        ListEmptyComponent={ListEmptyComponent}
      />
    </SafeAreaView>
  );
};

export default MyAdsScreen;