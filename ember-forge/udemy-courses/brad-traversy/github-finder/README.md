# for node js 20

npm create vite@5

(npm create vite@latest - this works only for latest node version so use vite@5)

choose javascript + swc => this uses rust and does faster compile time

cd github-finder

npm install

npm run dev

# TAILWIND

https://tailwindcss.com/docs/installation/using-vite

npm install tailwindcss @tailwindcss/vite

in vite.config.js
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
plugins: [react(), tailwindcss()],
});

src\app.css
@import "tailwindcss";

# Daisy UI

daisy ui
npm i -D daisyui@latest
src\App.css
@import "tailwindcss";
@plugin "daisyui";

Note: after installing tailwind and daisy ui remove all css classes

# Install react router dom

npm i react-router-dom react-icons
