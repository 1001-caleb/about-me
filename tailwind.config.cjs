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

	theme: {
		extend: {
			keyframes: {
				wave: {
					'0%': { transform: 'rotate(0.0deg)' },
					'10%': { transform: 'rotate(14deg)' },
					'20%': { transform: 'rotate(-8deg)' },
					'30%': { transform: 'rotate(14deg)' },
					'40%': { transform: 'rotate(-4deg)' },
					'50%': { transform: 'rotate(10.0deg)' },
					'60%': { transform: 'rotate(0.0deg)' },
					'100%': { transform: 'rotate(0.0deg)' },
				},
			},
			animation: {
				'waving-hand': 'wave 2s linear infinite',
			},
		},
	},

	plugins: [require("daisyui")],
}
