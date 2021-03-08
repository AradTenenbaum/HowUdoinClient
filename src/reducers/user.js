import {LOGIN, REGISTER, LOGOUT, ERROR, ADD_FRIEND} from '../constants/actionTypes';

const reducer = (user = null, action) => {
    switch(action.type) {
        case REGISTER:
            return action.payload;
        case LOGIN:
            return action.payload;
        case LOGOUT:
            return null;
        case ERROR:
            return {error: action.payload};
        case ADD_FRIEND:
            return {...user, friends: [...user.friends, action.payload]};
        default:
            return user;
    }
};

export default reducer;