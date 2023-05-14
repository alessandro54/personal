import { getExperiences } from '$root/src/lib/queries/experience';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const response : Promise<Experience[]> = await getExperiences();
	return {
		experiences: response
	};
}) satisfies PageServerLoad;
