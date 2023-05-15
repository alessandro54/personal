import { client } from '../sanity';
import groq from 'groq';

const getHero = async () => {
	return await client.fetch(groq`
    *[_type == "hero"][0] {
      firstName,
      lastName,
      email,
      role,
      description,
      image
    }
  `);
};

export { getHero };
