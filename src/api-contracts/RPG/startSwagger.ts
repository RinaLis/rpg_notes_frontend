import * as swaggerUI from 'swagger-ui-express';
import express from 'express';
import openApiDocument from './openApiDocument';

const app = express();
const apiDocsPrefix = '/api-docs';
app.use(apiDocsPrefix, swaggerUI.serve, swaggerUI.setup(openApiDocument));
const port = process.env.SwaggerPort || 4000;
const server = app.listen(port, () => {
	console.log(`Listening at http://localhost:${port}${apiDocsPrefix}`);
});
