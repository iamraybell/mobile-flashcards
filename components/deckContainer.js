import React from 'react';
import { createStackNavigator , createAppContainer} from 'react-navigation';
import  DeckList  from './Deck-List'



export const DeckContainer = createStackNavigator({  
    Main: {screen: DeckList, screenProps:{eeee: 'wwwww'}}
});

