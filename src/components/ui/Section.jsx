import tw, { styled } from 'twin.macro';

const Section = styled.section(({variant}) => [
	tw`py-9 3xl:py-11`,
		variant === 'page-block' &&
	tw`py-6 md:py-9 xl:py-12`
]);

export default Section;