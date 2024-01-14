const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        '128': '32px',
        '144': '36px',
      },
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
    },
    inset: {
      '17': '68px',
    },
  },
  plugins: [
    plugin(({ addUtilities, theme }) => {
      const utilities = {};
      Object.entries(theme('textShadow')).forEach(([key, value]) => {
        utilities[`.text-shadow-${key}`] = { textShadow: value };
      });
      addUtilities(utilities, ['responsive', 'hover']);
    }),
  ],
};
