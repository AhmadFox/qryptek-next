import tw, { styled } from 'twin.macro';

const Section = styled.section(({variant}) => [
	tw`py-4 xl:py-7`,
	variant === 'page-block' && tw`py-9 md:py-16 xl:py-20`,
	variant === 'header-block' && tw`py-6 md:py-9 xl:py-12`,
	variant === 'hero-block' && tw`py-24 md:py-28 xl:py-32`,
]);

export default Section;