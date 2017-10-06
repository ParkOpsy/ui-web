import types from '../consts/types';

export const acceptNotification = data => ({
	type: types.NOTIFICATIONS_ACCEPT,
	data: {...data}
});

export const clearNotifications = () => ({
	type: types.NOTIFICATIONS_CLEAR
});