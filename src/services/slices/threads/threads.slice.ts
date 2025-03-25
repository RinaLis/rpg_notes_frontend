import { threadsSliceConst } from '@const';
import { createSlice } from '@reduxjs/toolkit';
import { ThreadDTO } from '@utils-types';
import {
	requestCreateThread,
	requestDeleteThread,
	requestGetThreadById,
	requestGetThreadsByAdventure,
	requestUpdateThread,
} from './actions';

export interface ThreadsState {
	isLoading: boolean;
	threads: ThreadDTO[] | null;
	currentThread: ThreadDTO | null;
	createdThread: ThreadDTO | null;
	error: string | null;
}

const initialState: ThreadsState = {
	isLoading: false,
	threads: null,
	currentThread: null,
	createdThread: null,
	error: null,
};

export const threadsSlice = createSlice({
	name: threadsSliceConst.name,
	initialState,
	reducers: {
		clearCreatedThread: (sliceState) => {
			sliceState.createdThread = null;
		},
	},
	selectors: {
		getThreads: (sliceState) => sliceState.threads,
		getCurrentThread: (sliceState) => sliceState.currentThread,
		getCreatedThread: (sliceState) => sliceState.createdThread,
		getTreadsIsLoading: (sliceState) => sliceState.isLoading,
		getThreadError: (sliceState) => sliceState.error,
	},
	extraReducers: (builder) => {
		builder
			.addCase(requestCreateThread.pending, (state) => {
				state.isLoading = true;
				state.error = null;
				state.createdThread = null;
			})
			.addCase(requestCreateThread.rejected, (state, { error }) => {
				state.isLoading = false;
				state.error = error.message as string;
				state.createdThread = null;
			})
			.addCase(requestCreateThread.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.error = null;
				state.createdThread = payload;
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

export const {
	getThreads,
	getCurrentThread,
	getTreadsIsLoading,
	getCreatedThread,
	getThreadError,
} = threadsSlice.selectors;

export default threadsSlice.reducer;
