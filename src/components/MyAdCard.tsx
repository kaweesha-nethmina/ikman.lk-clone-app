import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';

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
        return '#4CAF50';
      case 'Sold':
        return '#149777';
      case 'Expired':
        return '#F44336';
      default:
        return '#666';
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(ad)}>
      <Image source={{ uri: ad.image }} style={styles.image} />
      <View style={styles.contentContainer}>
        <Text style={styles.title} numberOfLines={2}>{ad.title}</Text>
        <Text style={styles.price}>{ad.price}</Text>
        
        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <Feather name="eye" size={14} color="#666" />
            <Text style={styles.statText}>{ad.views} views</Text>
          </View>
          <View style={[styles.statusBadge, { backgroundColor: getStatusColor(ad.status) }]}>
            <Text style={styles.statusText}>{ad.status}</Text>
          </View>
        </View>
        
        <View style={styles.locationContainer}>
          <Feather name="map-pin" size={14} color="#666" />
          <Text style={styles.location}>{ad.location}</Text>
        </View>
        
        <Text style={styles.timePosted}>{ad.posted}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginVertical: 6,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 150,
    backgroundColor: '#f0f0f0',
  },
  contentContainer: {
    padding: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#149777',
    marginBottom: 12,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statText: {
    fontSize: 12,
    color: '#666',
    marginLeft: 4,
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    fontSize: 12,
    color: '#fff',
    fontWeight: '600',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  location: {
    fontSize: 14,
    color: '#666',
    marginLeft: 4,
  },
  timePosted: {
    fontSize: 12,
    color: '#666',
  },
});

export default MyAdCard;