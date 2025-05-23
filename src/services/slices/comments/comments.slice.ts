import { commentsSliceConst } from '@const';
import { createSlice } from '@reduxjs/toolkit';
import { CommentDTO } from '@utils-types';
import {
	requestCreateComment,
	requestDeleteComment,
	requestGetCommentsByPost,
	requestUpdateComment,
} from './actions';

export interface CommentsState {
	isLoading: boolean;
	comments: CommentDTO[] | null;
	error: string | null;
}

const initialState: CommentsState = {
	isLoading: false,
	comments: null,
	error: null,
};

export const commentsSlice = createSlice({
	name: commentsSliceConst.name,
	initialState,
	reducers: {
		deleteComment: (state, { payload }) => {
			state.comments = state.comments
				? state.comments.filter((n) => (n.id === payload ? payload : n))
				: null;
		},
		updateComment: (state, { payload }) => {
			state.comments = state.comments
				? state.comments.map((n) => (n.id === payload.id ? payload : n))
				: null;
		},
	},
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
				state.error = error.message as string;
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
				state.error = error.message as string;
			})
			.addCase(requestUpdateComment.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.error = null;
				state.comments = state.comments
					? state.comments.map((n) => (n.id === payload.id ? payload : n))
					: null;
			})
			.addCase(requestDeleteComment.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(requestDeleteComment.rejected, (state, { error }) => {
				state.isLoading = false;
				state.error = error.message as string;
			})
			.addCase(requestDeleteComment.fulfilled, (state, action) => {
				state.isLoading = false;
				state.error = null;
				state.comments = state.comments
					? state.comments.filter((n) => n.id !== action.meta.arg.id)
					: null;
			});
	},
});

export { initialState as commentsInitialState };

export const { getComments } = commentsSlice.selectors;

export default commentsSlice.reducer;
