import {LOGIN, REGISTER, LOGOUT, ADD_FRIEND} from '../constants/actionTypes';

const reducer = (user = null, action) => {
    switch(action.type) {
        case REGISTER:
            return action.playload;
        case LOGIN:
            return action.playload;
        case LOGOUT:
            return null;
        case ADD_FRIEND:
            return {...user, friends: [...user.friends, action.payload]};
        default:
            return user;
    }
};

export default reducer;