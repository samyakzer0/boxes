# BOXES - DETAILED UI/UX MOCKUP & COMPONENT SPECIFICATIONS

## 1. HOMEPAGE / LANDING PAGE

### Layout Structure
```
┌─────────────────────────────────────────────────────────┐
│  NAVBAR (Fixed, z-50)                                   │
│  [Logo] [Search] [Docs] [About] [GitHub] [Theme Toggle] │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│                                                          │
│  ╔═════════════════════════════════════════════════════╗ │
│  ║                 HERO SECTION                        ║ │
│  ║                                                     ║ │
│  ║  BOXES                                              ║ │
│  ║  Bold Neo-Brutalist React Components               ║ │
│  ║                                                     ║ │
│  ║  Copy-paste ready components with live previews    ║ │
│  ║  Inspired by 21st.dev • Built for developers      ║ │
│  ║                                                     ║ │
│  ║  [Explore Components] [View Docs]                  ║ │
│  ╚═════════════════════════════════════════════════════╝ │
│                                                          │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  FEATURED SECTION                                        │
│                                                          │
│  ┌──────────────────┐  ┌──────────────────┐  ┌────────┐ │
│  │ Featured Comp 1  │  │ Featured Comp 2  │  │ Comp 3 │ │
│  │  [Preview]       │  │  [Preview]       │  │Preview │ │
│  │  Primary Button  │  │ Theme Toggle     │  │ Slider │ │
│  │  "View Code"     │  │ "View Code"      │  │View    │ │
│  └──────────────────┘  └──────────────────┘  └────────┘ │
│                                                          │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  STATS SECTION                                           │
│                                                          │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐     │
│  │ 50+         │  │ 10K+        │  │ 200+        │     │
│  │ Components  │  │ Downloads   │  │ GitHub ★    │     │
│  └─────────────┘  └─────────────┘  └─────────────┘     │
│                                                          │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  CTA SECTION                                             │
│                                                          │
│  "Start Building Bold Interfaces Today"                 │
│                                                          │
│  [Get Started Now] [Read Docs] [GitHub]                 │
│                                                          │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  FOOTER                                                  │
│  [Links] [Social] [Copyright]                            │
└─────────────────────────────────────────────────────────┘
```

### Hero Section Design
- **Background:** White (light) / Black (dark)
- **Text:** Archivo Black font for heading
- **Heading Font Size:** 4rem (64px)
- **Border:** 4px solid border around hero box
- **Shadow:** 12px offset shadow (neo-brutalist style)
- **CTA Buttons:** Primary & Secondary button styles
- **Animation:** Subtle slide-in on page load

### Featured Components Area
- **Grid:** 3 components per row (desktop)
- **Card Style:** Minimal preview cards with border, no shadow initially
- **Hover Effect:** Lift effect (-2px -2px on hover)
- **Preview Height:** 200px fixed
- **Action Buttons:** Positioned at bottom-right of card

---

## 2. COMPONENTS SHOWCASE PAGE

### Layout Structure
```
┌─────────────────────────────────────────────────────────────────┐
│  NAVBAR (Fixed)                                                  │
└─────────────────────────────────────────────────────────────────┘

┌────────────────┬──────────────────────────────────────────────┐
│                │                                              │
│  SIDEBAR       │  MAIN CONTENT AREA                          │
│  (Desktop)     │                                              │
│  (Collapsible) │  ┌──────────────────────────────────────┐   │
│                │  │ [Search Bar - Sticky Top]            │   │
│  CATEGORIES    │  │ [Filters & Sort - Horizontal]        │   │
│  ┌──────────┐  │  └──────────────────────────────────────┘   │
│  │□ Buttons │  │                                              │
│  │□ Forms   │  │  ┌─────────┐ ┌─────────┐ ┌─────────┐       │
│  │□ Nav.    │  │  │ Comp 1  │ │ Comp 2  │ │ Comp 3  │       │
│  │□ Data    │  │  │ Card    │ │ Card    │ │ Card    │       │
│  │□ Modals  │  │  │ Preview │ │ Preview │ │ Preview │       │
│  │□ Feedback│  │  │ "View"  │ │ "View"  │ │ "View"  │       │
│  └──────────┘  │  └─────────┘ └─────────┘ └─────────┘       │
│                │                                              │
│  SORT BY       │  ┌─────────┐ ┌─────────┐ ┌─────────┐       │
│  • Name (asc)  │  │ Comp 4  │ │ Comp 5  │ │ Comp 6  │       │
│  • Newest      │  │ Card    │ │ Card    │ │ Card    │       │
│  • Trending    │  │ Preview │ │ Preview │ │ Preview │       │
│                │  │ "View"  │ │ "View"  │ │ "View"  │       │
│                │  └─────────┘ └─────────┘ └─────────┘       │
│                │                                              │
│  [Clear]       │  [Load More]                                │
│  [Filters]     │                                              │
│                │                                              │
└────────────────┴──────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  FOOTER                                                          │
└─────────────────────────────────────────────────────────────────┘
```

