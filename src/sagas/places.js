import * as Api from '../services/api';
import { createAction } from '../actions/utils';
import {call, put} from 'redux-saga/effects';

export function* getPlaces() {
	try {
		const places = yield call(Api.getPlaces);
		yield put(createAction('SUCCESS_GET_PLACES', places));
	}
	catch (error) {
		yield put(createAction('FAILURE_GET_PLACES', error));
	}
}

export function* getPlace(action) {
	try {
		const place = yield call(Api.getPlace, action.data.id);
		yield put(createAction('SUCCESS_GET_PLACE', place));
	}
	catch (error) {
		yield put(createAction('FAILURE_GET_PLACE', error));
	}
}

export function* createPlace(action) {
	try {
		const newPlace = yield call(Api.createPlace, action.data.place);
		yield put(createAction('SUCCESS_CREATE_PLACE', newPlace));
	}
	catch (error) {
		yield put(createAction('FAILURE_CREATE_PLACE', error));
	}
}

export function* updatePlace(action) {
	try {
		const updatedPlace = yield call(Api.updatePlace, action.data.id, action.data.update);
		yield put(createAction('SUCCESS_UPDATE_PLACE', updatedPlace));
	}
	catch (error) {
		yield put(createAction('FAILURE_UPDATE_PLACE', error));
	}
}

export function* removePlace(action) {
	try {
		const id = yield call(Api.removePlace, action.data.id);
		yield put(createAction('SUCCESS_REMOVE_PLACE', { id }));
	}
	catch (error) {
		yield put(createAction('FAILURE_REMOVE_PLACE', error));
	}
}