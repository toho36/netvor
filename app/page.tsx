import Card from "@/components/Card";

const cardData = [
	{
		imageSrc:
			"https://images.squarespace-cdn.com/content/v1/607f89e638219e13eee71b1e/1684821560422-SD5V37BAG28BURTLIXUQ/michael-sum-LEpfefQf4rU-unsplash.jpg",
		title: "gatto",
		titleLink: "https://www.hphhfoundation.org/blog/origin-of-cats",
		primaryAction: { label: "Save", link: "/save", color: "primary" as const },
		secondaryAction: {
			label: "Share",
			link: "/share",
			color: "secondary" as const,
		},
	},
	{
		imageSrc:
			"https://images.squarespace-cdn.com/content/v1/607f89e638219e13eee71b1e/1684821560422-SD5V37BAG28BURTLIXUQ/michael-sum-LEpfefQf4rU-unsplash.jpg",
		title: "gatto",
		titleLink: "https://www.hphhfoundation.org/blog/origin-of-cats",
		primaryAction: { label: "Save", link: "/save", color: "primary" as const },
		secondaryAction: {
			label: "Share",
			link: "/share",
			color: "secondary" as const,
		},
		description: "short description",
	},
	{
		imageSrc:
			"https://images.squarespace-cdn.com/content/v1/607f89e638219e13eee71b1e/1684821560422-SD5V37BAG28BURTLIXUQ/michael-sum-LEpfefQf4rU-unsplash.jpg",
		title: "gatto",
		titleLink: "https://www.hphhfoundation.org/blog/origin-of-cats",
		primaryAction: { label: "Save", link: "/save", color: "primary" as const },
		secondaryAction: {
			label: "Share",
			link: "/share",
			color: "secondary" as const,
		},
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra, lacus nec luctus vehicula, erat ipsum feugiat est, sed tincidunt arcu nulla et erat. Nulla facilisi. Integer non lectus non lorem efficitur vulputate. Vestibulum feugiat dictum quam, vel dictum arcu fringilla nec. Cras rhoncus ante vel nisl aliquet, nec aliquet lacus vulputate. Ut vestibulum luctus leo at tristique. Nam pharetra, nunc in fermentum bibendum, turpis dolor auctor lorem, nec tincidunt velit orci at sapien.",
	},
];
export default function Home() {
	return (
		<div className="container mx-auto ">
			<div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
				{cardData.map((card, index) => (
					<div key={index}>
						<Card
							imageSrc={card.imageSrc}
							title={card.title}
							titleLink={card.titleLink}
							primaryAction={card.primaryAction}
							secondaryAction={card.secondaryAction}
							description={card.description}
						/>
					</div>
				))}
			</div>
		</div>
	);
}
