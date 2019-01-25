import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Animated, } from 'react-native';



export default class DeckInfo extends React.Component{
    state = {
        bounceVal: new Animated.Value(1),
    }

    handleChangeToDeckView = () => {
        const navigate = this.props.navigation.navigate;
        Animated.sequence([
            Animated.spring(this.state.bounceVal, {toValue: 0,  friction: 5}),
            Animated.spring(this.state.bounceVal, {toValue: 1,  friction: 15}),
        ]).start(
            
        )
        navigate('DeckView', {id: this.props.deck.id, navigate})        
    }

    render =  () => {
        return (

                <TouchableOpacity onPress={() => this.handleChangeToDeckView()}>
                    <Animated.View 
                        style={[styles.container, {transform: [{scale: this.state.bounceVal }]}]}
                    > 
                    <Text>
                        Name: {this.props.deck.name}
                    </Text>
                    <Text>
                        Number of Cards:  {this.props.deck.cards.length}
                    </Text>
                    </Animated.View>
                </TouchableOpacity>

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
        backgroundColor:'#69e2fe',
        margin: 10,
        overflow: 'visible',
    },
  });