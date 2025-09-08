import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Alert,
  Switch,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

const ProfileScreen: React.FC = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState<boolean>(true);
  const [locationEnabled, setLocationEnabled] = useState<boolean>(true);

  const handleMenuPress = (title: string) => {
    Alert.alert(title, `You pressed ${title}`);
  };

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Logout', style: 'destructive', onPress: () => Alert.alert('Logged out') }
      ]
    );
  };

  interface MenuItemProps {
    icon: string;
    title: string;
    onPress: () => void;
    rightComponent?: React.ReactNode;
    showArrow?: boolean;
  }

  const MenuItem: React.FC<MenuItemProps> = ({ icon, title, onPress, rightComponent, showArrow = true }) => (
    <TouchableOpacity className="flex-row items-center justify-between px-4 py-4 border-b border-gray-200" onPress={onPress}>
      <View className="flex-row items-center flex-1">
        <View className="w-10 h-10 rounded-full bg-[#FFF5F0] justify-center items-center mr-4">
          <Feather name={icon as any} size={20} color="#149777" />
        </View>
        <Text className="text-base text-gray-700 font-medium">{title}</Text>
      </View>
      <View className="flex-row items-center">
        {rightComponent}
        {showArrow && <Feather name="chevron-right" size={20} color="#ccc" />}
      </View>
    </TouchableOpacity>
  );

  interface SectionHeaderProps {
    title: string;
  }

  const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => (
    <Text className="text-lg font-bold text-gray-700 px-4 py-3 bg-gray-100">{title}</Text>
  );

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Profile Header */}
        <View className="bg-white items-center py-8 mb-6">
          <View className="w-20 h-20 rounded-full bg-[#149777] justify-center items-center mb-4">
            <Feather name="user" size={40} color="#fff" />
          </View>
          <Text className="text-2xl font-bold text-gray-700 mb-1">Kaweesha Nethmina</Text>
          <Text className="text-base text-gray-500 mb-4">Kaweesha.nj@gmail.com</Text>
          <TouchableOpacity 
            className="px-5 py-2.5 border border-[#149777] rounded-full"
            onPress={() => handleMenuPress('Edit Profile')}
          >
            <Text className="text-sm text-[#149777] font-semibold">Edit Profile</Text>
          </TouchableOpacity>
        </View>

        {/* Account Section */}
        <SectionHeader title="Account" />
        <View className="bg-white mb-6">
          <MenuItem
            icon="bookmark"
            title="Saved Ads"
            onPress={() => handleMenuPress('Saved Ads')}
          />
          <MenuItem
            icon="eye"
            title="Recently Viewed"
            onPress={() => handleMenuPress('Recently Viewed')}
          />
          <MenuItem
            icon="search"
            title="Saved Searches"
            onPress={() => handleMenuPress('Saved Searches')}
          />
          <MenuItem
            icon="credit-card"
            title="Payment Methods"
            onPress={() => handleMenuPress('Payment Methods')}
          />
        </View>

        {/* Settings Section */}
        <SectionHeader title="Settings" />
        <View className="bg-white mb-6">
          <MenuItem
            icon="bell"
            title="Notifications"
            onPress={() => {}}
            rightComponent={
              <Switch
                value={notificationsEnabled}
                onValueChange={setNotificationsEnabled}
                trackColor={{ false: '#ccc', true: '#149777' }}
                thumbColor="#fff"
              />
            }
            showArrow={false}
          />
          <MenuItem
            icon="map-pin"
            title="Location Services"
            onPress={() => {}}
            rightComponent={
              <Switch
                value={locationEnabled}
                onValueChange={setLocationEnabled}
                trackColor={{ false: '#ccc', true: '#149777' }}
                thumbColor="#fff"
              />
            }
            showArrow={false}
          />
          <MenuItem
            icon="shield"
            title="Privacy & Security"
            onPress={() => handleMenuPress('Privacy & Security')}
          />
          <MenuItem
            icon="globe"
            title="Language"
            onPress={() => handleMenuPress('Language')}
          />
        </View>

        {/* Support Section */}
        <SectionHeader title="Support" />
        <View className="bg-white mb-6">
          <MenuItem
            icon="help-circle"
            title="Help Center"
            onPress={() => handleMenuPress('Help Center')}
          />
          <MenuItem
            icon="message-circle"
            title="Contact Us"
            onPress={() => handleMenuPress('Contact Us')}
          />
          <MenuItem
            icon="star"
            title="Rate App"
            onPress={() => handleMenuPress('Rate App')}
          />
          <MenuItem
            icon="share"
            title="Share App"
            onPress={() => handleMenuPress('Share App')}
          />
        </View>

        {/* Legal Section */}
        <SectionHeader title="Legal" />
        <View className="bg-white mb-6">
          <MenuItem
            icon="file-text"
            title="Terms of Service"
            onPress={() => handleMenuPress('Terms of Service')}
          />
          <MenuItem
            icon="shield"
            title="Privacy Policy"
            onPress={() => handleMenuPress('Privacy Policy')}
          />
          <MenuItem
            icon="info"
            title="About"
            onPress={() => handleMenuPress('About')}
          />
        </View>

        {/* Logout Button */}
        <TouchableOpacity className="flex-row items-center justify-center bg-white mx-4 my-6 py-4 rounded-lg border border-red-500" onPress={handleLogout}>
          <Feather name="log-out" size={20} color="#F44336" />
          <Text className="text-base text-red-500 font-semibold ml-2">Logout</Text>
        </TouchableOpacity>

        {/* App Version */}
        <Text className="text-sm text-gray-500 text-center py-4">Version 1.0.0</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;