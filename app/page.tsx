import Card from "@/components/Card";
import Button from "@/components/Button";

export default function Home() {
	return (
		<div className="container mx-auto my-20">
			<div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
				{/* Place the Card here. */}
				<div>
					<Card
						imageSrc="https://images.squarespace-cdn.com/content/v1/607f89e638219e13eee71b1e/1684821560422-SD5V37BAG28BURTLIXUQ/michael-sum-LEpfefQf4rU-unsplash.jpg"
						title="gatto"
						titleLink="https://www.hphhfoundation.org/blog/origin-of-cats"
						description="This is an optional description for the card."
					/>
				</div>
			</div>
			<Button color="primary" href="#">
				Primary
			</Button>
			<Button color="secondary" href="#">
				Primary
			</Button>
		</div>
	);
}
