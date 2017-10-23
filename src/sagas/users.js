import * as Api from '../services/api';
import { createAction } from '../actions/utils';
import {call, put} from 'redux-saga/effects';

export function* getUsers() {
	try {
		const users = yield call(Api.getUsers);
		yield put(createAction('SUCCESS_GET_USERS', users));
	}
	catch (error) {
		yield put(createAction('FAILURE_GET_USERS', error));
	}
}

export function* getUser(action) {
	try {
		const user = yield call(Api.getUser, action.data.id);
		yield put(createAction('SUCCESS_GET_USER', user));
	}
	catch (error) {
		yield put(createAction('FAILURE_GET_USER', error));
	}
}

export function* createUser(action) {
	try {
		const newUser = yield call(Api.createUser, action.data.user);
		yield put(createAction('SUCCESS_CREATE_USER', newUser));
	}
	catch (error) {
		yield put(createAction('FAILURE_CREATE_USER', error));
	}
}

export function* updateUser(action) {
	try {
		const response = yield call(Api.updateUser, action.data.id, action.data.update);
		yield put(createAction('SUCCESS_UPDATE_USER', response));
	}
	catch (error) {
		yield put(createAction('FAILURE_UPDATE_USER', error));
	}
}

export function* removeUser(action) {
	try {
		const response = yield call(Api.removeUser, action.data.id);
		yield put(createAction('SUCCESS_REMOVE_USER', response));
	}
	catch (error) {
		yield put(createAction('FAILURE_REMOVE_USER', error));
	}
}