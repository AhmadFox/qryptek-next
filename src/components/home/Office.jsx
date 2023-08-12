// Import Packeges:
import Image from 'next/image';

// Import Contexts:
import { useRequsetModal } from '@/context/RequsetModalContext';

// Import Styled Components:
import Section from "../ui/Section";
import Container from "../ui/Container";
import { Title } from "../ui/Titles";
import { Button } from '../ui/Buttons';

const Office = () => {

	const { openRequsetModal } = useRequsetModal();

	return (
		<Section variant='2xl' className='relative'>
			<div className="w-1/2 3xl:w-max max-w-max h-auto absolute top-0 right-2 opacity-40 xl:opacity-100">
				<Image
				className="!static"
				src="/spheers_logo_small.svg"
				alt="Spheers Gradiant Left"
				fill
				sizes="(max-width: 768px)100vw, 100vw"
				/>
			</div>
			<div className="w-1/2 3xl:w-max max-w-max h-auto absolute bottom-0 left-0">
				<Image
					className='!static'
					src="/spheers_gradiant_bottom.svg"
					alt="Spheers Gradiant Bottom"
					fill
					sizes="(max-width: 768px)100vw, 100vw"
				/>
			</div>
			<Container>
				<div className="relative">
					<Image
						className="h-auto w-full max-w-max mx-auto lg:-translate-x-10"
						src="/world_map.svg"
						alt="World Map"
						width={988}
						height={472}
						quality={100}
						ayout="responsive"
						priority
					/>
				</div>
				<Title type='p' display='d6' className='text-center !text-sm sm:!text-lg !md:text-xl !lg:text-2xl my-12'>QrypteK Global Offices</Title>

				<div className="md:w-1/2 mx-auto text-center xl:mt-24 relative">
			
					<Title type='p' display='d1' className=''>Ready for The Next Step?</Title>

					<Button onClick={openRequsetModal} fill={'true'} rounded={'true'} className={'flex md:shrink-0 flex-col justify-center items-center p-3 xl:p-5 w-24 sm:w-32 md:w-36 xl:w-44 h-24 sm:h-32 md:h-36 xl:h-44 mx-auto lg:mr-0 lg:translate-x-20 xl:translate-x-16 lg:-translate-y-20 2xl:-translate-y-28 mt-6 lg:mt-0 lg:-mb-24'}>
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