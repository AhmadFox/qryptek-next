import { Fragment } from "react";

// Import Home Page Sections:
import Hero from "@/components/home/Hero";
import OurStory from "@/components/home/OurStory";

export default function Home() {

	return (
		<Fragment>
			<Hero  />
			<OurStory  />
		</Fragment>
	)
}