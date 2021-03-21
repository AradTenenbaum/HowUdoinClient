import {CHANGE, NO_USER} from '../constants/actionTypes';

export const changeUser = (user) => (dispatch) => {
    dispatch({type: CHANGE, payload: user});
};

export const noUser = () => (dispatch) => dispatch({type: NO_USER});