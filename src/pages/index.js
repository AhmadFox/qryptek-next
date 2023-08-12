import { Fragment } from "react";

// Import Home Page Sections:
import HomeHeader from "@/components/home/HomeHeader";
import OurStory from "@/components/home/OurStory";
import BrandSlider from "@/components/home/BrandSlider";
import TechHub from "@/components/home/TechHub";
import Proccess from "@/components/home/Process";
import Agility from "@/components/home/Agility";
import OurWork from "@/components/home/OurWorks";
import Team from "@/components/home/Team";
import Contact from "@/components/home/Contact";
import Office from "@/components/home/Office";

export default function Home() {

	return (
		<Fragment>
			<HomeHeader />
			<OurStory />
			<BrandSlider />
			<TechHub />
			<Proccess />
			<Agility />
			<OurWork />
			<Team />
			<Contact />
			<Office />
		</Fragment>
	)
}