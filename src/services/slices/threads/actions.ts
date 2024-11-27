import {
	createThreadApi,
	deleteThreadApi,
	getThreadApi,
	getThreadsByAdventureApi,
	updateThreadApi,
} from '@api';
import { threadsSliceConst } from '@const';
import { createAsyncThunk } from '@reduxjs/toolkit';

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
