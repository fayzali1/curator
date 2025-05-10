import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    {
      pattern: /^bg-/,
      variants: ["hover", "focus", "active"],
    },
    {
      pattern: /^text-/,
      variants: ["hover", "focus", "active"],
    },
  ],
  theme: {
    extend: {
      colors: {
        white: "hsl(var(--white))",
        black: "hsl(var(--black))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        gray: {
          "50": "hsl(var(--gray-50))",
          "100": "hsl(var(--gray-100))",
          "200": "hsl(var(--gray-200))",
          "300": "hsl(var(--gray-300))",
          "400": "hsl(var(--gray-400))",
          "500": "hsl(var(--gray-500))",
          "600": "hsl(var(--gray-600))",
          "700": "hsl(var(--gray-700))",
          "800": "hsl(var(--gray-800))",
          "900": "hsl(var(--gray-900))",
        },
        blue: {
          "50": "hsl(var(--blue-50))",
          "100": "hsl(var(--blue-100))",
          "600": "hsl(var(--blue-600))",
        },
        teal: {
          "50": "hsl(var(--teal-50))",
          "100": "hsl(var(--teal-100))",
          "600": "hsl(var(--teal-600))",
        },
        emerald: {
          "50": "hsl(var(--emerald-50))",
          "100": "hsl(var(--emerald-100))",
          "600": "hsl(var(--emerald-600))",
        },
        purple: {
          "50": "hsl(var(--purple-50))",
          "100": "hsl(var(--purple-100))",
          "600": "hsl(var(--purple-600))",
          "800": "hsl(var(--purple-800))",
          "900": "hsl(var(--purple-900))",
        },
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        red: {
          "50": "hsl(var(--red-50))",
          "300": "hsl(var(--red-300))",
        },
        stone: {
          "100": "hsl(var(--stone-100))",
          "200": "hsl(var(--stone-200))",
        },
        zinc: {
          "800": "hsl(var(--zinc-800))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        veres: {
          background: "#f8f4ef",
          primary: "#dfb89a",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        mono: ["var(--font-geist-mono)", ...fontFamily.mono],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      maxWidth: {
        "3xl.5": "52rem",
      },
      animation: {
        "bg-shine": "bg-shine 2.1s linear infinite",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
        pulse: "pulse var(--duration) ease-out infinite",
        marquee: "marquee var(--duration) linear infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
        "bg-shine": {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
        pulse: {
          "0%, 100%": {
            boxShadow: "0 0 0 0 var(--pulse-color)",
          },
          "50%": {
            boxShadow: "0 0 0 8px var(--pulse-color)",
          },
        },
        marquee: {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(-100%)",
          },
        },
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      screens: {
        xs: "375px",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(to right, #0A2463, #3E92CC)",
        "accent-gradient": "linear-gradient(to right, #D8315B, #3E92CC)",
        "dark-gradient": "linear-gradient(to right, #1E1B18, #0A2463)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
