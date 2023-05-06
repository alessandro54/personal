import { defineField, defineType } from "sanity"

const Technology = defineType({
  title: 'Technology',
  name: 'technology',
  type: 'document',
  fields: [
    defineField({
      title: 'Name',
      name: 'name',
      type: 'string',
      description: 'Name of the technology',
      validation: Rule => Rule.required(),
    }),
    defineField({
      title: 'Description',
      name: 'description',
      type: 'text',
      description: 'Description of the technology',
      validation: Rule => Rule.required(),
    }),
    defineField({
      title: 'Logo',
      name: 'logo',
      type: 'image',
      description: 'Logo of the technology',
      options: {
        accept: '.png'
      },
      validation: Rule => Rule.required(),
    })
  ]
})

export default Technology;
