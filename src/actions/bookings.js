import { createAction } from './utils';

export const bookPlace = placeId => createAction('REQUEST_BOOK_PLACE', { placeId });

export const cancelBooking = placeId => createAction('REQUEST_CANCEL_BOOKING', { placeId });