import { createCommentApi, deleteCommentApi, getCommentsByPostApi, updateCommentApi } from '../../utils/notes-api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CommentDTO } from 'src/utils/api-client';

export interface CommentsState {
	isLoading: boolean;
	comments: CommentDTO[] | null;
    currentComment: CommentDTO | null;
	error: string | null;
}

export const initialState: CommentsState = {
	isLoading: false,
	comments: null,
    currentComment: null,
	error: null,
};

export const commentsSlice = createSlice({
	name: 'comments',
	initialState,
	reducers: {},
	selectors: {
		getComments: (sliceState) => sliceState.comments,
	},
	extraReducers: (builder) => {
		builder
            .addCase(requestCreateComment.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(requestCreateComment.rejected, (state, { error }) => {
				state.isLoading = false;
				state.error = error.message as string;
				state.comments = null;
			})
			.addCase(requestCreateComment.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.error = null;
				state.comments = state.comments ? [...state.comments, payload] : [payload];
			})
            .addCase(requestGetCommentsByPost.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(requestGetCommentsByPost.rejected, (state, { error }) => {
				state.isLoading = false;
				state.error = error.message as string
			})
			.addCase(requestGetCommentsByPost.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.error = null;
				state.comments = payload.comments ? payload.comments : null;
			})            
            .addCase(requestUpdateComment.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(requestUpdateComment.rejected, (state, { error }) => {
				state.isLoading = false;
				state.error = error.message as string
			})
			.addCase(requestUpdateComment.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.error = null;
				state.currentComment = payload;
			})
            .addCase(requestDeleteComment.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(requestDeleteComment.rejected, (state, { error }) => {
				state.isLoading = false;
				state.error = error.message as string
			})
			.addCase(requestDeleteComment.fulfilled, (state) => {
				state.isLoading = false;
				state.error = null;
				state.currentComment = null;
			});
	},
});

export const requestCreateComment = createAsyncThunk(
	'comments/create',
	createCommentApi
);

export const requestGetCommentsByPost = createAsyncThunk(
	'comments/getByPost',
	getCommentsByPostApi
);

export const requestUpdateComment = createAsyncThunk(
	'comments/update',
	updateCommentApi
);

export const requestDeleteComment = createAsyncThunk(
	'comments/delete',
	deleteCommentApi
);

export { initialState as commentsInitialState };

export const { getComments } =
commentsSlice.selectors;

export default commentsSlice.reducer;