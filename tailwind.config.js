/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			mont: [
  				'Montserrat',
  				'sans-serif'
  			],
  			boldonse: [
  				'Boldonse'
  			],
  			oswald: [
  				'Oswald'
  			],
  			bangers: [
  				'Bangers'
  			],
  			engagement: [
  				'Engagement'
  			],
  			fredericka: [
  				'Fredericka the Great'
  			],
  			plaster: [
  				'Plaster'
  			],
  			pattaya: [
  				'Pattaya'
  			],
  			zendots: [
  				'Zen Dots'
  			],
  			nova: [
  				'Nova Square'
  			]
  		},
  		spacing: {
  			'97': '30rem',
  			'100': '550px',
  			'110': '430px',
  			'120': '680px'
  		},
  		rotate: {
  			'135': '135deg'
  		},
  		boxShadow: {
  			'4xl': '0px 5px 20px 1px #272727',
  			'5xl': '0px 0px 20px 18px #040404a6'
  		},
  		colors: {
  			blury: '#0000007a',
  			bgshadow: '#0000009c',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontSize: {
  			'10xl': '100px',
  			qxl: '40px'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [
      require("tailwindcss-animate")
],
}