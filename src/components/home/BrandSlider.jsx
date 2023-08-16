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
					<div className="flex gap-x-16 md:gap-x-28">
						<div className="grid grid-cols-10 gap-x-16 md:gap-x-28 flex-shrink-0">
							{brands.map((brand, idx) => (
								<div key={idx} className="w-20 h-9 relative">
									<Image
										src={brand.image}
										alt={brand.alt}
										fill
										objectFit='contain'
										sizes="80px"
									/>
								</div>
							))}
						</div>
						<div className="grid grid-cols-10 gap-x-28 flex-shrink-0">
							{brands.map((brand, idx) => (
								<div key={`clone-${idx}`} className="w-20 h-9 relative">
									<Image
										src={brand.image}
										alt={brand.alt}
										fill
										objectFit='contain'
										sizes="80px"
									/>
								</div>
							))}
						</div>
					</div>
				</div>
			</Container>
		</Section>
	)
}
		
export default BrandSlider;