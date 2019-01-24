import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
}); 
export class Quiz extends React.Component{
    state = {answered: 0, total: this.props.cards.length, correct: 0}


    

    render = () =>{

    
    }
}

