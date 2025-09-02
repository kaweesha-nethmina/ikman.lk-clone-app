import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Alert,
  Switch,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

const ProfileScreen = () => {
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);
  const [locationEnabled, setLocationEnabled] = React.useState(true);

  const handleMenuPress = (title) => {
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

  const MenuItem = ({ icon, title, onPress, rightComponent, showArrow = true }) => (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      <View style={styles.menuItemLeft}>
        <View style={styles.menuIconContainer}>
          <Feather name={icon} size={20} color="#149777" />
        </View>
        <Text style={styles.menuItemText}>{title}</Text>
      </View>
      <View style={styles.menuItemRight}>
        {rightComponent}
        {showArrow && <Feather name="chevron-right" size={20} color="#ccc" />}
      </View>
    </TouchableOpacity>
  );

  const SectionHeader = ({ title }) => (
    <Text style={styles.sectionHeader}>{title}</Text>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Profile Header */}
        <View style={styles.profileHeader}>
          <View style={styles.avatarContainer}>
            <Feather name="user" size={40} color="#fff" />
          </View>
          <Text style={styles.profileName}>John Doe</Text>
          <Text style={styles.profileEmail}>john.doe@example.com</Text>
          <TouchableOpacity 
            style={styles.editProfileButton}
            onPress={() => handleMenuPress('Edit Profile')}
          >
            <Text style={styles.editProfileText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>

        {/* Account Section */}
        <SectionHeader title="Account" />
        <View style={styles.menuSection}>
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
        <View style={styles.menuSection}>
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
        <View style={styles.menuSection}>
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
        <View style={styles.menuSection}>
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
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Feather name="log-out" size={20} color="#F44336" />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>

        {/* App Version */}
        <Text style={styles.versionText}>Version 1.0.0</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  profileHeader: {
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingVertical: 32,
    marginBottom: 24,
  },
  avatarContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#149777',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  profileEmail: {
    fontSize: 16,
    color: '#666',
    marginBottom: 16,
  },
  editProfileButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#149777',
    borderRadius: 20,
  },
  editProfileText: {
    fontSize: 14,
    color: '#149777',
    fontWeight: '600',
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#f5f5f5',
  },
  menuSection: {
    backgroundColor: '#fff',
    marginBottom: 24,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  menuIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFF5F0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  menuItemText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  menuItemRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginVertical: 24,
    paddingVertical: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#F44336',
  },
  logoutText: {
    fontSize: 16,
    color: '#F44336',
    fontWeight: '600',
    marginLeft: 8,
  },
  versionText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    paddingVertical: 16,
  },
});

export default ProfileScreen;