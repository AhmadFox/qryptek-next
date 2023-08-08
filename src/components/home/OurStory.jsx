// Import Packeges:
import Image from 'next/image';

// Import Styled Components:
import React from 'react'
import Section from '../ui/Section'
import Container from '../ui/Container'
import { Heading } from '../ui/Headings';
import { Button } from '../ui/Buttons';

const OurStory = () => {
  return (
	<Section variant="page-block" className="relative overflow-hidden min-h-[60vh]">
		<div className="absolute top-0 right-0  z-[-1]">
			<Image
				className="md:w-3/4 3xl:w-full h-auto ml-auto opacity-20"
				src="/spheers_gradiant.svg"
				alt="Spheers Gradiant Right"
				width={437}
				height={454}
				ayout="responsive"
				sizes="(max-width: 491px)50vw ,(max-width: 768px) 70vw, 100vw"
				priority
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
				priority
			/>
			<div className="grid absolute bottom-8 grid-cols-12">
				<div className="md:col-start-2 xl:col-start-6 col-span-12 md:col-span-10 xl:col-span-6 grid gap-y-4">
					<Heading variant='h1' className='text-center md:text-start'>our story</Heading>
					<p className="xl:text-lg mb-3 xl:mb-7 text-center md:text-start pr-4 md:pr-0">Qryptek is a premier digital health company offering custom-built software solutions and IT infrastructure services to healthcare startups and life sciences organizations worldwide. Fostering innovation and digital transformation, we design and develop secure and regulatory-compliant software that combines cutting-edge technologies with the latest medical advancements.</p>
					<div className="text-center md:text-start">
						<Button effect="true" rounded="true" outline="true" href="/about">explore all</Button>
					</div>
				</div>
			</div>
		</Container>
	</Section>
  )
}

export default OurStory
