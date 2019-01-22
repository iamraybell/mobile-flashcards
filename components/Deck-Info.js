import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class DeckInfo extends React.Component{

    render () {
        return (
            <View style={styles.container}> 
                <Text>
                    Name: {this.props.deck.name}
                </Text>
                <Text>
                    Number of Cards:  {this.props.deck.cards.length}
                </Text>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderStyle: 'solid',
        borderColor: 'black',
        borderRadius: 4,
        borderWidth: 0.5,
        maxHeight: 100,
        minWidth: 300,
        justifyContent: 'center',
        padding: 20,
        alignItems: 'center',
    },
  });