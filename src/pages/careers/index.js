import { Fragment } from "react";

// Import Styled Components UI:
import Container from "@/components/ui/Container";
import Header from "@/components/ui/Header";
import { Title } from "@/components/ui/Titles";

const Careers = () => {

	return (
		<Fragment>
			<Header type='page'>
				<Container>
					<Title type="h1" display="d4">Careers Page</Title>
				</Container>
			</Header>
		</Fragment>
	)
}

export default Careers;