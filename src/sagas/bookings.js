import * as Api from '../services/api';
import { createAction } from '../actions/utils';
import {call, put} from 'redux-saga/effects';

export function* createBooking(action) {
	try {
		const booking = yield call(Api.createBooking, action.data.placeId);
		yield put(createAction('SUCCESS_BOOK_PLACE', booking));
	}
	catch (error) {
		yield put(createAction('FAILURE_BOOK_PLACE', error));
	}
}

export function* cancelBooking(action) {
	try {
		const response = yield call(Api.cancelBooking, action.data.placeId);
		yield put(createAction('SUCCESS_CANCEL_BOOKING', response));
	}
	catch (error) {
		yield put(createAction('FAILURE_CANCEL_BOOKING', error));
	}
}
