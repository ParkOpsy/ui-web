import types from '../consts/types';

export const createAdmin = admin => ({
	type: types.USER_ADMIN_CREATE,
	data: {...admin}
});

export const processingUser = id => ({
   type: types.USER_PROCESSING,
   data: {id}
});

export const addingVacations = id => ({
    type: types.USER_HOST_ADDING_VACATIONS,
    data: {id}
});

export const removeAdmin = id => dispatch => {
    dispatch(processingUser(id));
    return {
        type: types.USER_ADMIN_DELETE,
        data: {id}
    };
};

export const updateAdmin = (id, adminUpdate) => dispatch => {
    dispatch(processingUser(id));
    return {
        type: types.USER_ADMIN_UPDATE,
        data: {id, ...adminUpdate}
    };
};

export const createHost = host => ({
	type: types.USER_HOST_CREATE,
	data: {...host}
});

export const removeHost = id => dispatch => {
    dispatch(processingUser(id));
    return {
        type: types.USER_HOST_DELETE,
        data: {id}
    };
};

export const updateHost = (id, hostUpdate) => dispatch => {
    dispatch(processingUser(id));
    return {
        type: types.USER_HOST_UPDATE,
        data: {id, ...hostUpdate}
    };
};

export const addVacations = (hostID, dates) => dispatch => {
    dispatch(addingVacations(hostID));
    return {
        type: types.USER_HOST_ADD_VACATIONS,
        data: {hostID, dates}
    }
};

export const createDriver = driver => ({
	type: types.USER_DRIVER_CREATE,
	data: {...driver}
});

export const removeDriver = id => dispatch => {
    dispatch(processingUser(id));
    return {
        type: types.USER_DRIVER_DELETE,
        data: {id}
    };
};

export const updateDriver = (id, driverUpdate) => dispatch => {
    dispatch(processingUser(id));
    return {
        type: types.USER_ADMIN_UPDATE,
        data: {id, ...driverUpdate}
    };
};