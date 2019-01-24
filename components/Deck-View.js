import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { subscribeToDeckList } from './../utils/actions';


styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
}); 
export class DeckView extends React.Component{
    state = {deck: {name: null, cards:[]}}
    componentDidMount = () => {

        const id = this.props.navigation.state.params.id;
        subscribeToDeckList((decklist) => { 
            const deck = decklist.filter((deck) => {
                return deck.id === id
            })[0];
            this.setState((prevState) => {
                return {
                    ...prevState,
                    deck: deck
                }
            })
        })
    }
    render = () =>{
        console.log(this.state, 'this is the state')
        return (
            <View style={styles.container}>
                <Text>Name: {this.state.deck.name}</Text>
                <Text>Number of Cards: {this.state.deck.cards.length}</Text>
            </View>
        )
    }
}

