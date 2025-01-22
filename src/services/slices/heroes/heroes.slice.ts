import { heroesSliceConst } from '@const';
import { createSlice } from '@reduxjs/toolkit';
import { HeroWithCharacteristicsDTO } from '@utils-types';
import {
	requestCreateHero,
	requestGetById,
	requestGetHeroesByAdventureAndUser,
	requestUpdateHero,
} from './actions';

export interface HeroesState {
	isLoading: boolean;
	heroes: HeroWithCharacteristicsDTO[] | null;
	currentHero: HeroWithCharacteristicsDTO | null;
	createdHero: HeroWithCharacteristicsDTO | null;
	error: string | null;
}

const initialState: HeroesState = {
	isLoading: false,
	heroes: null,
	currentHero: null,
	createdHero: null,
	error: null,
};

export const heroesSlice = createSlice({
	name: heroesSliceConst.name,
	initialState,
	reducers: {},
	selectors: {
		getHeroes: (sliceState) => sliceState.heroes,
		getCurrentHero: (sliceState) => sliceState.currentHero,
	},
	extraReducers: (builder) => {
		builder
			.addCase(requestCreateHero.pending, (state) => {
				state.isLoading = true;
				state.error = null;
				state.createdHero = null;
			})
			.addCase(requestCreateHero.rejected, (state, { error }) => {
				state.isLoading = false;
				state.error = error.message as string;
				state.createdHero = null;
				state.heroes = null;
			})
			.addCase(requestCreateHero.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.error = null;
				state.createdHero = payload;
				state.heroes = state.heroes ? [...state.heroes, payload] : [payload];
			})
			.addCase(requestGetHeroesByAdventureAndUser.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(requestGetHeroesByAdventureAndUser.rejected, (state, { error }) => {
				state.isLoading = false;
				state.error = error.message as string;
			})
			.addCase(requestGetHeroesByAdventureAndUser.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.error = null;
				state.heroes = payload.heroes ? payload.heroes : null;
			})
			.addCase(requestUpdateHero.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(requestUpdateHero.rejected, (state, { error }) => {
				state.isLoading = false;
				state.error = error.message as string;
			})
			.addCase(requestUpdateHero.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.error = null;
				state.currentHero = payload;
				state.heroes = state.heroes
					? state.heroes.map((n) => (n.id === payload.id ? payload : n))
					: null;
			})
			.addCase(requestGetById.pending, (state) => {
				state.isLoading = true;
				state.error = null;
				state.currentHero = null;
			})
			.addCase(requestGetById.rejected, (state, { error }) => {
				state.isLoading = false;
				state.error = error.message as string;
				state.currentHero = null;
			})
			.addCase(requestGetById.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.error = null;
				state.currentHero = payload;
			});
	},
});

export { initialState as heroesInitialState };

export const { getHeroes, getCurrentHero } = heroesSlice.selectors;

export default heroesSlice.reducer;
