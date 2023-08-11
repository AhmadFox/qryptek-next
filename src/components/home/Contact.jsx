// Import Packeges:
import Image from 'next/image';

// Import Contexts:
import { useRequsetModal } from '@/context/RequsetModalContext';

// Import Styled Components:
import Section from "../ui/Section";
import Container from "../ui/Container";
import { Title, SubTitle } from "../ui/Titles";
import { Button } from '../ui/Buttons';

const Contact = () => {

	const { openRequsetModal } = useRequsetModal();

	return (
		<Section variant='page-block' className='relative'>

			<div className="w-full h-auto absolute xl:static inset-0">
				<Image
					className='!static object-cover'
					src="/city_night.jpg"
					alt="Checago City Night"
					fill
					quality={100}
					sizes="(max-width: 768px)100vw, 100vw"
				/>
			</div>

			<Container>
				<div className="grid gap-y-6 text-center relative xl:absolute xl:top-1/2 xl:-translate-x-1/2 xl:left-1/2 xl:-translate-y-1/2 z-[1]">
					<SubTitle className='font-semibold'>CONTACT</SubTitle>
					<Title type='h1' display='d4'>Create great things together!</Title>
					<SubTitle className='font-semibold text-lg xl:text-2xl'>Big or small, we can help!</SubTitle>
					<div className="mt-4">
						<Button outline='true' rounded='true' effect='true' className onClick={openRequsetModal}>request project</Button>
					</div>
				</div>
			</Container>
		</Section>
	)
}

export default Contact;