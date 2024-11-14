import { apiTypes } from '.';
import { initContract } from '@ts-rest/core';
import { z } from 'zod';

const c = initContract();
// Контракт Тредов '/threads'
const threadContract = c.router(
	{
		getThread: {
			method: 'GET',
			path: '/:id',
			pathParams: z.object({
				id: apiTypes.stringId,
			}),
			responses: {
				200: apiTypes.threadResponse,
				404: apiTypes.serverErrorResponse,
			},
		},
		updateThread: {
			method: 'PATCH',
			path: '/:id',
			pathParams: z.object({
				id: apiTypes.stringId,
			}),
			responses: {
				200: apiTypes.threadResponse,
				400: apiTypes.serverErrorResponse,
				404: apiTypes.serverErrorResponse,
			},
			body: apiTypes.threadUpdateData,
		},
		deleteThread: {
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
		getThreadPosts: {
			method: 'GET',
			path: '/:id/posts',
			pathParams: z.object({
				id: apiTypes.stringId,
			}),
			responses: {
				200: apiTypes.postListResponse,
				404: apiTypes.serverErrorResponse,
			},
		},
		createPost: {
			method: 'POST',
			path: '/:id/posts',
			pathParams: z.object({
				id: apiTypes.stringId,
			}),
			responses: {
				200: apiTypes.postResponse,
				404: apiTypes.serverErrorResponse,
			},
			body: apiTypes.postCreateData,
		},
		watchThread: {
			method: 'PUT',
			path: '/:id/watch',
			pathParams: z.object({
				id: apiTypes.stringId,
			}),
			responses: {
				200: apiTypes.postResponse,
				404: apiTypes.serverErrorResponse,
			},
			body: apiTypes.empty,
		},
		unwatchThread: {
			method: 'DELETE',
			path: '/:id/watch',
			pathParams: z.object({
				id: apiTypes.stringId,
			}),
			responses: {
				200: apiTypes.postResponse,
				404: apiTypes.serverErrorResponse,
			},
			body: apiTypes.empty,
		},
	},
	{
		pathPrefix: '/threads',
		strictStatusCodes: true,
		baseHeaders: apiTypes.headers,
	}
);

export default threadContract;
