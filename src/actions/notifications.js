import types from '../consts/types';

export const acceptNotification = notification => dispatch => {
    dispatch({
       type: notification.type,
       data: notification.data
    });
	return {
        type: types.NOTIFICATIONS_ACCEPTED,
        data: {...notification}
    };
};

export const clearNotifications = () => ({
	type: types.NOTIFICATIONS_CLEAR
});