import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { Link } from "expo-router"; // Import the Link component for navigation

// Placeholder, add players
// Player data with the type of `image` defined

type PlayerImage = "mookie_betts.png" | "ronald_acuna_jr.png" | "aaron_judge.png";

const players = [
    { id: 1, name: "Mookie Betts", image: "mookie_betts.png" },
    { id: 2, name: "Ronald Acuña Jr.", image: "ronald_acuna_jr.png" },
    { id: 3, name: "Aaron Judge", image: "aaron_judge.png" },
  ];
  
  // Image mapping with the correct type for the image
  const imageMapping: Record<PlayerImage, any> = {
    "mookie_betts.png": require('./images/mookie_betts.png'),
    "ronald_acuna_jr.png": require('./images/ronald_acuna_jr.png'),
    "aaron_judge.png": require('./images/aaron_judge.png'),
  };

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Header with App Name */}
      <View style={styles.header}>
        <Text style={styles.appName}>MLB Swipe Challenge</Text>
      </View>

      {/* Tagline centered vertically between the title and button */}
      <View style={styles.centerContent}>
        <Text style={styles.tagline}>Pick your Players, Climb the Leaderboard!</Text>
      </View>

      {/* Call-to-Action Section with Navigation to Profile Page */}
      <View style={styles.callToAction}>
        <Link href="/profile" style={styles.startButton}>
          <Text style={styles.startButtonText}>Start Picking Players!</Text>
        </Link>
      </View>

      {/* Player Tiles Section */}
      <View style={styles.playerSection}>
        <Text style={styles.sectionTitle}>Potential Picks</Text>
        <View style={styles.playerTiles}>
            {players.map((player) => {
            // Use the mapping to get the correct image
            const playerImage = imageMapping[player.image as PlayerImage];

            return (
                <View key={player.id} style={styles.playerTile}>
                <Image source={playerImage} style={styles.playerImage} />
                <View style={styles.line} />
                <Text style={styles.playerName}>{player.name}</Text>
                </View>
            );
            })}
        </View>
      </View>

      {/* Upcoming Game Teaser */}

      <Text style={styles.competeText}>Compete With Your Favorite Players</Text>

      <View style={styles.gameTeaser}>
        <Text style={styles.sectionTitle}>Upcoming Game: Yankees vs Red Sox</Text>
        <Text style={styles.gameDetails}>Tonight, 7:00 PM</Text>
        <View style={styles.gamePreview}>
          <Image source={require('./images/yankees_symbol.png')} style={styles.teamLogo} />
          <Text style={styles.vsText}>VS</Text>
          <Image source={require('./images/red_sox.png')} style={styles.teamLogo} />
        </View>
      </View>

      {/* Motivational Message */}
      <View style={styles.motivationalSection}>
        <Text style={styles.motivationalText}>
          Ready to pick your all-stars? Get ready to dominate with your MLB knowledge! Choose wisely and claim your victory!
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F4F8", // Soft background color
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  header: {
    alignItems: "center",
    marginBottom: 40,
  },
  appName: {
    fontSize: 40,
    fontWeight: "600", // Semi-bold for a more professional look
    color: "#333",
    letterSpacing: 1.5, // Subtle letter spacing for better readability
  },
  centerContent: {
    justifyContent: "center",
    flex: 1, // This will help center the tagline vertically
    paddingTop: 30, // Adds some space between the header and tagline
    paddingBottom: 30, // Adds some space between the tagline and button
  },
  tagline: {
    fontSize: 24,
    color: "#FF5733",
    fontWeight: "500", // Lighter weight for the tagline
    textAlign: "center", // Centers the tagline horizontally
  },
  callToAction: {
    alignItems: "center",
    marginTop: 40, // Moves the CTA section down for better balance
  },
  startButton: {
    backgroundColor: "#007BFF",
    paddingVertical: 18,
    paddingHorizontal: 60,
    borderRadius: 50, // More rounded button
    shadowColor: "#007BFF",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 10,
    transform: [{ scale: 1 }],
    alignItems: "center", // Center the text inside the button
    justifyContent: "center",
  },
  startButtonText: {
    color: "#FFF",
    fontSize: 22, // Increased font size for better readability
    fontWeight: "bold",
    textAlign: "center",
  },
  playerSection: {
    marginTop: 40,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
  playerTiles: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  playerTile: {
    alignItems: "center",
    backgroundColor: "#FFF",
    paddingVertical: 20,
    paddingHorizontal: 25,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    width: "30%",
  },
  playerImage: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  line: {
    width: "60%",
    height: 2,
    backgroundColor: "#333",
    marginTop: 5,
  },
  playerName: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
    marginTop: 5,
  },
  competeText: {
    fontSize: 20,                // Increase font size to make it more prominent
    fontWeight: '600',           // Use semi-bold for better emphasis (same weight as the app name)
    color: '#FF5733',            // Use the same color as the tagline for consistency
    textAlign: 'center',         // Center the text horizontally
    marginTop: 50,          // Add space above and below the text to separate it from other elements
    fontFamily: 'Arial',         // Keep the font family consistent
  },
  gameTeaser: {
    backgroundColor: "#FFF",
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 15,
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  gameDetails: {
    fontSize: 18,
    color: "#333",
    marginTop: 10,
    textAlign: "center",
  },
  gamePreview: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
    alignItems: "center",
  },
  teamLogo: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  vsText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    alignSelf: "center",
    marginHorizontal: 10,
  },
  motivationalSection: {
    marginTop: 30,
    padding: 20,
    backgroundColor: "#FFF",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  motivationalText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
});
