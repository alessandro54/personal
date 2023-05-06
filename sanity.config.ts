import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { schemaTypes } from './src/schemas/index';

const config = defineConfig({
	name: 'portfolio',
	projectId: 'e78mn16t',
	dataset: 'development',
	plugins: [
		deskTool({
			structure: (S) =>
				S.list()
					.title('Base')
					.items([
						S.listItem()
							.title('Hero')
							.child(S.document().schemaType('hero').documentId('hero')),
						...S.documentTypeListItems().filter(
							(listItem) => !['hero'].includes(listItem.getId() as string)
						)
					])
		})
	],
	schema: {
		types: schemaTypes
	}
});

export default config;
