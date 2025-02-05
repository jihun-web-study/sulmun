/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "proj-color": "#40A1A1",
        "proj-sub-color": "#94C5C5",
        "proj-bg-start": "#40A1A1",
        "proj-bg-end": "#44B6DA",
      },
      backgroundImage: {
        "proj-bg-linear": "linear-gradient(to right, theme(colors.proj-bg-start), theme(colors.proj-bg-end))",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".scrollbar-hide": {
          /* IE and Edge */
          "-ms-overflow-style": "none",
          /* Firefox */
          "scrollbar-width": "none",
          /* Safari and Chrome */
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
        ".scrollbar-default": {
          /* IE and Edge */
          "-ms-overflow-style": "auto",
          /* Firefox */
          "scrollbar-width": "auto",
          /* Safari and Chrome */
          "&::-webkit-scrollbar": {
            display: "block",
          },
        },
        ".children-shrink-0": {
          "& > * ": { "flex-shrink": 0 },
        },
        ".text-shadow": {
          "text-shadow": `-1px -1px 0 #F2F2F2, 1px -1px 0 #F2F2F2, -1px  1px 0 #F2F2F2, 1px  1px 0 #F2F2F2;`,
        },
      };
      addUtilities(newUtilities, ["responsive"]);
    },
  ],
};
