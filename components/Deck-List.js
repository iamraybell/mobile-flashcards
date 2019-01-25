import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import  DeckInfo  from './Deck-Info';
import { subscribeToDeckList } from './../utils/actions';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        alignItems: 'center',
        backgroundColor:'#554945',
    },
  });

export default class DeckList extends React.Component{
    state = {
        decks: [],
    };
    
    componentDidMount() {
        subscribeToDeckList((decklist) => {
            this.setState((prevState) => {
                return {
                    ...prevState,
                    decks: decklist,
                }
            })
        })
    }

    render () {
        return (
            <View style={styles.container}> 
                {this.state.decks.map((deck)=> {

                    return (
                        <DeckInfo
                            deck={deck}
                            key={deck.name}
                            navigation ={this.props.navigation}
                        />
                    );
                })}
            </View>
        );
    }
};
