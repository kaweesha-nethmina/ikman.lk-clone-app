import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import MyAdCard from '../components/MyAdCard';
import { myAds } from '../data/products';
import { Feather } from '@expo/vector-icons';

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
      style={[styles.tabButton, isActive && styles.activeTabButton]}
      onPress={onPress}
    >
      <Text style={[styles.tabButtonText, isActive && styles.activeTabButtonText]}>
        {title}
      </Text>
    </TouchableOpacity>
  );

  const ListEmptyComponent = () => (
    <View style={styles.emptyContainer}>
      <Feather name="plus-circle" size={64} color="#ccc" />
      <Text style={styles.emptyTitle}>No ads yet</Text>
      <Text style={styles.emptyDescription}>
        You haven't posted any ads yet. Start selling your items!
      </Text>
      <TouchableOpacity style={styles.postAdButton} onPress={handlePostAdPress}>
        <Text style={styles.postAdButtonText}>Post Your First Ad</Text>
      </TouchableOpacity>
    </View>
  );

  const ListHeaderComponent = () => (
    <View style={styles.headerContainer}>
      <View style={styles.tabContainer}>
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
        <View style={styles.statsContainer}>
          <Text style={styles.statsText}>
            {getFilteredAds().length} ads found
          </Text>
          <TouchableOpacity style={styles.postNewAdButton} onPress={handlePostAdPress}>
            <Feather name="plus" size={20} color="#fff" />
            <Text style={styles.postNewAdText}>Post Ad</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={getFilteredAds()}
        renderItem={renderAdItem}
        keyExtractor={(item: MyAd) => item.id}
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
  },
  headerContainer: {
    backgroundColor: '#fff',
    marginBottom: 8,
  },
  tabContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  activeTabButton: {
    borderBottomColor: '#149777',
  },
  tabButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666',
  },
  activeTabButtonText: {
    color: '#149777',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  statsText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '600',
  },
  postNewAdButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#149777',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
  },
  postNewAdText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: '600',
    marginLeft: 6,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 100,
    paddingHorizontal: 40,
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
    marginBottom: 24,
  },
  postAdButton: {
    backgroundColor: '#149777',
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 25,
  },
  postAdButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
});

export default MyAdsScreen;