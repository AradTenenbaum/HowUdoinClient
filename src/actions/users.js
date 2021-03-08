import {CONNECTED, DISCONNECTED} from '../constants/actionTypes';

export const userConnected = (userData) => async (dispatch) => {
    try {
        dispatch({type: CONNECTED, payload: userData});
    } catch (error) {
        console.log(error);
    }
};

export const userDisconnected = (userData) => async (dispatch) => {
    try {
        dispatch({type: DISCONNECTED, paload: userData});
    } catch (error) {
        console.log(error);
    }
};