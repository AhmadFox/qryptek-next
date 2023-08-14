// Import Packeges:
import Image from 'next/image';

// Import Styled Components:
import React from 'react'
import Section from '../ui/Section'
import Container from '../ui/Container'
import { ButtonLink } from '../ui/Buttons';
import { Title } from '../ui/Titles';

const OurStory = () => {
  return (
	<Section variant="xl" className="relative overflow-hidden xl:!pb-28">
		<div className="absolute top-0 right-0  z-[-1]">
			<Image
				className="md:w-3/4 3xl:w-full h-auto ml-auto opacity-20"
				src="/spheers_gradiant.svg"
				alt="Spheers Gradiant Right"
				width={437}
				height={454}
				ayout="responsive"
				sizes="(max-width: 491px)50vw ,(max-width: 768px) 70vw, 100vw"
			/>
		</div>
		<Container>
			<Image
				className="w-full md:w-3/5 h-auto md:-translate-y-12"
				src="/grow_tree.png"
				alt="Tree Grow Banner"
				width={988}
				height={472}
				quality={100}
				ayout="responsive"
			/>
			<div className="grid 2xl:absolute bottom-20 grid-cols-12 md:-translate-y-24 md:-mb-24 2xl:mb-0 2xl:-translate-y-0">
				<div className="md:col-start-2 xl:col-start-6 col-span-12 md:col-span-10 xl:col-span-6 grid gap-y-4">
					<Title type='h2' display='d1' className='text-center md:text-start'>our story</Title>
					<p className="xl:text-lg mb-3 xl:mb-7 text-center md:text-start pr-4 md:pr-0">Qryptek is a premier digital health company offering custom-built software solutions and IT infrastructure services to healthcare startups and life sciences organizations worldwide. Fostering innovation and digital transformation, we design and develop secure and regulatory-compliant software that combines cutting-edge technologies with the latest medical advancements.</p>
					<div className="text-center md:text-start">
						<ButtonLink effect="true" rounded="true" outline="true" href="/about">explore all</ButtonLink>
					</div>
				</div>
			</div>
		</Container>
	</Section>
  )
}

export default OurStory
