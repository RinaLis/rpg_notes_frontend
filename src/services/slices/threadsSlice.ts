import { createThreadApi, deleteThreadApi, getThreadApi, getThreadsByAdventureApi, updateThreadApi } from '../../utils/notes-api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ThreadDTO } from 'src/utils/api-client';

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

export const threadsSlice = createSlice({
	name: 'threads',
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
			})
            .addCase(requestGetThreadsByAdventure.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(requestGetThreadsByAdventure.rejected, (state, { error }) => {
				state.isLoading = false;
				state.error = error.message as string
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
				state.error = error.message as string
			})
			.addCase(requestUpdateThread.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.error = null;
				state.currentThread = payload;
			})
            .addCase(requestDeleteThread.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(requestDeleteThread.rejected, (state, { error }) => {
				state.isLoading = false;
				state.error = error.message as string
			})
			.addCase(requestDeleteThread.fulfilled, (state) => {
				state.isLoading = false;
				state.error = null;
				state.currentThread = null;
			});
	},
});

export const requestCreateThread = createAsyncThunk(
	'threads/create',
	createThreadApi
);

export const requestGetThreadsByAdventure = createAsyncThunk(
	'threads/getByAdventure',
	getThreadsByAdventureApi
);

export const requestGetThreadById = createAsyncThunk(
	'threads/getById',
	getThreadApi
);

export const requestUpdateThread = createAsyncThunk(
	'threads/update',
	updateThreadApi
);

export const requestDeleteThread = createAsyncThunk(
	'threads/delete',
	deleteThreadApi
);

export { initialState as threadsInitialState };

export const { getThreads, getcurrentThread } =
threadsSlice.selectors;

export default threadsSlice.reducer;