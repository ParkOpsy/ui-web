import types from '../consts/types';
import { status } from '../consts/place';

export const addPlace = place => ({
	type: types.PLACE_CREATED,
	data: {...place}
});

export const removePlace = id => dispatch => {
    dispatch(processingPlace(id));
    return {
        type: types.PLACE_DELETED,
        data: {id}
    };
};

export const updatePlace = (id, placeUpdate) => dispatch => {
    dispatch(processingPlace(id));
    return {
        type: types.PLACE_UPDATED,
        data: {id, ...placeUpdate}
    }
};

export const requestPlaceBooking = id => dispatch => {
    dispatch(changePlaceStatus(id, status.PENDING));
    return {
        type: types.PLACE_REQUEST_BOOKING,
        data: {id}
    }
};

export const confirmPlaceBooking = id => dispatch => {
    dispatch(changePlaceStatus(id, status.BUSY));
    return {
        type: types.PLACE_CONFIRM_BOOKING,
        data: {id}
    }
};

export const rejectPlaceBooking = id => dispatch => {
    dispatch(changePlaceStatus(id, status.FREE));
    return {
        type: types.PLACE_REJECT_BOOKING,
        data: {id}
    }
};

export const changePlaceStatus = (id, status) => ({
	type: types.PLACE_CHANGE_STATUS,
	data: {id, status}
});

export const processingPlace = id => ({
    type: types.PLACE_PROCESSING,
    data: {id}
});


