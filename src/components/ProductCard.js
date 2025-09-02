import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';

const ProductCard = ({ product, onPress, isGrid = false }) => {
  return (
    <TouchableOpacity 
      style={[styles.container, isGrid && styles.gridContainer]} 
      onPress={() => onPress(product)}
    >
      <Image source={{ uri: product.image }} style={[styles.image, isGrid && styles.gridImage]} />
      <View style={styles.contentContainer}>
        <Text style={styles.title} numberOfLines={2}>{product.title}</Text>
        <Text style={styles.price}>{product.price}</Text>
        <View style={styles.locationContainer}>
          <Feather name="map-pin" size={12} color="#666" />
          <Text style={styles.location} numberOfLines={1}>{product.location}</Text>
        </View>
        <View style={styles.timeContainer}>
          <Feather name="clock" size={12} color="#666" />
          <Text style={styles.timePosted}>{product.posted}</Text>
        </View>
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
  gridContainer: {
    flex: 1,
    marginHorizontal: 8,
    marginVertical: 8,
  },
  image: {
    width: '100%',
    height: 200,
    backgroundColor: '#f0f0f0',
  },
  gridImage: {
    height: 140,
  },
  contentContainer: {
    padding: 12,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 6,
    lineHeight: 18,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#149777',
    marginBottom: 6,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  location: {
    fontSize: 12,
    color: '#666',
    marginLeft: 4,
    flex: 1,
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timePosted: {
    fontSize: 11,
    color: '#666',
    marginLeft: 4,
  },
});

export default ProductCard;