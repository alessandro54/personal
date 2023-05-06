import { defineField, defineType } from "sanity"

const Company = defineType({
  title: 'Company',
  name: 'company',
  type: 'document',
  fields: [
    defineField({
      title: 'Name',
      name: 'name',
      type: 'string',
      description: 'Name of the company',
      validation: Rule => Rule.required(),
    }),
    defineField({
      title: 'Description',
      name: 'description',
      type: 'text',
      description: 'Description of the company',
      validation: Rule => [
        Rule.required(),
        Rule.max(144)
      ],
    }),
    defineField({
      title: 'Location',
      name: 'location',
      type: 'reference',
      to: [{ type: 'location' }],
      validation: Rule => Rule.required(),
    })
  ]
})

export default Company;
