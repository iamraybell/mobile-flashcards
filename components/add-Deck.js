import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { _saveDeck } from './../utils/actions';

export default class AddDeck extends React.Component{
    state ={
        deckName: '',
    }
    styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
            
        },
        input: {
            flex: 1,
            borderStyle: 'solid',
            borderColor: 'black',
            borderRadius: 4,
            borderWidth: 0.5,
            maxHeight: 20,
            minWidth: 300,
            color: '#000000',
        },
    }); 

    handleTextChange = (e) => {
        this.setState((prevState) => {
            return {
                ...prevState,
                deckName: e,
            }
        })
    }
    handleSubmit = () => {
        _saveDeck(this.state.deckName,()=> {
            this.props.navigation.navigate('DeckList');
        });
    }


    render = () => {
        return (
            <View style={this.styles.container}> 
                <Text>Add a Deck to your collection.</Text>
                <TextInput
                    placeholder="Type to add a title!"
                    style={this.styles.input}
                    onChangeText ={(text) => this.handleTextChange(text)}
                    value = {this.state.deckName}
                />
                <Button
                    onPress={this.handleSubmit}
                    title='submit'
                />

            </View>
        );
    }
};