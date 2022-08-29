/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	daisyui: {
		themes: [
			{
				mytheme: {

					"primary": "#fffffe",

					"secondary": "#72757e",

					"accent": "#dd6361",

					"neutral": "#251C26",

					"base-100": "#16161a",

					"info": "#34BDEF",

					"success": "#2cb67d",

					"warning": "#7f5af0",

					"error": "#7f5af0",
				},
			},
		],
	},

	plugins: [require("daisyui")],
}
