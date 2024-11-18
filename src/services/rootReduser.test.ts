import { rootReducer } from './slices';
import { authSliceInitialState } from './slices/auth/authSlice.test';

const initialState = {
	auth: authSliceInitialState,
};

describe('rootReducer', () => {
	it('Initialization: should return the initial state', () => {
		expect(rootReducer(undefined, { type: 'unknown' })).toEqual(initialState);
	});

	it('unnamed action: should return the initial state', () => {
		expect(rootReducer(initialState, { type: 'unknown' })).toEqual(initialState);
	});
});
