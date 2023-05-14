import { json } from '@sveltejs/kit';
import _ from 'lodash';
import type { RequestHandler } from './$types';

import { getExperiences } from '$root/src/lib/queries/experience';

export const GET = (async () => {
	const experiences = await getExperiences();
	return json(_({
    total: experiences.length,
    data: experiences
  }));
}) satisfies RequestHandler;
