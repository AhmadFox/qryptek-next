import tw, { styled } from 'twin.macro';

const Section = styled.section(({variant}) => [
	tw`py-4 xl:py-9`,
	variant === 'lg' && tw`py-6 md:py-9 xl:py-12`,
	variant === 'xl' && tw`py-9 md:py-16 xl:py-20`,
	variant === '2xl' && tw`py-20 md:py-24 xl:py-28`,
]);

export default Section;