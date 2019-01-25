import { AsyncStorage } from "react-native"
import { getData } from './../DATA';

let deckSubscribers = [];
const subId = 1;

const notifyDeckListSubscribers = () => {
    for (let subscriber of deckSubscribers) {
        console.log('im notifyig')
        _getDeckList(subscriber.cb);
    }
}
export const _unsubscribe = (id) => {
    console.log('eeeee')
    deckSubscribers = deckSubscribers.filter((sub)=> {
        sub.subId != id;
    })
}
export const subscribeToDeckList = ( cb, immediate = true) => {
    deckSubscribers.push({cb, subId});
    if(immediate) {
        console.log('immed')
        _getDeckList(cb);
    }
    const id = subId;
    return id;

}

export const _saveItem = (key, value, cb) => {

    AsyncStorage.setItem(key, JSON.stringify(value)).then((val)=>{
        notifyDeckListSubscribers();
        if(cb){
            cb(value);
        }
        
    }).catch((err)=>console.log(err))
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

            _saveItem('deckList', getData(), cb);
            return;
        }

       cb(JSON.parse(deckList));
    })
};

export const _saveDeck = (name, cb)=> {
    _getDeckList((deckList) => {
        console.log('here')
        deckList.push(
            {
                name: name,
                cards:[],
                id: deckList.length+1,
            }
        );
        console.log(cb)
        _saveItem('deckList', deckList, cb);
    })
}
