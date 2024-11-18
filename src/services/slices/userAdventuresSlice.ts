import { getUserAdventuresApi } from '../../utils/notes-api';

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AdventureDTO, HeroDTO, UserDTO } from 'src/utils/api-client';

export interface userAdventureState {
	isLoading: boolean;
	adventures: AdventureDTO[] | null;
	error: string | null;
}

export const initialState: userAdventureState = {
	isLoading: false,
	adventures: null,
	error: null,
};

export const userAdventureSlice = createSlice({
	name: 'userAdventures',
	initialState,
	reducers: {},
	selectors: {
		getAdventures: (sliceState) => sliceState.adventures,
	},
	extraReducers: (builder) => {
		builder
			.addCase(requestUserAdventures.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(requestUserAdventures.rejected, (state, { error }) => {
				state.isLoading = false;
				state.error = error.message as string;
				state.adventures = null;
			})
			.addCase(requestUserAdventures.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.error = null;
				state.adventures = payload.adventures ? payload.adventures : null;
			});
	},
});

export const requestUserAdventures = createAsyncThunk(
	'userAdventures/getadventures',
	getUserAdventuresApi
);

export { initialState as userAdventuresInitialState };

export const { getAdventures } =
userAdventureSlice.selectors;

export default userAdventureSlice.reducer;