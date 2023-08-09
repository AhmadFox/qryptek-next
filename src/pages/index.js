import { Fragment } from "react";

// Import Home Page Sections:
import Hero from "@/components/home/Hero";
import OurStory from "@/components/home/OurStory";
import BrandSlider from "@/components/home/BrandSlider";
import TechHub from "@/components/home/TechHub";
import Proccess from "@/components/home/Process";

export default function Home() {

	return (
		<Fragment>
			<Hero/>
			<OurStory/>
			<BrandSlider/>
			<TechHub/>
			<Proccess/>
		</Fragment>
	)
}