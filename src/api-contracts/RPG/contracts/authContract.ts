import { initContract } from '@ts-rest/core';
import { apiTypes } from '.';

const c = initContract();
// Контракт действий с авторизацией для авторизованных пользователей
//  '/auth'
export const authContract = c.router(
	{
		logout: {
			method: 'POST',
			path: '/logout',
			responses: {
				201: apiTypes.noContentServerResponse,
			},
			body: apiTypes.logoutData,
		},
		refresh: {
			method: 'POST',
			path: '/refresh',
			responses: {
				201: apiTypes.refreshResponse,
				400: apiTypes.serverErrorResponse,
				403: apiTypes.serverErrorResponse,
			},
			body: apiTypes.refreshRequestBody,
		},
		getUser: {
			method: 'GET',
			path: '/user',
			responses: {
				200: apiTypes.user,
				403: apiTypes.serverErrorResponse,
				400: apiTypes.serverErrorResponse,
			},
		},
		updateUser: {
			method: 'PATCH',
			path: '/user',
			responses: {
				200: apiTypes.user,
				400: apiTypes.serverErrorResponse,
				403: apiTypes.serverErrorResponse,
			},
			body: apiTypes.userUpdateData,
		},
	},
	{
		strictStatusCodes: true,
		baseHeaders: apiTypes.headers,
		pathPrefix: '/auth',
	}
);

export default authContract;
