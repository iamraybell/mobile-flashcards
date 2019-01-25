import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { Card } from './Card';


styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#69e2fe',
    },
    buttonStyle: {
        borderRadius: 0,
        marginTop: -30,
        marginLeft: 0,
        marginRight: 0,
        marginBottom: 0,
    },
    questionsRemaining: {
        textAlign: 'center',
        marginBottom: 10
    },
    badgeStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50,
        marginTop: 0
    },
}); 
export class Quiz extends React.Component{
    state = {
        answered: 0, 
        correct: 0,
        cards: this.props.navigation.state.params.deck.cards,
    }

    handleGuessMade = (answer, card) => {
        if ( answer === card.correctAnswer ) {
            this.setState((prevState) => {
                return {
                    ...prevState,
                    correct: prevState.correct +1,
                }
            })
        }
        this.setState((prevState) => {
            return {
                ...prevState,
                answered: prevState.answered+1,
            }
        })
    }
    handleGoBack = () => {
        this.props.navigation.goBack();
    }
    handleReload = () => {
        this.setState({
            answered: 0, 
            correct: 0,
            cards: this.props.navigation.state.params.deck.cards,
        })
    }
    render = () =>{
        if (this.state.answered >= this.state.cards.length) {
            return (
                <View style={styles.container}>
                    <Text>You have finished the quiz!</Text>
                    <Text>You got {this.state.correct} right out of {this.state.cards.length}! </Text>
                    <Button
                        title="Go Back"
                        onPress={this.handleGoBack}
                    />
                    <Button
                        title="Start This Quiz Over."
                        onPress={this.handleReload}
                    />
                </View>
            )
        }
        const card = this.state.cards[this.state.answered];

        return (
            <View style={styles.container}>
                <Card
                    card={card}
                />
                <Button
                    style= {styles.buttonStyle}
                    title="correct"
                    onPress={()=>this.handleGuessMade('Yes',card)}
                >
                </Button>
                <Button
                    style= {styles.buttonStyle}
                    title="incorrect"
                    onPress={()=>this.handleGuessMade('No',card)}
                ></Button>
            </View>
        )
    
    }
}

