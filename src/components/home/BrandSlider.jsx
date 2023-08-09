// Import Packeges:
import Image from 'next/image';

// Import Styled Components:
import Section from '../ui/Section';
import Container from '../ui/Container';

const brands = [
	{ image: '/brands/alpen.png', alt: 'alpen' },
	{ image: '/brands/aquascutum.png', alt: 'aquascutum' },
	{ image: '/brands/bird_eye.png', alt: 'bird eye' },
	{ image: '/brands/cancer_reasearch_uk.png', alt: 'cancer reasearch uk' },
	{ image: '/brands/casillero.png', alt: 'casillero' },
	{ image: '/brands/alpen.png', alt: 'alpen' },
	{ image: '/brands/aquascutum.png', alt: 'aquascutum' },
	{ image: '/brands/bird_eye.png', alt: 'bird eye' },
	{ image: '/brands/cancer_reasearch_uk.png', alt: 'cancer reasearch uk' },
	{ image: '/brands/casillero.png', alt: 'casillero' },
];

const BrandSlider = () => {
	
	return (
		<Section className="bg-white border-b border-gray-100">
			<Container>
				<div className="overflow-hidden" id="brands-slider">
					<div className="flex gap-x-28">
						{brands.map((brand, idx) => (
							<Image
								key={idx}
								className="flex-shrink-0 flex-grow-0 w-auto h-9 object-cover"
								src={brand.image}
								alt={brand.alt}
								width={444}
								height={211}
								quality={100}
								ayout="responsive"
								priority
							/>
						))}
						{brands.map((brand, idx) => (
							<Image
								key={`clone-${idx}`}
								className="flex-shrink-0 flex-grow-0 w-auto h-9 object-cover"
								src={brand.image}
								alt={brand.alt}
								width={444}
								height={211}
								quality={100}
								ayout="responsive"
								priority
							/>
						))}
					</div>
				</div>
			</Container>
		</Section>
	)
}
		
export default BrandSlider;