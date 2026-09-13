'use client';

import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { flushSync } from 'react-dom';

export type Theme = 'light' | 'dark';

type ThemeContextValue = {
    theme: Theme;
    toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue>({
    theme: 'dark',
    toggleTheme: () => {},
});

export function useTheme() {
    return useContext(ThemeContext);
}

function applyTheme(theme: Theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

function prefersReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>('dark');

    useEffect(() => {
        const current = document.documentElement.getAttribute('data-theme');
        if (current === 'dark' || current === 'light') {
            setTheme(current);
        }
    }, []);

    const toggleTheme = useCallback(() => {
        const next: Theme = theme === 'light' ? 'dark' : 'light';
        const apply = () => {
            flushSync(() => {
                applyTheme(next);
                setTheme(next);
            });
        };

        if (typeof document.startViewTransition === 'function' && !prefersReducedMotion()) {
            document.startViewTransition(apply);
            return;
        }

        apply();
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
