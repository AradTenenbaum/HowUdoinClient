import {CHANGE, NO_USER} from '../constants/actionTypes';

const reducer = (currentUser = null, action) => {
    switch(action.type) {
        case CHANGE:
            return action.payload;
        case NO_USER:
            return null;
        default:
            return currentUser;
    }
}

export default reducer;