### Component Card Design
```
┌──────────────────────────────────┐
│  [Component Preview Area]         │ ← 250px height
│  (Shows live component)           │
│  (Responsive to dark/light)       │
├──────────────────────────────────┤
│ Primary Button                    │ ← Component name (bold)
│ buttons • interactive • cta       │ ← Tags/Badges
├──────────────────────────────────┤
│ Bold action button with shadow   │ ← Description
│                                  │
│ [Copy Code] [Download] [View →] │ ← Action buttons
└──────────────────────────────────┘
```

### Search Bar
- **Position:** Sticky at top of content area
- **Width:** 100% of container
- **Placeholder:** "Search components..."
- **Icon:** Search icon (Lucide)
- **Styling:** Border-3 black, shadow-neo

### Filter Section
- **Position:** Below search bar
- **Display:** Horizontal pill buttons
- **Options:** Category filters, sort dropdown
- **Clear Button:** Reset all filters
- **Results Count:** "Showing X of Y components"

### Component Card Interactions
- **Hover State:** Translate -2px -2px, shadow increase
- **Click:** Navigate to component detail page
- **Quick Actions:** 
  - Copy Code button → Tooltip "Copied!"
  - Download → Immediate .tsx file download
  - View → Navigate to component page

---

## 3. COMPONENT DETAIL PAGE

### Full Layout
```
┌──────────────────────────────────────────────────────────────┐
│  NAVBAR & BREADCRUMB                                          │
│  Home > Components > Buttons > Primary Button                │
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│ COMPONENT HEADER                                              │
│                                                              │
│ PRIMARY BUTTON                         [Featured] [Trending]  │
│ Bold action button with neo-brutalist styling                │
│ buttons • interactive • cta • action                          │
└──────────────────────────────────────────────────────────────┘

┌───────────────────────────────┬──────────────────────────────┐
│                               │                              │
│  PREVIEW SECTION (60%)        │  CODE SECTION (40%)          │
│  ┌─────────────────────────┐  │  ┌────────────────────────┐  │
│  │ ╔═════════════════════╗ │  │  │ function PrimaryButton │  │
│  │ ║  LIVE PREVIEW       ║ │  │  │ () {                   │  │
│  │ ║                     ║ │  │  │   return (             │  │
│  │ ║  [Click Me Button]  ║ │  │  │     <button className  │  │
│  │ ║                     ║ │  │  │       "btn-neo-primary"│  │
│  │ ║                     ║ │  │  │     >                  │  │
│  │ ║                     ║ │  │  │       Children         │  │
│  │ ╚═════════════════════╝ │  │  │     </button>          │  │
│  │                         │  │  │   );                   │  │
│  │ [Mobile] [Tablet]       │  │  │ }                      │  │
│  │ [Desktop] [Dark] [Light]│  │  │                        │  │
│  │                         │  │  │ [Copy] [Download]     │  │
│  │ Error/State Display     │  │  │                        │  │
│  └─────────────────────────┘  │  └────────────────────────┘  │
│                               │                              │
│  PROPS PANEL (Below Preview)  │                              │
│  ┌─────────────────────────┐  │  DOCUMENTATION             │
│  │ Prop Name: children     │  │  ┌────────────────────────┐  │
│  │ Type: React.ReactNode   │  │  │ USAGE EXAMPLE:        │  │
│  │ Required: Yes           │  │  │ import { Primary... }  │  │
│  │ Description: Button text│  │  │                        │  │
│  │                         │  │  │ export function App()  │  │
│  │ Input: [text field]     │  │  │ {                      │  │
│  │ [Apply]                 │  │  │   return <PrimaryBut..│  │
│  │                         │  │  │                        │  │
│  │ Prop Name: onClick      │  │  │ DEPENDENCIES:          │  │
│  │ Type: () => void        │  │  │ • react               │  │
│  │ Required: No            │  │  │ • tailwindcss         │  │
│  │ Default: undefined      │  │  └────────────────────────┘  │
│  │                         │  │                              │
│  │ [Add Prop] [Clear All]  │  │  RELATED COMPONENTS        │
│  └─────────────────────────┘  │  ┌──────────────────────┐   │
│                               │  │ Secondary Button     │   │
│  ACTION BUTTONS (Bottom)      │  │ Ghost Button         │   │
│  ┌─────────────────────────┐  │  │ Icon Button          │   │
│  │ [Copy Code]             │  │  └──────────────────────┘   │
│  │ [Download .tsx]         │  │                              │
│  │ [Open in CodeSandbox]   │  │                              │
│  │ [Copy Tailwind Classes] │  │                              │
│  │ [Share]                 │  │                              │
│  └─────────────────────────┘  │                              │
│                               │                              │
└───────────────────────────────┴──────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│ PROPS DOCUMENTATION TABLE                                    │
│                                                              │
│ Prop Name   │ Type              │ Default │ Description      │
│─────────────┼───────────────────┼─────────┼──────────────────│
│ children    │ React.ReactNode   │ -       │ Button content   │
│ onClick     │ () => void        │ -       │ Click handler    │
│ disabled    │ boolean           │ false   │ Disabled state   │
│ className   │ string            │ -       │ Custom classes   │
│ variant     │ 'primary'|'...'   │ primary │ Button style     │
│ size        │ 'sm'|'md'|'lg'    │ md      │ Button size      │
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│ COMPONENT VARIATIONS (If Multiple Variants)                 │
│                                                              │
│ [Size Variations]     [Color Variations]     [State Vars]    │
│ ┌────────────────┐   ┌──────────────────┐   ┌────────────┐  │
│ │ Small Button   │   │ Black Button     │   │ Normal     │  │
│ │ Medium Button  │   │ Gray Button      │   │ Hover      │  │
│ │ Large Button   │   │ White Button     │   │ Disabled   │  │
│ └────────────────┘   └──────────────────┘   └────────────┘  │
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│ FOOTER                                                        │
└──────────────────────────────────────────────────────────────┘
```

