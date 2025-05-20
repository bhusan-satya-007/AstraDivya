
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				mystic: {
					50: '#fff6e5',
					100: '#ffeac1',
					200: '#ffd68a',
					300: '#ffb94d',
					400: '#f99622', // Main golden-orange
					500: '#f97316', // Bright orange
					600: '#dd5109',
					700: '#b73709',
					800: '#942b0c',
					900: '#7a240d',
					950: '#461002',
				},
				cosmic: {
					950: '#0f0f16', // Darkest
					900: '#16161e',
					800: '#1c1c25',
					700: '#24242d',
					600: '#2d2d36',
					500: '#36363f',
					400: '#46464f',
					300: '#5a5a63',
					200: '#7c7c84',
					100: '#a0a0a7',
					50: '#d5d5da',
				}
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				sanskrit: ['Sanskrit', 'serif'],
				mystic: ['Playfair Display', 'serif']
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			backgroundImage: {
				'gradient-cosmic': 'linear-gradient(to bottom, #0f0f16, #1c1c25)',
				'gradient-mystic': 'linear-gradient(90deg, #f97316, #f99622, #ffb94d)',
			},
			boxShadow: {
				'mystic': '0 4px 30px rgba(249, 115, 22, 0.15)',
				'cosmic': '0 4px 30px rgba(15, 15, 22, 0.5)',
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				'pulse-light': {
					'0%, 100%': { opacity: '0.6' },
					'50%': { opacity: '1' },
				},
				'shimmer': {
					'0%': { backgroundPosition: '-200% 0' },
					'100%': { backgroundPosition: '200% 0' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'pulse-light': 'pulse-light 4s ease-in-out infinite',
				'shimmer': 'shimmer 8s ease-in-out infinite',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
