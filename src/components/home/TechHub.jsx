import { useState } from 'react';
// Import Packeges:
import Image from 'next/image';

// Import Styled Components:
import Section from '../ui/Section';
import Container from '../ui/Container';
import { Button, ButtonLink } from '../ui/Buttons';
import Link from 'next/link';
import LazyImage from '../ui/LazyImage';
import { Count, SubTitle, Title } from '../ui/Titles';

const services = [
	{
		title: 'Software Development',
		body: 'We are a global hub for agile software development focusing on tech-enabled startups and life science companies. We are driven by innovation and efficiency to accelerate your success. Let our DevOps engineers help you accelerate time to market, decrease development cost, and enhance performance with highly scalable cloud solutions'
	},
	{
		title: 'IT Infrastructure',
		body: 'We are a global hub for agile software development focusing on tech-enabled startups and life science companies. We are driven by innovation and efficiency to accelerate your success. Let our DevOps engineers help you accelerate time to market, decrease development cost, and enhance performance with highly scalable cloud solutions. We are a global hub for agile software development focusing on tech-enabled startups and life science companies.'
	},
	{
		title: 'Network Security',
		body: 'We are a global hub for agile software development focusing on tech-enabled startups and life science companies. We are driven by innovation and efficiency to accelerate your success. Let our DevOps engineers help you accelerate time to market, decrease development cost'
	},
	{
		title: 'Consulting & Advisory',
		body: 'We are a global hub for agile software development focusing on tech-enabled startups and life en by innovation and efficiency to accelerate your success. Let our DevOps engineers help you accelerate time to market, decrease development cost, and enhance scalable cloud solutions'
	},
	{
		title: 'Cloud Deployment',
		body: 'We are a global software development focusing on tech-enabled startups and life science companies. We are driven by innovation and efficiency to accelerate your success. Let our DevOps engineers help you accelerate time to market, decrease development cost, and enhance performance with highly scalable cloud solutions, We are a global hub for agile software development focusing on tech-enabled startups and life science companies.'
	},
	{
		title: 'It Compliance',
		body: 'We are a global hub for agile software development focusing on tech-enabled startups and life science companies. We are driven by innovation and efficiency to accelerate your success. Let our DevOps engineers help you accelerate time to market, decrease We are a global hub for agile software development focusing on tech-enabled startups and life science companies and solutions'
	}
];

const TechHub = () => {

	const [activeIndex, setActiveIndex] = useState(0);
	const [ collapsHeight, setCollapsHeight ] = useState(0);

	const toggleAccordion = (index) => {
		const collapseBody = document.getElementById(`collapsBody-${index}`);
		setCollapsHeight(collapseBody.clientHeight);
		setActiveIndex(index === activeIndex ? null : index);
	};

	return (
		<Section variant='xl' className="bg-white relative">
			<div className="w-full lg:w-5/12 3xl:w-[44%] h-auto absolute top-0 left-0">
				<Image
					className='!static'
					src="/spheers_logo.svg"
					alt="Spheers Gradiant Left"
					fill
					sizes="(max-width: 768px)100vw, 100vw"
				/>
				
			</div>
			<Container className="relative z-1">
				<div className="grid grid-cols-12">

					{/* Begining Services Banner */}
					<div className="col-span-12 lg:col-span-5 2xl:col-span-5 relative">
						<div className="relative pb-full">
							<LazyImage
								className="md:w-full !h-10/12 mt-1"
								src="/service_banner.png"
								alt="Our Services Banner"
								fill
								quality={100}
								sizes="(min-width: 1940px) 698px, (min-width: 1040px) calc(34.2vw + 41px), calc(97.78vw - 25px)"
							/>
						</div>
					</div>

					{/* Begining Services Collaps Section */}
					<div className="col-span-12 md:col-start-3 md:col-span-8 lg:col-span-7 lg:pl-14 3xl:pl-24">
						<SubTitle variant={'v1'}>Powerful Technology Hub</SubTitle>
						<div className="grid gap-y-3 mb-8 text-dark">
							{services.map((service, index) => (
								<div key={index} className="ease-in-out duration-100 overflow-hidden">
									<div className="cursor-pointer select-none flex gap-x-2 md:gap-x-6 3xl:gap-x-9 items-center sm:items-end" onClick={() => toggleAccordion(index)}>
										<Count>{`0${ index + 1 }`}</Count>
										<Title type='p' display='h4' variant='services' className={`${ index === activeIndex ? 'text-orange-600' : 'text-dark' } `}>{service.title}</Title>
									</div>
									<div className="ease-in-out duration-300 overflow-hidden pl-6 xl:pl-11 3xl:pl-14" 
										 style=
											{	
												collapsHeight === index ? {height: 'auto'} :
												index === activeIndex ?
												{height: `${collapsHeight}px`} : {height: '0px'}
													
											}
										>
										<div id={`collapsBody-${index}`}>
											<p className="text-gray-400 mb-4">
												{service.body}
											</p>
											<Link href={`services/${index}`} className='inline-flex items-center gap-x-3 uppercase font-semibold group text-sm'>
												Learn More
												<Button outline="true" rounded="true" className="!p-0 w-10 h-10 flex justify-center items-center stroke-dark group-hover:stroke-light group-hover:bg-orange-500">
													<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} className="w-5 h-5">
														<path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
													</svg>
													<span className="sr-only">Open Single Service</span>
												</Button>
											</Link>
										</div>
									</div>
								</div>
							))}
						</div>

						<div className="flex justify-center sm:justify-start">
							<ButtonLink rounded={'true'} outline={'true'} effect={'true'} href="/services" className={'text-dark hover:!text-light'}>explore all</ButtonLink>
						</div>
					</div>
				</div>
			</Container>
		</Section>
	)
}

export default TechHub;