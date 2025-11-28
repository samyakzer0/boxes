/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neo-black': '#000000',
        'neo-white': '#FFFFFF',
        'neo-gray-50': '#F9FAFB',
        'neo-gray-100': '#F3F4F6',
        'neo-gray-200': '#E5E7EB',
        'neo-gray-300': '#D1D5DB',
        'neo-gray-400': '#9CA3AF',
        'neo-gray-500': '#6B7280',
        'neo-gray-600': '#4B5563',
        'neo-gray-700': '#374151',
        'neo-gray-800': '#1F2937',
        'neo-gray-900': '#111827',
      },
      fontFamily: {
        'sans': ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        'mono': ['Space Mono', 'Courier New', 'monospace'],
        'display': ['Archivo Black', 'Impact', 'sans-serif'],
      },
      fontSize: {
        'display': ['4rem', { lineHeight: '1', fontWeight: '900' }],
        'hero': ['3rem', { lineHeight: '1.1', fontWeight: '800' }],
      },
      borderWidth: {
        '3': '3px',
        '4': '4px',
        '5': '5px',
        '6': '6px',
      },
      boxShadow: {
        'neo-sm': '2px 2px 0px 0px #000000',
        'neo': '4px 4px 0px 0px #000000',
        'neo-md': '6px 6px 0px 0px #000000',
        'neo-lg': '8px 8px 0px 0px #000000',
        'neo-xl': '12px 12px 0px 0px #000000',
      },
      animation: {
        'slide-up': 'slideUp 0.3s ease-out',
        'pop': 'pop 0.2s ease-out',
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pop: {
          '0%': { transform: 'scale(0.95)' },
          '50%': { transform: 'scale(1.02)' },
          '100%': { transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
