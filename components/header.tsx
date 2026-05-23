import { useState, useEffect } from 'react';
import React from 'react';
import Link from 'next/link';
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

export default function Header() {
    const { systemTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, [])

    const renderThemeChanger = () => {
        if (!mounted) return null;

        const currentTheme = theme === 'system' ? systemTheme : theme;
        if (currentTheme === 'dark') {
            return (
                <SunIcon className="theme-change-icon" role="button" onClick={() => setTheme('light')} />
            );
        } else {
            return (
                <MoonIcon className="theme-change-icon" role="button" onClick={() => setTheme('dark')} />
            )
        }
    }
    return (
        <header className="container">
            <h1>
                <Link href="/" className="header-link-large">Dehami Koswatte</Link>
                <Link href="/" className="header-link-small">DehamiK</Link>
            </h1>
            <div>
                {renderThemeChanger()}
            </div>
        </header>
    );
}
