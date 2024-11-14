import { apiTypes } from '.';
import { initContract } from '@ts-rest/core';
import { z } from 'zod';

const c = initContract();
// Контракт комментариев '/comments'
const commentContract = c.router(
	{
		getComment: {
			method: 'GET',
			path: '/:id',
			pathParams: z.object({
				id: apiTypes.stringId,
			}),
			responses: {
				200: apiTypes.commentResponse,
				404: apiTypes.serverErrorResponse,
			},
		},
		updateComment: {
			method: 'PATCH',
			path: '/:id',
			pathParams: z.object({
				id: apiTypes.stringId,
			}),
			responses: {
				200: apiTypes.commentResponse,
				400: apiTypes.serverErrorResponse,
				404: apiTypes.serverErrorResponse,
			},
			body: apiTypes.commentUpdateData,
		},
		deleteComment: {
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
		pathPrefix: '/comments',
		strictStatusCodes: true,
		baseHeaders: apiTypes.headers,
	}
);

export default commentContract;
