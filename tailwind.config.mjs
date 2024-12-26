/** @type {import('tailwindcss').Config} */
import { COLORS } from "./src/utils/settings";
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
			colors: {
				primary: COLORS.primary,
                secondary: COLORS.secondary,
                accent: COLORS.accent,
                background: COLORS.background,
                text: COLORS.text,
			},
            fontFamily: {
                geist: ['Geist', 'sans-serif'],
                geist_mono: ['Geist Mono', 'sans-serif'],
                bodoni_moda: ['Bodoni Moda', 'serif']
            }
        },
    },
    plugins: [],
}