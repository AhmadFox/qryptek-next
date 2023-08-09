import tw, { styled } from 'twin.macro';
import Link from 'next/link';

const linkStyle = (({className}) => [
	tw`hover:text-orange-500 font-semibold capitalize ease-in-out duration-300 text-sm`,
	className
]);

const NLink = styled(Link)`${linkStyle}`;


export const NavLink = ({ children, href, className }) => {
	return (
		<NLink className={className} href={href}>
			{
				children
			}	
		</NLink>
	)
}