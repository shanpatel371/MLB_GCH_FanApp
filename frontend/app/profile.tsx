import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import { signIn } from '../components/signin';

// import * as WebBrowser from "expo-web-browser";
// import * as Google from "expo-auth-session";
// import * as AsyncStorage from "@react-native-async-storage/async-storage";
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
  offlineAccess: false, // if you want to access Google API on behalf of the user FROM YOUR SERVER
  forceCodeForRefreshToken: false, // [Android] related to `serverAuthCode`, read the docs link below *.
  iosClientId: '67308592614-921i04bvh2blokfv1lldr7q0i67h5g8e.apps.googleusercontent.com',
});

// ios client id: 67308592614-921i04bvh2blokfv1lldr7q0i67h5g8e.apps.googleusercontent.com

const ProfileContent = () => {
  // Specify the state type as 'User | null', meaning it can be a User object or null initially
  const [user, setUser] = useState(null);

  return (
    <View>
      <Text>Welcome to the MLB Fan App</Text>
      <GoogleSigninButton
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={signIn}
      />
    </View>
  );
};

export default ProfileContent;
