/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        // Zoom In Animation
        zoomIn: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.1)" },
        },
        // Fade In Up Animation
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        // Slide In Left Animation
        slideInLeft: {
          "0%": { transform: "translateX(-100%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        // Slide In Right Animation
        slideInRight: {
          "0%": { transform: "translateX(100%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        // Bounce Animation
        bounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        // Rotate Animation
        rotateIn: {
          "0%": { transform: "rotate(-45deg)", opacity: 0 },
          "100%": { transform: "rotate(0)", opacity: 1 },
        },
      },
      animation: {
        zoomIn: "zoomIn 8s ease-in-out infinite",
        fadeInUp: "fadeInUp 1s ease-in-out forwards",
        slideInLeft: "slideInLeft 0.8s ease-out forwards",
        slideInRight: "slideInRight 0.8s ease-out forwards",
        bounce: "bounce 1.5s infinite",
        rotateIn: "rotateIn 0.8s ease-out forwards",
      },
      transitionTimingFunction: {
        "ease-in-out-expo": "cubic-bezier(0.77, 0, 0.175, 1)",
      },
      transitionDuration: {
        2000: "2000ms",
      },
    },
  },
  plugins: [],
};
