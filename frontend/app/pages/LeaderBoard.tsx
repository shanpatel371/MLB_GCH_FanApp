import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native'
import { useLocalSearchParams } from 'expo-router';

interface Player {
  id: number;
  name: string;
  score: number;
}

const LeaderBoard: React.FC = () => {
  const { type } = useLocalSearchParams();

  //need to change this to fetch data from the backend
  const [players, setPlayers] = useState<Player[]>([
    { id: 1, name: 'Alice', score: 120 },
    { id: 2, name: 'Bob', score: 95 },
    { id: 3, name: 'Charlie', score: 150 },
    { id: 4, name: 'David', score: 110 },
    { id: 5, name: 'Emma', score: 130 },
    { id: 6, name: 'Frank', score: 85 },
    { id: 7, name: 'Grace', score: 140 },
    { id: 8, name: 'Henry', score: 100 },
  ]);

  // Sort players by score in descending order
  const sortedPlayers = [...players].sort((a, b) => b.score - a.score);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>{type} Leaderboard</Text>
      {sortedPlayers.map((player, index) => (
        <View key={player.id} style={styles.row}>
          <Text style={styles.rank}>{index + 1}.</Text>
          <Text style={styles.name}>{player.name}</Text>
          <Text style={styles.score}>{player.score} pts</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#fff',
    marginVertical: 5,
    borderRadius: 5,
    elevation: 2,
  },
  rank: {
    fontWeight: 'bold',
  },
  name: {
    flex: 1,
    marginLeft: 10,
  },
  score: {
    fontWeight: 'bold',
  },
});

export default LeaderBoard;
