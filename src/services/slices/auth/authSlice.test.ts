import { TUser } from '@utils-types';
import authSlice, {
	setAuthChecked,
	setUser,
	selectIsAuthChecked,
	selectUser,
	selectError,
	AuthState,
} from './auth.slice';

const { reducer } = authSlice;

export const authSliceInitialState: AuthState = {
	isAuthChecked: false,
	user: null,
	errors: null,
};
const stateWithCheckedAuth = {
	...authSliceInitialState,
	isAuthChecked: true,
};

const user: TUser = {
	// когда появится нормальный тип для юзера, заменить на пример с ним
};

const stateWithUser = {
	...authSliceInitialState,
	isAuthChecked: true,
	user,
};

const stateWithUserAndErrors = {
	...stateWithUser,
	errors: 'error text',
};

describe('authSlice', () => {
	describe('initialization', () => {
		it('should return the initial state', () => {
			expect(reducer(undefined, { type: 'unknown' })).toEqual(authSliceInitialState);
		});

		it('should not change state on unknown action', () => {
			const action = { type: 'unknown' };
			const actual = reducer(stateWithCheckedAuth, action);
			expect(actual).toEqual(stateWithCheckedAuth);
		});
	});

	describe('reducers', () => {
		it('should handle setAuthChecked', () => {
			const actual = authSlice.reducer(authSliceInitialState, setAuthChecked(true));
			expect(actual.isAuthChecked).toEqual(true);
		});

		it('should handle setUser', () => {
			const actual = authSlice.reducer(authSliceInitialState, setUser(user));
			expect(actual.user).toEqual(user);
		});
	});
	describe('selectors', () => {
		const state = { auth: stateWithUserAndErrors };
		it('should select isAuthChecked', () => {
			expect(selectIsAuthChecked(state)).toEqual(true);
		});

		it('should select user', () => {
			expect(selectUser(state)).toEqual(user);
		});
		it('error text', () => {
			expect(selectError(state)).toEqual(stateWithUserAndErrors.errors);
		});
	});
});
