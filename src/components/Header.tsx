
interface HeaderProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
    props?: React.HTMLAttributes<HTMLDivElement>;
}

export default function Header({ children, className, props }: HeaderProps) {
    return (
        <div className={`flex flex-col items-center text-primary pt-16 pb-8 mb-12 text-center bg-foreground px-4 md:px-0 ${className}`} {...props}>
            {children}
        </div>
    )
}