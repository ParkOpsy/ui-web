import 'isomorphic-fetch';

const base = 'http://api/v1';

export const getUsers = () => fetch(`${base}/users`, { method: 'GET' });
export const createUser = user => fetch(`${base}/users`, { method: 'POST', body: user });

export const getUser = id => fetch(`${base}/users/${id}`, { method: 'GET' });
export const updateUser = (id, update) => fetch(`${base}/users/${id}`, { method:'PUT', body: update });
export const removeUser = id => fetch(`${base}/users/${id}`, { method: 'DELETE' });

export const getPlaces = () => fetch(`${base}/places`, { method: 'GET' });
export const createPlace = place => fetch(`${base}/places`, { method: 'POST', body: place });

export const getPlace = id => fetch(`${base}/places/${id}`, { method: 'GET' });
export const updatePlace = (id, update) => fetch(`${base}/places/${id}`, { method: 'PUT', body: update });
export const removePlace = id => fetch(`${base}/places/${id}`, { method: 'DELETE' });

export const createBooking = placeId => fetch(`${base}/bookings/${placeId}`, { method: 'POST' });
export const cancelBooking = placeId => fetch(`${base}/bookings/${placeId}`, { method: 'DELETE' });