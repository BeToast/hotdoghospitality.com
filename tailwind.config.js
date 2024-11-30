/** @type {import('tailwindcss').Config} */
export default {
   content: ["./src/**/*.{tsx,ts}"],
   theme: {
      extend: {
         fontFamily: {
            "europa-bold": ["EuropaGroteskSH-Bol", "sans-serif"],
            "europa-bold-ita": ["EuropaGroteskSH-BolIta", "sans-serif"],
            "europa-demi": ["EuropaGroteskSH-Dem", "sans-serif"],
            "europa-demi-ita": ["EuropaGroteskSH-DemIta", "sans-serif"],
            "europa-light": ["EuropaGroteskSH-Lig", "sans-serif"],
            "europa-light-ita": ["EuropaGroteskSH-LigIta", "sans-serif"],
            "europa-medium": ["EuropaGroteskSH-Med", "sans-serif"],
            "europa-medium-ita": ["EuropaGroteskSH-MedIta", "sans-serif"],
            "europa-reg": ["EuropaGroteskSH-Reg", "sans-serif"],
            "europa-reg-ita": ["EuropaGroteskSH-RegIta", "sans-serif"],
            "europa-xlight": ["EuropaGroteskSH-XLig", "sans-serif"],
            "europa-xlight-ita": ["EuropaGroteskSH-XLigIta", "sans-serif"],
         },
      },
   },
   plugins: [],
};
