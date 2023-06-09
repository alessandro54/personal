import { createClient, type ClientConfig } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

import { sanityId, sanityDataset } from '../config/environment';

const config: ClientConfig = {
	projectId: sanityId,
	dataset: sanityDataset,
	useCdn: true,
	apiVersion: '2023-05-03'
};

const client = createClient(config);
const builder = imageUrlBuilder(client);

export { client, builder }
