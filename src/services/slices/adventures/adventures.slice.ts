import { adventuresSliceConst } from '@const';
import { createSlice } from '@reduxjs/toolkit';
import { AdventureDTO } from '@utils-types';
import {
	requestCreateAdventure,
	requestDeleteAdventure,
	requestGetAdventure,
	requestUpdateAdventure,
	requestUserAdventures,
} from './actions';

export interface AdventuresState {
	isLoading: boolean;
	adventures: AdventureDTO[] | null;
	currentAdventure: AdventureDTO | null;
	createdAdventure: AdventureDTO | null;
	error: string | null;
}

export const initialState: AdventuresState = {
	isLoading: false,
	adventures: null,
	currentAdventure: null,
	createdAdventure: null,
	error: null,
};

export const adventuresSlice = createSlice({
	name: adventuresSliceConst.name,
	initialState,
	reducers: {},
	selectors: {
		getAdventures: (sliceState) => sliceState.adventures,
		getCurrentAdventure: (sliceState) => sliceState.currentAdventure,
		getCreatedAdventure: (sliceState) => sliceState.createdAdventure,
	},
	extraReducers: (builder) => {
		builder
			.addCase(requestUserAdventures.pending, (state) => {
				state.isLoading = true;
				state.error = null;
				state.adventures = null;
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
			})
			.addCase(requestCreateAdventure.pending, (state) => {
				state.isLoading = true;
				state.error = null;
				state.createdAdventure = null;
			})
			.addCase(requestCreateAdventure.rejected, (state, { error }) => {
				state.isLoading = false;
				state.error = error.message as string;
				state.createdAdventure = null;
			})
			.addCase(requestCreateAdventure.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.error = null;
				state.createdAdventure = payload;
				state.adventures = state.adventures ? [...state.adventures, payload] : [payload];
			})
			.addCase(requestGetAdventure.pending, (state) => {
				state.isLoading = true;
				state.error = null;
				state.currentAdventure = null;
			})
			.addCase(requestGetAdventure.rejected, (state, { error }) => {
				state.isLoading = false;
				state.error = error.message as string;
				state.currentAdventure = null;
			})
			.addCase(requestGetAdventure.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.error = null;
				state.currentAdventure = payload;
			})
			.addCase(requestUpdateAdventure.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(requestUpdateAdventure.rejected, (state, { error }) => {
				state.isLoading = false;
				state.error = error.message as string;
			})
			.addCase(requestUpdateAdventure.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.error = null;
				state.currentAdventure = payload;
				state.adventures = state.adventures
					? state.adventures.map((n) => (n.id === payload.id ? payload : n))
					: null;
			})
			.addCase(requestDeleteAdventure.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(requestDeleteAdventure.rejected, (state, { error }) => {
				state.isLoading = false;
				state.error = error.message as string;
			})
			.addCase(requestDeleteAdventure.fulfilled, (state, action) => {
				state.isLoading = false;
				state.error = null;
				state.currentAdventure = null;
				state.adventures = state.adventures
					? state.adventures.filter((n) => n.id !== action.meta.arg.id)
					: null;
			});
	},
});

export { initialState as adventuresInitialState };

export const { getCurrentAdventure, getAdventures } = adventuresSlice.selectors;

export default adventuresSlice.reducer;
