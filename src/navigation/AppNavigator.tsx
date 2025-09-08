import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Feather } from '@expo/vector-icons';
import { View } from 'react-native';

// Import screens
import HomeScreen from '../screens/HomeScreen';
import CategoryScreen from '../screens/CategoryScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import SearchScreen from '../screens/SearchScreen';
import PostAdScreen from '../screens/PostAdScreen';
import ChatScreen from '../screens/ChatScreen';
import MyAdsScreen from '../screens/MyAdsScreen';
import ProfileScreen from '../screens/ProfileScreen';

// Import types
import { RouteParams } from '../types';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Define route prop types
type SearchStackParamList = {
  SearchMain: undefined;
  Category: RouteParams;
  ProductDetails: RouteParams;
};

type HomeStackParamList = {
  HomeMain: undefined;
  Category: RouteParams;
  ProductDetails: RouteParams;
  PostAd: undefined;
};

// Stack Navigator for Search flow
function SearchStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="SearchMain" 
        component={SearchScreen} 
        options={{ 
          headerShown: true,
          headerTitle: 'Search',
          headerStyle: {
            backgroundColor: '#149777',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} 
      />
      <Stack.Screen 
        name="Category" 
        component={CategoryScreen as any}
        options={({ route }: any) => ({
          title: route.params?.categoryName || 'Category',
          headerStyle: {
            backgroundColor: '#149777',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        })}
      />
      <Stack.Screen 
        name="ProductDetails" 
        component={ProductDetailsScreen as any}
        options={{
          title: 'Product Details',
          headerStyle: {
            backgroundColor: '#149777',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  );
}

function HomeStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="HomeMain" 
        component={HomeScreen} 
        options={{ 
          headerShown: false 
        }} 
      />
      <Stack.Screen 
        name="Category" 
        component={CategoryScreen as any}
        options={({ route }: any) => ({
          title: route.params?.categoryName || 'Category',
          headerStyle: {
            backgroundColor: '#149777',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        })}
      />
      <Stack.Screen 
        name="ProductDetails" 
        component={ProductDetailsScreen as any}
        options={{
          title: 'Product Details',
          headerStyle: {
            backgroundColor: '#149777',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen 
        name="PostAd" 
        component={PostAdScreen}
        options={{
          title: 'Post Ad',
          headerStyle: {
            backgroundColor: '#149777',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  );
}

// Main Tab Navigator
function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }: { focused: boolean; color: string; size: number }) => {
            let iconName: any;

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Search') {
              iconName = 'search';
            } else if (route.name === 'PostAd') {
              iconName = 'plus';
              // Special styling for Post Ad button with three circles
              return (
                <View 
                  style={{
                    position: 'absolute',
                    top: -30, // Adjusted overflow for new tab bar height
                    backgroundColor: '#FFFFFF', // Outer light yellow/cream circle
                    borderRadius: 25,
                    width: 45,
                    height: 45,
                    justifyContent: 'center',
                    alignItems: 'center',
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 5,
                  }}
                >
                  <View 
                    style={{
                      backgroundColor: '#fdc702', // Middle yellow circle - bigger
                      borderRadius: 19,
                      width: 40, // Bigger middle circle
                      height: 40,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <View 
                      style={{
                        backgroundColor: '#6b3506', // Inner orange circle - like border
                        borderRadius: 10,
                        width: 20, // Very small inner circle like border
                        height: 20,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <Feather name={iconName} size={12} color="#fff" />
                    </View>
                  </View>
                </View>
              );
            } else if (route.name === 'Chat') {
              iconName = 'message-circle';
            } else if (route.name === 'Account') {
              iconName = 'user';
            }

            return <Feather name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#149777',
          tabBarInactiveTintColor: '#999',
          tabBarStyle: {
            paddingBottom: 5, // Reduced bottom padding
            paddingTop: 8, // Reduced top padding to move icons up
            height: 70, // Reduced height for better proportion
            backgroundColor: '#fff',
            borderTopWidth: 1,
            borderTopColor: '#f0f0f0',
          },
          tabBarShowLabel: true,
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: '500',
          },
          headerShown: false,
        })}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeStackNavigator}
          options={{
            tabBarLabel: 'Home',
          }}
        />
        <Tab.Screen 
          name="Search" 
          component={SearchStackNavigator}
          options={{
            tabBarLabel: 'Search',
          }}
        />
        <Tab.Screen 
          name="PostAd" 
          component={PostAdScreen}
          options={{
            tabBarLabel: 'Post Ad',
            tabBarLabelStyle: {
              marginTop: 2, // Reduced margin for better proportion
            },
            headerShown: true,
            headerTitle: 'Post Ad',
            headerStyle: {
              backgroundColor: '#149777',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Tab.Screen 
          name="Chat" 
          component={ChatScreen}
          options={{
            tabBarLabel: 'Chat',
            headerShown: true,
            headerTitle: 'Chat Support',
            headerStyle: {
              backgroundColor: '#149777',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Tab.Screen 
          name="Account" 
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Account',
            headerShown: true,
            headerTitle: 'My Account',
            headerStyle: {
              backgroundColor: '#149777',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;