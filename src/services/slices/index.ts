import { combineSlices } from '@reduxjs/toolkit';
import authSlice from './auth/auth.slice';

export * as auth from './auth';

export const rootReducer = combineSlices(authSlice);
