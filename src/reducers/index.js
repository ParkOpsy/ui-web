import { combineReducers } from 'redux';

import users from './users';
import places from './places';
import queue from './queue';

export default combineReducers({
    users,
    places,
    queue
})
