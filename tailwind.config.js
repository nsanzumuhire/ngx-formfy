module.exports = {
  presets: [require('@spartan-ng/brain/hlm-tailwind-preset')],
  content: [
    "./src/**/*.html",
    "./projects/ngx-formfy/src/**/*.html",
    "./projects/ngx-formfy/src/**/*.ts",
    "./projects/**/*.{html,ts}",
    "./src/**/*.{html,ts}",
    
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}