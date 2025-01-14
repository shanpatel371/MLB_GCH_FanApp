// import statusCodes along with GoogleSignin
import {
    GoogleSignin,
    statusCodes,
    isSuccessResponse,
  } from '@react-native-google-signin/google-signin';
  
  // Somewhere in your code
  export const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      if (isSuccessResponse(userInfo)) {
        // setState({ userInfo: response.data });
        console.log(userInfo.data.user.email)
        console.log(userInfo.data.user.name)
      } else {
        // sign in was cancelled by user
      }
    } catch (error) {
        console.log("error occurred with sign in")
    }
  };