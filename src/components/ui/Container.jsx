import tw, { styled } from 'twin.macro';

const Container = styled.div(({variant}) => [
	tw`w-full px-4 md:px-6 lg:px-0 lg:w-11/12 xl:max-w-[1676px] mx-auto`,
		variant === 'fluid' &&
	tw`max-w-full`
]);

export default Container;