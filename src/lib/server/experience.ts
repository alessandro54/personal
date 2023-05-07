import { client } from '../sanity';
import groq from 'groq';

const getExperiences = async () => {
	return await client.fetch(groq`
    *[_type == "experience"]{
      name,
      company -> {
        name,
        description,
        logo,
        location -> {
          city,
          country,
          emoji
        }
      },
      achievements[],
      isRemote,
      startDate,
      endDate
    }
  `);
};

export { getExperiences };
