import {
	createAdventureApi,
	deleteAdventureApi,
	getAdventureApi,
	getUserAdventuresApi,
	updateAdventureApi,
} from '@api';
import { adventuresSliceConst } from '@const';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const requestUserAdventures = createAsyncThunk(
	`${adventuresSliceConst.name}/${adventuresSliceConst.requests.byUser}`,
	getUserAdventuresApi
);

export const requestCreateAdventure = createAsyncThunk(
	`${adventuresSliceConst.name}/${adventuresSliceConst.requests.create}`,
	createAdventureApi
);

export const requestGetAdventure = createAsyncThunk(
	`${adventuresSliceConst.name}/${adventuresSliceConst.requests.byId}`,
	getAdventureApi
);

export const requestUpdateAdventure = createAsyncThunk(
	`${adventuresSliceConst.name}/${adventuresSliceConst.requests.update}`,
	updateAdventureApi
);

export const requestDeleteAdventure = createAsyncThunk(
	`${adventuresSliceConst.name}/${adventuresSliceConst.requests.delete}`,
	deleteAdventureApi
);
