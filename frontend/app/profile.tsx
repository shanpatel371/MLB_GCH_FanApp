import React from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin';
import { useAuth } from './AuthContext'; // Import useAuth to get the context

GoogleSignin.configure({
  scopes: ['https://www.googleapis.com/auth/drive.readonly'],
  iosClientId: '67308592614-921i04bvh2blokfv1lldr7q0i67h5g8e.apps.googleusercontent.com',
});

const ProfileContent = () => {
  const { isAuthenticated, onSignIn, onSignOut } = useAuth(); // Get isAuthenticated, onSignIn, and onSignOut from context

  const handleGoogleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      onSignIn(); // Trigger the onSignIn function
      Alert.alert('Welcome', `Hello, ${userInfo.data?.user.name}!`);
    } catch (error: any) {
      console.error("Sign-in error", error);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        Alert.alert('Sign-In Cancelled', 'You cancelled the sign-in process.');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        Alert.alert('Play Services Error', 'Google Play Services are not available.');
      } else {
        Alert.alert('Error', 'An unknown error occurred during sign-in.');
      }
    }
  };

  const handleSignOut = async () => {
    try {
      await GoogleSignin.signOut();
      onSignOut(); // Trigger the onSignOut function to update the authentication state
      Alert.alert('Signed Out', 'You have been signed out.');
    } catch (error) {
      console.error("Sign-out error", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Profile Page</Text>
      {isAuthenticated ? (
        <Button title="Sign Out" onPress={handleSignOut} />
      ) : (
        <GoogleSigninButton
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={handleGoogleSignIn}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
});

export default ProfileContent;
