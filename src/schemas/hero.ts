import { defineField, defineType } from 'sanity';

const Hero = defineType({
	name: 'hero',
	type: 'document',
	title: 'Hero',
	fields: [
		defineField({
			title: 'First Name',
			name: 'firstName',
			type: 'string',
			description: 'Name of the hero',
			validation: (Rule) => Rule.required()
		}),
		defineField({
			title: 'Last Name',
			name: 'lastName',
			type: 'string',
			description: 'Name of the hero',
			validation: (Rule) => Rule.required()
		}),
		defineField({
			title: 'Role',
			name: 'role',
			type: 'string',
			description: 'Role of the hero',
			validation: (Rule) => Rule.required()
		}),
		defineField({
			title: 'Description',
			name: 'description',
			type: 'text',
			description: 'Description of the hero',
			validation: (Rule) => Rule.required()
		}),
		defineField({
			title: 'Image',
			name: 'image',
			type: 'image',
			description: 'Image of the hero',
			options: {
				accept: '.jpg,.jpeg,.png'
			},
			validation: (Rule) => Rule.required()
		})
	]
});

export default Hero;
