import { getHero } from '$lib/server/hero';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const response : Promise<Hero> = await getHero();
	return {
		hero: response
	};
}) satisfies PageServerLoad;
