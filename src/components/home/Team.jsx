// Import Packeges:
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Perfection Component:
import Perfection from './Perfection';

// Import Styled Components:
import Section from "../ui/Section";
import Container from "../ui/Container";
import { Title, SubTitle } from "../ui/Titles";
import { ButtonLink, Button } from '../ui/Buttons';

// Import Svg Icons
import { ArrowLeft, ArrowRight } from '../icons';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import Required Swiper Modules
import { Navigation, Pagination } from 'swiper/modules';

const ourTeam = [
	{
		banner: '/team/member_1.jpg',
		jobTitle: 'Business Analysts',
		details: "We've spent many years in the healthcare industry."
	},
	{
		banner: '/team/member_2.jpg',
		jobTitle: 'UX/UI Designers',
		details: "We've spent many years in the healthcare industry."
	},
	{
		banner: '/team/member_3.jpg',
		jobTitle: 'Software Engineers',
		details: "We've spent many years in the healthcare industry."
	},
	{
		banner: '/team/member_4.jpg',
		jobTitle: 'Solution Architects',
		details: "We've spent many years in the healthcare industry."
	},
	{
		banner: '/team/member_5.jpg',
		jobTitle: 'Project Managers',
		details: "We've spent many years in the healthcare industry."
	}
];

const Team = () => {

	const params = {
		spaceBetween: 20,
		navigation: {
			prevEl: '.team-swiper-prev-button',
			nextEl: '.team-swiper-next-button',
		}
	};

	return (
		<Section variant='2xl' className='relative'>

			<div className="w-full h-auto absolute bottom-0 left-0">
				<Image
					className='!static'
					src="/shades_color.png"
					alt="Spheers Gradiant Bottom"
					fill
					quality={100}
					sizes="100vw"
				/>
			</div>

			<Container className='relative z-[1]'>

				<div className="xl:w-1/3 3xl:w-max max-w-max h-auto absolute top-48 md:top-24 2xl:top-40 right-0 z-[-1]">
					<Image
						className='!static'
						src="/spheers_logo_full.svg"
						alt="Spheers Gradiant Bottom"
						fill
						quality={100}
						sizes="(max-width: 768px)100vw, 100vw"
					/>
				</div>

				<div className="grid gap-y-3 mb-8 md:mb-12 xl:mb-14 3xl:mb-16 2xl:w-3/4">
					<Title type="h1" display="d1" className="text-center lg:text-start">
						Highlight of Our Team Composition
					</Title>
					
					<SubTitle className='text-gray-200 text-center md:text-start'>
						Qryptek is a premier digital health company offering custom-built software solutions and IT infrastructure services to healthcare startups and life sciences organizations worldwide. Fostering innovation and digital transformation, we design and develop secure and regulatory-compliant software that combines cutting-edge technologies with the latest medical advancements.
					</SubTitle>

				</div>
					
				<div className="mt-4 flex justify-between mb-8">
					<ButtonLink href='/our-team' effect='true' rounded='true' outline='true'>explore all</ButtonLink>
					{/* Navegation Swiper Buttons */}
					<div className="flex gap-x-4 2xl:gap-x-9">
						<Button outline="true" rounded="true" className="!p-0 w-10 h-10 flex justify-center items-center team-swiper-prev-button group">
							<ArrowLeft className='fill-light group-hover:fill-dark ease-in-out duration-300' />
							<span className="sr-only">Subscribe Newsletter Button</span>
						</Button>
						<Button outline="true" rounded="true" className="!p-0 w-10 h-10 flex justify-center items-center team-swiper-next-button group">
							<ArrowRight className='fill-light group-hover:fill-dark ease-in-out duration-300' />
							<span className="sr-only">Subscribe Newsletter Button</span>
						</Button>
					</div>
				</div>

				<Swiper
					slidesPerView={1}
					spaceBetween={25}
					breakpoints={{
						491: {
							slidesPerView: 1.5,
							spaceBetween: 25,
						},
						768: {
							slidesPerView: 2,
							spaceBetween: 40,
						},
						1024: {
							slidesPerView: 2.5,
							spaceBetween: 40,
						},
						1280: {
							slidesPerView: 3,
							spaceBetween: 50,
						},
						1450: {
							slidesPerView: 3.5,
							spaceBetween: 50,
						},
						1736: {
							slidesPerView: 4.5,
							spaceBetween: 50,
						},
						1823: {
							slidesPerView: 5,
							spaceBetween: 55,
						},
						1930: {
							slidesPerView: 5,
							spaceBetween: 60,
						}
					}}
					modules={[Navigation, Pagination]}
					navigation={true}
					pagination={true}
					className="team-swiper"
					{...params}
				>
					{ourTeam.map((item, idx) => (
						<SwiperSlide key={idx}>
						
							<Link href={`/our/works/${idx}`} className='grid gap-y-8 group'>
								<figure className="rounded-lg xl:rounded-xl overflow-hidden pb-[125%] relative">
									<Image
										className="object-cover group-hover:scale-110 ease-in-out duration-700"
										src={item.banner}
										alt={`Our Work for ${item.caption}`}
										fill
										objectfit-cover="true"
										object-center="true"
										quality={100}
										sizes="(min-width: 1840px) 291px, (min-width: 1740px) calc(20vw - 32px), (min-width: 1460px) calc(26.15vw - 35px), (min-width: 1280px) calc(30.63vw - 34px), (min-width: 1040px) 33.64vw, (min-width: 780px) calc(50vw - 44px), (min-width: 500px) 61.54vw, (min-width: 460px) calc(100vw - 32px), (min-width: 420px) 388px, (min-width: 340px) calc(66.67vw + 81px), 268px"
									/>
								</figure>
								<div className="grid gap-y-2 group-hover:text-orange-500 ease-in-out duration-300">
									<Title type='h2' display='d8'>{item.jobTitle}</Title>
									<SubTitle variant='v4'>{item.details}</SubTitle>
								</div>
							</Link>
						
						</SwiperSlide>
					))}
				</Swiper>

				<Perfection  />

			</Container>
			
		</Section>
	)
}

export default Team;