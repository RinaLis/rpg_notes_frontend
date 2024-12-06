import {
	createPostApi,
	deletePostApi,
	getPostApi,
	getPostsByAdventureApi,
	getPostsByThreadApi,
	updatePostApi,
} from '@api';
import { postsSliceConst } from '@const';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const requestCreatePost = createAsyncThunk(
	`${postsSliceConst.name}/${postsSliceConst.requests.create}`,
	createPostApi
);

export const requestGetPostsByAdventure = createAsyncThunk(
	`${postsSliceConst.name}/${postsSliceConst.requests.byAdventure}`,
	getPostsByAdventureApi
);

export const requestGetPostsByThread = createAsyncThunk(
	`${postsSliceConst.name}/${postsSliceConst.requests.byThread}`,
	getPostsByThreadApi
);

export const requestGetPostById = createAsyncThunk(
	`${postsSliceConst.name}/${postsSliceConst.requests.byId}`,
	getPostApi
);

export const requestUpdatePost = createAsyncThunk(
	`${postsSliceConst.name}/${postsSliceConst.requests.update}`,
	updatePostApi
);

export const requestDeletePost = createAsyncThunk(
	`${postsSliceConst.name}/${postsSliceConst.requests.delete}`,
	deletePostApi
);
