# Boxes - Neo-Brutalist React Component Library

<div align="center">

**Bold Components, Zero Compromise**

A curated collection of neo-brutalist React components with live previews and copy-paste functionality.

[View Demo](http://localhost:5173/) • [Browse Components](http://localhost:5173/components) • [Documentation](http://localhost:5173/docs)

</div>

---

## ✨ Features

- 🎨 **Neo-Brutalist Design** - Bold, high-contrast components with geometric shapes
- 📋 **Copy & Paste** - No installation required, just copy the code
- 👁️ **Live Previews** - Interactive component demonstrations
- 💾 **Download** - Individual files or ZIP archives
- 🔍 **Search & Filter** - Find components by name, category, or tags
- 🎭 **Theme Support** - Light/dark modes with auto-detection
- 📱 **Responsive** - Mobile-first design
- 📚 **Fully Documented** - Props, usage examples, and TypeScript types
- ⚡ **TypeScript** - 100% type-safe components

## 🚀 Quick Start

### Prerequisites

- Node.js 20.19+ or 22+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/boxes.git
cd boxes

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:5173/](http://localhost:5173/) to view the application.

## 📦 Using Components

1. **Browse** the component library at `/components`
2. **Preview** components with live interactions
3. **Copy** the component code with one click
4. **Paste** into your React project
5. **Customize** as needed

### Example

```tsx
import { PrimaryButton } from './components/buttons/PrimaryButton';

export function App() {
  return (
    <PrimaryButton onClick={() => alert('Clicked!')}>
      Click Me
    </PrimaryButton>
  );
}
```

## 🎨 Tailwind Configuration

Add the neo-brutalist theme to your `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      boxShadow: {
        'neo': '4px 4px 0px 0px #000000',
        'neo-sm': '2px 2px 0px 0px #000000',
        'neo-md': '6px 6px 0px 0px #000000',
      },
      borderWidth: {
        '3': '3px',
        '4': '4px',
      },
    },
  },
}
```

## 📚 Components

### Buttons (3)
- **PrimaryButton** - Bold action button with shadow
- **SecondaryButton** - Outlined secondary style
- **GhostButton** - Transparent with border only

### Forms (2)
- **TextInput** - With validation states
- **RangeSlider** - Interactive range control

### Utilities (1)
- **ThemeToggle** - Dark/light mode toggle

### Data Display (1)
- **BlogCard** - Blog post card with metadata

### Feedback (1)
- **StatusBadge** - Status indicator with color variants

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **React Router** - Routing
- **Zustand** - State management
- **Highlight.js** - Syntax highlighting
- **JSZip** - ZIP generation

## 📖 Documentation

Visit `/docs` for:
- Getting started guide
- Installation instructions
- Tailwind configuration
- Usage examples
- Best practices

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by [21st.dev](https://21st.dev) and [shadcn/ui](https://ui.shadcn.com)
- Built with the amazing React and Tailwind CSS communities

## 📧 Contact

- GitHub: [@yourusername](https://github.com/yourusername)
- Twitter: [@yourusername](https://twitter.com/yourusername)

---

<div align="center">

**Built with ❤️ by the Boxes team**

[Website](http://localhost:5173/) • [Components](http://localhost:5173/components) • [Docs](http://localhost:5173/docs) • [About](http://localhost:5173/about)

</div>
