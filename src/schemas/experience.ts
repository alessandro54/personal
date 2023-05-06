import { defineField, defineType } from "sanity"

const Experience = defineType({
  title: 'Experience',
  name: 'experience',
  type: 'document',
  fields: [
    defineField({
      title: 'Name',
      name: 'name',
      type: 'string',
      description: 'Name of the role',
      validation: Rule => Rule.required(),
    }),
    defineField({
      title: 'Achievements',
      name: 'achievements',
      type: 'array',
      of: [{ type: 'string' }],
      validation: Rule => Rule.required(),
    }),
    defineField({
      title: 'Technologies',
      name: 'technologies',
      type: 'array',
      of: [{ type: 'technology' }],
      validation: Rule => Rule.required(),
    }),
    defineField({
      title: 'It is a Software Factory?',
      name: 'isSoftwareFactory',
      type: 'boolean',
      description: 'Is this experience is a software factory?',
      initialValue: false,
    }),
    defineField({
      title: 'Client Projects',
      name: 'projects',
      type: 'array',
      of: [{ type: 'project' }],
      hidden: ({ parent }) => !parent.isSoftwareFactory,
    }),
    defineField({
      title: 'Start Date',
      name: 'startDate',
      type: 'date',
      options: {
        dateFormat: 'MM-YYYY'
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      title: 'End Date',
      name: 'endDate',
      type: 'date',
      options: {
        dateFormat: 'MM-YYYY'
      }
    }),
    defineField({
      title: 'Company',
      name: 'company',
      type: 'reference',
      to: [{ type: 'company' }],
    })
  ]
})

export default Experience;
