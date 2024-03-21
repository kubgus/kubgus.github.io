/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
            colors: {
                'brand-black': '#222831',
                'brand-gray': '#31363F',
                'brand-teal': '#76ABAE',
                'brand-white': '#EEEEEE',
            },
            fontFamily: {
                'dela-gothic-one': ['Dela Gothic One', 'sans-serif'],
            },
        },
	},
	plugins: [],
}
