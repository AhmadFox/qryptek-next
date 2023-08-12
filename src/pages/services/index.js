import { Fragment } from "react";

// Import Styled Components UI:
import Container from "@/components/ui/Container";
import Header from "@/components/ui/Header";
import { Title } from "@/components/ui/Titles";

const Services = () => {

	return (
		<Fragment>
			<Header type='page'>
				<Container>
					<Title type="h1" display="d4">Services Page</Title>
				</Container>
			</Header>
		</Fragment>
	)
}

export default Services;