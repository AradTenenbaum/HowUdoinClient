import {MESSAGE} from '../constants/actionTypes';

const reducer = (messages = [], action) => {
    switch(action.type){
        case MESSAGE: 
            return [...messages, action.payload];
        default:
            return messages;
    }
};

export default reducer;