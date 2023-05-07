import { createClient, type ClientConfig } from '@sanity/client';

import { sanityId, sanityDataset } from '../config/environment';

const config: ClientConfig = {
	projectId: sanityId,
	dataset: sanityDataset,
	useCdn: true,
	apiVersion: '2023-05-03'
};
export const client = createClient(config);
