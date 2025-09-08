import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
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
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
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
          <View style={styles.stepContainer}>
            <Text style={styles.stepTitle}>Choose a Category</Text>
            <Text style={styles.stepSubtitle}>Select the category that best fits your ad</Text>
            <FlatList
              data={categories}
              renderItem={renderCategoryItem}
              keyExtractor={(item: Category) => item.id}
              numColumns={3}
              scrollEnabled={false}
              contentContainerStyle={styles.categoriesContainer}
            />
          </View>
        );

      case 2:
        return (
          <View style={styles.stepContainer}>
            <Text style={styles.stepTitle}>Location & Price</Text>
            <Text style={styles.stepSubtitle}>Add location and price details</Text>
            
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Location</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Enter your location"
                value={adDetails.location}
                onChangeText={(text) => setAdDetails({...adDetails, location: text})}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Price (Rs.)</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Enter price"
                keyboardType="numeric"
                value={adDetails.price}
                onChangeText={(text) => setAdDetails({...adDetails, price: text})}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Condition</Text>
              <View style={styles.conditionContainer}>
                {['New', 'Used', 'Reconditioned'].map((condition) => (
                  <TouchableOpacity
                    key={condition}
                    style={[
                      styles.conditionButton,
                      adDetails.condition === condition && styles.selectedCondition
                    ]}
                    onPress={() => setAdDetails({...adDetails, condition})}
                  >
                    <Text style={[
                      styles.conditionText,
                      adDetails.condition === condition && styles.selectedConditionText
                    ]}>
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
          <View style={styles.stepContainer}>
            <Text style={styles.stepTitle}>Add Details</Text>
            <Text style={styles.stepSubtitle}>Provide more information about your item</Text>
            
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Title</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Enter ad title"
                value={adDetails.title}
                onChangeText={(text) => setAdDetails({...adDetails, title: text})}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Description</Text>
              <TextInput
                style={[styles.textInput, styles.textArea]}
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
          <View style={styles.stepContainer}>
            <Text style={styles.stepTitle}>Add Images</Text>
            <Text style={styles.stepSubtitle}>Upload photos of your item</Text>
            
            <View style={styles.imageUploadContainer}>
              <TouchableOpacity style={styles.imageUploadButton}>
                <Feather name="camera" size={32} color="#149777" />
                <Text style={styles.imageUploadText}>Take Photo</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.imageUploadButton}>
                <Feather name="image" size={32} color="#149777" />
                <Text style={styles.imageUploadText}>Choose from Gallery</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.imagePreviewContainer}>
              <Text style={styles.imagePreviewText}>No images selected</Text>
            </View>
          </View>
        );

      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Welcome Message */}
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeTitle}>Welcome back!</Text>
        <Text style={styles.welcomeSubtitle}>Choose an option before posting your ad</Text>
      </View>

      {/* Progress Indicator */}
      <View style={styles.progressContainer}>
        {[1, 2, 3, 4].map((step) => (
          <View key={step} style={styles.progressStep}>
            <View style={[
              styles.progressCircle,
              currentStep >= step && styles.activeProgressCircle
            ]}>
              <Text style={[
                styles.progressText,
                currentStep >= step && styles.activeProgressText
              ]}>
                {step}
              </Text>
            </View>
            {step < 4 && (
              <View style={[
                styles.progressLine,
                currentStep > step && styles.activeProgressLine
              ]} />
            )}
          </View>
        ))}
      </View>

      {/* Step Content */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {renderStepContent()}
      </ScrollView>

      {/* Navigation Buttons */}
      <View style={styles.navigationContainer}>
        {currentStep > 1 && (
          <TouchableOpacity style={styles.backButton} onPress={handleBack}>
            <Text style={styles.backButtonText}>Back</Text>
          </TouchableOpacity>
        )}
        
        <TouchableOpacity 
          style={[styles.nextButton, currentStep === 1 && styles.fullWidthButton]}
          onPress={currentStep === 4 ? handleFinish : handleNext}
        >
          <Text style={styles.nextButtonText}>
            {currentStep === 4 ? 'Post Ad' : 'Next'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  welcomeContainer: {
    backgroundColor: '#149777',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  welcomeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  welcomeSubtitle: {
    fontSize: 16,
    color: '#fff',
    opacity: 0.9,
  },
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#fff',
  },
  progressStep: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeProgressCircle: {
    backgroundColor: '#149777',
  },
  progressText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#666',
  },
  activeProgressText: {
    color: '#fff',
  },
  progressLine: {
    width: 40,
    height: 2,
    backgroundColor: '#f0f0f0',
    marginHorizontal: 8,
  },
  activeProgressLine: {
    backgroundColor: '#149777',
  },
  content: {
    flex: 1,
  },
  stepContainer: {
    padding: 20,
  },
  stepTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  stepSubtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 24,
  },
  categoriesContainer: {
    paddingHorizontal: 0,
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  conditionContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  conditionButton: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  selectedCondition: {
    borderColor: '#149777',
    backgroundColor: '#149777',
  },
  conditionText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
  },
  selectedConditionText: {
    color: '#fff',
  },
  imageUploadContainer: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 20,
  },
  imageUploadButton: {
    flex: 1,
    paddingVertical: 40,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderColor: '#149777',
    borderStyle: 'dashed',
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: '#f8fffe',
  },
  imageUploadText: {
    fontSize: 14,
    color: '#149777',
    fontWeight: '600',
    marginTop: 8,
  },
  imagePreviewContainer: {
    height: 100,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  imagePreviewText: {
    fontSize: 14,
    color: '#666',
  },
  navigationContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    gap: 12,
  },
  backButton: {
    flex: 1,
    paddingVertical: 16,
    borderWidth: 1,
    borderColor: '#149777',
    borderRadius: 8,
    alignItems: 'center',
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#149777',
  },
  nextButton: {
    flex: 1,
    paddingVertical: 16,
    backgroundColor: '#149777',
    borderRadius: 8,
    alignItems: 'center',
  },
  fullWidthButton: {
    flex: 2,
  },
  nextButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
});

export default PostAdScreen;