export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          blue: {
            50: '#E3F2FD',
            75: '#BBDEFB',
            100: '#90CAF9',
            200: '#42A5F5',
            300: '#1565C0',
          },
          violet: {
            300: '#5724ff',
          },
          yellow: {
            100: '#8e983f',
            300: '#edff66',
          }
        }
      },
    },
    plugins: [],
  };
  