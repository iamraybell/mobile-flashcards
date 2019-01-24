import { AsyncStorage } from "react-native"
import { getData } from './../DATA';

const deckSubscribers = [];

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
            cb(value)
        }
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
    _getDeckList((deck) => {
        deck.push(
            {
                name: name,
                cards:[]
            }
        );
        _saveItem('deckList', deck, cb);
        notifyDeckListSubscribers();
    })
}
