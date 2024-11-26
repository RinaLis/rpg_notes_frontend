import { createHeroApi, getHeroByIdApi, getHeroesByAdventureAndUserApi, updateHeroApi } from '@api';
import { heroesSliceConst } from '@const';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const requestCreateHero = createAsyncThunk(
	`${heroesSliceConst.name}/${heroesSliceConst.requests.create}`,
	createHeroApi
);

export const requestGetHeroesByAdventureAndUser = createAsyncThunk(
	`${heroesSliceConst.name}/${heroesSliceConst.requests.byAdventure}`,
	getHeroesByAdventureAndUserApi
);

export const requestUpdateHero = createAsyncThunk(
	`${heroesSliceConst.name}/${heroesSliceConst.requests.update}`,
	updateHeroApi
);

export const requestGetById = createAsyncThunk(
	`${heroesSliceConst.name}/${heroesSliceConst.requests.byId}`,
	getHeroByIdApi
);
