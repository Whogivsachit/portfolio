'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function NavLink({href, children, className = '', ...props}: NavLinkProps) {
    const pathname = usePathname();

    return (
        <Link href={href} className={`block py-2 pl-3 pr-4 rounded md:p-0 ${pathname === href ? 'text-primary' : 'text-muted'}`} {...props}>{children}</Link>
    )
}