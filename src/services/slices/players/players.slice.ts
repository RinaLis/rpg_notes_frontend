import { playersSliceConst } from '@const';
import { createSlice } from '@reduxjs/toolkit';
import { PlayerDTO, UserDTO } from '@utils-types';
import {
	requestDeletePlayer,
	requestGetPlayers,
	requestGetUserByLogin,
	requestInviteUser,
} from './actions';

export interface PlayersState {
	isLoading: boolean;
	players: PlayerDTO[] | null;
	invitedUser: UserDTO | null;
	error: string | null;
}

export const initialState: PlayersState = {
	isLoading: false,
	players: null,
	invitedUser: null,
	error: null,
};

export const playersSlice = createSlice({
	name: playersSliceConst.name,
	initialState,
	reducers: {},
	selectors: {
		getPlayers: (sliceState) => sliceState.players,
		getInvitedUser: (sliceState) => sliceState.invitedUser,
		getPlayersIsLoading: (sliceState) => sliceState.isLoading,
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
				state.invitedUser = null;
			})
			.addCase(requestGetUserByLogin.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.error = null;
				state.invitedUser = payload;
			})
			.addCase(requestInviteUser.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(requestInviteUser.rejected, (state, { error }) => {
				state.isLoading = false;
				state.error = error.message as string;
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
				state.error = error.message as string;
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
				state.error = error.message as string;
			})
			.addCase(requestGetPlayers.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.error = null;
				state.players = payload.players;
			});
	},
});

export { initialState as playersInitialState };

export const { getPlayers, getInvitedUser, getPlayersIsLoading } = playersSlice.selectors;

export default playersSlice.reducer;
