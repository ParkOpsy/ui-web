import { combineReducers } from 'redux';

import users from './users';
import conf from './conf';
import places from './places';
import notifications from './notifications';

export default combineReducers({
    users,
    places,
    notifications,
	conf
});
