import { apiTypes } from '.';
import { initContract } from '@ts-rest/core';
import { z } from 'zod';

const c = initContract();
// Контракт постов '/posts'
const postContract = c.router(
	{
		getPost: {
			method: 'GET',
			path: '/:id',
			pathParams: z.object({
				id: apiTypes.stringId,
			}),
			responses: {
				200: apiTypes.postResponse,
				404: apiTypes.serverErrorResponse,
			},
		},
		updatePost: {
			method: 'PATCH',
			path: '/:id',
			pathParams: z.object({
				id: apiTypes.stringId,
			}),
			responses: {
				200: apiTypes.postResponse,
				400: apiTypes.serverErrorResponse,
				404: apiTypes.serverErrorResponse,
			},
			body: apiTypes.postUpdateData,
		},
		deletePost: {
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
		getPostComments: {
			method: 'GET',
			path: '/:id/comments',
			pathParams: z.object({
				id: apiTypes.stringId,
			}),
			responses: {
				200: apiTypes.commentListResponse,
				404: apiTypes.serverErrorResponse,
			},
		},
		createComment: {
			method: 'POST',
			path: '/:id/comments',
			pathParams: z.object({
				id: apiTypes.stringId,
			}),
			responses: {
				200: apiTypes.commentResponse,
				404: apiTypes.serverErrorResponse,
			},
			body: apiTypes.commentCreateData,
		},
		addLike: {
			method: 'PUT',
			path: '/:id/like',
			pathParams: z.object({
				id: apiTypes.stringId,
			}),
			responses: {
				200: apiTypes.postResponse,
				404: apiTypes.serverErrorResponse,
			},
			body: apiTypes.empty,
		},
		removeLike: {
			method: 'DELETE',
			path: '/:id/like',
			pathParams: z.object({
				id: apiTypes.stringId,
			}),
			responses: {
				200: apiTypes.postResponse,
				404: apiTypes.serverErrorResponse,
			},
			body: apiTypes.empty,
		},
		addDislike: {
			method: 'PUT',
			path: '/:id/dislike',
			pathParams: z.object({
				id: apiTypes.stringId,
			}),
			responses: {
				200: apiTypes.postResponse,
				404: apiTypes.serverErrorResponse,
			},
			body: apiTypes.empty,
		},
		removeDisLike: {
			method: 'DELETE',
			path: '/:id/dislike',
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
		pathPrefix: '/posts',
		strictStatusCodes: true,
		baseHeaders: apiTypes.headers,
	}
);

export default postContract;
