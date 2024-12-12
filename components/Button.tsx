import Link, { LinkProps } from "next/link";

export interface ButtonProps extends LinkProps {
	children: React.ReactNode;
	color: "primary" | "secondary";
}

export default function Button({ children, color, ...props }: ButtonProps) {
	return (
		<Link
			{...props}
			className={`p-2.5 rounded-lg font-bold border-2 transition-colors ${
				color === "primary"
					? "bg-brand-primary text-text-tertiary border-transparent hover:bg-brand-primary-hover active:bg-brand-primary-active"
					: "bg-white text-brand-primary border-brand-primary hover:text-brand-primary-hover hover:border-brand-primary-hover active:text-brand-primary-active active:border-brand-primary-active"
			}`}
		>
			{children}
		</Link>
	);
}
