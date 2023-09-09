/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		colors: {
			"Dark-Purple": "#24053E",
			Eucaplyptus: "#44FFA1",
			"Davys-Gray": "#584D62",
			"Ghost-White": "#FCF8FF",
			White: "#FFFFFF",
		},
		letterSpacing: {
			navbarCustomSpacing: "-0.16px",
		},
		fontFamily: {
			Manrope: "Manrope",
			Fraunces: "Fraunces",
		},
		fontSize: {
			heroFontSize: "50px",
		},
		fontWeight: {
			heroFontWeight: 600,
			headerFontWeight: 700,
			bold: "bold",
		},
		lineHeight: {
			heroFontLineHeight: "60px",
			buttonFontLineHeight: "32px",
		},
		extend: {},
	},
	plugins: [],
};
