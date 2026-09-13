
interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
}

export default function Badge({className = '', ...props}: BadgeProps) {
    return (
        <div className = {`inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${className}`} {...props} />
    )
}