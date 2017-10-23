import { createAction } from './utils';

export const bookPlace = (placeId, hostId) => createAction('REQUEST_BOOK_PLACE', { placeId, hostId });

export const cancelBooking = placeId => createAction('REQUEST_CANCEL_BOOKING', { placeId });