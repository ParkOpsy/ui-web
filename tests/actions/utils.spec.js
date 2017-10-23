import { createAction } from '../../src/actions/utils';

test('create action from object', () => {
	const type = 'type';
	const data = {
		foo: 'bar'
	};

	const res = {
		type: 'type',
		data:
			{
				foo: 'bar'
			}
	};

	expect(createAction(type, data)).toEqual(res);
});

test('create action from primitive', () => {
	const type = 'type';
	const data = 'primitive';

	const res = {
		type: 'type',
		data: 'primitive'
	};

	expect(createAction(type, data)).toEqual(res);
})