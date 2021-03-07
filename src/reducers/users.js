import {CONNECTED, DISCONNECTED} from '../constants/actionTypes';

const reducer = (users = [], action) => {
    switch(action.type){
        case CONNECTED:
            return [...users, action.payload];
        case DISCONNECTED: 
            return users.filter((user) => user._id !== action.payload);
        default:
            return users;
    }
};

export default reducer;