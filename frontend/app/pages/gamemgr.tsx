import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

const GameManager = () => {
  const router = useRouter();

  const handlePlayGame = () => {
    router.push('./GameView');
  };

  const handleFriendsLeaderboard = () => {
    router.push({
      pathname: './LeaderBoard',
      params: { type: 'Friends' }, // Passing 'friends' leaderboard
    });
  };

  const handleGlobalLeaderboard = () => {
    router.push({
      pathname: './LeaderBoard',
      params: { type: 'Global' }, // Passing 'friends' leaderboard
    });
  };


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Game Manager</Text>
      <Text style={styles.subHeader}>
        Manage all your game-related activities here. Create, join, and explore games effortlessly.
      </Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handlePlayGame}>
          <Text style={styles.buttonText}>Play Today's Game</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Add a friend</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleFriendsLeaderboard}>
          <Text style={styles.buttonText}>See Friends Leaderboard</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleGlobalLeaderboard}>
          <Text style={styles.buttonText}>See Global</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 20,
  },
  subHeader: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    width: '90%',
    paddingVertical: 15,
    backgroundColor: '#007BFF',
    borderRadius: 10,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
  },
});

export default GameManager;
