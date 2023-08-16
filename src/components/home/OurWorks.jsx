// Import Packeges:
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';

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


const ourWorks = [
	{
		banner: '/works/work_1.jpg',
		caption: 'Biological'
	},
	{
		banner: '/works/work_2.jpg',
		caption: 'Document'
	},
	{
		banner: '/works/work_3.jpg',
		caption: 'Specimen'
	}
];

const OurWorks = () => {

	const params = {
		spaceBetween: 20,
		navigation: {
			prevEl: '.works-swiper-prev-button',
			nextEl: '.works-swiper-next-button',
		},
	};

	return (
		<Section variant='xl' className='bg-white relative overflow-hidden 2xl:!pt-0 3xl:!pt-20'>

			<div className="w-full 3xl:w-max max-w-max h-auto absolute bottom-0 left-0">
				<Image
					className='!static'
					src="/spheers_gradiant_bottom.svg"
					alt="Spheers Gradiant Bottom"
					fill
					sizes="(max-width: 768px)100vw, 100vw"
				/>
			</div>

			<Container>

				<div className="grid gap-y-3 mb-8 md:mb-12 xl:mb-14 3xl:mb-16">
					<Title type="h2" display="d4" className="text-center lg:text-start text-dark">
						Some of Our Work
					</Title>
					
					<SubTitle className='text-gray-400 text-center md:text-start lg:w-2/3 xl:w-1/2'>
						We&apos;ve spent many years in the healthcare industry and recognize the challenges and complexities customers face to ensure that biotechnology products meet all the quality attributes required by regulatory agencies.
					</SubTitle>

					<div className="mt-4 flex justify-between">

						<ButtonLink href='/core-values' effect='true' rounded='true' outline='true' className='text-dark hover:!text-light'>explore all</ButtonLink>

						{/* Navegation Swiper Buttons */}
						<div className="flex gap-x-4 2xl:gap-x-9">
							<Button outline="true" rounded="true" className="!p-0 w-10 h-10 flex justify-center items-center works-swiper-prev-button group">
								<ArrowLeft className='group-hover:fill-light ease-in-out duration-300' />
								<span className="sr-only">Subscribe Newsletter Button</span>
							</Button>
							<Button outline="true" rounded="true" className="!p-0 w-10 h-10 flex justify-center items-center works-swiper-next-button group">
								<ArrowRight className='group-hover:fill-light ease-in-out duration-300' />
								<span className="sr-only">Subscribe Newsletter Button</span>
							</Button>
						</div>
					</div>
				</div>

				<Swiper
					slidesPerView={1}
					spaceBetween={10}
					breakpoints={{
						491: {
							slidesPerView: 1.5,
							spaceBetween: 20,
						},
						768: {
							slidesPerView: 2.25,
							spaceBetween: 30,
						},
						1024: {
							slidesPerView: 2.75,
							spaceBetween: 40,
						},
					}}
					modules={[Navigation, Pagination]}
					navigation={true}
					pagination={true}
					className="works-swiper"
					{...params}
				>
					{ourWorks.map((item, idx) => (
						<SwiperSlide key={idx}>
						
							<Link href={`/our/works/${idx}`} className='block group'>
								<figure className="rounded-lg xl:rounded-xl overflow-hidden pb-3/4 2xl:pb-2/3 relative">
									<Image
										className="object-cover group-hover:scale-110 ease-in-out duration-700"
										src={item.banner}
										alt={`Our Work for ${item.caption}`}
										fill
										objectfit-cover="true"
										object-center="true"
										quality={100}
										sizes="(min-width: 1940px) 584px, (min-width: 1040px) 29.89vw, (min-width: 780px) calc(44.17vw - 36px), (min-width: 500px) 61.54vw, (min-width: 460px) calc(100vw - 32px), (min-width: 420px) 388px, (min-width: 340px) calc(66.67vw + 81px), 268px"
									/>
									<div className="triangle w-2/3 h-3/4 md:w-1/2 md:h-3/4 absolute -top-1 -left-2"></div>
									<figcaption className='text-dark text-base xl:text-xl 3xl:text-2xl font-bold font-primary relative z-[1] top-3 2xl:top-5 left-2 2xl:left-3'>{item.caption}</figcaption>
								</figure>
							</Link>
						
						</SwiperSlide>
					))}
				</Swiper>
			</Container>

		</Section>
	)
}

export default OurWorks;