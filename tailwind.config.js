/** @type {import('tailwindcss').Config} */
export default {
   content: ["./src/**/*.{tsx,ts}"],
   theme: {
      extend: {
         fontFamily: {
            "europa-bold": ["EuropaGroteskSH-Bol", "sans-serif"],
            "europa-demi": ["EuropaGroteskSH-Dem", "sans-serif"],
            "europa-light": ["EuropaGroteskSH-Lig", "sans-serif"],
            "europa-medium": ["EuropaGroteskSH-Med", "sans-serif"],
            "europa-reg": ["EuropaGroteskSH-Reg", "sans-serif"],
            "europa-xlight": ["EuropaGroteskSH-XLig", "sans-serif"],
         },
      },
   },
   plugins: [],
};
