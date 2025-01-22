import { userSliceConst } from '@const';
import { createSlice } from '@reduxjs/toolkit';
import { UserDTO } from '@utils-types';
import {
	requestGetUser,
	requestLoginUser,
	requestLogoutUser,
	requestRegisterUser,
	requestSendCode,
	requestUpdateUser,
	resetPassword,
} from './actions';

export interface UserState {
	isLoading: boolean;
	user: UserDTO | null;
	error: string | null;
}

const initialState: UserState = {
	isLoading: false,
	user: null,
	error: null,
};

export const userSlice = createSlice({
	name: userSliceConst.name,
	initialState,
	reducers: {
		clearUserError: (state) => {
			state.error = null;
		},
	},
	selectors: {
		getUserState: (sliceState) => sliceState,
		isAuthCheckedSelector: (sliceState) => sliceState.isLoading,
		userDataSelector: (sliceState) => sliceState.user,
		userErrorSelector: (sliceState) => sliceState.error,
	},
	extraReducers: (builder) => {
		builder
			.addCase(requestLoginUser.pending, (state) => {
				state.isLoading = true;
				state.user = null;
				state.error = null;
			})
			.addCase(requestLoginUser.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.error = null;
				state.user = payload;
			})
			.addCase(requestLoginUser.rejected, (state, { error }) => {
				state.user = null;
				state.isLoading = false;
				state.error = error.message as string;
			})
			.addCase(requestLogoutUser.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(requestLogoutUser.fulfilled, (state) => {
				state.isLoading = false;
				state.user = null;
				state.error = null;
			})
			.addCase(requestLogoutUser.rejected, (state, { error }) => {
				state.isLoading = false;
				state.error = error.message as string;
			})
			.addCase(requestRegisterUser.pending, (state) => {
				state.isLoading = true;
				state.user = null;
				state.error = null;
			})
			.addCase(requestRegisterUser.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.error = null;
				state.user = payload;
			})
			.addCase(requestRegisterUser.rejected, (state, { error }) => {
				state.user = null;
				state.isLoading = false;
				state.error = error.message as string;
			})
			.addCase(requestGetUser.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(requestGetUser.rejected, (state, { error }) => {
				state.isLoading = false;
				state.error = error.message as string;
				state.user = null;
			})
			.addCase(requestGetUser.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.error = null;
				state.user = payload;
			})
			.addCase(requestUpdateUser.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(requestUpdateUser.rejected, (state, { error }) => {
				state.isLoading = false;
				state.error = error.message as string;
			})
			.addCase(requestUpdateUser.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.error = null;
				state.user = payload;
			})
			.addCase(requestSendCode.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(requestSendCode.rejected, (state, { error }) => {
				state.isLoading = false;
				state.error = error.message as string;
			})
			.addCase(requestSendCode.fulfilled, (state) => {
				state.isLoading = false;
				state.error = null;
			})
			.addCase(resetPassword.pending, (state) => {
				state.isLoading = true;
				state.user = null;
				state.error = null;
			})
			.addCase(resetPassword.fulfilled, (state) => {
				state.isLoading = false;
				state.error = null;
			})
			.addCase(resetPassword.rejected, (state, { error }) => {
				state.user = null;
				state.isLoading = false;
				state.error = error.message as string;
			});
	},
});

export { initialState as userInitialState };

export const { getUserState, isAuthCheckedSelector, userDataSelector, userErrorSelector } =
	userSlice.selectors;

export const { clearUserError } = userSlice.actions;

export default userSlice.reducer;
