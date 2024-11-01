/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      colors: {
        light_text: "#b3d4e0",
        line: "#a0c4db",
        background3: "#4e4c72",
        dark_text: "#122e5b",
        background: "#1c2a4a",
        background2: "#2a3b59",
        back_to_top: "#1b2e4b",
        light: "#89aee0",
        medium: "#4a90e2",
        shadow: "#0e2231",
        button: "#6cb4e4",
        cardback: "#c7e3f7",
        button_hover: "#7a9dcf",
        black: "#000000",
        answer: "#7a9dcf",
        light_text: "#b3d4e0", // Light text color for softer appearance
        dark_text: "#122e5b", // Dark text color for strong contrast
        medium_text: "#8f75d8",
        light_blue: "#89aee0",
        // point1_light: "#d7e3ff",
        // point1_dark: "#8fa8d6",

        // point2_light: "#f6d5f7",
        // point2_dark: "#cf8ed8",

        // point4_light: "#ffe4ed",
        // point4_dark: "#e898b5",

        // point3_light: "#F3E5F5",
        // point3_dark: "#7B1FA2",

        // point5_light: "#e6dff9",
        // point5_dark: "#9e8ccf",
        point1_light: "#E3F2FD",
        point1_dark: "#90CAF9",

        // Shades for point2 (Pastel Red)
        point2_light: "#FFEBEE",
        point2_dark: "#FF8A80",

        // Shades for point3 (Pastel Yellow)
        point3_light: "#FFFDE7",
        point3_dark: "#FFF176",

        // Shades for point4 (Pastel Greenish-Blue)
        point4_light: "#E0F7FA",
        point4_dark: "#80DEEA",

        // Shades for point5 (Pastel Pink)
        point5_light: "#FCE4EC",
        point5_dark: "#F48FB1",
      },
    },
  },
  plugins: [],
};
