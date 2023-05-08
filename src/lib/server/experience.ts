import { client } from '../sanity';
import groq from 'groq';

const getExperiences = async () => {
	return await client.fetch(groq`
    *[_type == "experience"]{
      _id,
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
      isRemote,
      startDate,
      endDate
    }
  `);
};

const getExperience = async (id: string) => {
	return await client.fetch(groq`
    *[_type == "experience" && _id == "${id}"] {
      name,
      achievements[],
      technologies[] -> {
        name,
        logo
      }
    }
  `);
};
export { getExperiences, getExperience };
