import { combineReducers } from 'redux';

import users from './users';
import places from './places';

const rootReducer = combineReducers({
	users,
	places
});

export default rootReducer;
