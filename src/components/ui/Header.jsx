import tw, { styled } from 'twin.macro';

const headerStyle = (({ type }) => [
	type === 'hero' && tw`md:h-screen md:max-h-[928px] xl:max-h-[1000px] overflow-hidden relative`,
	type === 'hero' && tw`py-20 md:py-24`,
	type === 'page' && tw`overflow-hidden relative pb-9 md:pb-12 xl:pb-16 pt-16 md:pt-20 xl:pt-24 3xl:pt-32`,
]);

const HeaderTag = styled.header`${headerStyle}`;

const Header = ({ children, type, className }) => {
	return (
		<HeaderTag type={type} className={className} >
			{children}
		</HeaderTag>
	)
}

export default Header;