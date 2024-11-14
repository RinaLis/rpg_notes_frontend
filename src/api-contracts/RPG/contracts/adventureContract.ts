import { apiTypes } from '.';
import { initContract } from '@ts-rest/core';

import { z } from 'zod';

const c = initContract();
// Контракт приключений '/adventures'
const adventureContract = c.router(
	{
		getAdventureList: {
			method: 'GET',
			path: '/',
			responses: {
				200: apiTypes.adventureListResponse,
			},
		},
		getAdventure: {
			method: 'GET',
			path: '/:id',
			pathParams: z.object({
				id: apiTypes.stringId,
			}),
			responses: {
				200: apiTypes.adventureResponse,
				404: apiTypes.serverErrorResponse,
			},
		},
		createAdventure: {
			method: 'POST',
			path: '/',
			responses: {
				201: apiTypes.adventureResponse,
				400: apiTypes.serverErrorResponse,
			},
			body: apiTypes.adventureCreateData,
		},
		updateAdventure: {
			method: 'PATCH',
			path: '/:id',
			pathParams: z.object({
				id: apiTypes.stringId,
			}),
			responses: {
				200: apiTypes.adventureResponse,
				400: apiTypes.serverErrorResponse,
				404: apiTypes.serverErrorResponse,
			},
			body: apiTypes.adventureUpdateData,
		},
		deleteAdventure: {
			method: 'DELETE',
			path: '/:id',
			pathParams: z.object({
				id: apiTypes.stringId,
			}),
			responses: {
				204: apiTypes.noContentServerResponse,
				404: apiTypes.serverErrorResponse,
			},
		},
	},
	{
		pathPrefix: '/adventures',
		strictStatusCodes: true,
		baseHeaders: apiTypes.headers,
	}
);

export default adventureContract;
