import 'isomorphic-fetch';

const base = 'http://api/v1';

export const auth = () => fetch(`${base}/auth`, { method: 'GET'});

export const getUsers = () => fetch(`${base}/user`, { method: 'GET' });
export const createUser = user => fetch(`${base}/user`, { method: 'POST', body: user });

export const getUser = userId => fetch(`${base}/user/${userId}`, { method: 'GET' });
export const updateUser = (userId, update) => fetch(`${base}/user/${userId}`, { method:'PUT', body: { user: update }});
export const removeUser = userId => fetch(`${base}/user/${userId}`, { method: 'DELETE' });

export const getPlaces = () => fetch(`${base}/place`, { method: 'GET' });
export const createPlace = place => fetch(`${base}/place`, { method: 'POST', body: place });

export const getPlace = placeId => fetch(`${base}/place/${placeId}`, { method: 'GET' });
export const updatePlace = (placeId, update) => fetch(`${base}/place/${placeId}`, { method: 'PUT', body: { place: update } });
export const removePlace = placeId => fetch(`${base}/place/${placeId}`, { method: 'DELETE' });

export const createBooking = (placeId, booking) => fetch(`${base}/place/${placeId}/booking`, { method: 'POST', body: { booking } });
export const cancelBooking = (placeId, bookingId) => fetch(`${base}/bookings/${placeId}/booking/${bookingId}`, { method: 'DELETE' });
