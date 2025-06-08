export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#1DA1F2',
                secondary: '#14171A',
                accent: '#657786',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif', 'Outfit', 'system-ui', 'Otomanopee One', 'sans-serif'],
            },
        },
    },
    plugins: [],
}