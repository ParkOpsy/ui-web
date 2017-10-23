import * as users from './users';
import * as places from './places';
import * as bookings from './bookings';
import { takeLatest } from 'redux-saga/effects';

export default function* rootSaga() {
	yield takeLatest('REQUEST_GET_USERS', users.getUsers);
	yield takeLatest('REQUEST_GET_USER', users.getUser);
	yield takeLatest('REQUEST_CREATE_USER', users.createUser);
	yield takeLatest('REQUEST_UPDATE_USER', users.updateUser);
	yield takeLatest('REQUEST_REMOVE_USER', users.removeUser);

	yield takeLatest('REQUEST_GET_PLACES', places.getPlaces);
	yield takeLatest('REQUEST_GET_PLACE', places.getPlace);
	yield takeLatest('REQUEST_CREATE_PLACE', places.createPlace);
	yield takeLatest('REQUEST_UPDATE_PLACE', places.updatePlace);
	yield takeLatest('REQUEST_REMOVE_PLACE', places.removePlace);

	yield takeLatest('REQUEST_BOOK_PLACE', bookings.createBooking);
	yield takeLatest('REQUEST_CANCEL_BOOKING', bookings.cancelBooking);
}