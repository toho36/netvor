import Link from "next/link";
import Image from "next/image";
import Button, { ButtonProps } from "@/components/Button";

interface Action {
	label: string;
	link: string;
	color: ButtonProps["color"];
}

interface CardProps {
	imageSrc?: string;
	title: string;
	titleLink: string;
	description?: string;
	primaryAction?: Action;
	secondaryAction?: Action;
}

export default function Card({
	imageSrc,
	title,
	titleLink,
	description,
	primaryAction,
	secondaryAction,
}: CardProps) {
	return (
		<Link href={titleLink}>
			<article className="group relative flex flex-col overflow-hidden rounded-tl-lg rounded-tr-lg rounded-bl-none rounded-br-none border-t-0 border-l-0 border-b-0 border-r-0 border-gray-200 bg-white shadow-md hover:shadow-lg focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 w-[332px]  p-4 gap-5">
				{imageSrc && (
					<div className="w-full h-48 overflow-hidden">
						<Image
							src={imageSrc}
							alt=""
							width={400}
							height={200}
							className="h-full w-full object-cover"
						/>
					</div>
				)}
				<div className="p-4">
					<h3 className="text-lg font-bold group-hover:underline focus:outline-none">
						{title}
					</h3>
					{description && (
						<p className="mt-2 text-sm text-gray-600">{description}</p>
					)}
				</div>
				<footer className="mt-auto flex justify-end gap-2 p-4">
					{secondaryAction && (
						<Button color={secondaryAction.color} href={secondaryAction.link}>
							{secondaryAction.label}
						</Button>
					)}
					{primaryAction && (
						<Button color={primaryAction.color} href={primaryAction.link}>
							{primaryAction.label}
						</Button>
					)}
				</footer>
			</article>
		</Link>
	);
}
