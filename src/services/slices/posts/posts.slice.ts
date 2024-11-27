import { postsSliceConst } from '@const';
import { createSlice } from '@reduxjs/toolkit';
import { PostDTO } from '@utils-types';
import {
	requestCreatePost,
	requestDeletePost,
	requestGetPostById,
	requestGetPostsByAdventure,
	requestGetPostsByThread,
	requestUpdatePost,
} from './actions';

export interface PostsState {
	isLoading: boolean;
	posts: PostDTO[] | null;
	currentPost: PostDTO | null;
	createdPost: PostDTO | null;
	error: string | null;
}

export const initialState: PostsState = {
	isLoading: false,
	posts: null,
	currentPost: null,
	createdPost: null,
	error: null,
};

export const postsSlice = createSlice({
	name: postsSliceConst.name,
	initialState,
	reducers: {},
	selectors: {
		getPosts: (sliceState) => sliceState.posts,
		getcurrentPost: (sliceState) => sliceState.currentPost,
	},
	extraReducers: (builder) => {
		builder
			.addCase(requestCreatePost.pending, (state) => {
				state.isLoading = true;
				state.error = null;
				state.createdPost = null;
			})
			.addCase(requestCreatePost.rejected, (state, { error }) => {
				state.isLoading = false;
				state.error = error.message as string;
				state.createdPost = null;
			})
			.addCase(requestCreatePost.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.error = null;
				state.createdPost = payload;
				state.posts = state.posts ? [...state.posts, payload] : [payload];
			})
			.addCase(requestGetPostsByAdventure.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(requestGetPostsByAdventure.rejected, (state, { error }) => {
				state.isLoading = false;
				state.error = error.message as string;
			})
			.addCase(requestGetPostsByAdventure.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.error = null;
				state.posts = payload.posts ? payload.posts : null;
			})
			.addCase(requestGetPostsByThread.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(requestGetPostsByThread.rejected, (state, { error }) => {
				state.isLoading = false;
				state.error = error.message as string;
			})
			.addCase(requestGetPostsByThread.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.error = null;
				state.posts = payload.posts ? payload.posts : null;
			})
			.addCase(requestGetPostById.pending, (state) => {
				state.isLoading = true;
				state.error = null;
				state.currentPost = null;
			})
			.addCase(requestGetPostById.rejected, (state, { error }) => {
				state.isLoading = false;
				state.error = error.message as string;
				state.currentPost = null;
			})
			.addCase(requestGetPostById.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.error = null;
				state.currentPost = payload;
			})

			.addCase(requestUpdatePost.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(requestUpdatePost.rejected, (state, { error }) => {
				state.isLoading = false;
				state.error = error.message as string;
			})
			.addCase(requestUpdatePost.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.error = null;
				state.currentPost = payload;
				state.posts = state.posts
					? state.posts.map((n) => (n.id === payload.id ? payload : n))
					: null;
			})
			.addCase(requestDeletePost.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(requestDeletePost.rejected, (state, { error }) => {
				state.isLoading = false;
				state.error = error.message as string;
			})
			.addCase(requestDeletePost.fulfilled, (state, action) => {
				state.isLoading = false;
				state.error = null;
				state.currentPost = null;
				state.posts = state.posts ? state.posts.filter((n) => n.id !== action.meta.arg.id) : null;
			});
	},
});

export { initialState as postssInitialState };

export const { getPosts, getcurrentPost } = postsSlice.selectors;

export default postsSlice.reducer;
