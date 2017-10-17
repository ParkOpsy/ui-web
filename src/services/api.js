import 'isomorphic-fetch';

const base = 'http://localhost:665/v1';

export const user = (method, body) => fetch(`${base}/users`, { method, body });

export const place = (method, body) => fetch(`${base}/place`, { method, body });

export const bookings = (method, body) => fetch(`${base}/bookings`, { method, body });