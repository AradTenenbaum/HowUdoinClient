import {combineReducers} from 'redux';

import users from './users';
import messages from './messages';
import user from './user';

export default combineReducers({user, users, messages});