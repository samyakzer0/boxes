
import React from 'react';
import { Home, Users, FileText, Bell, Settings, HelpCircle } from 'lucide-react';
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

// Phase 11.1
import { Toast } from '@/public-components/feedback/Toast';
import { Pagination } from '@/public-components/navigation/Pagination';
import { Table } from '@/public-components/data-display/Table';
import { DropdownMenu } from '@/public-components/navigation/DropdownMenu';

// Phase 11.2
import { DatePicker } from '@/public-components/forms/DatePicker';
import { TimePicker } from '@/public-components/forms/TimePicker';
import { FormValidation } from '@/public-components/forms/FormValidation';
import { ToggleSwitch } from '@/public-components/forms/ToggleSwitch';

// Phase 11.3
import { HeroSection } from '@/public-components/marketing/HeroSection';
import { PricingSection } from '@/public-components/marketing/PricingSection';
import { FeatureGrid } from '@/public-components/marketing/FeatureGrid';
import { AnnouncementBanner } from '@/public-components/marketing/AnnouncementBanner';
import { NewsletterSignup } from '@/public-components/marketing/NewsletterSignup';

// Phase 11.4
import { PricingCard } from '@/public-components/data-display/PricingCard';
import { ComparisonTable } from '@/public-components/data-display/ComparisonTable';
import { FileTree } from '@/public-components/data-display/FileTree';
import { Timeline } from '@/public-components/data-display/Timeline';
import { StatsCard } from '@/public-components/data-display/StatsCard';
import { CardGrid } from '@/public-components/data-display/CardGrid';

// Phase 11.5
import { VideoPlayer } from '@/public-components/media/VideoPlayer';
import { AudioPlayer } from '@/public-components/media/AudioPlayer';
import { Carousel } from '@/public-components/layout/Carousel';

// Phase 11.6
import { SignInForm } from '@/public-components/auth/SignInForm';
import { SignUpForm } from '@/public-components/auth/SignUpForm';
import { Breadcrumb } from '@/public-components/navigation/Breadcrumb';
import { SidebarNavigation } from '@/public-components/navigation/SidebarNavigation';

