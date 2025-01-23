import { imageSliceConst } from '@const';
import { createSlice } from '@reduxjs/toolkit';
import { requestDeleteImage, requestSendImage, requestSendImageByUrl } from './actions';

export interface ImagesState {
	isLoading: boolean;
	uploadImage: string | null;
	deleteImage: string | null;
	error: string | null;
}

const initialState: ImagesState = {
	isLoading: false,
	uploadImage: null,
	deleteImage: null,
	error: null,
};

export const imagesSlice = createSlice({
	name: imageSliceConst.name,
	initialState,
	reducers: {
		clearUploadImageId: (state) => {
			state.uploadImage = null;
		},
		clearDeleteImageId: (state) => {
			state.deleteImage = null;
		},
	},
	selectors: {
		getUploadImageSelector: (sliceState) => sliceState.uploadImage,
		isImageLoadingSelector: (sliceState) => sliceState.isLoading,
		getDeleteImageSelector: (sliceState) => sliceState.deleteImage,
		getImageErrorSelector: (sliceState) => sliceState.error,
	},
	extraReducers: (builder) => {
		builder
			.addCase(requestSendImage.pending, (state) => {
				state.isLoading = true;
				state.uploadImage = null;
				state.error = null;
			})
			.addCase(requestSendImage.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.error = null;
				state.uploadImage = payload.id;
			})
			.addCase(requestSendImage.rejected, (state, { error }) => {
				state.uploadImage = null;
				state.isLoading = false;
				state.error = error.message as string;
			})
			.addCase(requestSendImageByUrl.pending, (state) => {
				state.isLoading = true;
				state.uploadImage = null;
				state.error = null;
			})
			.addCase(requestSendImageByUrl.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.error = null;
				state.uploadImage = payload.id;
			})
			.addCase(requestSendImageByUrl.rejected, (state, { error }) => {
				state.uploadImage = null;
				state.isLoading = false;
				state.error = error.message as string;
			})
			.addCase(requestDeleteImage.pending, (state, request) => {
				state.deleteImage = request.meta.arg;
				state.isLoading = true;
				state.error = null;
			})
			.addCase(requestDeleteImage.fulfilled, (state) => {
				state.isLoading = false;
				state.error = null;
				state.deleteImage = null;
			})
			.addCase(requestDeleteImage.rejected, (state, { error }) => {
				state.isLoading = false;
				state.error = error.message as string;
			});
	},
});

export { initialState as imagesInitialState };

export const {
	getDeleteImageSelector,
	getUploadImageSelector,
	getImageErrorSelector,
	isImageLoadingSelector,
} = imagesSlice.selectors;

export const { clearDeleteImageId, clearUploadImageId } = imagesSlice.actions;

export default imagesSlice.reducer;
