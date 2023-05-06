import { defineConfig, isDev } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';

import { schemaTypes } from './src/schemas/index';
import { sanityId, sanityDataset } from './src/config/environment';

const config = defineConfig({
	name: 'portfolio',
	projectId: sanityId,
	dataset: sanityDataset,
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
		}),
		...(isDev
			? [
					visionTool({
						defaultDataset: sanityDataset
					})
				]
			: [])
	],
	schema: {
		types: schemaTypes
	}
});

export default config;
