// Import Packeges:
import Image from 'next/image';

// Import Contexts:
import { useRequsetModal } from '@/context/RequsetModalContext';

// Import Styled Components:
import Section from "../ui/Section";
import Container from "../ui/Container";
import { Title, SubTitle } from "../ui/Titles";
import { Button } from '../ui/Buttons';

const Office = () => {

	const { openRequsetModal } = useRequsetModal();
	
	return (
		<Section variant='page-block' className='relative'>

			<div className="w-full h-auto absolute xl:relative inset-0">
				<Image
					className='!static object-cover'
					src="/city_night.png"
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
					<Button onClick={openRequsetModal} fill={'true'} rounded={'true'} className={'flex md:shrink-0 flex-col justify-center items-center p-3 xl:p-5 w-24 sm:w-32 md:w-36 xl:w-44 h-24 sm:h-32 md:h-36 xl:h-44 xl:translate-x-20 translate-y-32  md:translate-y-20 xl:-translate-y-5 3xl:-translate-y-7 !absolute md:!relative  right-6 sm:right-20 mx-auto'}>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor" className="w-4 sm:w-6 h-4 sm:h-6 mx-auto mb-2">
							<path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
						</svg>
						<span className="!leading-2 text-xs sm:text-sm xl:text-base">Let’s Discuss your Project</span>
					</Button>
				</div>
			</Container>
		</Section>
	)
}

export default Office;