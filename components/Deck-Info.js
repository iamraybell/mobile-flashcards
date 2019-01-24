import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';



export default class DeckInfo extends React.Component{

    handleChangeToDeckView = () => {
        this.props.navigation.navigate('DeckView', {id: this.props.deck.id});
    }

    render =  () => {
        return (
            <View 
                style={styles.container}
            > 
                <TouchableOpacity onPress={() => this.handleChangeToDeckView()}>
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