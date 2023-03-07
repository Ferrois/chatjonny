/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dgray-50": "#F9FAFB",
        "dgray-100": "#F3F4F6",
        "dgray-150": "#E5E7EB",
        "dgray-200": "#D1D5DB",
        "dgray-250": "#9CA3AF",
        "dgray-300": "#6B7280",
        "dgray-350": "#4B5563",
        "dgray-400": "#374151",
        "dgray-425":"#173045",
        "dgray-450": "#1F2937",
        "dgray-500": "#111827",
        "dgray-550": "#0F172A",
        "dgray-600": "#0D1117",
        "dgray-650": "#0C0F14",
        "dgray-700": "#0B0D12",
        "dgray-750": "#0A0C10",
        "dgray-800": "#090A0E",
        "dgray-850": "#08090C",
        "dgray-900": "#07080A",
        "dgray-950": "#060708",
        "dgray-1000": "#050606",
      },
    },
  },
  plugins: [],
};
