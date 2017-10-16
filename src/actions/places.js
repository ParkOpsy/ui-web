import { createAction, createRequestTypes, FAILURE, SUCCESS, REQUEST } from './utils';

const CREATE_PLACE = createRequestTypes('CREATE_PLACE');
const UPDATE_PLACE = createRequestTypes('UPDATE_PLACE');
const REMOVE_PLACE = createRequestTypes('REMOVE_PLACE');
const BOOK_PLACE = createRequestTypes('BOOK_PLACE');
const FREE_PLACE = createRequestTypes('FREE_PLACE');

export const createPlace = {
	request: place => createAction(CREATE_PLACE[REQUEST], place),
	success: (place, response) => createAction(CREATE_PLACE[SUCCESS], {place, response}),
	failure: (place, error) => createAction(CREATE_PLACE[FAILURE], {place, error})
};

export const updatePlace = {
	request: place => createAction(UPDATE_PLACE[REQUEST], place),
	success: (place, response) => createAction(UPDATE_PLACE[SUCCESS], {place, response}),
	failure: (place, error) => createAction(UPDATE_PLACE[FAILURE], {place, error})
};

export const removePlace = {
	request: id => createAction(REMOVE_PLACE[REQUEST], id),
	success: (id, response) => createAction(REMOVE_PLACE[SUCCESS], {id, response}),
	failure: (id, error) => createAction(REMOVE_PLACE[FAILURE], {id, error})
};

export const bookPlace = {
	request: id => createAction(BOOK_PLACE[REQUEST], id),
	success: (id, response) => createAction(BOOK_PLACE[SUCCESS], {id, response}),
	failure: (id, error) => createAction(BOOK_PLACE[FAILURE], {id, error})
};

export const freePlace = {
	request: id => createAction(FREE_PLACE[REQUEST], id),
	success: (id, response) => createAction(FREE_PLACE[SUCCESS], {id, response}),
	failure: (id, error) => createAction(FREE_PLACE[FAILURE], {id, error})
};