import {MESSAGE} from '../constants/actionTypes';

export const sendMessage = (message) => async (dispatch) => {
    try {
        dispatch({type: MESSAGE, payload: message});
    } catch (error) {
        console.log(error);
    }
};