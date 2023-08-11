// Import Packeges:
import Image from "next/image";

// Import Styled Components:
import { Title, SubTitle } from "../ui/Titles";
import Diamnod from "../icons/Diamnod";

const Perfection = () => {
	return (
		<div className="text-center md:text-start grid md:grid-cols-12 lg:gap-x-12 xl:gap-x-24 2xl:gap-x-24 3xl:gap-x-32 pt-12 md:pt-20 xl:pt-24 2xl:pt-32">
			<Title type="h1" display="d1" className="md:col-span-7 mb-4">
				Passion For Perfection
			</Title>

			<SubTitle className="md:col-span-6 lg:col-span-7 text-gray-200 mb-6">
				We’re on a mission to facilitate and accelerate clients’ growth and
				success. Our passionate team become a part of your team, empowering you
				to achieve your strategic goals through the smooth completion of every
				phase of the product development life cycle until its final delivery.
				The sustainable success of our clients is significant proof of the high
				value our digital health solutions have added to their business
				accomplishments.
			</SubTitle>

			<SubTitle className="md:col-span-12 xl:col-span-7 text-gray-200">
				Qryptek is a premier digital health company offering custom-built
				software solutions and IT infrastructure services to healthcare startups
				and life sciences organizations worldwide. Fostering innovation and
				digital transformation, we design and develop secure and
				regulatory-compliant software that combines cutting-edge technologies
				with the latest medical advancements.
			</SubTitle>

			<div className="md:col-span-6 lg:col-span-5 md:col-start-8 lg:col-start-8 md:row-span-3 row-start-2 md:row-start-1 mb-6 xl:mb-0">
				<div className="pb-9/12 md:h-full relative">
					
					<Diamnod className='absolute w-full h-full' />
					  
				</div>
			</div>
		</div>
	);
};

export default Perfection;
