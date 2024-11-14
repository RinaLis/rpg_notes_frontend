import openApiDocument from './openApiDocument';
import { writeFileSync } from 'fs';
import { stringify } from 'yaml';

const yamlString = stringify(openApiDocument);
const outputPath = './src/api-contracts/RPG/docs/RPG-API.yaml';

try {
	writeFileSync(outputPath, yamlString, 'utf8');
	console.log(`OpenAPI YAML file successfully written to ${outputPath}`);
} catch (error) {
	console.error(`Failed to write OpenAPI YAML file to ${outputPath}:`, error);
}
