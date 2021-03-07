import {LOGIN, LOGOUT, REGISTER, ADD_FRIEND} from '../constants/actionTypes';
import * as api from '../api';

export const register = (user) => async (dispatch) => {
    try {
        const {data} = await api.register(user);
        dispatch({type: REGISTER, payload: data});
    } catch (error) {
        console.log(error);
    }
};

export const login = (user) => async (dispatch) => {
    try {
        const {data} = await api.login(user);
        dispatch({type: LOGIN, payload: data});
    } catch (error) {
        console.log(error);
    }
};

export const logout = () => async (dispatch) => {
    dispatch({type: LOGOUT, payload: null});
};

export const addFriend = (friendData) => async (dispatch) => {
    try {
        const {data} = await api.addFriend(friendData);
        dispatch({type: ADD_FRIEND, payload: friendData});
    } catch (error) {
        console.log(error);
    }
};