// Additional Components
import { ConfettiDemo } from '@/public-components/feedback/Confetti';
import { MarqueeDemo } from '@/public-components/data-display/Marquee';
import { DockDemo } from '@/public-components/navigation/Dock';
import { PixelImageDemo } from '@/public-components/media/PixelImage';
import { InteractiveHoverButtonDemo } from '@/public-components/buttons/InteractiveHoverButton';

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
      component: () => {
        const [checked, setChecked] = React.useState(false);
        return (
          <Checkbox 
            label="I agree to terms" 
            checked={checked} 
            onChange={(newChecked) => setChecked(newChecked)} 
          />
        );
      },
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
      previewHeight: 160,
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
  // Phase 11.1: High-Priority Components
  {
    id: 'toast',
    title: 'Toast Notification',
    description: 'Temporary notification message with auto-dismiss and positioning',
    category: 'feedback',
    tags: ['notification', 'alert', 'toast', 'message', 'feedback'],

    code: `export const Toast = ({ message, type, isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed bottom-4 right-4 flex items-center gap-3 px-6 py-4
                    border-3 border-neo-black bg-neo-white shadow-neo">
      <div className="font-bold">{message}</div>
      <button onClick={onClose}><X size={16} /></button>
    </div>
  );
};`,

    codeRaw: `import React, { useEffect } from 'react';
import { X, Check, AlertTriangle, Info, AlertCircle } from 'lucide-react';

export type ToastType = 'success' | 'error' | 'warning' | 'info';

export interface ToastProps {
    message: string;
    type?: ToastType;
    isOpen: boolean;
    onClose: () => void;
    duration?: number;
    position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
}

export const Toast: React.FC<ToastProps> = ({
    message,
    type = 'info',
    isOpen,
    onClose,
    duration = 3000,
    position = 'bottom-right'
}) => {
    useEffect(() => {
        if (isOpen && duration > 0) {
            const timer = setTimeout(onClose, duration);
            return () => clearTimeout(timer);
        }
    }, [isOpen, duration, onClose]);

    if (!isOpen) return null;

    const getIcon = () => {
        switch (type) {
            case 'success': return <Check className="w-5 h-5" />;
            case 'error': return <AlertCircle className="w-5 h-5" />;
            case 'warning': return <AlertTriangle className="w-5 h-5" />;
            case 'info': return <Info className="w-5 h-5" />;
        }
    };

    const getPositionClasses = () => {
        switch (position) {
            case 'top-right': return 'top-4 right-4';
            case 'top-left': return 'top-4 left-4';
            case 'bottom-right': return 'bottom-4 right-4';
            case 'bottom-left': return 'bottom-4 left-4';
        }
    };

    return (
        <div className={\`fixed \${getPositionClasses()} z-50 flex items-center gap-3 px-6 py-4
                        border-3 border-neo-black bg-neo-white shadow-neo animate-in fade-in slide-in-from-bottom-2\`}>
            <div className="p-1 border-2 border-neo-black bg-neo-black text-neo-white">
                {getIcon()}
            </div>
            <p className="font-bold">{message}</p>
            <button onClick={onClose} className="ml-2 hover:bg-neo-gray-100 p-1 transition-colors">
                <X className="w-4 h-4" />
            </button>
        </div>
    );
};`,

    dependencies: ['react', 'lucide-react'],

    preview: {
      component: () => {
        const [showToast, setShowToast] = React.useState(false);
        const [key, setKey] = React.useState(0);
        
        const handleShowToast = () => {
          setShowToast(false);
          setTimeout(() => {
            setKey(prev => prev + 1);
            setShowToast(true);
          }, 50);
        };
        
        return (
          <div className="relative w-full h-full flex items-center justify-center">
            <button
              onClick={handleShowToast}
              className="px-6 py-3 bg-neo-black text-neo-white font-bold uppercase
                         border-3 border-neo-black shadow-neo hover:translate-x-[2px]
                         hover:translate-y-[2px] hover:shadow-none transition-all"
            >
              Show Toast
            </button>
            {showToast && (
              <Toast
                key={key}
                message="Operation successful!"
                type="success"
                duration={3000}
                onClose={() => setShowToast(false)}
                position="bottom-right"
              />
            )}
          </div>
        );
      },
      defaultProps: {},
      previewHeight: 120,
    },

    filename: 'Toast.tsx',
    folder: 'feedback',

    createdAt: new Date('2025-01-08'),
    updatedAt: new Date('2025-01-08'),
  },

  {
    id: 'pagination',
    title: 'Pagination',
    description: 'Pagination controls with smart page truncation',
    category: 'navigation',
    tags: ['pagination', 'navigation', 'pages', 'list'],

    code: `export const Pagination = ({ currentPage, totalPages, onPageChange }) => (
  <div className="flex gap-2">
    <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>Prev</button>
    {/* Page numbers */}
    <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
  </div>
);`,

    codeRaw: `import React from 'react';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';

export interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    siblingCount?: number;
}

export const Pagination: React.FC<PaginationProps> = ({
    currentPage,
    totalPages,
    onPageChange,
    siblingCount = 1
}) => {
    const generatePagination = () => {
        const range = [];
        const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
        const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

        const shouldShowLeftDots = leftSiblingIndex > 2;
        const shouldShowRightDots = rightSiblingIndex < totalPages - 2;

        if (!shouldShowLeftDots && shouldShowRightDots) {
            const leftItemCount = 3 + 2 * siblingCount;
            const leftRange = Array.from({ length: leftItemCount }, (_, i) => i + 1);
            return [...leftRange, '...', totalPages];
        }

        if (shouldShowLeftDots && !shouldShowRightDots) {
            const rightItemCount = 3 + 2 * siblingCount;
            const rightRange = Array.from({ length: rightItemCount }, (_, i) => totalPages - rightItemCount + i + 1);
            return [1, '...', ...rightRange];
        }

        if (shouldShowLeftDots && shouldShowRightDots) {
            const middleRange = Array.from(
                { length: rightSiblingIndex - leftSiblingIndex + 1 },
                (_, i) => leftSiblingIndex + i
            );
            return [1, '...', ...middleRange, '...', totalPages];
        }

        return Array.from({ length: totalPages }, (_, i) => i + 1);
    };

    const pages = generatePagination();

    return (
        <div className="flex items-center gap-2">
            <button
                onClick={() => onPageChange(1)}
                disabled={currentPage === 1}
                className="p-2 border-3 border-neo-black bg-neo-white hover:bg-neo-gray-100
                           disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
                <ChevronsLeft className="w-5 h-5" />
            </button>
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-2 border-3 border-neo-black bg-neo-white hover:bg-neo-gray-100
                           disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
                <ChevronLeft className="w-5 h-5" />
            </button>

            {pages.map((page, index) => (
                <React.Fragment key={index}>
                    {page === '...' ? (
                        <span className="px-2 font-bold">...</span>
                    ) : (
                        <button
                            onClick={() => onPageChange(page as number)}
                            className={\`w-10 h-10 border-3 border-neo-black font-bold transition-all
                                       \${currentPage === page
                                    ? 'bg-neo-black text-neo-white'
                                    : 'bg-neo-white hover:bg-neo-gray-100'}\`}
                        >
                            {page}
                        </button>
                    )}
                </React.Fragment>
            ))}

            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="p-2 border-3 border-neo-black bg-neo-white hover:bg-neo-gray-100
                           disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
                <ChevronRight className="w-5 h-5" />
            </button>
            <button
                onClick={() => onPageChange(totalPages)}
                disabled={currentPage === totalPages}
                className="p-2 border-3 border-neo-black bg-neo-white hover:bg-neo-gray-100
                           disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
                <ChevronsRight className="w-5 h-5" />
            </button>
        </div>
    );
};`,

    dependencies: ['react', 'lucide-react'],

    preview: {
      component: Pagination,
      defaultProps: { currentPage: 1, totalPages: 10 },
      previewHeight: 250,
      previewOnClick: true,
    },

    filename: 'Pagination.tsx',
    folder: 'navigation',

    createdAt: new Date('2025-01-08'),
    updatedAt: new Date('2025-01-08'),
  },

  {
    id: 'table',
    title: 'Table',
    description: 'Data table with sorting and striped rows',
    category: 'data-display',
    tags: ['table', 'data', 'rows', 'columns', 'sort'],

    code: `export const Table = ({ columns, data }) => (
  <div className="overflow-x-auto border-3 border-neo-black">
    <table className="w-full">
      <thead>
        <tr className="bg-neo-black text-neo-white">
          {columns.map(col => <th key={col.key} className="p-4">{col.label}</th>)}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i} className="border-b-2 border-neo-black">
            {columns.map(col => <td key={col.key} className="p-4">{row[col.key]}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);`,

    codeRaw: `import React, { useState } from 'react';
import { ChevronUp, ChevronDown, ChevronsUpDown } from 'lucide-react';

export interface Column {
    key: string;
    label: string;
    sortable?: boolean;
}

export interface TableProps {
    columns: Column[];
    data: any[];
    striped?: boolean;
}

export const Table: React.FC<TableProps> = ({ columns, data, striped = true }) => {
    const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' } | null>(null);

    const handleSort = (key: string) => {
        let direction: 'asc' | 'desc' = 'asc';
        if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };

    const sortedData = React.useMemo(() => {
        if (!sortConfig) return data;
        return [...data].sort((a, b) => {
            if (a[sortConfig.key] < b[sortConfig.key]) {
                return sortConfig.direction === 'asc' ? -1 : 1;
            }
            if (a[sortConfig.key] > b[sortConfig.key]) {
                return sortConfig.direction === 'asc' ? 1 : -1;
            }
            return 0;
        });
    }, [data, sortConfig]);

    return (
        <div className="overflow-x-auto border-3 border-neo-black">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="bg-neo-black text-neo-white">
                        {columns.map((column) => (
                            <th
                                key={column.key}
                                className="p-4 font-bold uppercase text-sm border-r-2 border-neo-white last:border-r-0 cursor-pointer select-none"
                                onClick={() => column.sortable && handleSort(column.key)}
                            >
                                <div className="flex items-center gap-2">
                                    {column.label}
                                    {column.sortable && (
                                        <div className="flex flex-col">
                                            {sortConfig?.key === column.key ? (
                                                sortConfig.direction === 'asc' ? (
                                                    <ChevronUp className="w-4 h-4" />
                                                ) : (
                                                    <ChevronDown className="w-4 h-4" />
                                                )
                                            ) : (
                                                <ChevronsUpDown className="w-4 h-4 opacity-50" />
                                            )}
                                        </div>
                                    )}
                                </div>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {sortedData.map((row, rowIndex) => (
                        <tr
                            key={rowIndex}
                            className={\`border-b-2 border-neo-black last:border-b-0
                                       \${striped && rowIndex % 2 !== 0 ? 'bg-neo-gray-50' : 'bg-neo-white'}
                                       hover:bg-neo-gray-100 transition-colors\`}
                        >
                            {columns.map((column) => (
                                <td key={column.key} className="p-4 border-r-2 border-neo-black last:border-r-0">
                                    {row[column.key]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};`,

    dependencies: ['react', 'lucide-react'],

    preview: {
      component: Table,
      defaultProps: {
        columns: [
          { key: 'name', label: 'Name', sortable: true },
          { key: 'role', label: 'Role', sortable: true },
          { key: 'status', label: 'Status', sortable: false },
        ],
        data: [
          { name: 'John Doe', role: 'Admin', status: 'Active' },
          { name: 'Jane Smith', role: 'User', status: 'Inactive' },
          { name: 'Bob Johnson', role: 'Editor', status: 'Active' },
        ],
      },
      previewHeight: 300,
    },

    filename: 'Table.tsx',
    folder: 'data-display',

    createdAt: new Date('2025-01-08'),
    updatedAt: new Date('2025-01-08'),
  },

  {
    id: 'file-upload',
    title: 'File Upload',
    description: 'Drag and drop file upload with file list',
    category: 'forms',
    tags: ['file', 'upload', 'drag-drop', 'input', 'form'],

    code: `export const FileUpload = ({ onFilesSelected }) => (
  <div className="border-3 border-dashed border-neo-black p-8 text-center cursor-pointer hover:bg-neo-gray-50">
    <Upload className="w-12 h-12 mx-auto mb-4" />
    <p className="font-bold">Drag & Drop files here</p>
  </div>
);`,

    codeRaw: `import React, { useState, useRef } from 'react';
import { Upload, X, File, CheckCircle } from 'lucide-react';

export interface FileUploadProps {
    onFilesSelected: (files: File[]) => void;
    maxFiles?: number;
    accept?: string;
    maxSizeInMB?: number;
}

export const FileUpload: React.FC<FileUploadProps> = ({
    onFilesSelected,
    maxFiles = 5,
    accept,
    maxSizeInMB = 5
}) => {
    const [files, setFiles] = useState<File[]>([]);
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const validateFile = (file: File) => {
        if (maxSizeInMB && file.size > maxSizeInMB * 1024 * 1024) {
            alert(\`File \${file.name} is too large. Max size is \${maxSizeInMB}MB\`);
            return false;
        }
        return true;
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        const droppedFiles = Array.from(e.dataTransfer.files);
        const validFiles = droppedFiles.filter(validateFile);
        
        if (files.length + validFiles.length > maxFiles) {
            alert(\`You can only upload up to \${maxFiles} files\`);
            return;
        }

        const newFiles = [...files, ...validFiles];
        setFiles(newFiles);
        onFilesSelected(newFiles);
    };

    const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const selectedFiles = Array.from(e.target.files);
            const validFiles = selectedFiles.filter(validateFile);
            
            if (files.length + validFiles.length > maxFiles) {
                alert(\`You can only upload up to \${maxFiles} files\`);
                return;
            }

            const newFiles = [...files, ...validFiles];
            setFiles(newFiles);
            onFilesSelected(newFiles);
        }
    };

    const removeFile = (index: number) => {
        const newFiles = files.filter((_, i) => i !== index);
        setFiles(newFiles);
        onFilesSelected(newFiles);
    };

    return (
        <div className="w-full">
            <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className={\`border-3 border-dashed border-neo-black p-8 text-center cursor-pointer
                           transition-all duration-200
                           \${isDragging ? 'bg-neo-gray-100 scale-[1.02]' : 'bg-neo-white hover:bg-neo-gray-50'}\`}
            >
                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileInput}
                    multiple
                    accept={accept}
                    className="hidden"
                />
                <div className="w-16 h-16 bg-neo-black text-neo-white mx-auto mb-4 flex items-center justify-center rounded-full">
                    <Upload className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold uppercase mb-2">Drag & Drop Files</h3>
                <p className="text-neo-gray-600 mb-4">or click to browse</p>
                <p className="text-xs text-neo-gray-500 font-bold">
                    Max {maxFiles} files • Up to {maxSizeInMB}MB each
                </p>
            </div>

            {files.length > 0 && (
                <div className="mt-6 space-y-3">
                    {files.map((file, index) => (
                        <div key={index} className="flex items-center justify-between p-4 border-3 border-neo-black bg-neo-white">
                            <div className="flex items-center gap-3">
                                <File className="w-5 h-5 text-neo-gray-600" />
                                <div>
                                    <p className="font-bold text-sm">{file.name}</p>
                                    <p className="text-xs text-neo-gray-500">{(file.size / 1024).toFixed(1)} KB</p>
                                </div>
                            </div>
                            <button
                                onClick={() => removeFile(index)}
                                className="p-1 hover:bg-neo-gray-100 rounded-full transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};`,

    dependencies: ['react', 'lucide-react'],

    preview: {
      component: () => {
        return (
          <div className="w-full space-y-3">
            <div
              className="border-3 border-dashed border-neo-gray-400 bg-neo-gray-50 p-12 text-center opacity-60 cursor-not-allowed"
            >
              <div className="w-12 h-12 mx-auto mb-4 text-neo-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="17 8 12 3 7 8"></polyline>
                  <line x1="12" y1="3" x2="12" y2="15"></line>
                </svg>
              </div>
              <p className="font-bold mb-2 text-neo-gray-500">Click to upload or drag and drop</p>
              <p className="text-sm text-neo-gray-500">Any file type (Max 10MB)</p>
            </div>
            <div className="p-3 bg-neo-yellow-100 border-3 border-neo-black text-xs font-bold text-center">
              ⚠️ File upload disabled in preview mode
            </div>
          </div>
        );
      },
      previewHeight: 300,
    },

    filename: 'FileUpload.tsx',
    folder: 'forms',

    createdAt: new Date('2025-01-08'),
    updatedAt: new Date('2025-01-08'),
  },

  {
    id: 'dropdown-menu',
    title: 'Dropdown Menu',
    description: 'Dropdown menu with click-outside detection',
    category: 'navigation',
    tags: ['dropdown', 'menu', 'navigation', 'select'],

    code: `export const DropdownMenu = ({ trigger, items }) => (
  <div className="relative inline-block">
    <button className="px-6 py-3 border-3 border-neo-black bg-neo-white">{trigger}</button>
    <div className="absolute top-full mt-2 min-w-[200px] border-3 border-neo-black bg-neo-white">
      {items.map(item => (
        <button key={item.value} onClick={item.onClick} className="w-full px-6 py-3 text-left hover:bg-neo-black hover:text-neo-white">
          {item.label}
        </button>
      ))}
    </div>
  </div>
);`,

    codeRaw: `import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

export interface DropdownMenuItem {
    label: string;
    value: string;
    onClick?: () => void;
}

export interface DropdownMenuProps {
    trigger: React.ReactNode;
    items: DropdownMenuItem[];
    align?: 'left' | 'right';
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({
    trigger,
    items,
    align = 'left'
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="relative inline-block" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-6 py-3 border-3 border-neo-black bg-neo-white
                           font-bold uppercase text-sm shadow-neo hover:translate-x-[2px]
                           hover:translate-y-[2px] hover:shadow-none transition-all"
                aria-haspopup="true"
                aria-expanded={isOpen}
            >
                {trigger}
                <ChevronDown
                    className={\`w-5 h-5 transition-transform \${isOpen ? 'rotate-180' : ''}\`}
                />
            </button>

            {isOpen && (
                <div
                    className={\`absolute top-full mt-2 min-w-[200px] border-3 border-neo-black
                               bg-neo-white shadow-neo z-50 \${
                        align === 'right' ? 'right-0' : 'left-0'
                    }\`}
                >
                    {items.map((item, index) => (
                        <button
                            key={item.value}
                            onClick={() => {
                                item.onClick?.();
                                setIsOpen(false);
                            }}
                            className={\`w-full px-6 py-3 text-left font-bold text-sm
                                       hover:bg-neo-black hover:text-neo-white transition-colors \${
                                index < items.length - 1 ? 'border-b-2 border-neo-gray-300' : ''
                            }\`}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};`,

    dependencies: ['react', 'lucide-react'],

    preview: {
      component: DropdownMenu,
      defaultProps: {
        trigger: 'Options',
        items: [
          { label: 'Profile', value: 'profile' },
          { label: 'Settings', value: 'settings' },
          { label: 'Logout', value: 'logout' },
        ],
      },
      previewHeight: 200,
    },

    filename: 'DropdownMenu.tsx',
    folder: 'navigation',

    createdAt: new Date('2025-01-08'),
    updatedAt: new Date('2025-01-08'),
  },

  // Phase 11.2: Forms & Input
  {
    id: 'date-picker',
    title: 'Date Picker',
    description: 'Date input with min/max constraints',
    category: 'forms',
    tags: ['date', 'picker', 'input', 'calendar', 'form'],

    code: `export const DatePicker = ({ value, onChange }) => (
  <input type="date" value={value} onChange={e => onChange(e.target.value)}
         className="px-4 py-3 border-3 border-neo-black font-bold w-full" />
);`,

    codeRaw: `import React from 'react';

export interface DatePickerProps {
    value?: string;
    onChange: (date: string) => void;
    min?: string;
    max?: string;
    disabled?: boolean;
}

export const DatePicker: React.FC<DatePickerProps> = ({
    value,
    onChange,
    min,
    max,
    disabled = false
}) => {
    return (
        <input
            type="date"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            min={min}
            max={max}
            disabled={disabled}
            className="px-4 py-3 border-3 border-neo-black font-bold w-full
                       focus:outline-none focus:ring-4 focus:ring-neo-gray-300
                       disabled:opacity-50 disabled:cursor-not-allowed"
        />
    );
};`,

    dependencies: ['react'],

    preview: {
      component: DatePicker,
      defaultProps: { value: '2025-01-01' },
      previewHeight: 100,
    },

    filename: 'DatePicker.tsx',
    folder: 'forms',

    createdAt: new Date('2025-01-08'),
    updatedAt: new Date('2025-01-08'),
  },

  {
    id: 'time-picker',
    title: 'Time Picker',
    description: 'Time input field',
    category: 'forms',
    tags: ['time', 'picker', 'input', 'clock', 'form'],

    code: `export const TimePicker = ({ value, onChange }) => (
  <input type="time" value={value} onChange={e => onChange(e.target.value)}
         className="px-4 py-3 border-3 border-neo-black font-bold w-full" />
);`,

    codeRaw: `import React from 'react';

export interface TimePickerProps {
    value?: string;
    onChange: (time: string) => void;
    disabled?: boolean;
}

export const TimePicker: React.FC<TimePickerProps> = ({
    value,
    onChange,
    disabled = false
}) => {
    return (
        <input
            type="time"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            disabled={disabled}
            className="px-4 py-3 border-3 border-neo-black font-bold w-full
                       focus:outline-none focus:ring-4 focus:ring-neo-gray-300
                       disabled:opacity-50 disabled:cursor-not-allowed"
        />
    );
};`,

    dependencies: ['react'],

    preview: {
      component: TimePicker,
      defaultProps: { value: '12:00' },
      previewHeight: 100,
    },

    filename: 'TimePicker.tsx',
    folder: 'forms',

    createdAt: new Date('2025-01-08'),
    updatedAt: new Date('2025-01-08'),
  },

  {
    id: 'form-validation',
    title: 'Form Validation',
    description: 'Example form with real-time validation',
    category: 'forms',
    tags: ['form', 'validation', 'error', 'input'],

    code: `export const FormValidation = ({ onSubmit }) => (
  <form onSubmit={onSubmit} className="border-4 border-neo-black p-8">
    <input className="border-3 border-neo-black" required />
    <button type="submit" className="bg-neo-black text-neo-white">Submit</button>
  </form>
);`,

    codeRaw: `import React, { useState } from 'react';

export interface FormValidationProps {
    onSubmit: (data: Record<string, string>) => void;
}

export const FormValidation: React.FC<FormValidationProps> = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: '',
        website: ''
    });
    const [errors, setErrors] = useState<Record<string, string>>({});

    const validate = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Invalid email format';
        }

        if (formData.age && (isNaN(Number(formData.age)) || Number(formData.age) < 0)) {
            newErrors.age = 'Age must be a positive number';
        }

        if (formData.website && !/^https?:\/\/.+/.test(formData.website)) {
            newErrors.website = 'Website must start with http:// or https://';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            onSubmit(formData);
        }
    };

    return (
        <div className="border-4 border-neo-black bg-neo-white p-8 max-w-md">
            <h3 className="text-2xl font-bold uppercase mb-6">Form with Validation</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block font-bold mb-2 uppercase text-sm">
                        Name *
                    </label>
                    <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={\`w-full px-4 py-3 border-3 font-bold focus:outline-none
                                   focus:ring-4 focus:ring-neo-gray-300 \${
                            errors.name ? 'border-red-500' : 'border-neo-black'
                        }\`}
                    />
                    {errors.name && (
                        <p className="text-red-600 text-sm font-bold mt-1">{errors.name}</p>
                    )}
                </div>

                <div>
                    <label className="block font-bold mb-2 uppercase text-sm">
                        Email *
                    </label>
                    <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={\`w-full px-4 py-3 border-3 font-bold focus:outline-none
                                   focus:ring-4 focus:ring-neo-gray-300 \${
                            errors.email ? 'border-red-500' : 'border-neo-black'
                        }\`}
                    />
                    {errors.email && (
                        <p className="text-red-600 text-sm font-bold mt-1">{errors.email}</p>
                    )}
                </div>

                <div>
                    <label className="block font-bold mb-2 uppercase text-sm">
                        Age
                    </label>
                    <input
                        type="number"
                        value={formData.age}
                        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                        className={\`w-full px-4 py-3 border-3 font-bold focus:outline-none
                                   focus:ring-4 focus:ring-neo-gray-300 \${
                            errors.age ? 'border-red-500' : 'border-neo-black'
                        }\`}
                    />
                    {errors.age && (
                        <p className="text-red-600 text-sm font-bold mt-1">{errors.age}</p>
                    )}
                </div>

                <div>
                    <label className="block font-bold mb-2 uppercase text-sm">
                        Website
                    </label>
                    <input
                        type="url"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        placeholder="https://example.com"
                        className={\`w-full px-4 py-3 border-3 font-bold focus:outline-none
                                   focus:ring-4 focus:ring-neo-gray-300 \${
                            errors.website ? 'border-red-500' : 'border-neo-black'
                        }\`}
                    />
                    {errors.website && (
                        <p className="text-red-600 text-sm font-bold mt-1">{errors.website}</p>
                    )}
                </div>

                <button
                    type="submit"
                    className="w-full px-6 py-3 bg-neo-black text-neo-white font-bold uppercase
                               border-3 border-neo-black shadow-neo hover:translate-x-[2px]
                               hover:translate-y-[2px] hover:shadow-none transition-all"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};`,

    dependencies: ['react'],

    preview: {
      component: FormValidation,
      defaultProps: { onSubmit: (data: any) => alert(JSON.stringify(data)) },
      previewHeight: 250,
      previewOnClick: true,
    },

    filename: 'FormValidation.tsx',
    folder: 'forms',

    createdAt: new Date('2025-01-08'),
    updatedAt: new Date('2025-01-08'),
  },

  {
    id: 'toggle-switch',
    title: 'Toggle Switch',
    description: 'Switch toggle for boolean states',
    category: 'forms',
    tags: ['switch', 'toggle', 'checkbox', 'boolean', 'form'],

    code: `export const ToggleSwitch = ({ checked, onChange, label }) => (
  <label className="flex items-center gap-3 cursor-pointer">
    <div className={\`w-14 h-8 border-3 border-neo-black \${checked ? 'bg-neo-black' : 'bg-neo-white'}\`}>
      <div className={\`w-6 h-6 border-2 border-neo-black bg-neo-white transition-transform
                     \${checked ? 'translate-x-6' : 'translate-x-0'}\`} />
    </div>
    {label && <span>{label}</span>}
  </label>
);`,

    codeRaw: `import React, { useState } from 'react';

export interface ToggleSwitchProps {
    checked?: boolean;
    onChange: (checked: boolean) => void;
    label?: string;
    disabled?: boolean;
}

export const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
    checked = false,
    onChange,
    label,
    disabled = false
}) => {
    return (
        <label className={\`flex items-center gap-3 \${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}\`}>
            <div className="relative">
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={(e) => !disabled && onChange(e.target.checked)}
                    disabled={disabled}
                    className="sr-only"
                />
                <div
                    className={\`w-14 h-8 border-3 border-neo-black transition-colors \${
                        checked ? 'bg-neo-black' : 'bg-neo-white'
                    }\`}
                >
                    <div
                        className={\`w-6 h-6 border-2 border-neo-black bg-neo-white transition-transform \${
                            checked ? 'translate-x-6' : 'translate-x-0'
                        }\`}
                        style={{ marginTop: '1px', marginLeft: '1px' }}
                    />
                </div>
            </div>
            {label && <span className="font-bold">{label}</span>}
        </label>
    );
};`,

    dependencies: ['react'],

    preview: {
      component: () => {
        const [checked, setChecked] = React.useState(true);
        return <ToggleSwitch label="Enable Notifications" checked={checked} onChange={setChecked} />;
      },
      previewHeight: 100,
    },

    filename: 'ToggleSwitch.tsx',
    folder: 'forms',

    createdAt: new Date('2025-01-08'),
    updatedAt: new Date('2025-01-08'),
  },

  // Phase 11.3: Marketing & Sections
  {
    id: 'hero-section',
    title: 'Hero Section',
    description: 'Large hero section with title, subtitle, and CTAs',
    category: 'marketing',
    tags: ['hero', 'landing', 'header', 'marketing'],

    code: `export const HeroSection = ({ title, subtitle, ctaText }) => (
  <div className="border-4 border-neo-black bg-neo-white p-20 text-center">
    <h1 className="text-6xl font-bold mb-6">{title}</h1>
    <p className="text-xl mb-10">{subtitle}</p>
    <button className="px-8 py-4 bg-neo-black text-neo-white font-bold">{ctaText}</button>
  </div>
);`,

    codeRaw: `import React from 'react';
import { ArrowRight } from 'lucide-react';

export interface HeroSectionProps {
    title: string;
    subtitle: string;
    ctaText: string;
    onCtaClick: () => void;
    secondaryCtaText?: string;
    onSecondaryCtaClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
    title,
    subtitle,
    ctaText,
    onCtaClick,
    secondaryCtaText,
    onSecondaryCtaClick
}) => {
    return (
        <div className="border-4 border-neo-black bg-neo-white p-12 md:p-20 text-center">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 uppercase">
                {title}
            </h1>
            <p className="text-lg md:text-xl text-neo-gray-700 mb-10 max-w-2xl mx-auto">
                {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                    onClick={onCtaClick}
                    className="px-8 py-4 bg-neo-black text-neo-white font-bold uppercase
                               border-3 border-neo-black shadow-neo hover:translate-x-[2px]
                               hover:translate-y-[2px] hover:shadow-none transition-all
                               flex items-center justify-center gap-2"
                >
                    {ctaText}
                    <ArrowRight className="w-5 h-5" />
                </button>
                {secondaryCtaText && onSecondaryCtaClick && (
                    <button
                        onClick={onSecondaryCtaClick}
                        className="px-8 py-4 bg-neo-white text-neo-black font-bold uppercase
                                   border-3 border-neo-black shadow-neo hover:translate-x-[2px]
                                   hover:translate-y-[2px] hover:shadow-none transition-all"
                    >
                        {secondaryCtaText}
                    </button>
                )}
            </div>
        </div>
    );
};`,

    dependencies: ['react', 'lucide-react'],

    preview: {
      component: HeroSection,
      defaultProps: {
        title: 'Build Something Amazing',
        subtitle: 'Create stunning interfaces with our component library.',
        ctaText: 'Get Started',
        secondaryCtaText: 'Learn More',
      },
      previewHeight: 250,
      previewOnClick: true,
    },

    filename: 'HeroSection.tsx',
    folder: 'marketing',

    createdAt: new Date('2025-01-08'),
    updatedAt: new Date('2025-01-08'),
  },

  {
    id: 'pricing-section',
    title: 'Pricing Section',
    description: 'Pricing tiers with highlighting',
    category: 'marketing',
    tags: ['pricing', 'marketing', 'plans', 'tiers'],

    code: `export const PricingSection = ({ tiers }) => (
  <div className="grid grid-cols-3 gap-6">
    {tiers.map(tier => (
      <div className="border-4 border-neo-black p-8">
        <h3>{tier.name}</h3>
        <p>{tier.price}</p>
      </div>
    ))}
  </div>
);`,

    codeRaw: `import React from 'react';
import { Check } from 'lucide-react';

export interface PricingTier {
    name: string;
    price: string;
    period: string;
    features: string[];
    highlighted?: boolean;
}

export interface PricingSectionProps {
    tiers: PricingTier[];
    onSelectPlan: (tierName: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
    tiers,
    onSelectPlan
}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tiers.map((tier) => (
                <div
                    key={tier.name}
                    className={\`border-4 border-neo-black p-8 \${
                        tier.highlighted ? 'bg-neo-black text-neo-white' : 'bg-neo-white'
                    }\`}
                >
                    <h3 className="text-2xl font-bold uppercase mb-2">{tier.name}</h3>
                    <div className="mb-6">
                        <span className="text-4xl font-bold">{tier.price}</span>
                        <span className={\`text-sm \${tier.highlighted ? 'text-neo-gray-300' : 'text-neo-gray-600'}\`}>
                            /{tier.period}
                        </span>
                    </div>
                    <ul className="space-y-3 mb-8">
                        {tier.features.map((feature, index) => (
                            <li key={index} className="flex items-start gap-2">
                                <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                                <span className="text-sm">{feature}</span>
                            </li>
                        ))}
                    </ul>
                    <button
                        onClick={() => onSelectPlan(tier.name)}
                        className={\`w-full px-6 py-3 font-bold uppercase border-3 transition-all \${
                            tier.highlighted
                                ? 'bg-neo-white text-neo-black border-neo-white'
                                : 'bg-neo-black text-neo-white border-neo-black'
                        } shadow-neo hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none\`}
                    >
                        Choose Plan
                    </button>
                </div>
            ))}
        </div>
    );
};`,

    dependencies: ['react', 'lucide-react'],

    preview: {
      component: PricingSection,
      defaultProps: {
        tiers: [
          { name: 'Basic', price: '$9', period: 'mo', features: ['5 Projects', 'Basic Support'] },
          { name: 'Pro', price: '$29', period: 'mo', features: ['Unlimited Projects', 'Priority Support'], highlighted: true },
          { name: 'Enterprise', price: '$99', period: 'mo', features: ['Custom Solutions', '24/7 Support'] },
        ],
      },
      previewHeight: 250,
      previewOnClick: true,
    },

    filename: 'PricingSection.tsx',
    folder: 'marketing',

    createdAt: new Date('2025-01-08'),
    updatedAt: new Date('2025-01-08'),
  },

  {
    id: 'feature-grid',
    title: 'Feature Grid',
    description: 'Grid of feature cards with icons',
    category: 'marketing',
    tags: ['features', 'grid', 'marketing', 'cards'],

    code: `export const FeatureGrid = ({ features }) => (
  <div className="grid grid-cols-3 gap-6">
    {features.map(f => (
      <div className="border-3 border-neo-black p-6">
        <h3>{f.title}</h3>
        <p>{f.description}</p>
      </div>
    ))}
  </div>
);`,

    codeRaw: `import React from 'react';

export interface Feature {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export interface FeatureGridProps {
    features: Feature[];
}

export const FeatureGrid: React.FC<FeatureGridProps> = ({ features }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
                <div
                    key={index}
                    className="border-3 border-neo-black bg-neo-white p-6 hover:translate-x-[2px]
                               hover:translate-y-[2px] hover:shadow-none shadow-neo transition-all"
                >
                    <div className="w-12 h-12 border-3 border-neo-black bg-neo-black text-neo-white
                                    flex items-center justify-center mb-4">
                        {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2 uppercase">{feature.title}</h3>
                    <p className="text-neo-gray-700">{feature.description}</p>
                </div>
            ))}
        </div>
    );
};`,

    dependencies: ['react'],

    preview: {
      component: FeatureGrid,
      defaultProps: {
        features: [
          { title: 'Fast', description: 'Blazing fast performance.', icon: '⚡' },
          { title: 'Secure', description: 'Enterprise-grade security.', icon: '🔒' },
          { title: 'Scalable', description: 'Grows with your business.', icon: '📈' },
        ],
      },
      previewHeight: 250,
      previewOnClick: true,
    },

    filename: 'FeatureGrid.tsx',
    folder: 'marketing',

    createdAt: new Date('2025-01-08'),
    updatedAt: new Date('2025-01-08'),
  },

  {
    id: 'announcement-banner',
    title: 'Announcement Banner',
    description: 'Top banner for announcements',
    category: 'marketing',
    tags: ['banner', 'announcement', 'marketing', 'alert'],

    code: `export const AnnouncementBanner = ({ message }) => (
  <div className="bg-neo-black text-neo-white p-3 flex justify-between">
    <span>{message}</span>
    <button><X /></button>
  </div>
);`,

    codeRaw: `import React from 'react';
import { X } from 'lucide-react';

export interface AnnouncementBannerProps {
    message: string;
    actionText?: string;
    onAction?: () => void;
    onClose?: () => void;
}

export const AnnouncementBanner: React.FC<AnnouncementBannerProps> = ({
    message,
    actionText,
    onAction,
    onClose
}) => {
    return (
        <div className="border-b-3 border-neo-black bg-neo-black text-neo-white px-4 py-3">
            <div className="container-neo flex items-center justify-between gap-4">
                <p className="font-bold text-sm flex-1">{message}</p>
                <div className="flex items-center gap-3">
                    {actionText && onAction && (
                        <button
                            onClick={onAction}
                            className="px-4 py-2 bg-neo-white text-neo-black font-bold uppercase
                                       text-xs border-2 border-neo-white hover:bg-neo-gray-100
                                       transition-colors"
                        >
                            {actionText}
                        </button>
                    )}
                    {onClose && (
                        <button
                            onClick={onClose}
                            className="p-1 hover:bg-neo-gray-800 transition-colors"
                            aria-label="Close banner"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};`,

    dependencies: ['react', 'lucide-react'],

    preview: {
      component: AnnouncementBanner,
      defaultProps: { message: 'New version available!', actionText: 'Update' },
      previewHeight: 80,
    },

    filename: 'AnnouncementBanner.tsx',
    folder: 'marketing',

    createdAt: new Date('2025-01-08'),
    updatedAt: new Date('2025-01-08'),
  },

  {
    id: 'newsletter-signup',
    title: 'Newsletter Signup',
    description: 'Newsletter subscription form',
    category: 'marketing',
    tags: ['newsletter', 'form', 'signup', 'marketing'],

    code: `export const NewsletterSignup = ({ onSubmit }) => (
  <div className="border-3 border-neo-black p-8">
    <h3>Subscribe</h3>
    <form className="flex gap-3">
      <input type="email" className="border-3 border-neo-black flex-1" />
      <button className="bg-neo-black text-neo-white px-6">Subscribe</button>
    </form>
  </div>
);`,

    codeRaw: `import React, { useState } from 'react';
import { Mail } from 'lucide-react';

export interface NewsletterSignupProps {
    onSubmit: (email: string) => void;
    title?: string;
    description?: string;
}

export const NewsletterSignup: React.FC<NewsletterSignupProps> = ({
    onSubmit,
    title = 'Subscribe to our newsletter',
    description = 'Get the latest updates delivered to your inbox'
}) => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            onSubmit(email);
            setEmail('');
        }
    };

    return (
        <div className="border-3 border-neo-black bg-neo-white p-8">
            <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 border-3 border-neo-black bg-neo-black text-neo-white
                                flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6" />
                </div>
                <div>
                    <h3 className="text-2xl font-bold uppercase mb-2">{title}</h3>
                    <p className="text-neo-gray-700">{description}</p>
                </div>
            </div>
            <form onSubmit={handleSubmit} className="flex gap-3">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="flex-1 px-4 py-3 border-3 border-neo-black font-bold
                               placeholder:text-neo-gray-500 focus:outline-none focus:ring-4
                               focus:ring-neo-gray-300"
                />
                <button
                    type="submit"
                    className="px-6 py-3 bg-neo-black text-neo-white font-bold uppercase
                               border-3 border-neo-black shadow-neo hover:translate-x-[2px]
                               hover:translate-y-[2px] hover:shadow-none transition-all"
                >
                    Subscribe
                </button>
            </form>
        </div>
    );
};`,

    dependencies: ['react', 'lucide-react'],

    preview: {
      component: NewsletterSignup,
      defaultProps: { 
        onSubmit: (email: string) => alert(email),
        title: 'Subscribe to our newsletter',
        description: 'Get the latest updates delivered to your inbox'
      },
      previewHeight: 250,
      previewOnClick: true,
    },

    filename: 'NewsletterSignup.tsx',
    folder: 'marketing',

    createdAt: new Date('2025-01-08'),
    updatedAt: new Date('2025-01-08'),
  },

  // Phase 11.4: Data Display
  {
    id: 'pricing-card',
    title: 'Pricing Card',
    description: 'Individual pricing card with features list',
    category: 'data-display',
    tags: ['pricing', 'card', 'cost', 'plan', 'data-display'],

    code: `export const PricingCard = ({ name, price, features }) => (
  <div className="border-4 border-neo-black p-8">
    <h3 className="text-2xl font-bold">{name}</h3>
    <div className="text-4xl font-bold my-4">{price}</div>
    <ul>
      {features.map(f => <li key={f}>{f}</li>)}
    </ul>
    <button className="w-full mt-6 bg-neo-black text-neo-white py-3">Choose</button>
  </div>
);`,

    codeRaw: `import React from 'react';
import { Check } from 'lucide-react';

export interface PricingCardProps {
    name: string;
    price: string;
    period?: string;
    description?: string;
    features: string[];
    isPopular?: boolean;
    ctaText?: string;
    onCtaClick?: () => void;
}

export const PricingCard: React.FC<PricingCardProps> = ({
    name,
    price,
    period = '/mo',
    description,
    features,
    isPopular = false,
    ctaText = 'Get Started',
    onCtaClick
}) => {
    return (
        <div className={\`relative border-4 border-neo-black p-8 bg-neo-white transition-transform hover:-translate-y-1
                       \${isPopular ? 'shadow-neo-lg' : 'shadow-neo'}\`}>
            {isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-neo-black text-neo-white
                              px-4 py-1 font-bold uppercase text-sm border-2 border-neo-black">
                    Most Popular
                </div>
            )}
            
            <h3 className="text-2xl font-bold uppercase mb-2">{name}</h3>
            {description && <p className="text-neo-gray-600 mb-6">{description}</p>}
            
            <div className="mb-8">
                <span className="text-5xl font-bold">{price}</span>
                <span className="text-neo-gray-500 font-bold">{period}</span>
            </div>

            <ul className="space-y-4 mb-8">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                        <div className="p-0.5 bg-neo-black text-neo-white rounded-full mt-0.5">
                            <Check className="w-3 h-3" />
                        </div>
                        <span className="font-medium">{feature}</span>
                    </li>
                ))}
            </ul>

            <button
                onClick={onCtaClick}
                className={\`w-full py-4 font-bold uppercase border-3 transition-all
                           hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none
                           \${isPopular 
                               ? 'bg-neo-black text-neo-white border-neo-black shadow-neo' 
                               : 'bg-neo-white text-neo-black border-neo-black shadow-neo'}\`}
            >
                {ctaText}
            </button>
        </div>
    );
};`,

    dependencies: ['react', 'lucide-react'],

    preview: {
      component: PricingCard,
      defaultProps: {
        name: 'Pro Plan',
        price: '$49',
        features: ['Unlimited Projects', 'Priority Support', 'Advanced Analytics'],
        isPopular: true,
      },
      previewHeight: 250,
      previewOnClick: true,
    },

    filename: 'PricingCard.tsx',
    folder: 'data-display',

    createdAt: new Date('2025-01-08'),
    updatedAt: new Date('2025-01-08'),
  },

  {
    id: 'comparison-table',
    title: 'Comparison Table',
    description: 'Feature comparison table for plans or products',
    category: 'data-display',
    tags: ['comparison', 'table', 'features', 'pricing', 'data-display'],

    code: `export const ComparisonTable = ({ features, plans }) => (
  <table className="w-full border-3 border-neo-black">
    <thead>
      <tr>
        <th>Feature</th>
        {plans.map(p => <th key={p}>{p}</th>)}
      </tr>
    </thead>
    <tbody>
      {features.map(f => (
        <tr key={f.name}>
          <td>{f.name}</td>
          {plans.map(p => <td>{f.values[p] ? 'Yes' : 'No'}</td>)}
        </tr>
      ))}
    </tbody>
  </table>
);`,

    codeRaw: `import React from 'react';
import { Check, X, Minus } from 'lucide-react';

export interface ComparisonFeature {
    name: string;
    values: Record<string, boolean | string>;
}

export interface ComparisonTableProps {
    plans: string[];
    features: ComparisonFeature[];
    highlightedPlan?: string;
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({
    plans,
    features,
    highlightedPlan
}) => {
    const renderValue = (value: boolean | string) => {
        if (typeof value === 'boolean') {
            return value ? (
                <Check className="w-6 h-6 text-neo-black mx-auto" />
            ) : (
                <Minus className="w-6 h-6 text-neo-gray-400 mx-auto" />
            );
        }
        return <span className="font-bold">{value}</span>;
    };

    return (
        <div className="overflow-x-auto border-3 border-neo-black">
            <table className="w-full min-w-[600px] border-collapse">
                <thead>
                    <tr>
                        <th className="p-4 bg-neo-gray-100 border-b-3 border-r-3 border-neo-black text-left w-1/4">
                            Feature
                        </th>
                        {plans.map((plan) => (
                            <th
                                key={plan}
                                className={\`p-4 border-b-3 border-r-3 border-neo-black last:border-r-0 text-center uppercase
                                           \${plan === highlightedPlan ? 'bg-neo-black text-neo-white' : 'bg-neo-white'}\`}
                            >
                                {plan}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {features.map((feature, index) => (
                        <tr key={index} className="hover:bg-neo-gray-50 transition-colors">
                            <td className="p-4 border-b-2 border-r-3 border-neo-black font-bold bg-neo-white">
                                {feature.name}
                            </td>
                            {plans.map((plan) => (
                                <td
                                    key={plan}
                                    className={\`p-4 border-b-2 border-r-3 border-neo-black last:border-r-0 text-center
                                               \${plan === highlightedPlan ? 'bg-neo-gray-50' : 'bg-neo-white'}\`}
                                >
                                    {renderValue(feature.values[plan])}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};`,

    dependencies: ['react', 'lucide-react'],

    preview: {
      component: ComparisonTable,
      defaultProps: {
        plans: ['Basic', 'Pro', 'Enterprise'],
        features: [
          { name: 'Users', values: { Basic: '1', Pro: '5', Enterprise: 'Unlimited' } },
          { name: 'Storage', values: { Basic: '5GB', Pro: '50GB', Enterprise: '1TB' } },
          { name: 'Support', values: { Basic: false, Pro: true, Enterprise: true } },
        ],
        highlightedPlan: 'Pro',
      },
      previewHeight: 400,
    },

    filename: 'ComparisonTable.tsx',
    folder: 'data-display',

    createdAt: new Date('2025-01-08'),
    updatedAt: new Date('2025-01-08'),
  },

  {
    id: 'file-tree',
    title: 'File Tree',
    description: 'Hierarchical file structure display',
    category: 'data-display',
    tags: ['file', 'tree', 'folder', 'structure', 'data-display'],

    code: `export const FileTree = ({ data }) => (
  <div className="pl-4 border-l-2 border-neo-black">
    {data.map(item => (
      <div key={item.name}>
        <span>{item.type === 'folder' ? '📁' : '📄'} {item.name}</span>
        {item.children && <FileTree data={item.children} />}
      </div>
    ))}
  </div>
);`,

    codeRaw: `import React, { useState } from 'react';
import { Folder, FolderOpen, File, ChevronRight, ChevronDown } from 'lucide-react';

export interface FileNode {
    id: string;
    name: string;
    type: 'file' | 'folder';
    children?: FileNode[];
}

export interface FileTreeProps {
    data: FileNode[];
    onSelect?: (node: FileNode) => void;
}

const FileTreeNode: React.FC<{ node: FileNode; onSelect?: (node: FileNode) => void; depth?: number }> = ({
    node,
    onSelect,
    depth = 0
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const hasChildren = node.type === 'folder' && node.children && node.children.length > 0;

    const handleToggle = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (node.type === 'folder') {
            setIsOpen(!isOpen);
        }
        onSelect?.(node);
    };

    return (
        <div className="select-none">
            <div
                className={\`flex items-center gap-2 py-1 px-2 cursor-pointer hover:bg-neo-gray-100 transition-colors
                           \${depth > 0 ? 'border-l-2 border-neo-gray-200 ml-2' : ''}\`}
                onClick={handleToggle}
                style={{ paddingLeft: \`\${depth * 8 + 8}px\` }}
            >
                {node.type === 'folder' && (
                    <span className="text-neo-gray-500">
                        {isOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                    </span>
                )}
                {node.type === 'folder' ? (
                    isOpen ? <FolderOpen className="w-4 h-4 text-neo-black" /> : <Folder className="w-4 h-4 text-neo-black" />
                ) : (
                    <File className="w-4 h-4 text-neo-gray-600" />
                )}
                <span className="font-medium text-sm">{node.name}</span>
            </div>
            {isOpen && hasChildren && (
                <div>
                    {node.children!.map((child) => (
                        <FileTreeNode key={child.id} node={child} onSelect={onSelect} depth={depth + 1} />
                    ))}
                </div>
            )}
        </div>
    );
};

export const FileTree: React.FC<FileTreeProps> = ({ data, onSelect }) => {
    return (
        <div className="border-3 border-neo-black bg-neo-white p-4 overflow-auto max-h-[400px]">
            {data.map((node) => (
                <FileTreeNode key={node.id} node={node} onSelect={onSelect} />
            ))}
        </div>
    );
};`,

    dependencies: ['react', 'lucide-react'],

    preview: {
      component: FileTree,
      defaultProps: {
        data: [
          {
            id: '1', name: 'src', type: 'folder', children: [
              { id: '2', name: 'components', type: 'folder', children: [{ id: '3', name: 'Button.tsx', type: 'file' }] },
              { id: '4', name: 'App.tsx', type: 'file' },
            ]
          },
          { id: '5', name: 'package.json', type: 'file' },
        ],
      },
      previewHeight: 300,
    },

    filename: 'FileTree.tsx',
    folder: 'data-display',

    createdAt: new Date('2025-01-08'),
    updatedAt: new Date('2025-01-08'),
  },

  {
    id: 'timeline',
    title: 'Timeline',
    description: 'Vertical timeline for events or history',
    category: 'data-display',
    tags: ['timeline', 'history', 'events', 'steps', 'data-display'],

    code: `export const Timeline = ({ items }) => (
  <div className="border-l-4 border-neo-black ml-4">
    {items.map(item => (
      <div key={item.title} className="pl-8 pb-8 relative">
        <div className="absolute -left-3 top-0 w-6 h-6 bg-neo-black rounded-full" />
        <h3 className="font-bold">{item.title}</h3>
        <p>{item.date}</p>
        <p>{item.description}</p>
      </div>
    ))}
  </div>
);`,

    codeRaw: `import React from 'react';

export interface TimelineItem {
    date: string;
    title: string;
    description: string;
    icon?: React.ReactNode;
}

export interface TimelineProps {
    items: TimelineItem[];
}

export const Timeline: React.FC<TimelineProps> = ({ items }) => {
    return (
        <div className="relative pl-8 border-l-4 border-neo-black ml-4 space-y-8">
            {items.map((item, index) => (
                <div key={index} className="relative">
                    <div className="absolute -left-[42px] top-0 w-8 h-8 bg-neo-white border-4 border-neo-black rounded-full flex items-center justify-center z-10">
                        {item.icon && <div className="w-4 h-4">{item.icon}</div>}
                    </div>
                    <div className="bg-neo-white border-3 border-neo-black p-6 shadow-neo hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
                        <span className="inline-block px-3 py-1 bg-neo-black text-neo-white text-xs font-bold uppercase mb-2">
                            {item.date}
                        </span>
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-neo-gray-700">{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};`,

    dependencies: ['react'],

    preview: {
      component: Timeline,
      defaultProps: {
        items: [
          { date: '2024', title: 'Project Started', description: 'Initial concept and design phase.' },
          { date: '2025', title: 'Launch', description: 'Official release to the public.' },
        ],
      },
      previewHeight: 400,
    },

    filename: 'Timeline.tsx',
    folder: 'data-display',

    createdAt: new Date('2025-01-08'),
    updatedAt: new Date('2025-01-08'),
  },

  {
    id: 'stats-card',
    title: 'Stats Card',
    description: 'Card for displaying statistics and metrics',
    category: 'data-display',
    tags: ['stats', 'metrics', 'dashboard', 'card', 'data-display'],

    code: `export const StatsCard = ({ title, value, change }) => (
  <div className="border-3 border-neo-black p-6">
    <h3 className="text-sm uppercase text-neo-gray-600">{title}</h3>
    <div className="text-4xl font-bold my-2">{value}</div>
    <div className={change > 0 ? 'text-green-600' : 'text-red-600'}>{change}%</div>
  </div>
);`,

    codeRaw: `import React from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';

export interface StatsCardProps {
    title: string;
    value: string | number;
    change?: number;
    changeLabel?: string;
    icon?: React.ReactNode;
}

export const StatsCard: React.FC<StatsCardProps> = ({
    title,
    value,
    change,
    changeLabel = 'vs last month',
    icon
}) => {
    const isPositive = change && change >= 0;

    return (
        <div className="border-3 border-neo-black bg-neo-white p-6 shadow-neo">
            <div className="flex justify-between items-start mb-4">
                <h3 className="font-bold text-neo-gray-600 uppercase text-sm">{title}</h3>
                {icon && <div className="text-neo-black">{icon}</div>}
            </div>
            <div className="text-4xl font-bold mb-4">{value}</div>
            {change !== undefined && (
                <div className="flex items-center gap-2 text-sm">
                    <span className={\`flex items-center font-bold \${isPositive ? 'text-green-600' : 'text-red-600'}\`}>
                        {isPositive ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
                        {Math.abs(change)}%
                    </span>
                    <span className="text-neo-gray-500">{changeLabel}</span>
                </div>
            )}
        </div>
    );
};`,

    dependencies: ['react', 'lucide-react'],

    preview: {
      component: StatsCard,
      defaultProps: { title: 'Total Revenue', value: '$45,231', change: 12.5 },
      previewHeight: 200,
    },

    filename: 'StatsCard.tsx',
    folder: 'data-display',

    createdAt: new Date('2025-01-08'),
    updatedAt: new Date('2025-01-08'),
  },

  {
    id: 'card-grid',
    title: 'Card Grid',
    description: 'Responsive grid layout for cards',
    category: 'data-display',
    tags: ['grid', 'layout', 'cards', 'responsive', 'data-display'],

    code: `export const CardGrid = ({ children }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {children}
  </div>
);`,

    codeRaw: `import React from 'react';

export interface CardGridProps {
    children: React.ReactNode;
    columns?: 2 | 3 | 4;
}

export const CardGrid: React.FC<CardGridProps> = ({ children, columns = 3 }) => {
    const getGridCols = () => {
        switch (columns) {
            case 2: return 'md:grid-cols-2';
            case 4: return 'md:grid-cols-2 lg:grid-cols-4';
            case 3:
            default: return 'md:grid-cols-2 lg:grid-cols-3';
        }
    };

    return (
        <div className={\`grid grid-cols-1 \${getGridCols()} gap-6\`}>
            {children}
        </div>
    );
};`,

    dependencies: ['react'],

    preview: {
      component: CardGrid,
      defaultProps: {
        children: [
          <div key="1" className="border-3 border-neo-black p-4">Card 1</div>,
          <div key="2" className="border-3 border-neo-black p-4">Card 2</div>,
          <div key="3" className="border-3 border-neo-black p-4">Card 3</div>,
        ],
      },
      previewHeight: 200,
    },

    filename: 'CardGrid.tsx',
    folder: 'data-display',

    createdAt: new Date('2025-01-08'),
    updatedAt: new Date('2025-01-08'),
  },

  // Phase 11.5: Media & Complex
  {
    id: 'video-player',
    title: 'Video Player',
    description: 'Custom video player with neo-brutalist controls',
    category: 'media',
    tags: ['video', 'player', 'media', 'content'],

    code: `export const VideoPlayer = ({ src }) => (
  <div className="border-4 border-neo-black p-2 bg-neo-black">
    <video src={src} controls className="w-full" />
  </div>
);`,

    codeRaw: `import React, { useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react';

export interface VideoPlayerProps {
    src: string;
    poster?: string;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, poster }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [progress, setProgress] = useState(0);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    const handleTimeUpdate = () => {
        if (videoRef.current) {
            const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
            setProgress(progress);
        }
    };

    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        const time = (Number(e.target.value) / 100) * (videoRef.current?.duration || 0);
        if (videoRef.current) {
            videoRef.current.currentTime = time;
            setProgress(Number(e.target.value));
        }
    };

    return (
        <div className="border-4 border-neo-black bg-neo-black p-2 shadow-neo">
            <div className="relative group">
                <video
                    ref={videoRef}
                    src={src}
                    poster={poster}
                    className="w-full bg-neo-black"
                    onTimeUpdate={handleTimeUpdate}
                    onClick={togglePlay}
                />
                
                {/* Controls Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-neo-black/80 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="flex items-center gap-4 text-neo-white">
                        <button onClick={togglePlay} className="hover:text-neo-primary">
                            {isPlaying ? <Pause /> : <Play />}
                        </button>
                        
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={progress}
                            onChange={handleSeek}
                            className="flex-1 h-2 bg-neo-gray-600 rounded-lg appearance-none cursor-pointer"
                        />
                        
                        <button onClick={toggleMute} className="hover:text-neo-primary">
                            {isMuted ? <VolumeX /> : <Volume2 />}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};`,

    dependencies: ['react', 'lucide-react'],

    preview: {
      component: VideoPlayer,
      defaultProps: {
        src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
        poster: 'https://via.placeholder.com/640x360',
      },
      previewHeight: 400,
    },

    filename: 'VideoPlayer.tsx',
    folder: 'media',

    createdAt: new Date('2025-01-08'),
    updatedAt: new Date('2025-01-08'),
  },

  {
    id: 'audio-player',
    title: 'Audio Player',
    description: 'Audio player with visualization',
    category: 'media',
    tags: ['audio', 'player', 'sound', 'music', 'media'],

    code: `export const AudioPlayer = ({ src, title }) => (
  <div className="border-3 border-neo-black p-4 flex items-center gap-4">
    <button className="w-10 h-10 bg-neo-black text-neo-white rounded-full flex items-center justify-center">
      <Play size={16} />
    </button>
    <div className="flex-1">
      <div className="font-bold">{title}</div>
      <div className="h-2 bg-neo-gray-200 mt-2 relative">
        <div className="absolute left-0 top-0 h-full w-1/3 bg-neo-black" />
      </div>
    </div>
  </div>
);`,

    codeRaw: `import React, { useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX, SkipBack, SkipForward } from 'lucide-react';

export interface AudioPlayerProps {
    src: string;
    title: string;
    artist?: string;
    coverArt?: string;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ src, title, artist, coverArt }) => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleTimeUpdate = () => {
        if (audioRef.current) {
            const progress = (audioRef.current.currentTime / audioRef.current.duration) * 100;
            setProgress(progress);
        }
    };

    return (
        <div className="border-3 border-neo-black bg-neo-white p-6 shadow-neo max-w-md">
            <div className="flex gap-6 items-center mb-6">
                {coverArt ? (
                    <img src={coverArt} alt={title} className="w-24 h-24 border-3 border-neo-black object-cover" />
                ) : (
                    <div className="w-24 h-24 border-3 border-neo-black bg-neo-gray-200 flex items-center justify-center">
                        <Volume2 className="w-8 h-8 text-neo-gray-500" />
                    </div>
                )}
                <div>
                    <h3 className="text-xl font-bold uppercase">{title}</h3>
                    {artist && <p className="text-neo-gray-600">{artist}</p>}
                </div>
            </div>

            <audio ref={audioRef} src={src} onTimeUpdate={handleTimeUpdate} />

            <div className="space-y-4">
                <div className="h-3 border-2 border-neo-black bg-neo-gray-100 rounded-full overflow-hidden">
                    <div 
                        className="h-full bg-neo-black transition-all duration-100"
                        style={{ width: \`\${progress}%\` }}
                    />
                </div>

                <div className="flex justify-center items-center gap-6">
                    <button className="p-2 hover:bg-neo-gray-100 rounded-full"><SkipBack /></button>
                    <button 
                        onClick={togglePlay}
                        className="w-12 h-12 bg-neo-black text-neo-white border-2 border-neo-black 
                                 flex items-center justify-center rounded-full hover:scale-105 transition-transform"
                    >
                        {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-1" />}
                    </button>
                    <button className="p-2 hover:bg-neo-gray-100 rounded-full"><SkipForward /></button>
                </div>
            </div>
        </div>
    );
};`,

    dependencies: ['react', 'lucide-react'],

    preview: {
      component: AudioPlayer,
      defaultProps: {
        src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3',
        title: 'T-Rex Roar',
        artist: 'Dinosaur',
      },
      previewHeight: 250,
    },

    filename: 'AudioPlayer.tsx',
    folder: 'media',

    createdAt: new Date('2025-01-08'),
    updatedAt: new Date('2025-01-08'),
  },

  {
    id: 'carousel',
    title: 'Carousel',
    description: 'Image carousel with navigation controls',
    category: 'layout',
    tags: ['carousel', 'slider', 'gallery', 'images', 'layout'],

    code: `export const Carousel = ({ items }) => (
  <div className="relative border-4 border-neo-black h-64 overflow-hidden">
    {items.map((item, i) => (
      <div key={i} className="absolute inset-0 flex items-center justify-center bg-neo-gray-100">
        {item}
      </div>
    ))}
    <button className="absolute left-4 top-1/2">Prev</button>
    <button className="absolute right-4 top-1/2">Next</button>
  </div>
);`,

    codeRaw: `import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface CarouselProps {
    items: React.ReactNode[];
    autoPlay?: boolean;
    interval?: number;
}

export const Carousel: React.FC<CarouselProps> = ({
    items,
    autoPlay = false,
    interval = 3000
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    React.useEffect(() => {
        if (autoPlay) {
            const timer = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % items.length);
            }, interval);
            return () => clearInterval(timer);
        }
    }, [autoPlay, interval, items.length]);

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % items.length);
    };

    return (
        <div className="relative border-4 border-neo-black bg-neo-white">
            <div className="overflow-hidden">
                <div
                    className="flex transition-transform duration-500 ease-out"
                    style={{ transform: \`translateX(-\${currentIndex * 100}%)\` }}
                >
                    {items.map((item, index) => (
                        <div key={index} className="min-w-full">
                            {item}
                        </div>
                    ))}
                </div>
            </div>

            <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-neo-white
                           border-3 border-neo-black shadow-neo hover:translate-x-[2px]
                           hover:translate-y-[2px] hover:shadow-none transition-all"
                aria-label="Previous"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>

            <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-neo-white
                           border-3 border-neo-black shadow-neo hover:translate-x-[2px]
                           hover:translate-y-[2px] hover:shadow-none transition-all"
                aria-label="Next"
            >
                <ChevronRight className="w-6 h-6" />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {items.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={\`w-3 h-3 border-2 border-neo-black transition-colors \${
                            index === currentIndex ? 'bg-neo-black' : 'bg-neo-white'
                        }\`}
                        aria-label={\`Go to slide \${index + 1}\`}
                    />
                ))}
            </div>
        </div>
    );
};`,

    dependencies: ['react', 'lucide-react'],

    preview: {
      component: Carousel,
      defaultProps: {
        items: [
          <div key="1" className="h-64 bg-blue-200 flex items-center justify-center font-bold text-2xl" > Slide 1 </div>,
          < div key="2" className="h-64 bg-green-200 flex items-center justify-center font-bold text-2xl" > Slide 2 </div>,
          < div key="3" className="h-64 bg-red-200 flex items-center justify-center font-bold text-2xl" > Slide 3 </div>,
        ],
      },
      previewHeight: 300,
    },

    filename: 'Carousel.tsx',
    folder: 'layout',

    createdAt: new Date('2025-01-08'),
    updatedAt: new Date('2025-01-08'),
  },

  // Phase 11.6: Auth & Navigation
  {
    id: 'sign-in-form',
    title: 'Sign In Form',
    description: 'Login form with email and password',
    category: 'auth',
    tags: ['signin', 'login', 'auth', 'form'],

    code: `export const SignInForm = ({ onSubmit }) => (
  <form onSubmit={onSubmit} className="border-4 border-neo-black p-8 max-w-sm mx-auto">
    <h2 className="text-2xl font-bold mb-6">Sign In</h2>
    <input type="email" placeholder="Email" className="w-full mb-4 border-3 border-neo-black p-3" />
    <input type="password" placeholder="Password" className="w-full mb-6 border-3 border-neo-black p-3" />
    <button className="w-full bg-neo-black text-neo-white py-3 font-bold">Sign In</button>
  </form>
);`,

    codeRaw: `import React, { useState } from 'react';
import { Eye, EyeOff, Lock, Mail } from 'lucide-react';

export interface SignInFormProps {
    onSubmit: (data: any) => void;
    onForgotPassword?: () => void;
    onSignUp?: () => void;
}

export const SignInForm: React.FC<SignInFormProps> = ({
    onSubmit,
    onForgotPassword,
    onSignUp
}) => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({ email: '', password: '' });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <div className="border-4 border-neo-black bg-neo-white p-8 max-w-md w-full shadow-neo-lg">
            <h2 className="text-3xl font-bold uppercase text-center mb-8">Welcome Back</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block font-bold mb-2 uppercase text-sm">Email</label>
                    <div className="relative">
                        <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-3 pl-12 border-3 border-neo-black font-bold focus:outline-none focus:ring-4 focus:ring-neo-gray-300"
                            placeholder="you@example.com"
                            required
                        />
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neo-gray-500" />
                    </div>
                </div>

                <div>
                    <label className="block font-bold mb-2 uppercase text-sm">Password</label>
                    <div className="relative">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            className="w-full px-4 py-3 pl-12 pr-12 border-3 border-neo-black font-bold focus:outline-none focus:ring-4 focus:ring-neo-gray-300"
                            placeholder="••••••••"
                            required
                        />
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neo-gray-500" />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-neo-gray-500 hover:text-neo-black"
                        >
                            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                    </div>
                </div>

                <div className="flex justify-end">
                    <button
                        type="button"
                        onClick={onForgotPassword}
                        className="text-sm font-bold underline hover:text-neo-gray-600"
                    >
                        Forgot Password?
                    </button>
                </div>

                <button
                    type="submit"
                    className="w-full py-4 bg-neo-black text-neo-white font-bold uppercase border-3 border-neo-black shadow-neo hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
                >
                    Sign In
                </button>
            </form>

            <div className="mt-8 text-center text-sm font-bold">
                Don't have an account?{' '}
                <button onClick={onSignUp} className="underline hover:text-neo-gray-600">
                    Sign Up
                </button>
            </div>
        </div>
    );
};`,

    dependencies: ['react', 'lucide-react'],

    preview: {
      component: SignInForm,
      defaultProps: { onSubmit: (data: any) => alert(JSON.stringify(data)) },
      previewHeight: 250,
      previewOnClick: true,
    },

    filename: 'SignInForm.tsx',
    folder: 'auth',

    createdAt: new Date('2025-01-08'),
    updatedAt: new Date('2025-01-08'),
  },

  {
    id: 'sign-up-form',
    title: 'Sign Up Form',
    description: 'Registration form with validation',
    category: 'auth',
    tags: ['signup', 'register', 'auth', 'form'],

    code: `export const SignUpForm = ({ onSubmit }) => (
  <form onSubmit={onSubmit} className="border-4 border-neo-black p-8 max-w-sm mx-auto">
    <h2 className="text-2xl font-bold mb-6">Create Account</h2>
    <input type="text" placeholder="Full Name" className="w-full mb-4 border-3 border-neo-black p-3" />
    <input type="email" placeholder="Email" className="w-full mb-4 border-3 border-neo-black p-3" />
    <input type="password" placeholder="Password" className="w-full mb-6 border-3 border-neo-black p-3" />
    <button className="w-full bg-neo-black text-neo-white py-3 font-bold">Sign Up</button>
  </form>
);`,

    codeRaw: `import React, { useState } from 'react';
import { Eye, EyeOff, Lock, Mail, User } from 'lucide-react';

export interface SignUpFormProps {
    onSubmit: (data: any) => void;
    onSignIn?: () => void;
}

export const SignUpForm: React.FC<SignUpFormProps> = ({ onSubmit, onSignIn }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        onSubmit(formData);
    };

    return (
        <div className="border-4 border-neo-black bg-neo-white p-8 max-w-md w-full shadow-neo-lg">
            <h2 className="text-3xl font-bold uppercase text-center mb-8">Create Account</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block font-bold mb-2 uppercase text-sm">Full Name</label>
                    <div className="relative">
                        <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-3 pl-12 border-3 border-neo-black font-bold focus:outline-none focus:ring-4 focus:ring-neo-gray-300"
                            placeholder="John Doe"
                            required
                        />
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neo-gray-500" />
                    </div>
                </div>

                <div>
                    <label className="block font-bold mb-2 uppercase text-sm">Email</label>
                    <div className="relative">
                        <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-3 pl-12 border-3 border-neo-black font-bold focus:outline-none focus:ring-4 focus:ring-neo-gray-300"
                            placeholder="you@example.com"
                            required
                        />
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neo-gray-500" />
                    </div>
                </div>

                <div>
                    <label className="block font-bold mb-2 uppercase text-sm">Password</label>
                    <div className="relative">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            className="w-full px-4 py-3 pl-12 pr-12 border-3 border-neo-black font-bold focus:outline-none focus:ring-4 focus:ring-neo-gray-300"
                            placeholder="••••••••"
                            required
                        />
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neo-gray-500" />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-neo-gray-500 hover:text-neo-black"
                        >
                            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                    </div>
                </div>

                <div>
                    <label className="block font-bold mb-2 uppercase text-sm">Confirm Password</label>
                    <div className="relative">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            value={formData.confirmPassword}
                            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                            className="w-full px-4 py-3 pl-12 border-3 border-neo-black font-bold focus:outline-none focus:ring-4 focus:ring-neo-gray-300"
                            placeholder="••••••••"
                            required
                        />
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neo-gray-500" />
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full py-4 bg-neo-black text-neo-white font-bold uppercase border-3 border-neo-black shadow-neo hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
                >
                    Sign Up
                </button>
            </form>

            <div className="mt-8 text-center text-sm font-bold">
                Already have an account?{' '}
                <button onClick={onSignIn} className="underline hover:text-neo-gray-600">
                    Sign In
                </button>
            </div>
        </div>
    );
};`,

    dependencies: ['react', 'lucide-react'],

    preview: {
      component: SignUpForm,
      defaultProps: { onSubmit: (data: any) => alert(JSON.stringify(data)) },
      previewHeight: 250,
      previewOnClick: true,
    },

    filename: 'SignUpForm.tsx',
    folder: 'auth',

    createdAt: new Date('2025-01-08'),
    updatedAt: new Date('2025-01-08'),
  },

  {
    id: 'breadcrumb',
    title: 'Breadcrumb',
    description: 'Navigation breadcrumb trail',
    category: 'navigation',
    tags: ['breadcrumb', 'navigation', 'path', 'links'],

    code: `export const Breadcrumb = ({ items }) => (
  <div className="flex items-center gap-2 text-sm font-bold">
    {items.map((item, i) => (
      <React.Fragment key={item.label}>
        {i > 0 && <span className="text-neo-gray-400">/</span>}
        <a href={item.href} className="hover:underline">{item.label}</a>
      </React.Fragment>
    ))}
  </div>
);`,

    codeRaw: `import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
    label: string;
    href: string;
    icon?: React.ReactNode;
}

export interface BreadcrumbProps {
    items: BreadcrumbItem[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
    return (
        <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-2 text-sm font-bold">
            <a
                href="/"
                className="p-2 border-2 border-neo-black bg-neo-white hover:bg-neo-gray-100 transition-colors"
            >
                <Home className="w-4 h-4" />
            </a>
            
            {items.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-neo-gray-400" />
                    <a
                        href={item.href}
                        className={\`px-3 py-1 border-2 border-neo-black transition-all
                                   \${index === items.length - 1
                                    ? 'bg-neo-black text-neo-white pointer-events-none'
                                    : 'bg-neo-white hover:bg-neo-gray-100'}\`}
                        aria-current={index === items.length - 1 ? 'page' : undefined}
                    >
                        {item.label}
                    </a>
                </div>
            ))}
        </nav>
    );
};`,

    dependencies: ['react', 'lucide-react'],

    preview: {
      component: Breadcrumb,
      defaultProps: {
        items: [
          { label: 'Products', href: '#' },
          { label: 'Electronics', href: '#' },
          { label: 'Laptops', href: '#' },
        ],
      },
      previewHeight: 100,
    },

    filename: 'Breadcrumb.tsx',
    folder: 'navigation',

    createdAt: new Date('2025-01-08'),
    updatedAt: new Date('2025-01-08'),
  },

  {
    id: 'sidebar-navigation',
    title: 'Sidebar Navigation',
    description: 'Vertical navigation sidebar with icons',
    category: 'navigation',
    tags: ['sidebar', 'navigation', 'menu', 'vertical'],

    code: `export const SidebarNavigation = ({ items }) => (
  <div className="w-64 border-r-3 border-neo-black h-full bg-neo-white">
    {items.map(item => (
      <a key={item.href} href={item.href} className="block p-4 border-b-2 border-neo-black hover:bg-neo-black hover:text-neo-white">
        {item.label}
      </a>
    ))}
  </div>
);`,

    codeRaw: `import React from 'react';
import { Home, Settings, Users, FileText, Bell, HelpCircle } from 'lucide-react';

export interface SidebarItem {
    label: string;
    href: string;
    icon?: React.ReactNode;
    isActive?: boolean;
    badge?: number;
}

export interface SidebarNavigationProps {
    items: SidebarItem[];
}

export const SidebarNavigation: React.FC<SidebarNavigationProps> = ({ items }) => {
    return (
        <div className="w-64 bg-neo-white border-3 border-neo-black h-full flex flex-col">
            <div className="p-6 border-b-3 border-neo-black">
                <h2 className="text-xl font-bold uppercase">Dashboard</h2>
            </div>
            
            <nav className="flex-1 overflow-y-auto py-4">
                <ul className="space-y-1">
                    {items.map((item, index) => (
                        <li key={index}>
                            <a
                                href={item.href}
                                className={\`flex items-center gap-3 px-6 py-3 font-bold transition-colors
                                           \${item.isActive 
                                            ? 'bg-neo-black text-neo-white' 
                                            : 'text-neo-black hover:bg-neo-gray-100'}\`}
                            >
                                {item.icon}
                                <span className="flex-1">{item.label}</span>
                                {item.badge && (
                                    <span className={\`px-2 py-0.5 text-xs rounded-full border-2
                                                     \${item.isActive
                                                        ? 'bg-neo-white text-neo-black border-neo-white'
                                                        : 'bg-neo-black text-neo-white border-neo-black'}\`}>
                                        {item.badge}
                                    </span>
                                )}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="p-4 border-t-3 border-neo-black bg-neo-gray-50">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full border-2 border-neo-black bg-neo-white" />
                    <div>
                        <div className="font-bold text-sm">User Name</div>
                        <div className="text-xs text-neo-gray-600">user@example.com</div>
                    </div>
                </div>
            </div>
        </div>
    );
};`,

    dependencies: ['react', 'lucide-react'],

    preview: {
      component: SidebarNavigation,
      defaultProps: {
        items: [
          { label: 'Home', href: '#', icon: <Home size={20} />, isActive: true },
          { label: 'Users', href: '#', icon: <Users size={20} />, badge: 3 },
          { label: 'Documents', href: '#', icon: <FileText size={20} /> },
          { label: 'Notifications', href: '#', icon: <Bell size={20} />, badge: 12 },
          { label: 'Settings', href: '#', icon: <Settings size={20} /> },
          { label: 'Help', href: '#', icon: <HelpCircle size={20} /> },
        ],
      },
      previewHeight: 250,
      previewOnClick: true,
    },

    filename: 'SidebarNavigation.tsx',
    folder: 'navigation',

    createdAt: new Date('2025-01-08'),
    updatedAt: new Date('2025-01-08'),
  },

  {
    id: 'confetti',
    title: 'Confetti',
    description: 'Interactive confetti animation that triggers on hover',
    category: 'feedback',
    tags: ['animation', 'confetti', 'celebration', 'interactive', 'canvas'],

    code: `import React, { useRef } from 'react';

export interface ConfettiRef {
  fire: (options?: any) => void;
}

export const Confetti = React.forwardRef<ConfettiRef, {}>(
  (props, ref) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    React.useImperativeHandle(ref, () => ({
      fire: () => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        if (!ctx || !canvas) return;

        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        const particles: any[] = [];

        for (let i = 0; i < 100; i++) {
          particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            size: Math.random() * 8 + 4,
            speedY: Math.random() * 3 + 2,
            speedX: Math.random() * 4 - 2,
            color: ['#000000', '#FF6B6B', '#4ECDC4', '#FFE66D'][Math.floor(Math.random() * 4)],
          });
        }

        function animate() {
          if (!ctx || !canvas) return;
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          particles.forEach((p, i) => {
            p.y += p.speedY;
            p.x += p.speedX;
            ctx.fillStyle = p.color;
            ctx.fillRect(p.x, p.y, p.size, p.size);
            ctx.strokeStyle = '#000000';
            ctx.lineWidth = 2;
            ctx.strokeRect(p.x, p.y, p.size, p.size);
            if (p.y > canvas.height) particles.splice(i, 1);
          });
          if (particles.length > 0) requestAnimationFrame(animate);
        }
        animate();
      },
    }));

    return <canvas ref={canvasRef} className="absolute inset-0 size-full" />;
  }
);

// Usage
export const ConfettiDemo = () => {
  const confettiRef = useRef<ConfettiRef>(null);
  return (
    <div className="relative h-[400px] border-4 border-neo-black">
      <Confetti ref={confettiRef} />
      <button 
        onClick={() => confettiRef.current?.fire({})}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        Fire Confetti!
      </button>
    </div>
  );
};`,

    codeRaw: `import React, { useRef } from 'react';

export interface ConfettiRef {
    fire: (options?: any) => void;
}

export interface ConfettiProps {
    className?: string;
    onMouseEnter?: () => void;
}

export const Confetti = React.forwardRef<ConfettiRef, ConfettiProps>(
    ({ className = '', onMouseEnter }, ref) => {
        const canvasRef = useRef<HTMLCanvasElement>(null);

        React.useImperativeHandle(ref, () => ({
            fire: () => {
                if (!canvasRef.current) return;
                
                const canvas = canvasRef.current;
                const ctx = canvas.getContext('2d');
                if (!ctx) return;

                canvas.width = canvas.offsetWidth;
                canvas.height = canvas.offsetHeight;

                const particles: any[] = [];
                const particleCount = 100;

                for (let i = 0; i < particleCount; i++) {
                    particles.push({
                        x: Math.random() * canvas.width,
                        y: Math.random() * canvas.height - canvas.height,
                        size: Math.random() * 8 + 4,
                        speedY: Math.random() * 3 + 2,
                        speedX: Math.random() * 4 - 2,
                        color: ['#000000', '#FF6B6B', '#4ECDC4', '#FFE66D', '#A8E6CF'][Math.floor(Math.random() * 5)],
                    });
                }

                function animate() {
                    if (!ctx || !canvas) return;
                    ctx.clearRect(0, 0, canvas.width, canvas.height);

                    particles.forEach((particle, index) => {
                        particle.y += particle.speedY;
                        particle.x += particle.speedX;

                        ctx.fillStyle = particle.color;
                        ctx.fillRect(particle.x, particle.y, particle.size, particle.size);
                        ctx.strokeStyle = '#000000';
                        ctx.lineWidth = 2;
                        ctx.strokeRect(particle.x, particle.y, particle.size, particle.size);

                        if (particle.y > canvas.height) {
                            particles.splice(index, 1);
                        }
                    });

                    if (particles.length > 0) {
                        requestAnimationFrame(animate);
                    }
                }

                animate();
            },
        }));

        return (
            <canvas
                ref={canvasRef}
                className={className}
                onMouseEnter={onMouseEnter}
                style={{ pointerEvents: onMouseEnter ? 'auto' : 'none' }}
            />
        );
    }
);

Confetti.displayName = 'Confetti';

export const ConfettiDemo: React.FC = () => {
    const confettiRef = useRef<ConfettiRef>(null);

    return (
        <div className="relative flex h-[400px] w-full flex-col items-center justify-center overflow-hidden border-4 border-neo-black bg-neo-white">
            <span className="pointer-events-none bg-gradient-to-b from-neo-black to-neo-gray-400 bg-clip-text text-center text-6xl font-bold uppercase leading-none text-transparent">
                Confetti
            </span>

            <Confetti
                ref={confettiRef}
                className="absolute left-0 top-0 z-0 size-full"
                onMouseEnter={() => {
                    confettiRef.current?.fire({});
                }}
            />
        </div>
    );
};`,

    dependencies: ['react'],

    preview: {
      component: ConfettiDemo,
      previewHeight: 250,
      previewOnClick: true,
    },

    filename: 'Confetti.tsx',
    folder: 'feedback',

    createdAt: new Date('2025-01-08'),
    updatedAt: new Date('2025-01-08'),
  },

  {
    id: 'marquee',
    title: 'Marquee',
    description: 'Smooth scrolling marquee for displaying testimonials and content',
    category: 'data-display',
    tags: ['marquee', 'scroll', 'animation', 'testimonials', 'reviews'],

    code: `import React from 'react';

export const Marquee = ({ children, pauseOnHover = false, reverse = false }) => {
  return (
    <div className="flex overflow-hidden">
      <div className={
        \`flex min-w-full shrink-0 animate-marquee gap-4 \${
          pauseOnHover ? 'hover:[animation-play-state:paused]' : ''
        } \${reverse ? 'animate-marquee-reverse' : ''}
        \`}>
        {children}
      </div>
      <div className={
        \`flex min-w-full shrink-0 animate-marquee gap-4 \${
          pauseOnHover ? 'hover:[animation-play-state:paused]' : ''
        } \${reverse ? 'animate-marquee-reverse' : ''}
        \`} aria-hidden="true">
        {children}
      </div>
    </div>
  );
};

// Add to index.css:
@keyframes marquee {
  from { transform: translateX(0); }
  to { transform: translateX(calc(-100% - 1rem)); }
}
@keyframes marquee-reverse {
  from { transform: translateX(calc(-100% - 1rem)); }
  to { transform: translateX(0); }
}`,

    codeRaw: `import React from 'react';

export interface MarqueeProps {
    children: React.ReactNode;
    pauseOnHover?: boolean;
    reverse?: boolean;
    className?: string;
}

export const Marquee: React.FC<MarqueeProps> = ({
    children,
    pauseOnHover = false,
    reverse = false,
    className = '',
}) => {
    return (
        <div
            className={\`flex overflow-hidden \${className}\`}
            style={{
                maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            }}
        >
            <div
                className={\`flex min-w-full shrink-0 animate-marquee items-center justify-around gap-4 \${
                    pauseOnHover ? 'hover:[animation-play-state:paused]' : ''
                } \${reverse ? 'animate-marquee-reverse' : ''}\`}
            >
                {children}
            </div>
            <div
                className={\`flex min-w-full shrink-0 animate-marquee items-center justify-around gap-4 \${
                    pauseOnHover ? 'hover:[animation-play-state:paused]' : ''
                } \${reverse ? 'animate-marquee-reverse' : ''}\`}
                aria-hidden="true"
            >
                {children}
            </div>
        </div>
    );
};`,

    dependencies: ['react'],

    preview: {
      component: MarqueeDemo,
      previewHeight: 250,
      previewOnClick: true,
    },

    filename: 'Marquee.tsx',
    folder: 'data-display',

    createdAt: new Date('2025-01-08'),
    updatedAt: new Date('2025-01-08'),
  },

  {
    id: 'dock',
    title: 'Dock',
    description: 'MacOS-style dock navigation with icons and tooltips',
    category: 'navigation',
    tags: ['dock', 'navigation', 'icons', 'menu', 'social'],

    code: `import React from 'react';
import { Home, Mail, Calendar } from 'lucide-react';

export const Dock = ({ children }) => (
  <div className="flex items-center gap-2 border-4 border-neo-black bg-neo-white p-3 shadow-neo">
    {children}
  </div>
);

export const DockIcon = ({ children }) => <div>{children}</div>;

// Usage
const navItems = [
  { href: '#', icon: Home, label: 'Home' },
  { href: '#', icon: Calendar, label: 'Calendar' },
  { href: '#', icon: Mail, label: 'Email' },
];

export const DockDemo = () => (
  <Dock>
    {navItems.map((item) => (
      <DockIcon key={item.label}>
        <a
          href={item.href}
          className="flex h-12 w-12 items-center justify-center border-2 border-neo-black bg-neo-white hover:bg-neo-gray-100"
          title={item.label}
        >
          <item.icon className="h-5 w-5" />
        </a>
      </DockIcon>
    ))}
  </Dock>
);`,

    codeRaw: `import React from 'react';
import { Home, Mail, Calendar, PencilIcon } from 'lucide-react';

export interface DockProps {
    children: React.ReactNode;
    direction?: 'top' | 'middle' | 'bottom';
    className?: string;
}

export const Dock: React.FC<DockProps> = ({ children, className = '' }) => {
    return (
        <div className={\`flex items-center gap-2 border-4 border-neo-black bg-neo-white p-3 shadow-neo \${className}\`}>
            {children}
        </div>
    );
};

export interface DockIconProps {
    children: React.ReactNode;
}

export const DockIcon: React.FC<DockIconProps> = ({ children }) => {
    return <div>{children}</div>;
};`,

    dependencies: ['react', 'lucide-react'],

    preview: {
      component: DockDemo,
      previewHeight: 250,
      previewOnClick: true,
    },

    filename: 'Dock.tsx',
    folder: 'navigation',

    createdAt: new Date('2025-01-08'),
    updatedAt: new Date('2025-01-08'),
  },

  {
    id: 'pixel-image',
    title: 'Pixel Image',
    description: 'Animated pixelated image reveal effect with grayscale transition',
    category: 'media',
    tags: ['image', 'animation', 'pixel', 'reveal', 'effect'],

    code: `import React, { useEffect, useState } from 'react';

const GRIDS = {
  '6x4': { rows: 4, cols: 6 },
  '8x8': { rows: 8, cols: 8 },
};

export const PixelImage = ({ src, grid = '6x4' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showColor, setShowColor] = useState(false);
  const { rows, cols } = GRIDS[grid];

  useEffect(() => {
    setIsVisible(true);
    setTimeout(() => setShowColor(true), 1300);
  }, []);

  const pieces = Array.from({ length: rows * cols }, (_, i) => {
    const row = Math.floor(i / cols);
    const col = i % cols;
    const clipPath = \`polygon(
      \${col * (100 / cols)}% \${row * (100 / rows)}%,
      \${(col + 1) * (100 / cols)}% \${row * (100 / rows)}%,
      \${(col + 1) * (100 / cols)}% \${(row + 1) * (100 / rows)}%,
      \${col * (100 / cols)}% \${(row + 1) * (100 / rows)}%
    )\`;
    return { clipPath, delay: Math.random() * 1200 };
  });

  return (
    <div className="relative h-72 w-72 border-4 border-neo-black">
      {pieces.map((piece, i) => (
        <div
          key={i}
          className={\`absolute inset-0 transition-all \${isVisible ? 'opacity-100' : 'opacity-0'}\`}
          style={{ clipPath: piece.clipPath, transitionDelay: \`\${piece.delay}ms\` }}
        >
          <img
            src={src}
            className={showColor ? 'grayscale-0' : 'grayscale'}
            style={{ transition: 'filter 1000ms' }}
          />
        </div>
      ))}
    </div>
  );
};`,

    codeRaw: `import React, { useEffect, useMemo, useState } from 'react';

type Grid = {
    rows: number;
    cols: number;
};

const DEFAULT_GRIDS: Record<string, Grid> = {
    '6x4': { rows: 4, cols: 6 },
    '8x8': { rows: 8, cols: 8 },
    '8x3': { rows: 3, cols: 8 },
    '4x6': { rows: 6, cols: 4 },
    '3x8': { rows: 8, cols: 3 },
};

type PredefinedGridKey = keyof typeof DEFAULT_GRIDS;

interface PixelImageProps {
    src: string;
    grid?: PredefinedGridKey;
    customGrid?: Grid;
    grayscaleAnimation?: boolean;
    pixelFadeInDuration?: number;
    maxAnimationDelay?: number;
    colorRevealDelay?: number;
}

export const PixelImage: React.FC<PixelImageProps> = ({
    src,
    grid = '6x4',
    grayscaleAnimation = true,
    pixelFadeInDuration = 1000,
    maxAnimationDelay = 1200,
    colorRevealDelay = 1300,
    customGrid,
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [showColor, setShowColor] = useState(false);

    const { rows, cols } = useMemo(() => {
        return customGrid || DEFAULT_GRIDS[grid];
    }, [customGrid, grid]);

    useEffect(() => {
        setIsVisible(true);
        const colorTimeout = setTimeout(() => setShowColor(true), colorRevealDelay);
        return () => clearTimeout(colorTimeout);
    }, [colorRevealDelay]);

    const pieces = useMemo(() => {
        const total = rows * cols;
        return Array.from({ length: total }, (_, index) => {
            const row = Math.floor(index / cols);
            const col = index % cols;
            const clipPath = \`polygon(
                \${col * (100 / cols)}% \${row * (100 / rows)}%,
                \${(col + 1) * (100 / cols)}% \${row * (100 / rows)}%,
                \${(col + 1) * (100 / cols)}% \${(row + 1) * (100 / rows)}%,
                \${col * (100 / cols)}% \${(row + 1) * (100 / rows)}%
            )\`;
            return { clipPath, delay: Math.random() * maxAnimationDelay };
        });
    }, [rows, cols, maxAnimationDelay]);

    return (
        <div className="relative h-72 w-72 border-4 border-neo-black shadow-neo">
            {pieces.map((piece, index) => (
                <div
                    key={index}
                    className={\`absolute inset-0 transition-all \${isVisible ? 'opacity-100' : 'opacity-0'}\`}
                    style={{
                        clipPath: piece.clipPath,
                        transitionDelay: \`\${piece.delay}ms\`,
                        transitionDuration: \`\${pixelFadeInDuration}ms\`,
                    }}
                >
                    <img
                        src={src}
                        className={grayscaleAnimation && (showColor ? 'grayscale-0' : 'grayscale')}
                        style={{
                            transition: grayscaleAnimation ? \`filter \${pixelFadeInDuration}ms\` : 'none',
                        }}
                    />
                </div>
            ))}
        </div>
    );
};`,

    dependencies: ['react'],

    preview: {
      component: PixelImageDemo,
      previewHeight: 250,
      previewOnClick: true,
    },

    filename: 'PixelImage.tsx',
    folder: 'media',

    createdAt: new Date('2025-01-08'),
    updatedAt: new Date('2025-01-08'),
  },

  {
    id: 'interactive-hover-button',
    title: 'Interactive Hover Button',
    description: 'Button with smooth text slide and icon reveal on hover',
    category: 'buttons',
    tags: ['button', 'interactive', 'hover', 'animation', 'transition'],

    code: `import React from 'react';
import { ArrowRight } from 'lucide-react';

export const InteractiveHoverButton = ({ children, ...props }) => {
  return (
    <button
      className="group relative w-auto overflow-hidden border-3 border-neo-black bg-neo-white p-2 px-6 font-bold uppercase shadow-neo hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-neo-sm transition-all"
      {...props}
    >
      <div className="flex items-center gap-2">
        <div className="h-3 w-3 border-2 border-neo-black bg-neo-black transition-all duration-500 group-hover:scale-[50]"></div>
        <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
          {children}
        </span>
      </div>
      <div className="absolute left-0 top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-neo-white opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
        <span className="font-bold uppercase">{children}</span>
        <ArrowRight className="w-5 h-5" />
      </div>
    </button>
  );
};`,

    codeRaw: `import React from 'react';
import { ArrowRight } from 'lucide-react';

export interface InteractiveHoverButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
}

export const InteractiveHoverButton: React.FC<InteractiveHoverButtonProps> = ({
    children,
    className = '',
    ...props
}) => {
    return (
        <button
            className={\`group relative w-auto cursor-pointer overflow-hidden border-3 border-neo-black bg-neo-white p-2 px-6 text-center font-bold uppercase shadow-neo hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-neo-sm transition-all \${className}\`}
            {...props}
        >
            <div className="flex items-center gap-2">
                <div className="h-3 w-3 border-2 border-neo-black bg-neo-black transition-all duration-500 group-hover:scale-[50]"></div>
                <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
                    {children}
                </span>
            </div>
            <div className="absolute left-0 top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-neo-white opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                <span className="font-bold uppercase">{children}</span>
                <ArrowRight className="w-5 h-5" />
            </div>
        </button>
    );
};`,

    dependencies: ['react', 'lucide-react'],

    preview: {
      component: InteractiveHoverButtonDemo,
      previewHeight: 120,
    },

    filename: 'InteractiveHoverButton.tsx',
    folder: 'buttons',

    createdAt: new Date('2025-01-08'),
    updatedAt: new Date('2025-01-08'),
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
