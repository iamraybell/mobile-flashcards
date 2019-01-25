import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';


styles = StyleSheet.create({
    container: {
        borderStyle: 'solid',
        borderColor: 'black',
        borderRadius: 4,
        borderWidth: 1,
        height: 40,
        maxWidth: 300,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#69e2fe',
    
    },
}); 
export class Card extends React.Component{
    state = {
        frontShown: true, 

    }

    handleFlip = () => {
        this.setState((prevState)=> {
            return {
                ...prevState,
                frontShown: !prevState.frontShown
            }
        })
    }
    render = () =>{
        if (this.state.frontShown) {
            return(
                <TouchableOpacity 
                    onPress={this.handleFlip}
                    style={styles.container}
                    
                >
                    <View >
                        <Text style={{color: 'black', fontSize: 25}}>Question: {this.props.card.question}</Text>
                        <Text style={{color: '#fea28b'}}>Click Here to Show Answer.</Text>
                    </View>
                </TouchableOpacity>
            )
        }
        return(
            <TouchableOpacity 
                onPress={this.handleFlip}
                style={styles.container}
            >
                <View >
                    <Text style={{color: 'black', fontSize: 20}} >Answer Given: {this.props.card.answerGiven} </Text>
                    <Text style={{color: '#fea28b'}}>Click Here to Show Question.</Text>
                </View>

            </TouchableOpacity>
        )
    
    }
}

