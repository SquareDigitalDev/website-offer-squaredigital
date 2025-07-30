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
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				brand: {
					charcoal: 'hsl(var(--brand-charcoal))',
					golden: 'hsl(var(--brand-golden))',
					amber: 'hsl(var(--brand-amber))',
					orange: 'hsl(var(--brand-orange))',
					black: 'hsl(var(--brand-black))',
					white: 'hsl(var(--brand-white))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
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
				'float-1': {
					'0%, 100%': { 
						transform: 'translate(0, 0) rotate(0deg) scale(1)' 
					},
					'25%': { 
						transform: 'translate(30px, -20px) rotate(1deg) scale(1.02)' 
					},
					'50%': { 
						transform: 'translate(-15px, -40px) rotate(-0.5deg) scale(0.98)' 
					},
					'75%': { 
						transform: 'translate(-25px, 10px) rotate(0.8deg) scale(1.01)' 
					}
				},
				'float-2': {
					'0%, 100%': { 
						transform: 'translate(0, 0) rotate(0deg) scale(1)' 
					},
					'30%': { 
						transform: 'translate(-40px, 25px) rotate(-1.2deg) scale(0.97)' 
					},
					'60%': { 
						transform: 'translate(20px, -30px) rotate(0.7deg) scale(1.03)' 
					},
					'90%': { 
						transform: 'translate(35px, 15px) rotate(-0.3deg) scale(0.99)' 
					}
				},
				'float-3': {
					'0%, 100%': { 
						transform: 'translate(0, 0) rotate(0deg) scale(1)' 
					},
					'20%': { 
						transform: 'translate(25px, 30px) rotate(0.5deg) scale(1.01)' 
					},
					'40%': { 
						transform: 'translate(-30px, -15px) rotate(-0.8deg) scale(0.96)' 
					},
					'80%': { 
						transform: 'translate(15px, -25px) rotate(1.1deg) scale(1.02)' 
					}
				},
				'drift-1': {
					'0%, 100%': { 
						transform: 'translateX(0) translateY(0) rotate(0deg)',
						borderRadius: '60% 40% 70% 30%'
					},
					'50%': { 
						transform: 'translateX(-50px) translateY(30px) rotate(180deg)',
						borderRadius: '40% 60% 30% 70%'
					}
				},
				'drift-2': {
					'0%, 100%': { 
						transform: 'translateX(0) translateY(0) rotate(0deg)',
						borderRadius: '45% 55% 65% 35%'
					},
					'50%': { 
						transform: 'translateX(40px) translateY(-40px) rotate(-180deg)',
						borderRadius: '55% 45% 35% 65%'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float-1': 'float-1 25s ease-in-out infinite',
				'float-2': 'float-2 30s ease-in-out infinite',
				'float-3': 'float-3 28s ease-in-out infinite',
				'drift-1': 'drift-1 35s ease-in-out infinite',
				'drift-2': 'drift-2 40s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
