import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

// Define the structure of the user object
interface User {
  name: string;
  age: number;
}

const App = () => {
  // Specify the state type as 'User | null', meaning it can be a User object or null initially
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Fetch data from the backend (make sure the backend is running on the correct port)
    axios.get('http://localhost:3000/api/user')
      .then(response => {
        setUser(response.data); // Assuming the backend sends a user object
      })
      .catch(error => {
        console.error('Error fetching user:', error);
      });
  }, []);

  return (
    <View>
      <Text>Welcome to the MLB Fan App</Text>
      {user ? (
        <Text>User: {user.name}</Text> 
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

export default App;
