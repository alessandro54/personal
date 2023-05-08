import { getExperiences } from '$lib/server/experience';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const response : Promise<Experience[]> = await getExperiences();
	return {
		experiences: response
	};
}) satisfies PageServerLoad;
