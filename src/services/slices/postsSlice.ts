import { createPostApi, deletePostApi, getPostApi, getPostsByAdventureApi, getPostsByThreadApi, updatePostApi } from '../../utils/notes-api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { PostDTO } from 'src/utils/api-client';

export interface PostsState {
	isLoading: boolean;
	posts: PostDTO[] | null;
    currentPost: PostDTO | null;
	error: string | null;
}

export const initialState: PostsState = {
	isLoading: false,
	posts: null,
    currentPost: null,
	error: null,
};

export const postsSlice = createSlice({
	name: 'posts',
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
			})
			.addCase(requestCreatePost.rejected, (state, { error }) => {
				state.isLoading = false;
				state.error = error.message as string;
				state.currentPost = null;
			})
			.addCase(requestCreatePost.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.error = null;
				state.currentPost = payload;
			})
            .addCase(requestGetPostsByAdventure.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(requestGetPostsByAdventure.rejected, (state, { error }) => {
				state.isLoading = false;
				state.error = error.message as string
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
				state.error = error.message as string
			})
			.addCase(requestGetPostsByThread.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.error = null;
				state.posts = payload.posts ? payload.posts : null;
			})
            .addCase(requestGetPostById.pending, (state) => {
				state.isLoading = true;
				state.error = null;
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
				state.error = error.message as string
			})
			.addCase(requestUpdatePost.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.error = null;
				state.currentPost = payload;
			})
            .addCase(requestDeletePost.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(requestDeletePost.rejected, (state, { error }) => {
				state.isLoading = false;
				state.error = error.message as string
			})
			.addCase(requestDeletePost.fulfilled, (state) => {
				state.isLoading = false;
				state.error = null;
				state.currentPost = null;
			});
	},
});

export const requestCreatePost = createAsyncThunk(
	'posts/create',
	createPostApi
);

export const requestGetPostsByAdventure = createAsyncThunk(
	'posts/getByAdventure',
	getPostsByAdventureApi
);

export const requestGetPostsByThread = createAsyncThunk(
	'posts/getByThread',
	getPostsByThreadApi
);

export const requestGetPostById = createAsyncThunk(
	'posts/getById',
	getPostApi
);

export const requestUpdatePost = createAsyncThunk(
	'posts/update',
	updatePostApi
);

export const requestDeletePost = createAsyncThunk(
	'posts/delete',
	deletePostApi
);

export { initialState as postssInitialState };

export const { getPosts, getcurrentPost } =
postsSlice.selectors;

export default postsSlice.reducer;