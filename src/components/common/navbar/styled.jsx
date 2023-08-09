// Import Packeges:
import Link from "next/link";
import tw, { styled } from "twin.macro";

// Styled Components For Export [ use on Navbar Component ]
export const Nav = tw.nav`py-3 md:py-4 fixed w-full top-0 z-[4] bg-opacity-0 ease-in-out duration-500 overflow-hidden`;
export const BluredBg = tw.div`absolute w-full h-full top-0 left-0 backdrop-blur-md bg-dark bg-opacity-50 ease-in-out duration-500`;
export const NavFlex = styled.div`
  ${tw`flex flex-col gap-y-4 md:flex-row items-center`} justify-content:${(
	props
  ) => props.justify}
`;

// Defining Styled Components
export const NavList = tw.ul`relative z-[2] flex flex-col gap-y-6 lg:flex-row lg:gap-y-0 lg:gap-x-9 2xl:gap-x-10 mt-3 md:mt-14 lg:mt-0`;
export const NavItem = tw.li`flex lg:items-center lg:justify-center`;
export const NavLink = styled(Link)`
  ${tw`text-xl lg:text-sm font-semibold ease-in-out duration-300 font-secondary lg:font-primary`}
`;
export const MenuDrop = styled.div`
  ${tw`absolute h-[2px] rounded-full bottom-0 bg-orange-500 opacity-0 invisible hidden lg:block`}
  left: var(--block-left);
  width: var(--block-width);
  transition: 0.4s cubic-bezier(0.75, 0, 0, 1);
`;
export const MenuContainer = tw.div`relative md:flex md:gap-x-12 xl:gap-x-24 2xl:gap-x-36`;

const menuAsideStyle = (({className, isOpen}) => [
	tw`fixed z-[4] lg:static lg:flex top-0 h-full lg:h-auto w-full lg:w-auto max-w-[350px] lg:max-w-none bg-slate-900 lg:bg-transparent px-6 lg:px-0 py-6 lg:py-0 shadow-2xl lg:shadow-none ease-in-out duration-500`,
	isOpen ? tw`right-0` : tw`-right-full`,
	className
]);

const backdropStyle = (({isOpen}) => [
	tw`block lg:hidden fixed h-full w-full left-0 top-0 backdrop-blur-md bg-opacity-50 ease-in-out duration-500`,
	isOpen ? tw`visible opacity-100` : tw`invisible opacity-0`,
]);

const Aside = styled.aside`${menuAsideStyle}`;
const Backdrop = styled.aside`${backdropStyle}`;

export const MenuAside = ({ className, isOpen, children }) => {
	return (
		<Aside className={className} isOpen={isOpen}>{children}</Aside>
	)
}

export const BackdropMenu = ({ isOpen, onClick }) => <Backdrop onClick={onClick} isOpen={isOpen} />