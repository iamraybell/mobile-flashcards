import React from 'react';
import { createStackNavigator } from 'react-navigation';
import  DeckList  from './Deck-List'
import { DeckView } from './Deck-View';
import { Quiz } from './Quiz'



export const DeckContainer = createStackNavigator({  
    Main: {screen: DeckList},
    DeckView: {screen: DeckView},
    Quiz: {screen: DeckView},
});

