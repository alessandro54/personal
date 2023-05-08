import { json, error } from '@sveltejs/kit';
import _ from 'lodash';
import type { RequestHandler } from '../$types';

import { getExperience } from '$lib/server/experience';

export const GET = (async ({ params }) => {
	const experience = await getExperience(params.slug);
	if (_.isEmpty(experience)) throw error(404, 'Experience not found');
	return json(_(experience).first());
}) satisfies RequestHandler;
