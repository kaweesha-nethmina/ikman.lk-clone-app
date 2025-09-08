import React from 'react';
import {
  View,
  Text,
  StyleSheet,
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
      <View style={styles.detailRow}>
        <Feather name={icon as any} size={18} color="#666" />
        <Text style={styles.detailLabel}>{label}:</Text>
        <Text style={styles.detailValue}>{value}</Text>
      </View>
    );
  };

  if (!product) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Product not found</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Product Image */}
        <Image source={{ uri: product.image }} style={styles.productImage} />
        
        {/* Action Buttons */}
        <View style={styles.actionButtonsContainer}>
          <TouchableOpacity style={styles.actionButton} onPress={handleFavoritePress}>
            <Feather name="heart" size={24} color="#149777" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton} onPress={handleSharePress}>
            <Feather name="share-2" size={24} color="#149777" />
          </TouchableOpacity>
        </View>

        {/* Product Info */}
        <View style={styles.productInfoContainer}>
          <Text style={styles.productTitle}>{product.title}</Text>
          <Text style={styles.productPrice}>{product.price}</Text>
          
          <View style={styles.locationTimeContainer}>
            <View style={styles.locationContainer}>
              <Feather name="map-pin" size={16} color="#666" />
              <Text style={styles.locationText}>{product.location}</Text>
            </View>
            <View style={styles.timeContainer}>
              <Feather name="clock" size={16} color="#666" />
              <Text style={styles.timeText}>{product.posted}</Text>
            </View>
          </View>
        </View>

        {/* Product Details */}
        <View style={styles.detailsContainer}>
          <Text style={styles.sectionTitle}>Details</Text>
          
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
        <View style={styles.descriptionContainer}>
          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.descriptionText}>{product.description}</Text>
        </View>

        {/* Seller Info */}
        <View style={styles.sellerContainer}>
          <Text style={styles.sectionTitle}>Seller Information</Text>
          <View style={styles.sellerInfo}>
            <View style={styles.sellerAvatar}>
              <Feather name="user" size={24} color="#fff" />
            </View>
            <View style={styles.sellerDetails}>
              <Text style={styles.sellerName}>{product.seller}</Text>
              <Text style={styles.sellerPhone}>{product.phone}</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Contact Buttons */}
      <View style={styles.contactButtonsContainer}>
        <TouchableOpacity 
          style={[styles.contactButton, styles.messageButton]} 
          onPress={handleMessagePress}
        >
          <Feather name="message-circle" size={20} color="#149777" />
          <Text style={styles.messageButtonText}>Message</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.contactButton, styles.callButton]} 
          onPress={handleCallPress}
        >
          <Feather name="phone" size={20} color="#fff" />
          <Text style={styles.callButtonText}>Call Now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  productImage: {
    width: '100%',
    height: 300,
    backgroundColor: '#f0f0f0',
  },
  actionButtonsContainer: {
    position: 'absolute',
    top: 20,
    right: 16,
    flexDirection: 'column',
  },
  actionButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: 12,
    borderRadius: 25,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  productInfoContainer: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  productTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#149777',
    marginBottom: 16,
  },
  locationTimeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    fontSize: 16,
    color: '#666',
    marginLeft: 6,
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 6,
  },
  detailsContainer: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  detailLabel: {
    fontSize: 16,
    color: '#666',
    marginLeft: 8,
    flex: 1,
  },
  detailValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    flex: 2,
  },
  descriptionContainer: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  descriptionText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
  },
  sellerContainer: {
    padding: 20,
    marginBottom: 100,
  },
  sellerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sellerAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#149777',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  sellerDetails: {
    flex: 1,
  },
  sellerName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  sellerPhone: {
    fontSize: 16,
    color: '#666',
  },
  contactButtonsContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  contactButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
    borderRadius: 8,
    marginHorizontal: 4,
  },
  messageButton: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#149777',
  },
  messageButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#149777',
    marginLeft: 8,
  },
  callButton: {
    backgroundColor: '#149777',
  },
  callButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    marginLeft: 8,
  },
});

export default ProductDetailsScreen;