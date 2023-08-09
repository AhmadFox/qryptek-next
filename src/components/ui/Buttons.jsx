import tw, { styled } from 'twin.macro';
import Link from 'next/link';

const btnStyle = (({outline, rounded, fill, effect, className}) => [
	tw`relative overflow-hidden font-semibold uppercase font-primary text-sm`,
	
	effect ? tw`before:content-[""] before:rotate-45 before:translate-x-12 before:-translate-y-2 before:absolute before:left-0 before:top-0 before:bg-orange-500 before:opacity-[3%]` : tw`hover:bg-orange-500 ease-in-out duration-300`,
	effect && tw`after:content-[""] after:absolute after:top-0 after:left-0 after:w-48 after:h-48 after:-mt-1 after:transition-all after:duration-500 after:ease-in-out after:rotate-45 after:-translate-x-56 after:-translate-y-24 after:bg-orange-500 after:opacity-100 after:hover:-translate-x-8`,
	
	outline && tw`border-[1.5px] border-orange-500 px-4 py-2 xl:py-[0.5rem] hover:text-dark`,
	fill && tw`bg-purple-500 hover:bg-purple-600`,
	rounded && tw`rounded-full`,
	className
]);

const btnMenuStyle = (({className, isOpen}) => [
	tw`flex flex-col justify-between items-end w-8 h-5 relative lg:hidden z-[4] overflow-hidden ease-in-out duration-300`,
	tw`before:content-[""] before:w-8 before:h-[2px] before:rounded-full before:bg-light before:ease-in-out before:duration-300`,
	tw`after:content-[""] after:w-5 after:h-[2px] after:rounded-full after:bg-light after:ease-in-out after:duration-300`,
	isOpen && tw`h-8 before:h-[3px] before:-rotate-45 before:mt-[16px]`,
	isOpen && tw`after:h-[3px] after:w-8 after:rotate-45 after:-translate-y-3`,
	
	className
]);


const Btn = styled.button`${btnStyle}`;
const BtnLink = styled(Link)`${btnStyle}`;
const BtnMenu = styled.button`${btnMenuStyle}`;


export const Button = ({ children, outline, rounded, fill, effect, className, onClick, type }) => {
	return (
		<Btn outline={outline} rounded={rounded} fill={fill} effect={effect} className={className} onClick={onClick} type={type}>
			{
				effect ? <span className='relative z-[3] text-sm ease-in-out duration-300'>{children}</span> : children
			}	
		</Btn>
	)
}

export const ButtonLink = ({ children, outline, rounded, fill, effect, className, href }) => {
	return (
		<BtnLink outline={outline} rounded={rounded} fill={fill} effect={effect} href={href} className={className}>
			{
				effect ? <span className='relative z-[3] text-sm ease-in-out duration-300'>{children}</span> : children
			}	
		</BtnLink>
	)
}

export const ButtonMenu = ({ onClick, className, isOpen }) => {
	return (
		<BtnMenu onClick={onClick} className={className} isOpen={isOpen}>
			<span className={`relative w-6 h-[2px] rounded-full bg-light block ease-in-out duration-300 ${isOpen && 'translate-x-12'}`}></span>
			<span className="sr-only">Burger Menu Button</span>
		</BtnMenu>
	)
}