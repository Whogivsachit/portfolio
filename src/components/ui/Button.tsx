'use client';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
}

export default function Button({ children, className = '', ...props }: ButtonProps) {
    return (
        <button className={`text-primary hover:text-accent/75 hover:cursor-pointer ${className}`} {...props}>
            {children}
        </button>
    );
}