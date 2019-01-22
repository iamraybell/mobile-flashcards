import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  DeckInfo  from './Deck-Info';
import getData from './../DATA';

export default class DeckList extends React.Component{
    state = {
        decks: getData(),
    };
    render () {
        return (
            <View> 
                {this.state.decks.map((deck)=> {
                    return (
                        <DeckInfo
                            deck={deck}
                            key={deck.name}
                        />
                    )
                })}
            </View>
        );
    }
};