import {
	deleteUserInAdventureApi,
	getAdventureUsersApi,
	getUserByLoginApi,
	inviteUserInAdventureApi,
} from '@api';
import { playersSliceConst } from '@const';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const requestGetUserByLogin = createAsyncThunk(
	`${playersSliceConst.name}/${playersSliceConst.requests.byLogin}`,
	getUserByLoginApi
);

export const requestInviteUser = createAsyncThunk(
	`${playersSliceConst.name}/${playersSliceConst.requests.invite}`,
	inviteUserInAdventureApi
);

export const requestDeletePlayer = createAsyncThunk(
	`${playersSliceConst.name}/${playersSliceConst.requests.delete}`,
	deleteUserInAdventureApi
);

export const requestGetPlayers = createAsyncThunk(
	`${playersSliceConst.name}/${playersSliceConst.requests.byAdventure}`,
	getAdventureUsersApi
);
