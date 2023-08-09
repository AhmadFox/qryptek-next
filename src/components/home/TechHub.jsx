import { useState, useEffect, useMemo } from 'react';
// Import Packeges:
import Image from 'next/image';

// Import Styled Components:
import Section from '../ui/Section';
import Container from '../ui/Container';
import { Button, ButtonLink } from '../ui/Buttons';
import { Heading } from '../ui/Headings';
import Link from 'next/link';
import { Title } from '../ui/Title';

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
		<Section variant='page-block' className="bg-white relative">
			<div className="absolute top-0 left-0 w-full min-[600px]:w-5/6 min-[860px]:w-[42%] lg:w-1/2 xl:w-[48%] 2xl:w-[43%]">
				<Image
					className="w-full h-auto ml-auto"
					src="/spheers_logo.svg"
					alt="Spheers Gradiant Left"
					width={953}
					height={746}
					ayout="responsive"
					sizes="(max-width: 491px)50vw ,(max-width: 768px) 70vw, 100vw"
					priority
				/>
			</div>
			<Container className="relative z-1">
				<div className="grid grid-cols-12">

					{/* Begining Services Banner */}
					<div className="col-span-12 min-[600px]:col-span-9 min-[600px]:col-start-3 min-[600px]:mr-6 min-[860px]:col-span-5 lg:col-span-6 2xl:col-span-5 xl:col-span-6 relative 3xl:scale-110 3xl:translate-y-14 3xl:h-fit">
						<Image
							className="md:w-full h-auto mt-1"
							src="/laptop.png"
							alt="Laptop Display Our Services"
							width={705.9}
							height={540.69}
							quality={100}
							ayout="responsive"
							priority
						/>
						<Image
							className="absolute w-6/12 top-0 -left-6 2xl:-left-8"
							src="/mobile.png"
							alt="Mobile Our Services"
							width={271.6}
							height={307.57}
							quality={100}
							ayout="responsive"
							priority
						/>
					</div>

					{/* Begining Services Collaps Section */}
					<div className="col-span-12 min-[600px]:col-span-9 min-[600px]:col-start-3 min-[860px]:col-span-7 min-[860px]:pl-8 lg:col-span-6 xl:col-span-6 2xl:col-span-7 2xl:pl-20">
						<span className="block text-gray-400 capitalize text-lg xl:text-2xl font-semibold sm:text-start ml-6 xl:ml-11 mb-4 xl:mb-5">Powerful Technology Hub</span>
						
						<div className="grid gap-y-3 mb-8 text-dark">
							{services.map((service, index) => (
								<div key={index} className="ease-in-out duration-100 overflow-hidden">
									<div className="cursor-pointer select-none flex gap-x-2 md:gap-x-6 3xl:gap-x-9 items-center sm:items-end" onClick={() => toggleAccordion(index)}>
										<span className='text-gray-400 font-semibold text-sm md:text-base xl:text-lg mb-1 2xl:mb-2 3xl:mb-3'>{`0${ index + 1 }`}</span>
										<Title variant='h4' className={`!text-base sm:!text-xl lg:t!text-2xl 2xl:!text-3xl 3xl:!text-4xl hover:text-orange-500 ${ index === activeIndex ? 'text-orange-600 lg:text-orange-500' : 'text-dark' } ease-in-out duration-300`}>{service.title}</Title>
									</div>
									<div className="ease-in-out duration-300 overflow-hidden pl-6 xl:pl-11 3xl:pl-14" 
										 style=
										 	{		collapsHeight === index ? {height: 'auto'} :
													index === activeIndex ?
													{height: `${collapsHeight}px`} : {height: '0px'}
													
											}
									>
										<div id={`collapsBody-${index}`}>
											<p className="text-gray-400 mb-4 text-base xl:text-lg">
												{service.body}
											</p>
											<Link href={`services/${index}`} className='inline-flex items-center gap-x-3 uppercase font-semibold group text-base md:text-lg'>
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