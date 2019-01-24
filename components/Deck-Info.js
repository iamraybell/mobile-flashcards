import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';



export default class DeckInfo extends React.Component{

    handleChangeToDeckView = (e) => {
        console.log(this.props, e.props)
        console.log('heeee')
        this.props.navigation.navigate('AddDeck');
    }

    render =  () => {
        return (
            <View 
                style={styles.container}
            > 
                <TouchableOpacity onPress={() => this.handleChangeToDeckView(this)}>
                    <Text>
                        Name: {this.props.deck.name}
                    </Text>
                    <Text>
                        Number of Cards:  {this.props.deck.cards.length}
                    </Text>
                </TouchableOpacity>
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
        backgroundColor: '#00b7eb',
    },
  });