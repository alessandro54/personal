import { defineField, defineType } from 'sanity';

const Project = defineType({
	title: 'Project',
	name: 'project',
	type: 'document',
	fields: [
		defineField({
			title: 'Name',
			name: 'name',
			type: 'string',
			description: 'Name of the project',
			validation: (Rule) => Rule.required()
		}),
		defineField({
			title: 'Description',
			name: 'description',
			type: 'text',
			description: 'Description of the project',
			validation: (Rule) => [
        Rule.required(),
        Rule.max(144)
      ]
		}),
		defineField({
			title: 'Technologies',
			name: 'technologies',
			type: 'array',
			of: [{ type: 'technology' }],
			validation: (Rule) => Rule.required()
		}),
		defineField({
			title: 'Personal project?',
			name: 'personal',
			type: 'boolean',
			description: 'Is this a personal project?',
      initialValue: false,
			validation: (Rule) => Rule.required()
		}),
    defineField({
      title: 'URL',
      name: 'url',
      type: 'url',
      description: 'URL of the project',
      hidden: ({ document }) => !document?.personal,
    })
	]
});

export default Project;
