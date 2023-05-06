import { defineField, defineType } from "sanity"

const Location = defineType({
  title: 'Location',
  name: 'location',
  type: 'document',
  fields: [
    defineField({
      title: 'City',
      name: 'city',
      type: 'string',
      description: 'City of the location',
    }),
    defineField({
      title: 'Country',
      name: 'country',
      type: 'string',
      description: 'Country of the location',
    }),
    defineField({
      title: 'Emoji',
      name: 'emoji',
      type: 'string',
      description: 'Emoji flag of the location',
      validation: Rule => [
        Rule.required(),
        Rule.max(4)
      ],
    })
  ],
  preview: {
    select: {
      city: 'city',
      country: 'country',
      emoji: 'emoji',
    },
    prepare({ city, country, emoji }) {
      return {
        title: `${emoji} ${city} - ${country}`,
      }
    }
  }
})

export default Location;
