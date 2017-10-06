import types from '../consts/types';

export const setConf = data => ({
	type: types.CONF_SET,
	data: {...data}
});