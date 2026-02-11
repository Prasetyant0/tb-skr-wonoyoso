/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Palet Heavy Metal
                metal: {
                    100: '#F3F4F6',
                    200: '#E5E7EB',
                    300: '#D1D5DB',
                    400: '#9CA3AF',
                    500: '#4B5563',
                    600: '#374151',
                },
                // Warna Aksen
                accent: {
                    orange: '#FF6B00', // Tombol & Icon aktif
                    hover: '#e66000',  // Warna saat tombol ditekan
                }
            },
            fontFamily: {
                display: ['Oswald', 'sans-serif'],
                body: ['Inter', 'sans-serif'],
            },
            backgroundImage: {
                'concrete': "url('https://www.transparenttextures.com/patterns/concrete-wall.png')",
            }
        },
    },
    plugins: [],
}
