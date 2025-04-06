module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    safelist: [
        "bg-[#0D0E12]",
        "text-[#F6F6F8]",
        "bg-white",
        "text-[#1B1D27]",
        "dark:bg-[#F6F6F8]",
        "dark:text-[#13141B]",
        "dark:text-[#EEEEF1]",
        "dark:bg-[#1B1D27]",
        "dark:border-[#252837]",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};