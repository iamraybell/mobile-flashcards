import React from 'react';
import { StyleSheet, Text, ScrollView} from 'react-native';
import  DeckInfo  from './Deck-Info';
import { subscribeToDeckList, _unsubscribe } from './../utils/actions';
let subId = null;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 100,
        alignItems: 'center',
        backgroundColor:'#554945',
        minHeight:`150%`

    },
  });

export default class DeckList extends React.Component{
    state = {
        decks: [],
    };
    
    componentDidMount() {
       subId =  subscribeToDeckList((decklist) => {

            this.setState((prevState) => {
                return {
                    ...prevState,
                    decks: decklist,
                }
            })
        })
    }
    // componentWillUnmount(){
    //     _unsubscribe(subId)
    // }

    render () {
        return (
            <ScrollView 
                contentContainerStyle={styles.container}
                scrollEnabled={true}
            > 
                {this.state.decks.map((deck)=> {

                    return (
                        <DeckInfo
                            deck={deck}
                            key={deck.id}
                            navigation ={this.props.navigation}
                        
                        />
                    );
                })}
            </ScrollView>
        );
    }
};
