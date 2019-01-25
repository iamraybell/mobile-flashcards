import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { subscribeToDeckList, _unsubscribe } from './../utils/actions';

let subId = null
styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#69e2fe',
        
    },
}); 

export class DeckView extends React.Component{
    state = {deck: {name: null, cards:[]}}
    componentDidMount = () => {

        const id = this.props.navigation.state.params.id;
        subId = subscribeToDeckList((decklist) => { 
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

    componentWillReceiveProps =(nextProps) => {
        _unsubscribe(subId);
        const id = nextProps.navigation.state.params.id;
        subId = subscribeToDeckList((decklist) => { 
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
    startQuiz = () => {
        this.props.navigation.navigate('Quiz', {deck: this.state.deck});
    }
    addQuestion = () => {
        this.props.navigation.navigate('AddQuestion', {id: this.state.deck.id});
    }
    render = () =>{
        return (
            <View style={styles.container}>
                <Text>Name: {this.state.deck.name}</Text>
                <Text>Number of Cards: {this.state.deck.cards.length}</Text>
                <Button title="Press here to start quiz." onPress={this.startQuiz}/>
                <Button title="Press here to add a question." onPress={this.addQuestion}/>
            </View>
        )
    }
}

