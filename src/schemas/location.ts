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
    }),
    defineField({
      title: 'Flag',
      name: 'flag',
      type: 'image',
      description: 'Flag of the location',
      options: {
        accept: '.png'
      },
    })
  ],
  preview: {
    select: {
      city: 'city',
      country: 'country',
      flag: 'flag',
    },
    prepare({ city, country, flag }) {
      return {
        title: `${city} - ${country}`,
        subtitle: flag,
      }
    }
  }
})

export default Location;
