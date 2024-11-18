import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TUser } from '@utils-types';

export interface AuthState {
	isAuthChecked: boolean;
	user: TUser | null;
	errors: {
		login: string | null;
		register: string | null;
		update: string | null;
		logout: string | null;
		auth: string | null;
	};
}

const initialState: AuthState = {
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

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setAuthChecked: (state, action: PayloadAction<boolean>) => {
			state.isAuthChecked = action.payload;
		},
		setUser: (state, action: PayloadAction<TUser | null>) => {
			state.user = action.payload;
		},
	},
	selectors: {
		selectIsAuthChecked: (state: AuthState) => state.isAuthChecked,
		selectUser: (state: AuthState) => state.user,
		selectLoginError: (state: AuthState) => state.errors.login,
		selectRegisterError: (state: AuthState) => state.errors.register,
		selectUpdateError: (state: AuthState) => state.errors.update,
		selectLogoutError: (state: AuthState) => state.errors.logout,
		selectAuthError: (state: AuthState) => state.errors.auth,
	},
});

export const { setAuthChecked, setUser } = authSlice.actions;
export const {
	selectIsAuthChecked,
	selectUser,
	selectLoginError,
	selectRegisterError,
	selectUpdateError,
	selectLogoutError,
	selectAuthError,
} = authSlice.selectors;

export default authSlice;
