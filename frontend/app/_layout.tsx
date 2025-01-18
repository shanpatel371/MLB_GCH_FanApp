import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { AuthProvider, useAuth } from './AuthContext'; // Import AuthProvider and useAuth

export default function RootLayout() {
  return (
    <AuthProvider>
      <AppTabs />
    </AuthProvider>
  );
}

const AppTabs = () => {
  const { isAuthenticated } = useAuth(); // Consume the authentication state

  return (
    <Tabs screenOptions={{ tabBarStyle: { position: 'relative' } }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="gamemgr"
        options={{
          title: 'Game Manager',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="game-controller" color={color} size={size} />
          ),
        }}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            if (!isAuthenticated) {
              e.preventDefault(); // Prevent navigation to the "gamemgr" tab
              navigation.navigate('profile'); // Redirect to the "profile" screen
            }
          },
        })}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
};
