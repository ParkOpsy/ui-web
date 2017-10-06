import types from '../consts/types';

export const addPlace = data => ({
	type: types.PLACE_CREATE,
	data
});

export const removePlace = id => ({
	type: types.PLACE_DELETE,
	data: {id}
});

export const updatePlace = data => ({
	type: types.PLACE_UPDATE,
	data
});

export const requestPlaceBooking = id => ({
	type: types.PLACE_REQUEST_BOOKING,
	data: {id}
});

export const confirmPlaceBooking = id => ({
	type: types.PLACE_CONFIRM_BOOKING,
	data: {id}
});

export const rejectPlaceBooking = id => ({
	type: types.PLACE_REJECT_BOOKING,
	data: {id}
});

export const freePlace = id => ({
	type: types.PLACE_FREE,
	data: {id}
});


