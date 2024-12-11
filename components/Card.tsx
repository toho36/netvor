import Link from "next/link";
import Image from "next/image";
import Button, { ButtonProps } from "./Button";

type Action = {
	label: string;
	link: string;
	color: ButtonProps["color"];
};

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
		<div
			className="group relative flex flex-col overflow-hidden rounded-tl-lg rounded-tr-lg rounded-bl-none rounded-br-none border-t-0 border-l-0 border-b-0 border-r-0 border-gray-200 bg-white shadow-md hover:shadow-lg focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 w-[332px] h-[360px] p-4 gap-5"
			tabIndex={0}
			role="button"
		>
			{imageSrc && (
				<Image
					src={imageSrc}
					alt="Illustrative image"
					width={400}
					height={200}
					className="h-48 w-full object-cover"
				/>
			)}
			<div className="p-4">
				<h3 className="text-lg font-bold group-hover:underline">
					<Link href={titleLink} passHref>
						{title}
					</Link>
				</h3>
				{description && (
					<p className="mt-2 text-sm text-gray-600">{description}</p>
				)}
			</div>
			<div className="mt-auto flex justify-end gap-2 p-4">
				{primaryAction && (
					<Button href={primaryAction.link} color={primaryAction.color}>
						{primaryAction.label}
					</Button>
				)}
				{secondaryAction && (
					<Button href={secondaryAction.link} color={secondaryAction.color}>
						{secondaryAction.label}
					</Button>
				)}
			</div>
		</div>
	);
}
