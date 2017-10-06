import types from '../consts/types';

export const createAdmin = data => ({
	type: types.USER_ADMIN_CREATE,
	data
});

export const removeAdmin = id => ({
	type: types.USER_ADMIN_DELETE,
	data: {id}
});

export const updateAdmin = data => ({
	type: types.USER_ADMIN_UPDATE,
	data
});

export const createHost = data => ({
	type: types.USER_ADMIN_CREATE,
	data
});

export const removeHost = id => ({
	type: types.USER_ADMIN_DELETE,
	data: {id}
});

export const updateHost = data => ({
	type: types.USER_ADMIN_UPDATE,
	data
});

export const addVacations = dates => ({
	type: types.USER_HOST_ADD_VACATIONS,
	data: {dates}
});

export const createDriver = data => ({
	type: types.USER_ADMIN_CREATE,
	data
});

export const removeDriver = id => ({
	type: types.USER_ADMIN_DELETE,
	data: {id}
});

export const updateDriver = data => ({
	type: types.USER_ADMIN_UPDATE,
	data
});