### Preview Section Details
- **Live Component Container:**
  - Bordered container (4px border-black)
  - White/gray background (theme-aware)
  - Isolated preview (no CSS conflicts)
  - Min height: 300px

- **Responsive Toggles:**
  - Mobile (375px width)
  - Tablet (768px width)
  - Desktop (full width)
  - Shows viewport dimensions

- **Theme Toggle:**
  - Light/Dark mode preview side-by-side (optional)
  - Toggle button in top-right

- **Error Boundary:**
  - Catches component render errors
  - Shows error message with stack trace (dev mode)
  - Fallback UI for production

### Code Section Details
- **Syntax Highlighting:**
  - Language: TypeScript
  - Theme: Neo-brutalist (high contrast)
  - Line numbers: Enabled
  - Minimap: Visible on desktop, hidden on mobile

- **Copy Button:**
  - Position: Top-right of code block
  - Feedback: "Copied!" tooltip for 2 seconds
  - Icon: Copy icon from Lucide

- **Download Button:**
  - Downloads .tsx file with component code
  - Filename: ComponentName.tsx
  - Includes TypeScript types and comments

### Props Panel
- **Interactive Props Display:**
  - Editable input fields for props
  - Live preview updates as props change
  - Reset to defaults button
  - Add/remove props capability

- **Prop Information:**
  - Prop name (bold)
  - Type annotation
  - Required indicator (*)
  - Default value
  - Description from JSDoc

---

## 4. NAVBAR COMPONENT SPECIFICATIONS

### Design
```
┌────────────────────────────────────────────────────────────┐
│  [Boxes Logo] [Search...        ] [Docs] [About] [GitHub]  │
│                                           [☀️ / 🌙] [≡]    │
└────────────────────────────────────────────────────────────┘
```

### Components
- **Logo:** "BOXES" text + icon (geometric box shape)
- **Search Bar:** Expands on focus, shows recent searches
- **Navigation Links:** Docs, About, GitHub
- **Theme Toggle:** Icon button (Sun/Moon)
- **Mobile Menu:** Hamburger icon (≡)
- **Sticky:** Fixed position, z-index 50

### Styling
- **Background:** White / Black (theme-aware)
- **Border:** 3px bottom border
- **Height:** 70px
- **Padding:** 12px horizontal, 16px vertical
- **Shadow:** 4px 4px 0 black (neo-brutalist)

---

## 5. SIDEBAR / MOBILE NAVIGATION

### Desktop Sidebar (Left)
- **Width:** 260px (expandable to 80px when collapsed)
- **Position:** Fixed, left-aligned
- **Height:** Full viewport height minus navbar
- **Border:** Right 3px black border
- **Background:** Light gray / Dark gray (theme-aware)

### Mobile Navigation (Bottom)
```
┌─────────────────────────────────────────────────────┐
│ 🏠 Dashboard    🔍 Search    ⭐ Favorites    ⚙️ Settings│
└─────────────────────────────────────────────────────┘
```
- **Position:** Fixed bottom
- **Height:** 70px
- **Border:** 4px top border
- **Shadow:** Neo-brutalist shadow (top)
- **Background:** White / Black (theme)

### Navigation Items
- **Icons:** From Lucide React
- **Labels:** Bold, uppercase
- **Active State:** Dark background, white text
- **Hover State:** Light background, underline animation
- **Animations:** Smooth 150ms transitions

---

