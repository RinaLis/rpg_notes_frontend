import { combineReducers, configureStore } from '@reduxjs/toolkit';

import {
	TypedUseSelectorHook,
	useDispatch as dispatchHook,
	useSelector as selectorHook,
} from 'react-redux';

import userSliceReducer from './slices/user.slice';
import adventuresSliceReducer from './slices/adventures.slice';
import threadsSliceReducer from './slices/threads.slice';
import postsSliceReducer from './slices/posts.slice';
import commentsSliceReducer from './slices/comments.slice';
import playersSliceReducer from './slices/players.slice';
import heroesSliceReducer from './slices/heroes.slice';

export const rootReducer = combineReducers({
	user: userSliceReducer,
	adventures: adventuresSliceReducer,
	threads: threadsSliceReducer,
	posts: postsSliceReducer,
	comments: commentsSliceReducer,
	players: playersSliceReducer,
	heroes: heroesSliceReducer,
});

const store = configureStore({
	reducer: rootReducer,
	devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useDispatch: () => AppDispatch = () => dispatchHook();
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;

export default store;
