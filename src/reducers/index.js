import { combineReducers } from 'redux';

import users from './users';
import conf from './conf';
import places from './places';

const rootReducer = combineReducers({
	users,
	places,
	conf
});

export default rootReducer;
