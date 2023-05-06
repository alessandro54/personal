import { defineType, defineField } from 'sanity';

const Post = defineType({
	title: 'Post',
	name: 'post',
	type: 'document',
	fields: [
		defineField({
			title: 'Title',
			name: 'title',
			type: 'string',
			description: 'Title of the post',
			validation: (Rule) => Rule.required()
		}),
		defineField({
			title: 'Subtitle',
			name: 'subtitle',
			type: 'string',
			description: 'Subtitle of the post'
		}),
		defineField({
			title: 'Content',
			name: 'richText',
			type: 'array',
			of: [{ type: 'block' }, { type: 'image' }]
		})
	]
});

export default Post;
