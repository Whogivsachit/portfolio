'use client';
import Link from 'next/link';
import NavLink from '@/components/ui/NavLink';
import { useState, useRef, useEffect } from 'react';

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
  
    const toggleMobileMenu = () => setMobileMenuOpen(prev => !prev);
    const closeMobileMenu = () => setMobileMenuOpen(false);
  
    // Close the menu on outside click
    useEffect(() => {
      if (!mobileMenuOpen) return;
  
      const handleClickOutside = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
          closeMobileMenu();
        }
      };
  
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [mobileMenuOpen]);

    return (
        <nav className="h-16 bg-foreground">
            <div className="container mx-auto px-4 md:px-0">
                <div className="flex flex-wrap items-center justify-between mx-auto">

                    <Link href="/" className='flex items-center h-16 self-center text-3xl font-semibold text-primary'>Evan</Link>

                    <button onClick={toggleMobileMenu} id="dropdown" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    </button>

                    <div ref={menuRef} className={`${mobileMenuOpen ? '' : 'hidden'} w-full md:block md:w-auto text-xl z-10`} id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-borders rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-foreground">
                            <NavLink href="/" onClick={closeMobileMenu}>Home</NavLink>
                            {/* <NavLink href="/blog" onClick={closeMobileMenu}>Blog</NavLink> */}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>    
    )
}