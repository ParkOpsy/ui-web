import { createAction, createRequestTypes, FAILURE, SUCCESS, REQUEST } from './utils';

const CREATE_USER = createRequestTypes('CREATE_USER');
const UPDATE_USER = createRequestTypes('UPDATE_USER');
const REMOVE_USER = createRequestTypes('REMOVE_USER');

export const createUser = {
	request: user => createAction(CREATE_USER[REQUEST], user),
	success: (user, response) => createAction(CREATE_USER[SUCCESS], {user, response}),
	failure: (user, error) => createAction(CREATE_USER[FAILURE], {user, error})
};

export const updateUser = {
	request: user => createAction(UPDATE_USER[REQUEST], user),
	success: (user, response) => createAction(UPDATE_USER[SUCCESS], {user, response}),
	failure: (user, error) => createAction(UPDATE_USER[FAILURE], {user, error})
};

export const removeUser = {
	request: id => createAction(REMOVE_USER[REQUEST], id),
	success: (id, response) => createAction(REMOVE_USER[SUCCESS], {id, response}),
	failure: (id, error) => createAction(REMOVE_USER[FAILURE], {id, error})
};