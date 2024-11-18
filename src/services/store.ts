import { combineReducers, configureStore } from '@reduxjs/toolkit';

import {
	TypedUseSelectorHook,
	useDispatch as dispatchHook,
	useSelector as selectorHook,
} from 'react-redux';

import userSliceReducer from './slices/userSlice';
import adventureSliceReducer from './slices/adventureSlice';
import userAdventuresSliceReducer from './slices/userAdventuresSlice';
import threadsSliceReducer from './slices/threadsSlice';
import postsSliceReducer from './slices/postsSlice';
import commentsSliceReducer from './slices/commentsSlice';

export const rootReducer = combineReducers({
	user: userSliceReducer,
	adventure: adventureSliceReducer,
    userAdventures: userAdventuresSliceReducer,
	threads: threadsSliceReducer,
	posts: postsSliceReducer,
	comments: commentsSliceReducer
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
