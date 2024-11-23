import {
	createThreadApi,
	deleteThreadApi,
	getThreadApi,
	getThreadsByAdventureApi,
	updateThreadApi,
} from '@api';
import { threadsSliceConst } from '@const';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ThreadDTO } from '@utils-types';

export interface ThreadsState {
	isLoading: boolean;
	threads: ThreadDTO[] | null;
	currentThread: ThreadDTO | null;
	error: string | null;
}

export const initialState: ThreadsState = {
	isLoading: false,
	threads: null,
	currentThread: null,
	error: null,
};

export const requestCreateThread = createAsyncThunk(
	`${threadsSliceConst.name}/${threadsSliceConst.requests.create}`,
	createThreadApi
);

export const requestGetThreadsByAdventure = createAsyncThunk(
	`${threadsSliceConst.name}/${threadsSliceConst.requests.byAdventure}`,
	getThreadsByAdventureApi
);

export const requestGetThreadById = createAsyncThunk(
	`${threadsSliceConst.name}/${threadsSliceConst.requests.byId}`,
	getThreadApi
);

export const requestUpdateThread = createAsyncThunk(
	`${threadsSliceConst.name}/${threadsSliceConst.requests.update}`,
	updateThreadApi
);

export const requestDeleteThread = createAsyncThunk(
	`${threadsSliceConst.name}/${threadsSliceConst.requests.delete}`,
	deleteThreadApi
);

export const threadsSlice = createSlice({
	name: threadsSliceConst.name,
	initialState,
	reducers: {},
	selectors: {
		getThreads: (sliceState) => sliceState.threads,
		getcurrentThread: (sliceState) => sliceState.currentThread,
	},
	extraReducers: (builder) => {
		builder
			.addCase(requestCreateThread.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(requestCreateThread.rejected, (state, { error }) => {
				state.isLoading = false;
				state.error = error.message as string;
				state.currentThread = null;
			})
			.addCase(requestCreateThread.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.error = null;
				state.currentThread = payload;
				state.threads = state.threads ? [...state.threads, payload] : [payload];
			})
			.addCase(requestGetThreadsByAdventure.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(requestGetThreadsByAdventure.rejected, (state, { error }) => {
				state.isLoading = false;
				state.error = error.message as string;
			})
			.addCase(requestGetThreadsByAdventure.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.error = null;
				state.threads = payload.threads ? payload.threads : null;
			})
			.addCase(requestGetThreadById.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(requestGetThreadById.rejected, (state, { error }) => {
				state.isLoading = false;
				state.error = error.message as string;
				state.currentThread = null;
			})
			.addCase(requestGetThreadById.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.error = null;
				state.currentThread = payload;
			})

			.addCase(requestUpdateThread.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(requestUpdateThread.rejected, (state, { error }) => {
				state.isLoading = false;
				state.error = error.message as string;
			})
			.addCase(requestUpdateThread.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.error = null;
				state.currentThread = payload;
				state.threads = state.threads
					? state.threads.map((n) => (n.id === payload.id ? payload : n))
					: null;
			})
			.addCase(requestDeleteThread.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(requestDeleteThread.rejected, (state, { error }) => {
				state.isLoading = false;
				state.error = error.message as string;
			})
			.addCase(requestDeleteThread.fulfilled, (state, action) => {
				state.isLoading = false;
				state.error = null;
				state.currentThread = null;
				state.threads = state.threads
					? state.threads.filter((n) => n.id !== action.meta.arg.id)
					: null;
			});
	},
});

export { initialState as threadsInitialState };

export const { getThreads, getcurrentThread } = threadsSlice.selectors;

export default threadsSlice.reducer;
