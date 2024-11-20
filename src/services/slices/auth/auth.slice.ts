import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TUser } from '@utils-types';

const AUTH_NAME = 'auth';

export interface AuthState {
	isAuthChecked: boolean;
	user: TUser | null;
	errors: string | null;
}

const initialState: AuthState = {
	isAuthChecked: false,
	user: null,
	errors: null,
};

const authSlice = createSlice({
	name: AUTH_NAME,
	initialState,
	reducers: {
		setAuthChecked: (state, action: PayloadAction<boolean>) => {
			state.isAuthChecked = action.payload;
		},
		setUser: (state, action: PayloadAction<TUser | null>) => {
			state.user = action.payload;
		},
		setError: (state, action: PayloadAction<string | null>) => {
			state.errors = action.payload;
		},
	},
	selectors: {
		selectIsAuthChecked: (state: AuthState) => state.isAuthChecked,
		selectUser: (state: AuthState) => state.user,
		selectError: (state: AuthState) => state.errors,
	},
});

export const { setAuthChecked, setUser } = authSlice.actions;
export const { selectIsAuthChecked, selectUser, selectError } = authSlice.selectors;

export default authSlice;
