/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				poppins: ["Poppins", "sans-serif"],  // Agregar la fuente personalizada
			  },
			colors: { 
				orangep: "#FDBF22",
				gris: "#6D6D6D",
				rojito: "#EB3F0C",
				rojoclaro: "#FC7D3A",
				oscurito: "#3D3D3D",
				backgroundImage: {
					'custom-icon': "url('/src/components/img.jpg')",
		  		},
			},
		},
	},
	plugins: [],
}
