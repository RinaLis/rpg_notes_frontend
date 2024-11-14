import { generateOpenApi } from '@ts-rest/open-api';
import contract from './contracts';

const openApiDocument = generateOpenApi(contract, {
	info: {
		title: 'RPG notes',
		version: '1.0.0',
	},
});

export default openApiDocument;
