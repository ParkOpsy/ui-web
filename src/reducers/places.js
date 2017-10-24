
const initialState = {
	isFetching: false,
	fetchingItems: [],
	lastFetchError: null,
	places: []
};

const places = (state = initialState, action) => {
	switch (action.type) {
		case 'REQUEST_GET_PLACES': {
			const existingIds = state.places.map(place => place.id);
			const updates = {
				isFetching: true,
				fetchingItems: existingIds
			};

			return Object.assign({}, state, updates);
		}

		case 'SUCCESS_GET_PLACES': {
			const places = state.places.concat(action.data);
			const updates = {
				isFetching: false,
				fetchingItems: [],
				places
			};

			return Object.assign({}, state, updates);
		}

		case 'FAILURE_GET_PLACES': {
			const err = action.data;
			const updates = {
				isFetching: false,
				fetchingItems: [],
				lastFetchError: err
			};

			return Object.assign({}, state, updates);
		}

		case 'REQUEST_GET_PLACE': {
			const id = action.data.id;

			const updates = {
				isFetching: true,
				fetchingItems: state.fetchingItems.concat([id])
			};

			return Object.assign({}, state, updates);
		}

		case 'SUCCESS_GET_PLACE': {
			const place = action.data;

			const updates = {
				isFetching: false,
				fetchingItems: []
			}
		}

		case 'FAILURE_GET_PLACE': {

		}

		default:
			return state;
	}
};

export default places;