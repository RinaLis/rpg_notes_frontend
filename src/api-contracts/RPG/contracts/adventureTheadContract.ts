import { apiTypes } from '.';
import { initContract } from '@ts-rest/core';

import { z } from 'zod';
// Контракт тредов приключений '/adventures/:id/threads'
const c = initContract();
const adventureTheadContract = c.router(
	{
		getThreadList: {
			method: 'GET',
			path: '/:id/threads',
			pathParams: z.object({
				id: apiTypes.stringId,
			}),
			responses: {
				200: apiTypes.threadListResponse,
				400: apiTypes.serverErrorResponse,
			},
		},
		createThread: {
			method: 'POST',
			path: '/:id/threads',
			pathParams: z.object({
				id: apiTypes.stringId,
			}),
			responses: {
				201: apiTypes.threadResponse,
				400: apiTypes.serverErrorResponse,
				404: apiTypes.serverErrorResponse,
			},
			body: apiTypes.threadCreateData,
		},
	},
	{
		pathPrefix: '/adventures',
		strictStatusCodes: true,
		baseHeaders: apiTypes.headers,
	}
);

export default adventureTheadContract;
