/** @type {import('tailwindcss').Config} */
// import colors from "tailwindcss/colors";

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: "#F5EFE7",
                    100: "#F2E9DF",
                    200: "#EADDCD",
                    300: "#E3D1BB",
                    400: "#DAC3A5",
                    500: "#D1B48F",
                    600: "#C5A173",
                    700: "#B98E56",
                    800: "#A27943",
                    900: "#7E5E34",
                    950: "#6C512D",
                },
                secondary: {
                    50: "#D8C4B6",
                    100: "#D1B9A9",
                    200: "#C3A48E",
                    300: "#B69177",
                    400: "#A87C5C",
                    500: "#8F684C",
                    600: "#74553E",
                    700: "#5A4130",
                    800: "#433023",
                    900: "#281D15",
                    950: "#1B130E",
                },
                accent: {
                    50: "#F0F6FF",
                    100: "#E0EEFF",
                    200: "#BDD9FF",
                    300: "#94C2FF",
                    400: "#5EA4FF",
                    500: "#4294FF",
                    600: "#2483FF",
                    700: "#006EFF",
                    800: "#005BD1",
                    900: "#004094",
                    950: "#002E6B",
                },
            },
        },
    },
    plugins: [],
};
