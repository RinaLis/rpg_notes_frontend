import {
	getUserApi,
	loginUserApi,
	logoutUserApi,
	registerUserApi,
	resetPasswordApi,
	sendCodeApi,
	updateUserApi,
} from '@api';
import { userSliceConst } from '@const';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { LoginInputDTO, SignupInputDTO } from '@utils-types';

export const requestLoginUser = createAsyncThunk(
	`${userSliceConst.name}/${userSliceConst.requests.login}`,
	async (data: LoginInputDTO) => {
		return loginUserApi(data).then(() => getUserApi());
	}
);

export const requestLogoutUser = createAsyncThunk(
	`${userSliceConst.name}/${userSliceConst.requests.logout}`,
	logoutUserApi
);

export const requestRegisterUser = createAsyncThunk(
	`${userSliceConst.name}/${userSliceConst.requests.register}`,
	async (data: SignupInputDTO) => {
		return registerUserApi(data).then(() => getUserApi());
	}
);

export const requestGetUser = createAsyncThunk(
	`${userSliceConst.name}/${userSliceConst.requests.byToken}`,
	getUserApi
);

export const requestUpdateUser = createAsyncThunk(
	`${userSliceConst.name}/${userSliceConst.requests.update}`,
	updateUserApi
);

export const requestSendCode = createAsyncThunk(
	`${userSliceConst.name}/${userSliceConst.requests.sendCode}`,
	sendCodeApi
);

export const resetPassword = createAsyncThunk(
	`${userSliceConst.name}/${userSliceConst.requests.reset}`,
	resetPasswordApi
);
