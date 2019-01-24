import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator , createAppContainer} from 'react-navigation';
import DeckList  from './components/Deck-List';
import AddDeck from './components/add-Deck';
import { DeckContainer } from './components/deckContainer';


const TabNavigator = createBottomTabNavigator({
  DeckList: {screen: DeckContainer},
  AddDeck: AddDeck
})
export default createAppContainer(TabNavigator);
