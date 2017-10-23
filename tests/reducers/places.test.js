import reducer from '../../src/reducers/places';
import { createAction } from '../../src/actions/utils';

describe('place reducer', () => {
	test('should return the initial state', () => {
		expect(reducer(undefined, {})).toEqual({
			isFetching: false,
			fetchingItems: [],
			lastFetchError: null,
			places: []
		});
	});

	describe('handling get places scenario', () => {

		describe('from the initial state', () => {

			const initialState = {
				isFetching: false,
				fetchingItems: [],
				lastFetchError: null,
				places: []
			};

			test('should handle REQUEST_GET_PLACES action', () => {
				const pattern = {
					isFetching: true,
					fetchingItems: [],
					lastFetchError: null,
					places: []
				};

				expect(
					reducer(initialState, createAction('REQUEST_GET_PLACES'))
				).toEqual(pattern);
			});

			test('should handle SUCCESS_GET_PLACES action', () => {
				const pattern = {
					isFetching: false,
					fetchingItems: [],
					lastFetchError: null,
					places: [{ id: 'id' }]
				};

				expect(
					reducer(initialState, createAction('SUCCESS_GET_PLACES', [{ id: 'id'}]))
				).toEqual(pattern);
			});

			test('should handle FAILURE_GET_PLACES action', () => {
				const pattern = {
					isFetching: false,
					fetchingItems: [],
					lastFetchError: {
						message: 'error fetching places'
					},
					places: []
				};

				expect(
					reducer(initialState, createAction('FAILURE_GET_PLACES', { message: 'error fetching places'}))
				).toEqual(pattern);
			});
		});

		describe('from a random state', () => {

			const randomState = {
				isFetching: false,
				fetchingItems: [],
				lastFetchError: null,
				places: [{ id: 'id1'}, { id: 'id2' }]
			};

			test('should handle REQUEST_GET_PLACES action', () => {
				const pattern = {
					isFetching: true,
					fetchingItems: ['id1', 'id2'],
					lastFetchError: null,
					places: [{ id: 'id1'}, { id: 'id2' }]
				};

				expect(
					reducer(randomState, createAction('REQUEST_GET_PLACES'))
				).toEqual(pattern);
			});

			test('should handle SUCCESS_GET_PLACES action', () => {
				const pattern = {
					isFetching: false,
					fetchingItems: [],
					lastFetchError: null,
					places: [{ id: 'id1'}, { id: 'id2' }, { id: 'id3'}]
				};

				expect(
					reducer(randomState, createAction('SUCCESS_GET_PLACES', [{ id: 'id3'}]))
				).toEqual(pattern);
			});

			test('should handle FAILURE_GET_PLACES action', () => {
				const pattern = {
					isFetching: false,
					fetchingItems: [],
					lastFetchError: {
						message: 'error fetching places'
					},
					places: [{ id: 'id1'}, { id: 'id2' }]
				};

				expect(
					reducer(randomState, createAction('FAILURE_GET_PLACES', { message: 'error fetching places'}))
				).toEqual(pattern);
			});
		});
	});

	describe('handling get place scenario', () => {

		const firstPlace = {
			id: 'kui231-edda23-eds22-33',
			name: '21',
			description: 'This is a pretty place near to the South entrance',
			ownerId: 'asd21l-dsade2-1123dasd-329',
			hostId: 'asd21l-dsade2-1123dasd-329'
		};

		const secondPlace = {
			id: '129lkj-dsad2123-asd123-55',
			name: '54',
			description: 'This is a tiny place near to the North entrance',
			ownerId: 'sdfa-asdfa123-asdfs111-89',
			hostId: null
		};

		const randomState = {
			isFetching: false,
			fetchingItems: [],
			lastFetchError: null,
			places: [firstPlace, secondPlace]
		};

		test('should handle REQUEST_GET_PLACE action', () => {
			const nextState = reducer(randomState, createAction('REQUEST_GET_PLACE', { id: '129lkj-dsad2123-asd123-55' }));

			expect(nextState).toEqual({
				isFetching: true,
				fetchingItems: ['129lkj-dsad2123-asd123-55'],
				lastFetchError: null,
				places: [firstPlace, secondPlace]
			});
			expect(nextState.places.find(place => place.id === 'kui231-edda23-eds22-33')).toBe(firstPlace);
			expect(nextState.places.find(place => place.id === '129lkj-dsad2123-asd123-55')).toBe(secondPlace);
		});

		test('should handle SUCCESS_GET_PLACE action', () => {
			const updatedSecondPlace = {
				id: '129lkj-dsad2123-asd123-55',
				name: '54',
				description: 'Updated description of the second place',
				ownerId: 'sdfa-asdfa123-asdfs111-89',
				hostId: 'lkj123-kla8123i-uiao11-321'
			};

			const nextState = reducer(randomState,
									  createAction('SUCCESS_GET_PLACE', updatedSecondPlace));

			expect(nextState).toEqual({
				isFetching: false,
				fetchingItems: [],
				lastFetchError: null,
				places: [firstPlace, updatedSecondPlace]
			});
			expect(nextState.places.find(place => place.id === 'kui231-edda23-eds22-33')).toBe(firstPlace);
			expect(nextState.places.find(place => place.id === '129lkj-dsad2123-asd123-55')).not.toBe(secondPlace);
		});

		test('should handle FAILURE_GET_PLACE action', () => {
			const nextState = reducer(randomState,
				createAction('FAILURE_GET_PLACE', { message: 'error getting place', id: '129lkj-dsad2123-asd123-55' }));

			expect(nextState).toEqual({
				isFetching: false,
				fetchingItems: [],
				lastFetchError: {
					message: 'error getting place',
					id: '129lkj-dsad2123-asd123-55'
				},
				places: [firstPlace, secondPlace]
			});
			expect(nextState.places.find(place => place.id === 'kui231-edda23-eds22-33')).toBe(firstPlace);
			expect(nextState.places.find(place => place.id === '129lkj-dsad2123-asd123-55')).toBe(secondPlace);
		});

	});

	describe('handling create place scenario', () => {

		describe('from the initial state', () => {

			const initialState = {
				isFetching: false,
				fetchingItems: [],
				lastFetchError: null,
				places: []
			};

			const newPlace = {
				name: '54',
				description: 'Description of a new place',
				ownerId: 'sdfa-asdfa123-asdfs111-89',
				hostId: 'sdfa-asdfa123-asdfs111-89'
			};

			test('should handle REQUEST_CREATE_PLACE action', () => {
				expect(
					reducer(initialState, createAction('REQUEST_CREATE_PLACE', newPlace))
				).toEqual({
					isFetching: true,
					fetchingItems: [],
					lastFetchError: null,
					places: []
				});
			});

			test('should handle SUCCESS_CREATE_PLACE action', () => {
				expect(
					reducer(initialState, createAction('SUCCESS_CREATE_PLACE', {
						id: '123asdl-uiou123-asdm1-789',
						name: '54',
						description: 'Description of a new place',
						ownerId: 'sdfa-asdfa123-asdfs111-89',
						hostId: 'sdfa-asdfa123-asdfs111-89'
					}))
				).toEqual({
					isFetching: false,
					fetchingItems: [],
					lastFetchError: null,
					places: [{
						id: '123asdl-uiou123-asdm1-789',
						name: '54',
						description: 'Description of a new place',
						ownerId: 'sdfa-asdfa123-asdfs111-89',
						hostId: 'sdfa-asdfa123-asdfs111-89'
					}]
				});
			});

			test('should handle FAILURE_CREATE_PLACE action', () => {
				expect(
					reducer(initialState, createAction('FAILURE_CREATE_PLACE', { message: 'error creating place'}))
				).toEqual({
					isFetching: false,
					fetchingItems: [],
					lastFetchError: {
						message: 'error creating place'
					},
					places: []
				})
			});

		});

		describe('from a random state', () => {

			const firstPlace = {
				id: 'kui231-edda23-eds22-33',
				name: '21',
				description: 'This is a pretty place near to the South entrance',
				ownerId: 'asd21l-dsade2-1123dasd-329',
				hostId: 'asd21l-dsade2-1123dasd-329'
			};

			const secondPlace = {
				id: '129lkj-dsad2123-asd123-55',
				name: '54',
				description: 'This is a tiny place near to the North entrance',
				ownerId: 'sdfa-asdfa123-asdfs111-89',
				hostId: null
			};

			const newPlace = {
				name: '91',
				description: 'Description of a new place',
				ownerId: 'mbnzxc-czxb8-pohfd99-33',
				hostId: 'mbnzxc-czxb8-pohfd99-33'
			};

			const randomState = {
				isFetching: false,
				fetchingItems: [],
				lastFetchError: null,
				places: [firstPlace, secondPlace]
			};

			test('should handle REQUEST_CREATE_PLACE action', () => {
				const nextState = reducer(randomState, createAction('REQUEST_CREATE_PLACE', newPlace));

				expect(nextState).toEqual({
					isFetching: true,
					fetchingItems: [],
					lastFetchError: null,
					places: [firstPlace, secondPlace]
				});
			});

			test('should handle SUCCESS_CREATE_PLACE action', () => {
				const nextState = reducer(randomState,
					createAction('SUCCESS_CREATE_PLACE', {
						id: '123asdl-uiou123-asdm1-789',
						name: '91',
						description: 'Description of a new place',
						ownerId: 'mbnzxc-czxb8-pohfd99-33',
						hostId: 'mbnzxc-czxb8-pohfd99-33'
					}));

				expect(nextState).toEqual({
					isFetching: false,
					fetchingItems: [],
					lastFetchError: null,
					places: [firstPlace, secondPlace, {
						id: '123asdl-uiou123-asdm1-789',
						name: '91',
						description: 'Description of a new place',
						ownerId: 'mbnzxc-czxb8-pohfd99-33',
						hostId: 'mbnzxc-czxb8-pohfd99-33'
					}]
				});
				expect(nextState.places.find(place => place.id === 'kui231-edda23-eds22-33')).toBe(firstPlace);
				expect(nextState.places.find(place => place.id === '129lkj-dsad2123-asd123-55')).toBe(secondPlace);
				expect(nextState.places.find(place => place.id === '123asdl-uiou123-asdm1-789')).toBeDefined();
			});

			test('should handle FAILURE_CREATE_PLACE action', () => {
				const nextState = reducer(randomState, createAction('FAILURE_CREATE_PLACE', { message: 'error creating place' }));

				expect(nextState).toEqual({
					isFetching: false,
					fetchingItems: [],
					lastFetchError: {
						message: 'error creating place'
					},
					places: [firstPlace,secondPlace]
				});
				expect(nextState.places.find(place => place.id === 'kui231-edda23-eds22-33')).toBe(firstPlace);
				expect(nextState.places.find(place => place.id === '129lkj-dsad2123-asd123-55')).toBe(secondPlace);
			});

		});
	});

	describe('handling update place scenario', () => {

		const firstPlace = {
			id: 'kui231-edda23-eds22-33',
			name: '21',
			description: 'This is a pretty place near to the South entrance',
			ownerId: 'asd21l-dsade2-1123dasd-329',
			hostId: 'asd21l-dsade2-1123dasd-329'
		};

		const secondPlace = {
			id: '129lkj-dsad2123-asd123-55',
			name: '54',
			description: 'This is a tiny place near to the North entrance',
			ownerId: 'sdfa-asdfa123-asdfs111-89',
			hostId: null
		};

		const randomState = {
			isFetching: false,
			fetchingItems: [],
			lastFetchError: null,
			places: [firstPlace, secondPlace]
		};

		test('should handle REQUEST_UPDATE_PLACE action', () => {
			const nextState = reducer(randomState,
				createAction('REQUEST_UPDATE_PLACE', { id: '129lkj-dsad2123-asd123-55' }));

			expect(nextState).toEqual({
				isFetching: true,
				fetchingItems: ['129lkj-dsad2123-asd123-55'],
				lastFetchError: null,
				places: [firstPlace, secondPlace]
			});
			expect(nextState.places.find(place => place.id === 'kui231-edda23-eds22-33')).toBe(firstPlace);
			expect(nextState.places.find(place => place.id === '129lkj-dsad2123-asd123-55')).toBe(secondPlace);
		});

		test('should handle SUCCESS_UPDATE_PLACE action', () => {
			const updatedSecondPlace = {
				id: '129lkj-dsad2123-asd123-55',
				name: '54',
				description: 'Updated description of the second place',
				ownerId: 'sdfa-asdfa123-asdfs111-89',
				hostId: 'lkj123-kla8123i-uiao11-321'
			};

			const nextState = reducer(randomState,
				createAction('SUCCESS_UPDATE_PLACE', updatedSecondPlace));

			expect(nextState).toEqual({
				isFetching: false,
				fetchingItems: [],
				lastFetchError: null,
				places: [firstPlace, updatedSecondPlace]
			});
			expect(nextState.places.find(place => place.id === 'kui231-edda23-eds22-33')).toBe(firstPlace);
			expect(nextState.places.find(place => place.id === '129lkj-dsad2123-asd123-55')).not.toBe(secondPlace);
		});

		test('should handle FAILURE_UPDATE_PLACE action', () => {
			const nextState = reducer(randomState, createAction('FAILURE_UPDATE_PLACE',
				{ message: 'error updating place',
				  id: '129lkj-dsad2123-asd123-55'}));

			expect(nextState).toEqual({
				isFetching: false,
				fetchingItems: [],
				lastFetchError: {
					message: 'error updating place',
					id: '129lkj-dsad2123-asd123-55'
				},
				places: [firstPlace,secondPlace]
			});
			expect(nextState.places.find(place => place.id === 'kui231-edda23-eds22-33')).toBe(firstPlace);
			expect(nextState.places.find(place => place.id === '129lkj-dsad2123-asd123-55')).toBe(secondPlace);
		});

	});

	describe('handling remove place scenario', () => {

		const firstPlace = {
			id: 'kui231-edda23-eds22-33',
			name: '21',
			description: 'This is a pretty place near to the South entrance',
			ownerId: 'asd21l-dsade2-1123dasd-329',
			hostId: 'asd21l-dsade2-1123dasd-329'
		};

		const secondPlace = {
			id: '129lkj-dsad2123-asd123-55',
			name: '54',
			description: 'This is a tiny place near to the North entrance',
			ownerId: 'sdfa-asdfa123-asdfs111-89',
			hostId: null
		};

		const randomState = {
			isFetching: false,
			fetchingItems: [],
			lastFetchError: null,
			places: [firstPlace, secondPlace]
		};

		test('should handle REQUEST_REMOVE_PLACE action', () => {
			const nextState = reducer(randomState,
				createAction('REQUEST_REMOVE_PLACE', { id: '129lkj-dsad2123-asd123-55' }));

			expect(nextState).toEqual({
				isFetching: true,
				fetchingItems: ['129lkj-dsad2123-asd123-55'],
				lastFetchError: null,
				places: [firstPlace, secondPlace]
			});
			expect(nextState.places.find(place => place.id === 'kui231-edda23-eds22-33')).toBe(firstPlace);
			expect(nextState.places.find(place => place.id === '129lkj-dsad2123-asd123-55')).toBe(secondPlace);
		});

		test('should handle SUCCESS_REMOVE_PLACE action', () => {
			const nextState = reducer(randomState,
				createAction('SUCCESS_REMOVE_PLACE', { id: '129lkj-dsad2123-asd123-55' }));

			expect(nextState).toEqual({
				isFetching: false,
				fetchingItems: [],
				lastFetchError: null,
				places: [firstPlace]
			});
			expect(nextState.places.find(place => place.id === 'kui231-edda23-eds22-33')).toBe(firstPlace);
			expect(nextState.places.find(place => place.id === '129lkj-dsad2123-asd123-55')).toBeUndefined();
		});

		test('should handle FAILURE_REMOVE_PLACE action', () => {
			const nextState = reducer(randomState,
				createAction('FAILURE_REMOVE_PLACE', { message: 'error removing place', id: '129lkj-dsad2123-asd123-55'}));

			expect(nextState).toEqual({
				isFetching: false,
				fetchingItems: [],
				lastFetchError: {
					message: 'error removing place',
					id: '129lkj-dsad2123-asd123-55'
				},
				places: [firstPlace, secondPlace]
			});
			expect(nextState.places.find(place => place.id === 'kui231-edda23-eds22-33')).toBe(firstPlace);
			expect(nextState.places.find(place => place.id === '129lkj-dsad2123-asd123-55')).toBe(secondPlace);
		});
	});

	describe('handling book place scenario', () => {

		const firstPlace = {
			id: 'kui231-edda23-eds22-33',
			name: '21',
			description: 'This is a pretty place near to the South entrance',
			ownerId: 'asd21l-dsade2-1123dasd-329',
			hostId: 'asd21l-dsade2-1123dasd-329'
		};

		const secondPlace = {
			id: '129lkj-dsad2123-asd123-55',
			name: '54',
			description: 'This is a tiny place near to the North entrance',
			ownerId: 'sdfa-asdfa123-asdfs111-89',
			hostId: null
		};

		const randomState = {
			isFetching: false,
			fetchingItems: [],
			lastFetchError: null,
			places: [firstPlace, secondPlace]
		};

		test('should handle REQUEST_BOOK_PLACE action', () => {
			const nextState =
				reducer(
					randomState, createAction('REQUEST_BOOK_PLACE', {
						placeId: '129lkj-dsad2123-asd123-55',
						hostId: 'kasd123-asdk123-ppo-75'
					})
				);

			expect(nextState).toEqual({
				isFetching: true,
				fetchingItems: ['129lkj-dsad2123-asd123-55'],
				lastFetchError: null,
				places: [firstPlace, secondPlace]
			});
		});

		test('should handle SUCCESS_BOOK_PLACE action', () => {
			const nextState =
				reducer(
					randomState, createAction('SUCCESS_BOOK_PLACE', {
						placeId: '129lkj-dsad2123-asd123-55',
						hostId: 'kasd123-asdk123-ppo-75'
					})
				);

			expect(nextState).toEqual({
				isFetching: false,
				fetchingItems: [],
				lastFetchError: null,
				places: [firstPlace, {
					id: '129lkj-dsad2123-asd123-55',
					name: '54',
					description: 'This is a tiny place near to the North entrance',
					ownerId: 'sdfa-asdfa123-asdfs111-89',
					hostId: 'kasd123-asdk123-ppo-75'
				}]
			});
		});

		test('should handle FAILURE_BOOK_PLACE action', () => {
			const nextState =
				reducer(
					randomState, createAction('FAILURE_BOOK_PLACE', {
						message: 'error booking place',
						placeId: '129lkj-dsad2123-asd123-55'
					})
				);

			expect(nextState).toEqual({
				isFetching: false,
				fetchingItems: [],
				lastFetchError: {
					message: 'error booking place',
					placeId: '129lkj-dsad2123-asd123-55'
				},
				places: [firstPlace, secondPlace]
			});
		});
	});

	describe('handling cancel booking scenario', () => {

		const firstPlace = {
			id: 'kui231-edda23-eds22-33',
			name: '21',
			description: 'This is a pretty place near to the South entrance',
			ownerId: 'asd21l-dsade2-1123dasd-329',
			hostId: 'asd21l-dsade2-1123dasd-329'
		};

		const secondPlace = {
			id: '129lkj-dsad2123-asd123-55',
			name: '54',
			description: 'This is a tiny place near to the North entrance',
			ownerId: 'sdfa-asdfa123-asdfs111-89',
			hostId: null
		};

		const randomState = {
			isFetching: false,
			fetchingItems: [],
			lastFetchError: null,
			places: [firstPlace, secondPlace]
		};

		test('should handle REQUEST_CANCEL_BOOKING action', () => {
			const nextState =
				reducer(
					randomState, createAction('REQUEST_CANCEL_BOOKING', {
						placeId: 'kui231-edda23-eds22-33'
					})
				);

			expect(nextState).toEqual({
				isFetching: true,
				fetchingItems: ['kui231-edda23-eds22-33'],
				lastFetchError: null,
				places: [firstPlace, secondPlace]
			});
		});

		test('should handle SUCCESS_CANCEL_BOOKING action', () => {
			const nextState =
				reducer(
					randomState, createAction('SUCCESS_CANCEL_BOOKING', {
						placeId: 'kui231-edda23-eds22-33'
					})
				);

			expect(nextState).toEqual({
				isFetching: false,
				fetchingItems: [],
				lastFetchError: null,
				places: [firstPlace, {
					id: 'kui231-edda23-eds22-33',
					name: '21',
					description: 'This is a pretty place near to the South entrance',
					ownerId: 'asd21l-dsade2-1123dasd-329',
					hostId: null
				}]
			});
		});

		test('should handle FAILURE_CANCEL_BOOKING action', () => {
			const nextState =
				reducer(
					randomState, createAction('FAILURE_CANCEL_BOOKING', {
						message: 'error cancel booking',
						placeId: 'kui231-edda23-eds22-33'
					})
				);

			expect(nextState).toEqual({
				isFetching: false,
				fetchingItems: [],
				lastFetchError: {
					message: 'error cancel booking',
					placeId: 'kui231-edda23-eds22-33'
				},
				places: [firstPlace, secondPlace]
			});
		});
	});
});
