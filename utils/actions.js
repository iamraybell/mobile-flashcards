import { AsyncStorage } from "react-native"
import { getData } from './../DATA';

const deckSubscribers = [];
let id = 1;

const notifyDeckListSubscribers = () => {
    for (let subscriber of deckSubscribers) {
        _getDeckList(subscriber);
    }
}
export const subscribeToDeckList = ( cb, immediate = true) => {
    deckSubscribers.push(cb);
    if(immediate) {
        _getDeckList(cb);
    }
}

export const _saveItem = (key, value, cb) => {
    AsyncStorage.setItem(key, JSON.stringify(value)).then(()=>{
        if(cb){
            cb(value);
        }
        notifyDeckListSubscribers();
    })
}

export const _saveQuestion = (id, answerGiven, question, correctAnswer, cb) => {
    _getDeckList((deckList)=> {
        deckList.filter((deck) => {
            if( deck.id === id ) {
                deck.cards.push({
                    question,
                    correctAnswer,
                    answerGiven,
                });
            }
        })
        _saveItem('deckList', deckList, cb);
    })
}

export const _getDeckList = (cb)=> {
    AsyncStorage.getItem('deckList').then((deckList)=>{
        if (!deckList) {
            _saveItem('decklist', getData(), cb);
            return;
        }
       cb(JSON.parse(deckList));
    })
};

export const _saveDeck = (name, cb)=> {
    _getDeckList((deckList) => {
        deckList.push(
            {
                name: name,
                cards:[],
                id,
            }
        );
        _saveItem('deckList', deckList, cb);
        notifyDeckListSubscribers();
    })
    id++;
}
