/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				'primary-green': '#00FF00'
			},
			fontFamily: {
				"alfa": ['Alfa Slab One', 'serif']
			},
			transitionTimingFunction: {
				'project-timming': 'cubic-bezier(.13,.91,1,.37)'
			}			
		},
	},
	plugins: [],
}
