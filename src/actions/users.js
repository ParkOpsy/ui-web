import { createAction } from './utils';

export const getUsers = () => createAction('REQUEST_GET_USERS');

export const getUser = id => createAction('REQUEST_GET_USER', { id  });

export const createUser = user => createAction('REQUEST_CREATE_USER', { user });

export const updateUser = (id, update) => createAction('REQUEST_UPDATE_USER', { id, update });

export const removeUser = id => createAction('REQUEST_REMOVE_USER', { id });