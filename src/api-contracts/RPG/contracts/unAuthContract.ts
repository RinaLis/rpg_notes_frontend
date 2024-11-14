import { initContract } from '@ts-rest/core';
import { apiTypes } from '.';

const c = initContract();

// Контракт для неавторизованных пользователей '/auth'

const unAuthContract = c.router(
	{
		register: {
			method: 'POST',
			path: '/register',
			responses: {
				201: apiTypes.authResponse,
				400: apiTypes.serverErrorResponse,
			},
			body: apiTypes.registerData,
		},
		login: {
			method: 'POST',
			path: '/login',
			responses: {
				201: apiTypes.authResponse,
				400: apiTypes.serverErrorResponse,
			},
			body: apiTypes.loginData,
		},
		askPasswordReset: {
			method: 'POST',
			path: '/password-reset',
			responses: {
				201: apiTypes.noContentServerResponse,
				400: apiTypes.serverErrorResponse,
			},
			body: apiTypes.passwordResetRequestData,
		},
		resetPassword: {
			method: 'POST',
			path: '/password-reset/reset',
			responses: {
				201: apiTypes.noContentServerResponse,
				400: apiTypes.serverErrorResponse,
			},
			body: apiTypes.passwordResetData,
		},
	},
	{
		strictStatusCodes: true,
		pathPrefix: '/auth',
	}
);

export default unAuthContract;
