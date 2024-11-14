import { apiTypes } from '.';
import { initContract } from '@ts-rest/core';
import { z } from 'zod';

const c = initContract();
// Контракт персонажей '/characters'
const characterContract = c.router(
	{
		getCharacter: {
			method: 'GET',
			path: '/:id',
			pathParams: z.object({
				id: apiTypes.stringId,
			}),
			responses: {
				200: apiTypes.characterResponse,
				404: apiTypes.serverErrorResponse,
			},
		},
		updateCharacter: {
			method: 'PATCH',
			path: '/:id',
			pathParams: z.object({
				id: apiTypes.stringId,
			}),
			responses: {
				200: apiTypes.characterResponse,
				400: apiTypes.serverErrorResponse,
				404: apiTypes.serverErrorResponse,
			},
			body: apiTypes.characterUpdateData,
		},
		delete: {
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
		pathPrefix: '/characters',
		strictStatusCodes: true,
		baseHeaders: apiTypes.headers,
	}
);

export default characterContract;
