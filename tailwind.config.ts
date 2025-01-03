import type { Config } from "tailwindcss";

export default {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["var(--font-inter)"],
			},
			colors: {
				"brand-primary": "var(--color-brand-primary)",
				"brand-primary-hover": "var(--color-brand-primary-hover)",
				"brand-primary-active": "var(--color-brand-primary-active)",
				"text-tertiary": "var(--color-text-tertiary)",
			},
		},
	},
	plugins: [],
} satisfies Config;
