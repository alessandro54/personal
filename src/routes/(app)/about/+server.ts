import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

import { getHero } from '$lib/server/hero';

export const GET = (async () => {
	const hero = await getHero();
  console.log(hero);
	return json(hero);
}) satisfies RequestHandler;
