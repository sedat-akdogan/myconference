/** @type {import('tailwindcss').Config} */
export const content = [
    "./src/**/*.{js,jsx,ts,tsx}", "./node_modules/tw-elements/dist/js/**/*.js"
];
export const theme = {
    extend: {},
};
export const plugins = [require("tw-elements/dist/plugin.cjs")];
