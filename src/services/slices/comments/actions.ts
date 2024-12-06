import { createCommentApi, deleteCommentApi, getCommentsByPostApi, updateCommentApi } from '@api';
import { commentsSliceConst } from '@const';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const requestCreateComment = createAsyncThunk(
	`${commentsSliceConst.name}/${commentsSliceConst.requests.create}`,
	createCommentApi
);

export const requestGetCommentsByPost = createAsyncThunk(
	`${commentsSliceConst.name}/${commentsSliceConst.requests.byPost}`,
	getCommentsByPostApi
);

export const requestUpdateComment = createAsyncThunk(
	`${commentsSliceConst.name}/${commentsSliceConst.requests.update}`,
	updateCommentApi
);

export const requestDeleteComment = createAsyncThunk(
	`${commentsSliceConst.name}/${commentsSliceConst.requests.delete}`,
	deleteCommentApi
);
