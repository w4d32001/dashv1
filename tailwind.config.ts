import type { Config } from "tailwindcss";
import animate from 'tailwindcss-animate';
const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)',
			primary:"#b94d06",
			secondary: {
				100: "#fafafa",
				500: "#1E1F25",
				900: "#131517"
			},
  		},

  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		textShadow: {
			'sm': '1px 1px 2px rgba(0, 0, 0, 0.5)',  // Sombra pequeña
			'md': '2px 2px 4px rgba(0, 0, 0, 0.5)',  // Sombra mediana
			'lg': '3px 3px 6px rgba(0, 0, 0, 0.5)',  // Sombra grande
			'xl': '4px 4px 8px rgba(0, 0, 0, 0.5)',  // Sombra extra grande
		},
  	}
  },
  plugins: [
	animate]

};
export default config;
