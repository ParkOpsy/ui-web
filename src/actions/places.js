import { createAction } from './utils';

export const getPlaces = () => createAction('REQUEST_GET_PLACES');

export const getPlace = id => createAction('REQUEST_GET_PLACE', { id });

export const createPlace = place => createAction('REQUEST_CREATE_PLACE', { place });

export const updatePlace = (id, update) => createAction('REQUEST_UPDATE_PLACE', { id, update });

export const removePlace = id => createAction('REQUEST_REMOVE_PLACE', { id });