## 6. FOOTER COMPONENT

### Design
```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│  BOXES Component Library                                    │
│                                                              │
│  [Documentation] [GitHub] [Discord] [Twitter] [Contact]    │
│                                                              │
│  © 2025 Boxes. Built with React & Tailwind CSS.            │
│  Licensed under MIT.                                        │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

### Components
- **Logo & Description:** Brief tagline
- **Links:** Documentation, GitHub, Social, Contact
- **Copyright:** Year, license, attribution
- **Border:** Top 3px border

---

## 7. COLOR PALETTE (Neo-Brutalist)

### Light Mode
```
Background Primary:     #FFFFFF
Background Secondary:   #F9FAFB
Text Primary:          #000000
Text Secondary:        #6B7280
Border:                #000000
Shadow:                #000000 (4px 4px offset)
Accent:                #000000
```

### Dark Mode
```
Background Primary:     #000000
Background Secondary:   #111827
Text Primary:          #FFFFFF
Text Secondary:        #D1D5DB
Border:                #FFFFFF
Shadow:                #FFFFFF (4px 4px offset)
Accent:                #FFFFFF
```

### Status Colors
- **Success:** #22C55E (Green)
- **Error:** #EF4444 (Red)
- **Warning:** #F59E0B (Yellow)
- **Info:** #3B82F6 (Blue)

---

## 8. TYPOGRAPHY

### Font Stack
- **Display:** Archivo Black (headings)
- **Body:** Space Grotesk (text, UI elements)
- **Monospace:** Space Mono (code, technical text)

### Sizes
- **Display (Hero):** 4rem (64px), font-weight 900
- **Hero (Headings):** 3rem (48px), font-weight 800
- **Heading 1:** 2rem (32px), font-weight 700
- **Heading 2:** 1.5rem (24px), font-weight 600
- **Heading 3:** 1.25rem (20px), font-weight 600
- **Body Large:** 1.125rem (18px), font-weight 400
- **Body:** 1rem (16px), font-weight 400
- **Small:** 0.875rem (14px), font-weight 400
- **Extra Small:** 0.75rem (12px), font-weight 500

### Line Heights
- **Tight:** 1.2 (for headings)
- **Normal:** 1.5 (for body text)

---

## 9. SPACING SYSTEM

### Scale (in pixels)
```
0 → 0px
1 → 2px
2 → 4px
3 → 6px
4 → 8px
5 → 10px
6 → 12px
7 → 16px
8 → 20px
9 → 24px
10 → 32px
```

### Common Patterns
- Card padding: 24px (6 unit)
- Section spacing: 48px (12 unit)
- Component gap: 8px (2 unit)
- Page padding: 16px mobile, 32px desktop

---

## 10. BORDER RADIUS

- **None:** 0px
- **Small:** 6px
- **Base:** 8px
- **Medium:** 12px
- **Large:** 16px
- **Full:** 9999px

---

## 11. SHADOWS (Neo-Brutalist)

### Offset Shadows
```
shadow-neo-sm:    2px 2px 0px 0px #000000
shadow-neo:       4px 4px 0px 0px #000000
shadow-neo-md:    6px 6px 0px 0px #000000
shadow-neo-lg:    8px 8px 0px 0px #000000
shadow-neo-xl:    12px 12px 0px 0px #000000
```

### Hover Effects
- Translate: -2px -2px (lift effect)
- Shadow decrease: Smaller offset
- Duration: 150ms cubic-bezier ease

---

## 12. ANIMATIONS & TRANSITIONS

### Duration
- **Fast:** 100ms (quick feedback)
- **Normal:** 200ms (standard transitions)
- **Slow:** 300ms (smooth page transitions)

### Easing
- **Standard:** cubic-bezier(0.16, 1, 0.3, 1)
- **Ease-in:** cubic-bezier(0.4, 0, 1, 1)
- **Ease-out:** cubic-bezier(0, 0, 0.2, 1)

### Common Animations
- **Fade In:** Opacity 0 → 1 (300ms)
- **Slide Up:** TranslateY 10px → 0 (300ms)
- **Pop:** Scale 0.95 → 1 (150ms)
- **Hover Lift:** TranslateY -2px (150ms)
- **Bounce:** Icon bounce on interaction (600ms)

---

## 13. RESPONSIVE BREAKPOINTS

### Mobile-First Approach
```
Mobile (default):   0px - 640px
Tablet:            640px - 1024px
Desktop:           1024px - 1280px
Large Desktop:     1280px+
```

### Layout Adjustments
- **Mobile:** Single column, hamburger menu, bottom nav
- **Tablet:** Two columns (sidebar 80px collapsed)
- **Desktop:** Full three-column layout with expanded sidebar

---

This comprehensive UI/UX specification provides all the details needed to implement the Boxes component library website with complete design consistency.