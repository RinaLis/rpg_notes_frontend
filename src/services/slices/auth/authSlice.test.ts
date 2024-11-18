import { TUser } from '@utils-types';
import authSlice, {
	setAuthChecked,
	setUser,
	selectIsAuthChecked,
	selectUser,
	selectLoginError,
	selectRegisterError,
	selectUpdateError,
	selectLogoutError,
	selectAuthError,
	AuthState,
} from './auth.slice';

const { reducer } = authSlice;

export const authSliceInitialState: AuthState = {
	isAuthChecked: false,
	user: null,
	errors: {
		login: null,
		register: null,
		update: null,
		logout: null,
		auth: null,
	},
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
	errors: {
		login: 'Login error',
		register: 'Register error',
		update: 'Update error',
		logout: 'Logout',
		auth: 'Auth error',
	},
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
		it('should select login error', () => {
			expect(selectLoginError(state)).toEqual(stateWithUserAndErrors.errors.login);
		});
		it('should select register error', () => {
			expect(selectRegisterError(state)).toEqual(stateWithUserAndErrors.errors.register);
		});
		it('should select update error', () => {
			expect(selectUpdateError(state)).toEqual(stateWithUserAndErrors.errors.update);
		});
		it('should select logout error', () => {
			expect(selectLogoutError(state)).toEqual(stateWithUserAndErrors.errors.logout);
		});
		it('should select auth error', () => {
			expect(selectAuthError(state)).toEqual(stateWithUserAndErrors.errors.auth);
		});
	});
});
