import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import type { ComponentPreview } from '@/lib/types/component';

export const generateAndDownloadZip = async (components: ComponentPreview[]) => {
  const zip = new JSZip();

  // Add components organized by folder
  components.forEach((component) => {
    const folder = zip.folder(component.folder);
    if (folder) {
      folder.file(component.filename, component.codeRaw);
    }
  });

  // Get unique dependencies
  const allDependencies = [...new Set(components.flatMap((c) => c.dependencies))];

  // Add README
  const readme = `# Boxes Components

Downloaded from boxes.dev - Neo-brutalist React Component Library

## Getting Started

1. **Install Dependencies**
   \`\`\`bash
   npm install react lucide-react ${allDependencies.join(' ')}
   \`\`\`

2. **Import Components**
   Copy the component files to your project and import them:
   \`\`\`typescript
   import { PrimaryButton } from './buttons/PrimaryButton';
   \`\`\`

3. **Use in Your App**
   \`\`\`jsx
   export function App() {
     return <PrimaryButton>Click Me</PrimaryButton>;
   }
   \`\`\`

## Components Included

${components
      .map(
        (c) => `- **${c.title}** (${c.folder}/${c.filename}) - ${c.description}`
      )
      .join('\n')}

## Dependencies

${allDependencies.map((dep) => `- ${dep}`).join('\n')}

## Tailwind CSS Configuration

Make sure to configure Tailwind CSS with the neo-brutalist theme:

\`\`\`javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      boxShadow: {
        'neo': '4px 4px 0px 0px #000000',
        'neo-sm': '2px 2px 0px 0px #000000',
      },
      borderWidth: {
        '3': '3px',
        '4': '4px',
      },
    },
  },
}
\`\`\`

---

Built with ❤️ by the Boxes team
`;

  zip.file('README.md', readme);

  // Generate and download
  const blob = await zip.generateAsync({ type: 'blob' });
  saveAs(blob, 'boxes-components.zip');
};
