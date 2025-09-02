import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';

const CategoryCard = ({ category, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(category)}>
      <View style={styles.iconContainer}>
        <Feather 
          name={category.icon} 
          size={24} 
          color="#149777" 
          style={styles.icon}
        />
      </View>
      <Text style={styles.categoryName} numberOfLines={2}>{category.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginVertical: 10,
    marginHorizontal: 15,
    flex: 1,
    maxWidth: '33%',
    height: 100,
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 0,
    backgroundColor: '#f8fffe',
    borderWidth: 1,
    borderColor: '#e8f5f3',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
    // Perfect icon alignment
    display: 'flex',
    flexDirection: 'row',
  },
  categoryName: {
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'center',
    color: '#333',
    marginTop: 8,
    lineHeight: 14,
    width: '100%',
    height: 28,
    textAlignVertical: 'top',
    paddingHorizontal: 4,
  },
  icon: {
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

export default CategoryCard;