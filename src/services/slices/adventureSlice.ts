import {
    createAdventureApi,
	deleteAdventureApi,
	deleteUserInAdventureApi,
	getAdventureApi,
	getAdventureUsersApi,
	getUserByLoginApi,
    inviteUserInAdventureApi,
    updateAdventureApi
} from '../../utils/notes-api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AdventureDTO, HeroDTO, PlayerDTO, UserDTO } from 'src/utils/api-client';

export interface AdventureState {
	isLoading: boolean;
	adventure: AdventureDTO | null;
    players: PlayerDTO[] | null;
    
	currentUser: UserDTO | null;
	currentHero: HeroDTO | null;
	error: string | null;
}

export const initialState: AdventureState = {
	isLoading: false,
	adventure: null,
    players: null,
	currentUser: null,
	currentHero: null,
	error: null,
};

export const adventureSlice = createSlice({
	name: 'adventure',
	initialState,
	reducers: {},
	selectors: {
		getAdventure: (sliceState) => sliceState.adventure,
		getcurrentUser: (sliceState) => sliceState.currentUser,
		getcurrentHero: (sliceState) => sliceState.currentHero,
	},
	extraReducers: (builder) => {
		builder
			.addCase(requestGetUserByLogin.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(requestGetUserByLogin.rejected, (state, { error }) => {
				state.isLoading = false;
				state.error = error.message as string;
				state.currentUser = null;
			})
			.addCase(requestGetUserByLogin.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.error = null;
				state.currentUser = payload;
			})
            .addCase(requestCreateAdventure.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(requestCreateAdventure.rejected, (state, { error }) => {
				state.isLoading = false;
				state.error = error.message as string;
				state.adventure = null;
			})
			.addCase(requestCreateAdventure.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.error = null;
				state.adventure = payload;
			})
            .addCase(requestGetAdventure.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(requestGetAdventure.rejected, (state, { error }) => {
				state.isLoading = false;
				state.error = error.message as string;
				state.adventure = null;
			})
			.addCase(requestGetAdventure.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.error = null;
				state.adventure = payload;
			})
            .addCase(requestInviteUser.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(requestInviteUser.rejected, (state, { error }) => {
				state.isLoading = false;
				state.error = error.message as string
			})
			.addCase(requestInviteUser.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.error = null;
				state.players = payload.players;
			})
            .addCase(requestDeletePlayer.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(requestDeletePlayer.rejected, (state, { error }) => {
				state.isLoading = false;
				state.error = error.message as string
			})
			.addCase(requestDeletePlayer.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.error = null;
				state.players = payload.players;
			})
            .addCase(requestGetPlayers.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(requestGetPlayers.rejected, (state, { error }) => {
				state.isLoading = false;
				state.error = error.message as string
			})
			.addCase(requestGetPlayers.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.error = null;
				state.players = payload.players;
			})
            .addCase(requestUpdateAdventure.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(requestUpdateAdventure.rejected, (state, { error }) => {
				state.isLoading = false;
				state.error = error.message as string
			})
			.addCase(requestUpdateAdventure.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.error = null;
				state.adventure = payload;
			})
            .addCase(requestDeleteAdventure.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(requestDeleteAdventure.rejected, (state, { error }) => {
				state.isLoading = false;
				state.error = error.message as string
			})
			.addCase(requestDeleteAdventure.fulfilled, (state) => {
				state.isLoading = false;
				state.error = null;
				state.adventure = null;
			});
	},
});

export const requestGetUserByLogin = createAsyncThunk(
	'adventure/getUserByLogin',
	getUserByLoginApi
);

export const requestCreateAdventure = createAsyncThunk(
	'adventure/create',
	createAdventureApi
);

export const requestGetAdventure = createAsyncThunk(
	'adventure/getById',
	getAdventureApi
);

export const requestInviteUser = createAsyncThunk(
	'adventure/inviteUser',
	inviteUserInAdventureApi
);

export const requestDeletePlayer = createAsyncThunk(
	'adventure/deleteUser',
	deleteUserInAdventureApi
);

export const requestGetPlayers = createAsyncThunk(
	'adventure/getPlayers',
	getAdventureUsersApi
);

export const requestUpdateAdventure = createAsyncThunk(
	'adventure/update',
	updateAdventureApi
);

export const requestDeleteAdventure = createAsyncThunk(
	'adventure/delete',
	deleteAdventureApi
);

export { initialState as adventureInitialState };

export const { getAdventure, getcurrentHero, getcurrentUser } =
	adventureSlice.selectors;

export default adventureSlice.reducer;
