import Landing from "./landing";
import Features from "./features";
import Contact from "./contact";

export default function Home() {
	return (
		<>
			<div id="home">
				<Landing />
			</div>

			<div id="features">
				<Features />
			</div>

			<div id="contact">
				<Contact />
			</div>
		</>
	);
}
