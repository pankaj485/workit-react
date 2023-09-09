/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		colors: {
			primary: "#24053E",
			secondary: "#44FFA1",
			"primary-light": "#584D62",
			"secondary-white": "#FCF8FF",
			white: "#FFFFFF",
		},
		letterSpacing: {
			navbarCustomSpacing: "-0.16px",
		},
		extend: {},
	},
	plugins: [],
};
