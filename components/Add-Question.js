import React from 'react';
import { _saveQuestion } from './../utils/actions';
import { StyleSheet, Text, View, TextInput, Button, Picker } from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        alignItems: 'center',
    },
  });

export class AddQuestion extends React.Component{
    state = {
        question:'',
        answer:'',
        correctAnswer: 'Yes',
    };

    styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor:'#69e2fe',
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
    
    })

    handleAnswerChange = (text) => {
        this.setState((prevState) => {
            return {
                ...prevState,
                answer: text,

            }
        })
    }
    handleQuestionChange = (text) => {
        this.setState((prevState) => {
            return {
                ...prevState,
                question: text,

            }
        })
    }
    handleSubmit = () => {
        const id = this.props.navigation.state.params.id;
        const {answer, question, correctAnswer} = this.state
        _saveQuestion(id, answer, question, correctAnswer,()=> {
            this.props.navigation.navigate('DeckView');
        });
    }
    render () {
        return (
    
            <View style={styles.container}> 
                <TextInput
                    placeholder="What question are you asking?"
                    style={this.styles.input}
                    onChangeText ={(text) => this.handleQuestionChange(text)}
                    value = {this.state.question}
                />
                <TextInput
                    placeholder="Give an Answer"
                    style={this.styles.input}
                    onChangeText ={(text) => this.handleAnswerChange(text)}
                    value = {this.state.answer}
                />
                <Text>Is this the correct Answer?</Text>
                <Picker
                    selectedValue={this.state.correctAnswer}
                    style={{ height: 50, width: 100 }}
                    onValueChange={(itemValue) => this.setState({correctAnswer: itemValue})}>
                    <Picker.Item label="Yes" value="Yes" />
                    <Picker.Item label="No" value="No" />
                </Picker>
                <Button
                    title="submit"
                    onPress={this.handleSubmit}
                />
            </View>
        );
    }
}
