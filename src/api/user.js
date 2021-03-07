import axios from 'axios';

import {URL} from '../constants/url';

export const register = (user) => axios.post(`${URL}/user/register`, user);
export const login = (user) => axios.post(`${URL}/user/login`, user);
export const friendRequest = (requestData) => axios.post(`${URL}/user/friendReq`, requestData);
export const addFriend = (friendData) => axios.post(`${URL}/user/friendAdd`, friendData);