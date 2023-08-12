import { Fragment } from "react";

// Import Styled Components UI:
import Container from "@/components/ui/Container";
import Header from "@/components/ui/Header";
import { Title } from "@/components/ui/Titles";


const About = () => {
	
	return (
		<Fragment>
			<Header type='page'>
				<Container>
					<Title type="h1" display="d4">Contact Us Page</Title>
				</Container>
			</Header>
		</Fragment>
	)
}

export default About