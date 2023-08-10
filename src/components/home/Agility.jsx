// Import Packeges:
import Image from 'next/image';

// Import Styled Components:
import Section from "../ui/Section";
import Container from "../ui/Container";
import { Title, SubTitle } from "../ui/Titles";
import { Angle } from '../icons';
import Link from 'next/link';

const agilityList = [
	{
		title: 'Goal Oriented',
		details: 'Our management team is made up of ambitious. Goal oriented individuals and will work hard to achieve good results in the tasks they are given.'
	},
	{
		title: 'Proactive',
		details: 'We are proactive, self-motivated, and innovative problem solvers. Our approach leads to increased engagement and productivity to influence future oriented.'
	},
	{
		title: 'Professional',
		details: 'Our team is made of accountable individuals with complementary skills who work together to achieve your project goals.'
	},
	{
		title: 'Punctual',
		details: 'We maintain a fun work environment yet we take our jobs very seriously. We care about your timelines and aim to standout as your reliable and trustworthy business partner.'
	},
];

const Agility = () => {
  return (
	<Section variant='page-block' className='bg-white relative'>

		<div className="w-full 3xl:w-max max-w-max h-auto absolute top-0 right-4 opacity-40 xl:opacity-100">
			<Image
				className='!static'
				src="/spheers_logo_small.svg"
				alt="Spheers Gradiant Left"
				fill
				sizes="(max-width: 768px)100vw, 100vw"
			/>
		</div>

		<Container>

			<Title type="h1" display="d1" className="text-center lg:text-start text-dark 2xl:w-10/12 mb-4 md:mb-8 2xl:mb-0">
				Commitment to increase Your Agility
			</Title>

			<div className="grid grid-cols-12 md:gap-10">

				<SubTitle className='text-gray-400 text-center md:text-start 2xl:col-span-10 mb-6 md:mb-0 2xl:mb-12 md:order-2 2xl:order-1 col-span-12 md:col-span-6 text-base md:text-sm lg:text-lg 2xl:text-base'>
					Qryptek is a premier digital health company offering custom-built software solutions and IT infrastructure services to healthcare startups and life sciences organizations worldwide. Fostering innovation and digital transformation, we design and develop secure and regulatory-compliant software that combines cutting-edge technologies with the latest medical advancements.
				</SubTitle>

				<div className="col-span-12 md:col-span-6 2xl:pr-9 3xl:pr-12 mb-6 md:mb-8 2xl:mb-0 2xl:order-2">
					<div className="rounded-lg xl:rounded-xl overflow-hidden pb-3/5 relative">
						<Image
							className='ob object-cover'
							src='/agility_banner.jpg'
							alt='Customer Service Oficer Banner'
							fill
							objectfit-cover="true"
							object-center="true"
							quality={100}
							priority
							sizes="(max-width: 491px)50vw ,(max-width: 768px) 70vw, 100vw"
						/>
					</div>
				</div>

				<div className="col-span-12 xl:col-span-12 2xl:col-span-6 md:order-3">
					
					<div className="grid md:grid-cols-2 gap-12 md:gap-10 2xl:gap-16 3xl:gap-x-32">
					{
						agilityList.map((item, idx) => (
							<Link key={idx} href={`/core-value/${idx}`} className="grid 2xl:gap-y-6 border-t border-orange-500 pt-8 group">
								<div className="flex justify-between items-stretch">
									<Title type='h2' display='d6' variant='agility' className='!text-xl sm:!text-2xl'>{item.title}</Title>
									<Angle className='stroke-dark group-hover:stroke-orange-500 ease-in-out duration-300' />
								</div>
								<SubTitle variant='v4' className='text-gray-400'>{item.details}</SubTitle>
							</Link>
						))
					}
						
					</div>

				</div>

			</div>

		</Container>

	</Section>
  )
}

export default Agility;