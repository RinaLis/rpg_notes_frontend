import { apiTypes } from '.';
import { initContract } from '@ts-rest/core';

import { z } from 'zod';
// Контракт приглашений в приключения '/adventures/:id/invite'
const c = initContract();
const inviteContract = c.router(
	{
		invite: {
			method: 'POST',
			path: '/:id/invite',
			pathParams: z.object({
				id: apiTypes.stringId,
			}),
			responses: {
				201: apiTypes.noContentServerResponse,
				400: apiTypes.serverErrorResponse,
				404: apiTypes.serverErrorResponse,
			},
			body: apiTypes.inviteData,
		},
	},
	{
		pathPrefix: '/adventures',
		strictStatusCodes: true,
		baseHeaders: apiTypes.headers,
	}
);
export default inviteContract;
