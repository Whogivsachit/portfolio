'use client';
import { Icon } from '@iconify/react';
import { useTheme } from '@/components/theme/ThemeProvider';

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();
    const isLight = theme === 'light';

    return (
        <button
            type="button"
            onClick={toggleTheme}
            aria-label={isLight ? 'Switch to dark theme' : 'Switch to light theme'}
            title={isLight ? 'Switch to dark theme' : 'Switch to light theme'}
            className="fixed top-4 right-4 z-50 p-2 rounded-md bg-foreground border border-borders text-primary hover:text-accent cursor-pointer"
        >
            <span className="relative block size-6">
                <span className={`absolute inset-0 transition-all duration-[400ms] ease-in-out motion-reduce:transition-none ${isLight ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`}>
                    <Icon icon="mdi:moon-waning-crescent" className="size-6" />
                </span>
                <span className={`absolute inset-0 transition-all duration-[400ms] ease-in-out motion-reduce:transition-none ${isLight ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`}>
                    <Icon icon="mdi:white-balance-sunny" className="size-6" />
                </span>
            </span>
        </button>
    );
}
