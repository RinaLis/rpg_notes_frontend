import { deleteImageApi, uploadImageByFileApi, uploadImageByUrlApi } from '@api';
import { imageSliceConst } from '@const';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const requestSendImage = createAsyncThunk(
	`${imageSliceConst.name}/${imageSliceConst.requests.saveByFile}`,
	uploadImageByFileApi
);

export const requestSendImageByUrl = createAsyncThunk(
	`${imageSliceConst.name}/${imageSliceConst.requests.saveByUrl}`,
	uploadImageByUrlApi
);

export const requestDeleteImage = createAsyncThunk(
	`${imageSliceConst.name}/${imageSliceConst.requests.delete}`,
	deleteImageApi
);
