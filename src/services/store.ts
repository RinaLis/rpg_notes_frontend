import { combineSlices, configureStore } from '@reduxjs/toolkit';

import { useDispatch as dispatchHook, useSelector as selectorHook } from 'react-redux';

import { userSlice } from './slices/user/user.slice';
import { adventuresSlice } from './slices/adventures/adventures.slice';
import { threadsSlice } from './slices/threads/threads.slice';
import { postsSlice } from './slices/posts/posts.slice';
import { commentsSlice } from './slices/comments/comments.slice';
import { playersSlice } from './slices/players/players.slice';
import { heroesSlice } from './slices/heroes/heroes.slice';

export const rootReducer = combineSlices(
	userSlice,
	adventuresSlice,
	threadsSlice,
	postsSlice,
	commentsSlice,
	playersSlice,
	heroesSlice
);

const store = configureStore({
	reducer: rootReducer,
	devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = dispatchHook.withTypes<AppDispatch>();
export const useAppSelector = selectorHook.withTypes<RootState>();

export default store;
