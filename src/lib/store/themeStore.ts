import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Theme = 'light' | 'dark' | 'auto';

interface ThemeStore {
    theme: Theme;
    setTheme: (theme: Theme) => void;
    isDarkMode: boolean;
    setIsDarkMode: (isDark: boolean) => void;
}

export const useThemeStore = create<ThemeStore>()(
    persist(
        (set) => ({
            theme: 'auto',
            isDarkMode: false,

            setTheme: (theme: Theme) => {
                set({ theme });

                // Apply theme to document
                if (theme === 'auto') {
                    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
                    set({ isDarkMode: isDark });
                } else {
                    document.documentElement.setAttribute('data-theme', theme);
                    set({ isDarkMode: theme === 'dark' });
                }
            },

            setIsDarkMode: (isDark: boolean) => set({ isDarkMode: isDark }),
        }),
        {
            name: 'boxes-theme-store',
        }
    )
);
