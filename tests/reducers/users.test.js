import reducer from '../../src/reducers/users';
import { createAction } from '../../src/actions/utils';

describe('users reducer', () => {
	test('should return the initial state', () => {
		expect(reducer(undefined, {})).toEqual({
			isFetching: false,
			fetchingItems: [],
			lastFetchError: null,
			users: []
		});
	});

	describe('handling get users scenario', () => {

		describe('from the initial state', () => {

			const initialState = {
				isFetching: false,
				fetchingItems: [],
				lastFetchError: null,
				users: []
			};

			test('should handle REQUEST_GET_USERS action', () => {
				expect(
					reducer(initialState, createAction('REQUEST_GET_USERS'))
				).toEqual({
					isFetching: true,
					fetchingItems: [],
					lastFetchError: null,
					users: []
				});
			});

			test('should handle SUCCESS_GET_USERS action', () => {
				expect(
					reducer({
						isFetching: true,
						fetchingItems: [],
						lastFetchError: null,
						users: []
					}, createAction('SUCCESS_GET_USERS', [{id: 'user1'}, {id: 'user2'}]))
				).toEqual({
					isFetching: false,
					fetchingItems: [],
					lastFetchError: null,
					users: [{id: 'user1'}, {id: 'user2'}]
				});
			});

			test('should handle FAILURE_GET_USERS action', () => {
				expect(
					reducer({
						isFetching: true,
						fetchingItems: [],
						lastFetchError: null,
						users: []
					}, createAction('FAILURE_GET_USERS', { message: 'error getting users'}))
				).toEqual({
					isFetching: false,
					fetchingItems: [],
					lastFetchError: {
						message: 'error getting users'
					},
					users: []
				});
			});
		});

		describe('from a random state', () => {

			const user1 = {
				id: 'user1'
			};

			const user2 = {
				id: 'user2'
			};

			const randomState = {
				isFetching: false,
				fetchingItems: [],
				lastFetchError: null,
				users: [user1, user2]
			};

			test('should handle REQUEST_GET_USERS action', () => {
				expect(
					reducer(randomState, createAction('REQUEST_GET_USERS'))
				).toEqual({
					isFetching: true,
					fetchingItems: ['user1','user2'],
					lastFetchError: null,
					users: [user1, user2]
				});
			});

			test('should handle SUCCESS_GET_USERS action', () => {
				const nextState = reducer({
					isFetching: true,
					fetchingItems: ['user1','user2'],
					lastFetchError: null,
					users: [user1, user2]
				}, createAction('SUCCESS_GET_USERS', [{id: 'user1'}, {id: 'user2'}]));

				expect(
					nextState
				).toEqual({
					isFetching: false,
					fetchingItems: [],
					lastFetchError: null,
					users: [{id: 'user1'}, {id: 'user2'}]
				});
				expect(nextState.users.find(user => user.id === 'user1')).not.toBe(user1);
				expect(nextState.users.find(user => user.id === 'user2')).not.toBe(user2);
			});

			test('should handle FAILURE_GET_USERS action', () => {
				const nextState = reducer({
					isFetching: true,
					fetchingItems: ['user1','user2'],
					lastFetchError: null,
					users: [user1, user2]
				}, createAction('FAILURE_GET_USERS', { message: 'error getting users'}));

				expect(
					nextState
				).toEqual({
					isFetching: false,
					fetchingItems: [],
					lastFetchError: {
						message: 'error getting users'
					},
					users: [user1, user2]
				});
				expect(nextState.users.find(user => user.id === 'user1')).toBe(user1);
				expect(nextState.users.find(user => user.id === 'user2')).toBe(user2);
			});
		});
	});

	describe('handling get user scenario', () => {

		const user1 = {
			id: 'user1',
			name: 'Grigory Nitsenko'
		};

		const user2 = {
			id: 'user2',
			name: 'Alexey Ivanov'
		};

		const randomState = {
			isFetching: false,
			fetchingItems: [],
			lastFetchError: null,
			users: [user1, user2]
		};

		test('should handle REQUEST_GET_USER action', () => {
			const nextState = reducer(
				randomState,
				createAction('REQUEST_GET_USER', { id: 'user1' })
			);
			expect(
				nextState
			).toEqual({
				isFetching: true,
				fetchingItems: ['user1'],
				lastFetchError: null,
				users: [user1, user2]
			});
		});

		test('should handle SUCCESS_GET_USER action', () => {
			const nextState = reducer(
				{
					isFetching: true,
					fetchingItems: ['user1'],
					lastFetchError: null,
					users: [user1, user2]
				},
				createAction('SUCCESS_GET_USER', {
					id: 'user1',
					name: 'Greg Nitsenko'
				})
			);

			expect(
				nextState
			).toEqual({
				isFetching: false,
				fetchingItems: [],
				lastFetchError: null,
				users: [{
					id: 'user1',
					name: 'Greg Nitsenko'
				}, user2]
			});
		});

		test('should handle FAILURE_GET_USER action', () => {
			const nextState = reducer(
				{
					isFetching: true,
					fetchingItems: ['user1'],
					lastFetchError: null,
					users: [user1, user2]
				},
				createAction('FAILURE_GET_USER', {
					message: 'error getting user',
					id: 'user1'
				})
			);

			expect(
				nextState
			).toEqual({
				isFetching: false,
				fetchingItems: [],
				lastFetchError: {
					message: 'error getting user',
					id: 'user1'
				},
				users: [user1, user2]
			});
		});
	});

	describe('handling create user scenario', () => {

		describe('from the initial state', () => {

			const initialState = {
				isFetching: false,
				fetchingItems: [],
				lastFetchError: null,
				users: []
			};

			const newUser = {
				name: 'Ivan Vasiliev'
			};

			test('should handle REQUEST_CREATE_USER action', () => {
				const nextState = reducer(
					initialState,
					createAction('REQUEST_CREATE_USER', newUser)
				);

				expect(nextState).toEqual({
					isFetching: true,
					fetchingItems: [],
					lastFetchError: null,
					users: []
				});
			});

			test('should handle SUCCESS_CREATE_USER action', () => {
				const nextState = reducer(
					{
						isFetching: true,
						fetchingItems: [],
						lastFetchError: null,
						users: []
					},
					createAction('SUCCESS_CREATE_USER', { id: 'newuser', name: 'Ivan Vasiliev' })
				);

				expect(nextState).toEqual({
					isFetching: false,
					fetchingItems: [],
					lastFetchError: null,
					users: [{ id: 'newuser', name: 'Ivan Vasiliev' }]
				});
			});

			test('should handle FAILURE_CREATE_USER action', () => {
				const nextState = reducer(
					{
						isFetching: true,
						fetchingItems: [],
						lastFetchError: null,
						users: []
					},
					createAction('FAILURE_CREATE_USER', { message: 'error creating user' })
				);

				expect(nextState).toEqual({
					isFetching: false,
					fetchingItems: [],
					lastFetchError: {
						message: 'error creating user'
					},
					users: []
				});
			});
		});

		describe('from a random state', () => {

			const user1 = {
				id: 'user1',
				name: 'Grigory Nitsenko'
			};

			const user2 = {
				id: 'user2',
				name: 'Alexey Ivanov'
			};

			const newUser = {
				name: 'Ivan Vasiliev'
			};

			const randomState = {
				isFetching: false,
				fetchingItems: [],
				lastFetchError: null,
				users: [user1, user2]
			};

			test('should handle REQUEST_CREATE_USER action', () => {
				const nextState = reducer(
					randomState,
					createAction('REQUEST_CREATE_USER', newUser)
				);

				expect(
					nextState
				).toEqual({
					isFetching: true,
					fetchingItems: [],
					lastFetchError: null,
					users: [user1, user2]
				});
			});

			test('should handle SUCCESS_CREATE_USER action', () => {
				const nextState = reducer(
					{
						isFetching: true,
						fetchingItems: [],
						lastFetchError: null,
						users: [user1, user2]
					},
					createAction('SUCCESS_CREATE_USER', {
						id: 'user3',
						name: 'Ivan Vasiliev'
					})
				);

				expect(
					nextState
				).toEqual({
					isFetching: false,
					fetchingItems: [],
					lastFetchError: null,
					users: [user1, user2, {
						id: 'user3',
						name: 'Ivan Vasiliev'
					}]
				});
			});

			test('should handle FAILURE_CREATE_USER action', () => {
				const nextState = reducer(
					{
						isFetching: true,
						fetchingItems: [],
						lastFetchError: null,
						users: [user1, user2]
					},
					createAction('FAILURE_CREATE_USER', { message: 'error creating user' })
				);

				expect(
					nextState
				).toEqual({
					isFetching: false,
					fetchingItems: [],
					lastFetchError: {
						message: 'error creating user'
					},
					users: [user1, user2]
				})
			});
		});

	});

	describe('handling update user scenario', () => {

		const user1 = {
			id: 'user1',
			name: 'Grigory Nitsenko'
		};

		const user2 = {
			id: 'user2',
			name: 'Alexey Ivanov'
		};

		const randomState = {
			isFetching: false,
			fetchingItems: [],
			lastFetchError: null,
			users: [user1, user2]
		};

		test('should handle REQUEST_UPDATE_USER action', () => {
			const nextState = reducer(
				randomState,
				createAction('REQUEST_UPDATE_USER', {
					id: 'user2',
					update: {
						name: 'Andrey Ivanov'
					}
				})
			);

			expect(
				nextState
			).toEqual({
				isFetching: true,
				fetchingItems: ['user2'],
				lastFetchError: null,
				users: [user1, user2]
			});
		});

		test('should handle SUCCESS_UPDATE_USER action', () => {
			const nextState = reducer(
				{
					isFetching: true,
					fetchingItems: ['user2'],
					lastFetchError: null,
					users: [user1, user2]
				},
				createAction('SUCCESS_UPDATE_USER', {
					id: 'user2',
					name: 'Andrey Ivanov'
				})
			);
			expect(
				nextState
			).toEqual({
				isFetching: false,
				fetchingItems: [],
				lastFetchError: null,
				users: [user1, {
					id: 'user2',
					name: 'Andrey Ivanov'
				}]
			});
		});

		test('should handle FAILURE_UPDATE_USER action', () => {
			const nextState = reducer(
				{
					isFetching: true,
					fetchingItems: ['user2'],
					lastFetchError: null,
					users: [user1, user2]
				},
				createAction('FAILURE_UPDATE_USER', {
					message: 'error updating user',
					id: 'user2'
				})
			);

			expect(
				nextState
			).toEqual({
				isFetching: false,
				fetchingItems: [],
				lastFetchError: {
					message: 'error updating user',
					id: 'user2'
				},
				users: [user1, user2]
			});
		});
	});

	describe('handling remove user scenario', () => {

		const user1 = {
			id: 'user1',
			name: 'Grigory Nitsenko'
		};

		const user2 = {
			id: 'user2',
			name: 'Alexey Ivanov'
		};

		const randomState = {
			isFetching: false,
			fetchingItems: [],
			lastFetchError: null,
			users: [user1, user2]
		};

		test('should handle REQUEST_REMOVE_USER action', () => {
			const nextState = reducer(
				randomState,
				createAction('REQUEST_REMOVE_USER', { id: 'user2'})
			);
			expect(
				nextState
			).toEqual({
				isFetching: true,
				fetchingItems: ['user2'],
				lastFetchError: null,
				users: [user1, user2]
			});
		});

		test('should handle SUCCESS_REMOVE_USER action', () => {
			const nextState = reducer(
				{
					isFetching: true,
					fetchingItems: ['user2'],
					lastFetchError: null,
					users: [user1, user2]
				},
				createAction('SUCCESS_REMOVE_USER', { id: 'user2'})
			);
			expect(
				nextState
			).toEqual({
				isFetching: false,
				fetchingItems: [],
				lastFetchError: null,
				users: [user1]
			});
		});

		test('should handle FAILURE_REMOVE_USER action', () => {
			const nextState = reducer(
				{
					isFetching: true,
					fetchingItems: ['user2'],
					lastFetchError: null,
					users: [user1, user2]
				},
				createAction('FAILURE_REMOVE_USER', {
					message: 'error removing user',
					id: 'user2'
				})
			);
			expect(
				nextState
			).toEqual({
				isFetching: false,
				fetchingItems: [],
				lastFetchError: {
					message: 'error removing user',
					id: 'user2'
				},
				users: [user1, user2]
			});
		});
	});

});
