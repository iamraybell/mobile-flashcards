import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator , createAppContainer} from 'react-navigation';
import DeckList  from './components/Deck-List';
import AddDeck from './components/add-Deck';
import { DeckContainer } from './components/deckContainer';

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <DeckList/>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
    
//   },
// });

const TabNavigator = createBottomTabNavigator({
  DeckList: {screen: DeckContainer, screenProps:{catssss: 'sd'}},
  AddDeck: AddDeck
})
export default createAppContainer(TabNavigator);
