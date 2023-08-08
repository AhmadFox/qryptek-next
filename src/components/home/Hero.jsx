// Import Packeges:
import Image from 'next/image';

// Import Styled Components:
import Container from "../ui/Container"
import Section from "../ui/Section"
import { Heading } from '../ui/Headings';
import { Title } from "../ui/Title";
import { Button } from '../ui/Buttons';

const Hero = () => {
	return (
		<header className='md:h-screen md:max-h-[928px] lg:max-h-[1200px] overflow-hidden relative'>
			<div className="h-full w-full absolute z-[-1]">
				<Image
					className="absolute top-0 right-0 object-cover"
					src="/bg_home_age_header.jpg"
					alt="Header Matrix Parten Background"
					quality={100}
					fill
					sizes="(max-width: 491px)50vw ,(max-width: 768px) 70vw, 100vw"
					priority
				/>
			</div>
			<Section variant="hero-block" className="h-full">
				<Container className="h-full flex items-center">
				
					<div className="grid grid-cols-12 gap-6 items-center">

						{/* Beginning Heading Text */}
						<div className="col-span-12 md:col-span-8 xl:pt-52">
							<Heading variant="h1" className="text-center md:text-start mb-6 sm:mb-0">
								smart solutions powered by 
								<Title display='d4' className='mx-3 text-vaiolet-500 inline-block relative before:w-full before:h-[2px] before:bg-vaiolet-500 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:mt-[4px]'> artificial </Title>
								<br className='block xl:hidden' /> human intelligence</Heading>
							<div className="flex items-center md:items-start">
								<p className="text-center md:text-start md:text-lg xl:text-2xl leading-7 text-gray-100 mb-4 sm:mb-0">Redefining synergies between life science and information technology to advance precision medicine and improve care.</p>
								<Button fill={'true'} rounded={'true'} className={'flex md:shrink-0 flex-col justify-center items-center p-3 xl:p-5 w-24 sm:w-32 md:w-36 xl:w-44 h-24 sm:h-32 md:h-36 xl:h-44 xl:translate-x-20 translate-y-32  md:translate-y-20 xl:-translate-y-5 3xl:-translate-y-7 !absolute md:!relative  right-6 sm:right-20 mx-auto'}>
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor" className="w-4 sm:w-6 h-4 sm:h-6 mx-auto mb-2">
										<path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
									</svg>
									<span className="!leading-2 text-xs sm:text-sm xl:text-base">Let’s Discuss your Project</span>
								</Button>
							</div>
						</div>

						{/* Beginning Cube Block Banner */}
						<div className="col-span-12 md:col-span-4 2xl:pr-12 2xl:pl-4 order-1">
							<Image
								className="w-2/3 md:w-full h-auto mt-1"
								src="/cube_block.png"
								alt="Cubes Block Banner"
								width={474}
								height={450}
								quality={100}
								ayout="responsive"
								priority
							/>
						</div>
					</div>
				
				</Container>
			</Section>
		</header>
	)
}

export default Hero
