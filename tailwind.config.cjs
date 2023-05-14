/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			animation: {
				'fade-in': 'fadeIn 1s ease-in-out forwards',
				'fade-out': 'fadeOut 0.5s ease-in-out forward'
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: 0 },
					'100%': { opacity: 1 }
				},
				fadeOut: {
					'0%': { opacity: 1 },
					'100%': { opacity: 0 }
				}
			}
		}
	},
	plugins: [],
	darkMode: 'class'
};
