import { apiTypes } from '.';
import { initContract } from '@ts-rest/core';

import { z } from 'zod';

const c = initContract();
// Контракт персонажей приключений '/adventures/:id/characters'
const adventureCharacterContract = c.router(
	{
		getCharacterList: {
			method: 'GET',
			path: '/:id/characters',
			pathParams: z.object({
				id: apiTypes.stringId,
			}),
			responses: {
				200: apiTypes.characterListResponse,
				404: apiTypes.serverErrorResponse,
			},
		},
		createCharacter: {
			method: 'POST',
			path: '/:id/characters',
			pathParams: z.object({
				id: apiTypes.stringId,
			}),
			responses: {
				201: apiTypes.characterResponse,
				400: apiTypes.serverErrorResponse,
				404: apiTypes.serverErrorResponse,
			},
			body: apiTypes.characterCreateData,
		},
	},
	{
		pathPrefix: '/adventures',
		strictStatusCodes: true,
		baseHeaders: apiTypes.headers,
	}
);

export default adventureCharacterContract;
