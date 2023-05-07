import { client } from '../sanity'

const getExperiences = async () => {
  return await client.fetch(`
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
  `)
}

export { getExperiences }
