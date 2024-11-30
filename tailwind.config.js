/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.{html,ejs,js}"],
  theme: {
    extend: {
      colors: {
        // Dark background colors
        darkBackground: '#1e1e1e',    // Dark gray background
        darkSecondary: '#2c2c2c',      // Slightly lighter gray
        darkAccent: '#333333',         // Accent color for sections

        // Text colors
        darkText: '#e1e1e1',           // Light gray text
        darkHeading: '#ffffff',        // White text for headings
        darkMuted: '#b0b0b0',          // Muted text color
        darkLink: '#9dcaea',           // Light blue for links

        // Accent colors
        darkPrimary: '#4c9dff',        // Button color, highlights
        darkSecondaryAccent: '#7f8c8d', // Secondary button, muted accents
        darkBorder: '#444444',         // Border color
        darkError: '#ff4f4f',          // Error color (e.g., for alerts)
        darkSuccess: '#4caf50',        // Success color (e.g., for success messages)
      },
    },
  },
  plugins: [],
}

