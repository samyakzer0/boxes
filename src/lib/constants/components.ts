import type { ComponentPreview } from '@/lib/types/component';
import { PrimaryButton } from '@/public-components/buttons/PrimaryButton';
import { SecondaryButton } from '@/public-components/buttons/SecondaryButton';
import { GhostButton } from '@/public-components/buttons/GhostButton';
import { ThemeToggle } from '@/public-components/toggles/ThemeToggle';
import { TextInput } from '@/public-components/forms/TextInput';
import { RangeSlider } from '@/public-components/forms/RangeSlider';
import { BlogCard } from '@/public-components/data-display/BlogCard';
import { StatusBadge } from '@/public-components/feedback/StatusBadge';
import { Checkbox } from '@/public-components/forms/Checkbox';
import { Select } from '@/public-components/forms/Select';
import { Textarea } from '@/public-components/forms/Textarea';
import { Alert } from '@/public-components/feedback/Alert';
import { ProgressBar } from '@/public-components/feedback/ProgressBar';
import { Avatar } from '@/public-components/data-display/Avatar';
import { AccordionItem } from '@/public-components/data-display/AccordionItem';
import { Tabs } from '@/public-components/navigation/Tabs';

export const COMPONENTS: ComponentPreview[] = [
  {
    id: 'primary-button',
    title: 'Primary Button',
    description: 'Bold, high-contrast primary action button with neo-brutalist styling',
    category: 'buttons',
    tags: ['action', 'interactive', 'cta', 'clickable'],

    code: `export const PrimaryButton = ({ children, onClick, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className="px-6 py-3 bg-neo-black text-neo-white font-bold uppercase
               border-3 border-neo-black shadow-neo hover:translate-x-[2px]
               hover:translate-y-[2px] hover:shadow-neo-sm transition-all"
  >
    {children}
  </button>
);`,

    codeRaw: `import React from 'react';

export interface PrimaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  onClick,
  disabled = false,
  className = '',
}) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={\`px-6 py-3 bg-neo-black text-neo-white font-bold uppercase tracking-wider
               border-3 border-neo-black shadow-neo
               hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-neo-sm
               active:translate-x-[4px] active:translate-y-[4px] active:shadow-none
               disabled:opacity-50 disabled:cursor-not-allowed
               transition-all duration-150 \${className}\`}
  >
    {children}
  </button>
);`,

    dependencies: ['react'],

    preview: {
      component: PrimaryButton,
      defaultProps: { children: 'Click Me' },
      previewHeight: 100,
    },

    filename: 'PrimaryButton.tsx',
    folder: 'buttons',

    documentation: {
      usage: `import { PrimaryButton } from './buttons/PrimaryButton';

export function App() {
  return (
    <PrimaryButton onClick={() => alert('Clicked!')}>
      Submit
    </PrimaryButton>
  );
}`,
      props: [
        {
          name: 'children',
          type: 'React.ReactNode',
          description: 'Button text or content',
          required: true,
        },
        {
          name: 'onClick',
          type: '() => void',
          description: 'Click event handler',
          required: false,
        },
        {
          name: 'disabled',
          type: 'boolean',
          description: 'Disable the button',
          default: 'false',
          required: false,
        },
      ],
      notes: 'This component uses Tailwind CSS. Make sure Tailwind is configured in your project with the neo-brutalist theme.',
    },

    createdAt: new Date('2025-01-01'),
    updatedAt: new Date('2025-01-01'),
    author: 'Boxes Team',
    trending: true,
    featured: true,
  },

  {
    id: 'secondary-button',
    title: 'Secondary Button',
    description: 'Outlined secondary button with neo-brutalist styling',
    category: 'buttons',
    tags: ['action', 'interactive', 'secondary'],

    code: `export const SecondaryButton = ({ children, onClick, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className="px-6 py-3 bg-neo-white text-neo-black font-bold uppercase
               border-3 border-neo-black shadow-neo hover:translate-x-[2px]
               hover:translate-y-[2px] hover:shadow-neo-sm transition-all"
  >
    {children}
  </button>
);`,

    codeRaw: `import React from 'react';

export interface SecondaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  children,
  onClick,
  disabled = false,
  className = '',
}) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={\`px-6 py-3 bg-neo-white text-neo-black font-bold uppercase tracking-wider
               border-3 border-neo-black shadow-neo
               hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-neo-sm
               active:translate-x-[4px] active:translate-y-[4px] active:shadow-none
               disabled:opacity-50 disabled:cursor-not-allowed
               transition-all duration-150 \${className}\`}
  >
    {children}
  </button>
);`,

    dependencies: ['react'],

    preview: {
      component: SecondaryButton,
      defaultProps: { children: 'Cancel' },
      previewHeight: 100,
    },

    filename: 'SecondaryButton.tsx',
    folder: 'buttons',

    documentation: {
      usage: `import { SecondaryButton } from './buttons/SecondaryButton';

export function App() {
  return <SecondaryButton>Cancel</SecondaryButton>;
}`,
      props: [
        {
          name: 'children',
          type: 'React.ReactNode',
          description: 'Button text or content',
          required: true,
        },
        {
          name: 'onClick',
          type: '() => void',
          description: 'Click event handler',
          required: false,
        },
      ],
    },

    createdAt: new Date('2025-01-01'),
    updatedAt: new Date('2025-01-01'),
    featured: true,
  },

  {
    id: 'ghost-button',
    title: 'Ghost Button',
    description: 'Transparent ghost button with border only',
    category: 'buttons',
    tags: ['action', 'interactive', 'ghost', 'transparent'],

    code: `export const GhostButton = ({ children, onClick, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className="px-6 py-3 bg-transparent text-neo-black font-bold uppercase
               border-3 border-neo-black hover:bg-neo-gray-50 transition-all"
  >
    {children}
  </button>
);`,

    codeRaw: `import React from 'react';

export interface GhostButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export const GhostButton: React.FC<GhostButtonProps> = ({
  children,
  onClick,
  disabled = false,
  className = '',
}) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={\`px-6 py-3 bg-transparent text-neo-black font-bold uppercase tracking-wider
               border-3 border-neo-black
               hover:bg-neo-gray-50
               active:bg-neo-gray-100
               disabled:opacity-50 disabled:cursor-not-allowed
               transition-all duration-150 \${className}\`}
  >
    {children}
  </button>
);`,

    dependencies: ['react'],

    preview: {
      component: GhostButton,
      defaultProps: { children: 'Learn More' },
      previewHeight: 100,
    },

    filename: 'GhostButton.tsx',
    folder: 'buttons',

    createdAt: new Date('2025-01-01'),
    updatedAt: new Date('2025-01-01'),
  },

  {
    id: 'theme-toggle',
    title: 'Theme Toggle',
    description: 'Interactive dark/light mode toggle switch',
    category: 'utilities',
    tags: ['theme', 'toggle', 'dark-mode', 'preferences'],

    code: `export const ThemeToggle = ({ onToggle, initialDark }) => {
  const [isDark, setIsDark] = useState(initialDark);
  
  const handleToggle = () => {
    const newState = !isDark;
    setIsDark(newState);
    onToggle?.(newState);
  };
  
  return (
    <button onClick={handleToggle} className="p-3 bg-neo-white border-3 border-neo-black shadow-neo-sm">
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};`,

    codeRaw: `import React, { useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export interface ThemeToggleProps {
  onToggle?: (isDark: boolean) => void;
  initialDark?: boolean;
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  onToggle,
  initialDark = false,
  className = '',
}) => {
  const [isDark, setIsDark] = useState(initialDark);

  const handleToggle = () => {
    const newState = !isDark;
    setIsDark(newState);
    onToggle?.(newState);
  };

  return (
    <button
      onClick={handleToggle}
      className={\`p-3 bg-neo-white border-3 border-neo-black shadow-neo-sm
                 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none
                 transition-all duration-150 \${className}\`}
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun size={20} className="text-neo-black" />
      ) : (
        <Moon size={20} className="text-neo-black" />
      )}
    </button>
  );
};`,

    dependencies: ['react', 'lucide-react'],

    preview: {
      component: ThemeToggle,
      previewHeight: 80,
    },

    filename: 'ThemeToggle.tsx',
    folder: 'utilities',

    createdAt: new Date('2025-01-02'),
    updatedAt: new Date('2025-01-02'),
    trending: true,
    featured: true,
  },

  {
    id: 'text-input',
    title: 'Text Input',
    description: 'Text input field with validation states and neo-brutalist styling',
    category: 'forms',
    tags: ['input', 'form', 'text', 'validation'],

    code: `export const TextInput = ({ label, placeholder, error }) => (
  <div className="w-full">
    {label && <label className="block text-sm font-bold uppercase mb-2">{label}</label>}
    <input
      type="text"
      placeholder={placeholder}
      className={\`w-full px-4 py-3 border-3 border-neo-black bg-neo-white
                 focus:outline-none focus:shadow-neo transition-all
                 \${error ? 'border-red-500' : ''}\`}
    />
    {error && <p className="text-red-500 text-sm mt-1 font-bold">{error}</p>}
  </div>
);`,

    codeRaw: `import React, { useState } from 'react';

export interface TextInputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
  disabled?: boolean;
  className?: string;
}

export const TextInput: React.FC<TextInputProps> = ({
  label,
  placeholder,
  value: controlledValue,
  onChange,
  error,
  disabled = false,
  className = '',
}) => {
  const [internalValue, setInternalValue] = useState('');
  const value = controlledValue !== undefined ? controlledValue : internalValue;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (controlledValue === undefined) {
      setInternalValue(newValue);
    }
    onChange?.(newValue);
  };

  return (
    <div className={\`w-full \${className}\`}>
      {label && (
        <label className="block text-sm font-bold uppercase mb-2">
          {label}
        </label>
      )}
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
        className={\`w-full px-4 py-3 border-3 border-neo-black bg-neo-white text-neo-black
                   focus:outline-none focus:ring-0 focus:border-neo-black focus:shadow-neo
                   disabled:opacity-50 disabled:cursor-not-allowed
                   transition-all duration-150
                   \${error ? 'border-red-500' : ''}\`}
      />
      {error && (
        <p className="text-red-500 text-sm mt-1 font-bold">{error}</p>
      )}
    </div>
  );
};`,

    dependencies: ['react'],

    preview: {
      component: TextInput,
      defaultProps: { label: 'Email', placeholder: 'Enter your email' },
      previewHeight: 120,
    },

    filename: 'TextInput.tsx',
    folder: 'forms',

    createdAt: new Date('2025-01-03'),
    updatedAt: new Date('2025-01-03'),
    featured: true,
  },

  {
    id: 'range-slider',
    title: 'Range Slider',
    description: 'Interactive range slider with custom neo-brutalist styling',
    category: 'forms',
    tags: ['slider', 'range', 'input', 'interactive'],

    code: `export const RangeSlider = ({ min, max, label, showValue }) => {
  const [value, setValue] = useState(min);
  
  return (
    <div className="w-full">
      {label && (
        <div className="flex justify-between mb-2">
          <label className="text-sm font-bold uppercase">{label}</label>
          {showValue && <span className="text-sm font-bold">{value}</span>}
        </div>
      )}
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-full h-3 bg-neo-gray-200 border-3 border-neo-black"
      />
    </div>
  );
};`,

    codeRaw: `import React, { useState } from 'react';

export interface RangeSliderProps {
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  onChange?: (value: number) => void;
  label?: string;
  showValue?: boolean;
  className?: string;
}

export const RangeSlider: React.FC<RangeSliderProps> = ({
  min = 0,
  max = 100,
  step = 1,
  value: controlledValue,
  onChange,
  label,
  showValue = true,
  className = '',
}) => {
  const [internalValue, setInternalValue] = useState(min);
  const value = controlledValue !== undefined ? controlledValue : internalValue;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    if (controlledValue === undefined) {
      setInternalValue(newValue);
    }
    onChange?.(newValue);
  };

  return (
    <div className={\`w-full \${className}\`}>
      {label && (
        <div className="flex items-center justify-between mb-2">
          <label className="text-sm font-bold uppercase">{label}</label>
          {showValue && (
            <span className="text-sm font-bold">{value}</span>
          )}
        </div>
      )}
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
        className="w-full h-3 bg-neo-gray-200 border-3 border-neo-black appearance-none cursor-pointer"
      />
    </div>
  );
};`,

    dependencies: ['react'],

    preview: {
      component: RangeSlider,
      defaultProps: { min: 0, max: 100, label: 'Volume', showValue: true },
      previewHeight: 100,
    },

    filename: 'RangeSlider.tsx',
    folder: 'forms',

    createdAt: new Date('2025-01-04'),
    updatedAt: new Date('2025-01-04'),
    trending: true,
  },

  {
    id: 'checkbox',
    title: 'Checkbox',
    description: 'Custom checkbox with neo-brutalist styling',
    category: 'forms',
    tags: ['input', 'form', 'checkbox', 'selection'],

    code: `export const Checkbox = ({ label, checked, onChange }) => (
  <label className="flex items-center gap-3 cursor-pointer">
    <div className="relative">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="sr-only"
      />
      <div className={\`w-6 h-6 border-3 border-neo-black bg-neo-white transition-all
                     \${checked ? 'bg-neo-black' : ''}\`}>
        {checked && (
          <svg className="w-full h-full text-neo-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        )}
      </div>
    </div>
    {label && <span className="font-bold text-sm">{label}</span>}
  </label>
);`,

    codeRaw: `import React, { useState } from 'react';

export interface CheckboxProps {
  label?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked: controlledChecked,
  onChange,
  disabled = false,
  className = '',
}) => {
  const [internalChecked, setInternalChecked] = useState(false);
  const checked = controlledChecked !== undefined ? controlledChecked : internalChecked;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newChecked = e.target.checked;
    if (controlledChecked === undefined) {
      setInternalChecked(newChecked);
    }
    onChange?.(newChecked);
  };

  return (
    <label className={\`flex items-center gap-3 cursor-pointer \${disabled ? 'opacity-50 cursor-not-allowed' : ''} \${className}\`}>
      <div className="relative">
        <input
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          disabled={disabled}
          className="sr-only"
        />
        <div className={\`w-6 h-6 border-3 border-neo-black bg-neo-white transition-all \${checked ? 'bg-neo-black' : ''}\`}>
          {checked && (
            <svg className="w-full h-full text-neo-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          )}
        </div>
      </div>
      {label && <span className="font-bold text-sm">{label}</span>}
    </label>
  );
};`,

    dependencies: ['react'],

    preview: {
      component: Checkbox,
      defaultProps: { label: 'I agree to terms', checked: true },
      previewHeight: 80,
    },

    filename: 'Checkbox.tsx',
    folder: 'forms',

    createdAt: new Date('2025-01-07'),
    updatedAt: new Date('2025-01-07'),
  },

  {
    id: 'select',
    title: 'Select',
    description: 'Dropdown select with custom arrow and styling',
    category: 'forms',
    tags: ['input', 'form', 'select', 'dropdown'],

    code: `export const Select = ({ label, options, value, onChange }) => (
  <div className="w-full">
    {label && <label className="block text-sm font-bold uppercase mb-2">{label}</label>}
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 border-3 border-neo-black bg-neo-white font-bold appearance-none"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="3" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  </div>
);`,

    codeRaw: `import React from 'react';

export interface SelectProps {
  label?: string;
  options: { value: string; label: string }[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

export const Select: React.FC<SelectProps> = ({
  label,
  options,
  value,
  onChange,
  placeholder = 'Select an option',
  disabled = false,
  className = '',
}) => {
  return (
    <div className={\`w-full \${className}\`}>
      {label && (
        <label className="block text-sm font-bold uppercase mb-2">
          {label}
        </label>
      )}
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          disabled={disabled}
          className="w-full px-4 py-3 border-3 border-neo-black bg-neo-white text-neo-black font-bold
                     appearance-none cursor-pointer
                     focus:outline-none focus:ring-0 focus:shadow-neo
                     disabled:opacity-50 disabled:cursor-not-allowed
                     transition-all duration-150"
        >
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="3" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  );
};`,

    dependencies: ['react'],

    preview: {
      component: Select,
      defaultProps: {
        label: 'Choose Option',
        options: [
          { value: '1', label: 'Option 1' },
          { value: '2', label: 'Option 2' },
          { value: '3', label: 'Option 3' },
        ],
      },
      previewHeight: 120,
    },

    filename: 'Select.tsx',
    folder: 'forms',

    createdAt: new Date('2025-01-07'),
    updatedAt: new Date('2025-01-07'),
  },

  {
    id: 'textarea',
    title: 'Textarea',
    description: 'Multi-line text input with validation states',
    category: 'forms',
    tags: ['input', 'form', 'text', 'area'],

    code: `export const Textarea = ({ label, placeholder, rows = 4 }) => (
  <div className="w-full">
    {label && <label className="block text-sm font-bold uppercase mb-2">{label}</label>}
    <textarea
      placeholder={placeholder}
      rows={rows}
      className="w-full px-4 py-3 border-3 border-neo-black bg-neo-white
                 focus:outline-none focus:shadow-neo transition-all resize-none"
    />
  </div>
);`,

    codeRaw: `import React from 'react';

export interface TextareaProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  rows?: number;
  error?: string;
  disabled?: boolean;
  className?: string;
}

export const Textarea: React.FC<TextareaProps> = ({
  label,
  placeholder,
  value,
  onChange,
  rows = 4,
  error,
  disabled = false,
  className = '',
}) => {
  return (
    <div className={\`w-full \${className}\`}>
      {label && (
        <label className="block text-sm font-bold uppercase mb-2">
          {label}
        </label>
      )}
      <textarea
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        disabled={disabled}
        className={\`w-full px-4 py-3 border-3 border-neo-black bg-neo-white text-neo-black
                   resize-none
                   focus:outline-none focus:ring-0 focus:border-neo-black focus:shadow-neo
                   disabled:opacity-50 disabled:cursor-not-allowed
                   transition-all duration-150
                   \${error ? 'border-red-500' : ''}\`}
      />
      {error && (
        <p className="text-red-500 text-sm mt-1 font-bold">{error}</p>
      )}
    </div>
  );
};`,

    dependencies: ['react'],

    preview: {
      component: Textarea,
      defaultProps: { label: 'Message', placeholder: 'Type your message here...' },
      previewHeight: 160,
    },

    filename: 'Textarea.tsx',
    folder: 'forms',

    createdAt: new Date('2025-01-07'),
    updatedAt: new Date('2025-01-07'),
  },

  {
    id: 'blog-card',
    title: 'Blog Card',
    description: 'Blog post card with image, title, description, and metadata',
    category: 'data-display',
    tags: ['card', 'blog', 'content', 'display'],

    code: `export const BlogCard = ({ title, description, author, date }) => (
  <div className="border-4 border-neo-black bg-neo-white shadow-neo
                  hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-neo-md
                  transition-all cursor-pointer">
    <div className="p-6">
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-neo-gray-600 mb-4">{description}</p>
      <div className="flex gap-4 text-sm text-neo-gray-500">
        {author && <span className="font-bold">{author}</span>}
        {date && <span>{date}</span>}
      </div>
    </div>
  </div>
);`,

    codeRaw: `import React from 'react';

export interface BlogCardProps {
  title: string;
  description: string;
  image?: string;
  author?: string;
  date?: string;
  onClick?: () => void;
  className?: string;
}

export const BlogCard: React.FC<BlogCardProps> = ({
  title,
  description,
  image,
  author,
  date,
  onClick,
  className = '',
}) => {
  return (
    <div
      className={\`border-4 border-neo-black bg-neo-white shadow-neo
                 hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-neo-md
                 transition-all duration-150 cursor-pointer \${className}\`}
      onClick={onClick}
    >
      {image && (
        <div className="w-full h-48 bg-neo-gray-200 border-b-4 border-neo-black overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-neo-gray-600 mb-4">{description}</p>
        {(author || date) && (
          <div className="flex items-center gap-4 text-sm text-neo-gray-500">
            {author && <span className="font-bold">{author}</span>}
            {date && <span>{date}</span>}
          </div>
        )}
      </div>
    </div>
  );
};`,

    dependencies: ['react'],

    preview: {
      component: BlogCard,
      defaultProps: {
        title: 'Getting Started with Boxes',
        description: 'Learn how to use neo-brutalist components in your React projects.',
        author: 'John Doe',
        date: '2025-01-01',
      },
      previewHeight: 200,
    },

    filename: 'BlogCard.tsx',
    folder: 'data-display',

    createdAt: new Date('2025-01-05'),
    updatedAt: new Date('2025-01-05'),
  },

  {
    id: 'status-badge',
    title: 'Status Badge',
    description: 'Status/category badge component with color variants',
    category: 'feedback',
    tags: ['badge', 'status', 'label', 'indicator'],

    code: `export const StatusBadge = ({ children, variant = 'default' }) => {
  const variants = {
    default: 'bg-neo-gray-100 border-neo-black',
    success: 'bg-green-100 border-green-600',
    error: 'bg-red-100 border-red-600',
    warning: 'bg-yellow-100 border-yellow-600',
  };
  
  return (
    <span className={\`px-3 py-1 text-xs font-bold uppercase border-2 \${variants[variant]}\`}>
      {children}
    </span>
  );
};`,

    codeRaw: `import React from 'react';

export interface StatusBadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'error' | 'warning' | 'info';
  className?: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  children,
  variant = 'default',
  className = '',
}) => {
  const variantClasses = {
    default: 'bg-neo-gray-100 border-neo-black text-neo-black',
    success: 'bg-green-100 border-green-600 text-green-800',
    error: 'bg-red-100 border-red-600 text-red-800',
    warning: 'bg-yellow-100 border-yellow-600 text-yellow-800',
    info: 'bg-blue-100 border-blue-600 text-blue-800',
  };

  return (
    <span
      className={\`px-3 py-1 text-xs font-bold uppercase tracking-wider
                 border-2 border-neo-black inline-block
                 \${variantClasses[variant]} \${className}\`}
    >
      {children}
    </span>
  );
};`,

    dependencies: ['react'],

    preview: {
      component: StatusBadge,
      defaultProps: { children: 'Active', variant: 'success' },
      previewHeight: 80,
    },

    filename: 'StatusBadge.tsx',
    folder: 'feedback',

    createdAt: new Date('2025-01-06'),
    updatedAt: new Date('2025-01-06'),
  },

  {
    id: 'alert',
    title: 'Alert',
    description: 'Alert component for feedback messages with variants',
    category: 'feedback',
    tags: ['alert', 'feedback', 'message', 'notification'],

    code: `export const Alert = ({ variant = 'info', title, children, onClose }) => {
  const variants = {
    info: { bg: 'bg-blue-50', border: 'border-blue-600', text: 'text-blue-800', icon: Info },
    success: { bg: 'bg-green-50', border: 'border-green-600', text: 'text-green-800', icon: CheckCircle },
    warning: { bg: 'bg-yellow-50', border: 'border-yellow-600', text: 'text-yellow-800', icon: AlertTriangle },
    error: { bg: 'bg-red-50', border: 'border-red-600', text: 'text-red-800', icon: AlertCircle },
  };
  
  const config = variants[variant];
  const Icon = config.icon;

  return (
    <div className={\`\${config.bg} border-3 \${config.border} p-4\`}>
      <div className="flex items-start gap-3">
        <Icon className={\`\${config.text} flex-shrink-0\`} size={24} />
        <div className="flex-1">
          {title && <h4 className={\`font-bold text-sm uppercase mb-1 \${config.text}\`}>{title}</h4>}
          <div className={\`text-sm \${config.text}\`}>{children}</div>
        </div>
        {onClose && (
          <button onClick={onClose} className={\`\${config.text} hover:opacity-70\`}>
            <X size={20} />
          </button>
        )}
      </div>
    </div>
  );
};`,

    codeRaw: `import React from 'react';
import { AlertCircle, CheckCircle, Info, AlertTriangle, X } from 'lucide-react';

export interface AlertProps {
  variant?: 'info' | 'success' | 'warning' | 'error';
  title?: string;
  children: React.ReactNode;
  onClose?: () => void;
  className?: string;
}

export const Alert: React.FC<AlertProps> = ({
  variant = 'info',
  title,
  children,
  onClose,
  className = '',
}) => {
  const variants = {
    info: {
      bg: 'bg-blue-50',
      border: 'border-blue-600',
      text: 'text-blue-800',
      icon: Info,
    },
    success: {
      bg: 'bg-green-50',
      border: 'border-green-600',
      text: 'text-green-800',
      icon: CheckCircle,
    },
    warning: {
      bg: 'bg-yellow-50',
      border: 'border-yellow-600',
      text: 'text-yellow-800',
      icon: AlertTriangle,
    },
    error: {
      bg: 'bg-red-50',
      border: 'border-red-600',
      text: 'text-red-800',
      icon: AlertCircle,
    },
  };

  const config = variants[variant];
  const Icon = config.icon;

  return (
    <div className={\`\${config.bg} border-3 \${config.border} p-4 \${className}\`}>
      <div className="flex items-start gap-3">
        <Icon className={\`\${config.text} flex-shrink-0\`} size={24} />
        <div className="flex-1">
          {title && (
            <h4 className={\`font-bold text-sm uppercase mb-1 \${config.text}\`}>
              {title}
            </h4>
          )}
          <div className={\`text-sm \${config.text}\`}>{children}</div>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className={\`\${config.text} hover:opacity-70 transition-opacity flex-shrink-0\`}
            aria-label="Close alert"
          >
            <X size={20} />
          </button>
        )}
      </div>
    </div>
  );
};`,

    dependencies: ['react', 'lucide-react'],

    preview: {
      component: Alert,
      defaultProps: {
        variant: 'info',
        title: 'Did you know?',
        children: 'Boxes is fully customizable and open source.',
      },
      previewHeight: 120,
    },

    filename: 'Alert.tsx',
    folder: 'feedback',

    createdAt: new Date('2025-01-07'),
    updatedAt: new Date('2025-01-07'),
  },

  {
    id: 'progress-bar',
    title: 'Progress Bar',
    description: 'Progress indicator with percentage display',
    category: 'feedback',
    tags: ['progress', 'loading', 'status', 'bar'],

    code: `export const ProgressBar = ({ value, max = 100, label, showPercentage }) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
  
  return (
    <div className="w-full">
      {(label || showPercentage) && (
        <div className="flex items-center justify-between mb-2">
          {label && <span className="text-sm font-bold uppercase">{label}</span>}
          {showPercentage && <span className="text-sm font-bold">{Math.round(percentage)}%</span>}
        </div>
      )}
      <div className="w-full h-6 bg-neo-gray-200 border-3 border-neo-black overflow-hidden">
        <div
          className="h-full bg-neo-black transition-all duration-300 ease-out"
          style={{ width: \`\${percentage}%\` }}
        />
      </div>
    </div>
  );
};`,

    codeRaw: `import React from 'react';

export interface ProgressBarProps {
  value: number;
  max?: number;
  label?: string;
  showPercentage?: boolean;
  variant?: 'default' | 'success' | 'warning' | 'error';
  className?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max = 100,
  label,
  showPercentage = false,
  variant = 'default',
  className = '',
}) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  const variantColors = {
    default: 'bg-neo-black',
    success: 'bg-green-600',
    warning: 'bg-yellow-600',
    error: 'bg-red-600',
  };

  return (
    <div className={\`w-full \${className}\`}>
      {(label || showPercentage) && (
        <div className="flex items-center justify-between mb-2">
          {label && <span className="text-sm font-bold uppercase">{label}</span>}
          {showPercentage && (
            <span className="text-sm font-bold">{Math.round(percentage)}%</span>
          )}
        </div>
      )}
      <div className="w-full h-6 bg-neo-gray-200 border-3 border-neo-black overflow-hidden">
        <div
          className={\`h-full \${variantColors[variant]} transition-all duration-300 ease-out\`}
          style={{ width: \`\${percentage}%\` }}
        />
      </div>
    </div>
  );
};`,

    dependencies: ['react'],

    preview: {
      component: ProgressBar,
      defaultProps: { value: 65, label: 'Loading', showPercentage: true },
      previewHeight: 100,
    },

    filename: 'ProgressBar.tsx',
    folder: 'feedback',

    createdAt: new Date('2025-01-07'),
    updatedAt: new Date('2025-01-07'),
  },

  {
    id: 'avatar',
    title: 'Avatar',
    description: 'User avatar with image or fallback initials',
    category: 'data-display',
    tags: ['avatar', 'user', 'profile', 'image'],

    code: `export const Avatar = ({ src, alt, fallback, size = 'md' }) => {
  const sizes = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-12 h-12 text-sm',
    lg: 'w-16 h-16 text-base',
    xl: 'w-24 h-24 text-xl',
  };

  return (
    <div className={\`\${sizes[size]} border-3 border-neo-black bg-neo-gray-200 flex items-center justify-center overflow-hidden\`}>
      {src ? (
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      ) : (
        <span className="font-bold uppercase">{fallback}</span>
      )}
    </div>
  );
};`,

    codeRaw: `import React from 'react';

export interface AvatarProps {
  src?: string;
  alt?: string;
  fallback?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = 'Avatar',
  fallback = '?',
  size = 'md',
  className = '',
}) => {
  const sizes = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-12 h-12 text-sm',
    lg: 'w-16 h-16 text-base',
    xl: 'w-24 h-24 text-xl',
  };

  return (
    <div className={\`\${sizes[size]} border-3 border-neo-black bg-neo-gray-200 flex items-center justify-center overflow-hidden \${className}\`}>
      {src ? (
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      ) : (
        <span className="font-bold uppercase">{fallback}</span>
      )}
    </div>
  );
};`,

    dependencies: ['react'],

    preview: {
      component: Avatar,
      defaultProps: { fallback: 'JD', size: 'lg' },
      previewHeight: 100,
    },

    filename: 'Avatar.tsx',
    folder: 'data-display',

    createdAt: new Date('2025-01-07'),
    updatedAt: new Date('2025-01-07'),
  },

  {
    id: 'accordion-item',
    title: 'Accordion Item',
    description: 'Collapsible content section with smooth transition',
    category: 'data-display',
    tags: ['accordion', 'collapse', 'expand', 'content'],

    code: `export const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-3 border-neo-black bg-neo-white">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between font-bold uppercase text-left hover:bg-neo-gray-50"
      >
        <span>{title}</span>
        <ChevronDown size={24} className={\`transition-transform \${isOpen ? 'rotate-180' : ''}\`} />
      </button>
      {isOpen && (
        <div className="px-6 py-4 border-t-3 border-neo-black">
          {children}
        </div>
      )}
    </div>
  );
};`,

    codeRaw: `import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  children,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-3 border-neo-black bg-neo-white">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between font-bold uppercase text-left
                   hover:bg-neo-gray-50 transition-colors"
      >
        <span>{title}</span>
        <ChevronDown
          size={24}
          className={\`transition-transform duration-200 \${isOpen ? 'rotate-180' : ''}\`}
        />
      </button>
      {isOpen && (
        <div className="px-6 py-4 border-t-3 border-neo-black">
          {children}
        </div>
      )}
    </div>
  );
};`,

    dependencies: ['react', 'lucide-react'],

    preview: {
      component: AccordionItem,
      defaultProps: {
        title: 'Click to expand',
        children: 'This is the hidden content that is revealed when you click the header.',
      },
      previewHeight: 160,
    },

    filename: 'AccordionItem.tsx',
    folder: 'data-display',

    createdAt: new Date('2025-01-07'),
    updatedAt: new Date('2025-01-07'),
  },

  {
    id: 'tabs',
    title: 'Tabs',
    description: 'Tabbed interface for organizing content',
    category: 'navigation',
    tags: ['tabs', 'navigation', 'content', 'switch'],

    code: `export const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id);
  const activeContent = tabs.find((tab) => tab.id === activeTab)?.content;

  return (
    <div className="w-full">
      <div className="flex border-b-3 border-neo-black">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={\`px-6 py-3 font-bold uppercase text-sm border-r-3 border-neo-black last:border-r-0
                       \${activeTab === tab.id ? 'bg-neo-black text-neo-white' : 'bg-neo-white text-neo-black'}\`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-6 border-3 border-neo-black border-t-0 bg-neo-white">
        {activeContent}
      </div>
    </div>
  );
};`,

    codeRaw: `import React, { useState } from 'react';

export interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

export interface TabsProps {
  tabs: Tab[];
  defaultTab?: string;
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  defaultTab,
  className = '',
}) => {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  const activeContent = tabs.find((tab) => tab.id === activeTab)?.content;

  return (
    <div className={\`w-full \${className}\`}>
      {/* Tab Headers */}
      <div className="flex border-b-3 border-neo-black">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={\`px-6 py-3 font-bold uppercase text-sm border-r-3 border-neo-black last:border-r-0
                       transition-colors
                       \${activeTab === tab.id
                         ? 'bg-neo-black text-neo-white'
                         : 'bg-neo-white text-neo-black hover:bg-neo-gray-50'
                       }\`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-6 border-3 border-neo-black border-t-0 bg-neo-white">
        {activeContent}
      </div>
    </div>
  );
};`,

    dependencies: ['react'],

    preview: {
      component: Tabs,
      defaultProps: {
        tabs: [
          { id: 'tab1', label: 'Tab 1', content: 'Content for Tab 1' },
          { id: 'tab2', label: 'Tab 2', content: 'Content for Tab 2' },
          { id: 'tab3', label: 'Tab 3', content: 'Content for Tab 3' },
        ],
      },
      previewHeight: 200,
    },

    filename: 'Tabs.tsx',
    folder: 'navigation',

    createdAt: new Date('2025-01-07'),
    updatedAt: new Date('2025-01-07'),
  },
];

// Helper to get components by category
export const getComponentsByCategory = (category: string) => {
  return COMPONENTS.filter((c) => c.category === category);
};

// Helper to get featured components
export const getFeaturedComponents = () => {
  return COMPONENTS.filter((c) => c.featured);
};

// Helper to get trending components
export const getTrendingComponents = () => {
  return COMPONENTS.filter((c) => c.trending);
};
