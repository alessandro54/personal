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
    })
  ]
})

export default Location;
