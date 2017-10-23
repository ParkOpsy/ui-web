import { createAction } from '../../src/actions/utils';

test('create action with object as a data', () => {
	const type = 'ACTION_WITH_OBJECT_DATA';
	const data = {
		foo: 'bar'
	};

	const res = {
		type: 'ACTION_WITH_OBJECT_DATA',
		data:
			{
				foo: 'bar'
			}
	};

	expect(createAction(type, data)).toEqual(res);
});

test('create action with primitive as a data', () => {
	const type = 'ACTION_WITH_PRIMITIVE_DATA';
	const data = 'primitive';

	const res = {
		type: 'type',
		data: 'primitive'
	};

	expect(createAction(type, data)).toEqual(res);
});

test('create action with empty data', () => {
	const type = 'type';

	const res = {
		type: type,
		data: {

		}
	};

	expect(createAction(type)).toEqual(res)
});