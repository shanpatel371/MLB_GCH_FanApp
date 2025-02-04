import React from 'react';
import { View, Text, StyleSheet, Dimensions} from 'react-native';
import Swiper from 'react-native-deck-swiper';


interface Card {
  text: string;
}

const cards: Card[] = [
  { text: 'Card 1' },
  { text: 'Card 2' },
  { text: 'Card 3' },
  // Add more cards as needed
];

const GameView: React.FC = () => {
  return (
    <View style={styles.container}>
      <Swiper
      disableBottomSwipe={true}
      disableTopSwipe={true}
        cards={cards}
        renderCard={(card, index) => (
          <View style={styles.card}>
            <Text style={styles.text}>{card.text}</Text>
          </View>
        )}
        onSwiped={(cardIndex) => {
          console.log('Card swiped. Index:', cardIndex);
        }}
        onSwipedAll={() => {
          console.log('All cards swiped');
        }}
        cardIndex={0}
        backgroundColor={'#4FD0E9'}
        stackSize={3}
        // cardVerticalMargin={80} // Adjust vertical margin to resize card
        // cardHorizontalMargin={40} // Adjust horizontal margin to resize card
        containerStyle={styles.swiperContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  swiperContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: Dimensions.get('window').width * 0.7,  // 70% of screen width
    height: Dimensions.get('window').height * 0.7, // 50% of screen height
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    alignSelf: 'center',
    marginHorizontal: 'auto',
  },
  text: {
    fontSize: 24,
    color: '#333',
  },
});

export default GameView;
