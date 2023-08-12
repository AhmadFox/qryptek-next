import { useState, useEffect } from 'react';

// Import Packeges:
import Image from 'next/image';

// Import Contexts:
import { useRequsetModal } from '@/context/RequsetModalContext';

// Import Styled Components:
import Container from '@/components/ui/Container';
import { ButtonMenu, ButtonLink } from '@/components/ui/Buttons';
import { NavLink } from '@/components/ui/NavLink';
import { NavMenu } from './NavMenu';
import { Nav, NavFlex, BluredBg } from './styled';

const ItemsList = [
	{ label: 'Home', path: '/' },
	{ label: 'Services', path: '/services' },
	{ label: 'Core Values', path: '/core-values' },
	{ label: 'Careers', path: '/careers' },
	{ label: 'About Us', path: '/about' },
	{ label: 'Contact Us', path: '/contact' },
];

const Navbar = () => {

	const [ openMenu, setOpenMenu ] = useState(false);
	const [ bluredNav, setBluredNav] = useState(false);

	const { openRequsetModal } = useRequsetModal();

	const handlerOpenMenu = () => {
		setOpenMenu(!openMenu);
	}

	const handleScroll = () => {
		window.scrollY > 50 ? setBluredNav(true) : setBluredNav(false)
	};

	useEffect(() => {

		const bodyTag = document.querySelector('html body');
		openMenu ? bodyTag.style.overflow = 'hidden' : bodyTag.style.overflow = '';

		window.addEventListener('scroll', handleScroll);
		
		return () => {
		  window.removeEventListener('scroll', handleScroll);
		};

	}, [ openMenu ]);
	
	return (
		<Nav>
			{ bluredNav && <BluredBg /> }
			<Container>

				<div className="flex justify-between items-center">
					<NavLink href="/" className='z-[4]'>
						<Image
							className="w-36 md:w-44 xl:w-54"
							src="/logo-brand.svg"
							alt="Qryptek Logo Brand"
							width={500}
							height={108}
							priority
						/>
					</NavLink>

					<NavMenu items={ItemsList} isOpen={openMenu} setCloseMenu={setOpenMenu}>
						<NavFlex>
							<NavLink href="tel:7089646855" className='md:mr-6 xl:mr-9 hidden md:block relative md:z-[4] lg:z-1'>708.964.6855</NavLink>
							<ButtonLink href='/contact' rounded="true" outline="true" effect="true" className='hidden md:block md:z-[4] lg:z-1'>contact us</ButtonLink>
							<ButtonMenu isOpen={openMenu} className="ml-5" onClick={handlerOpenMenu} />
						</NavFlex>
					</NavMenu>

				</div>

			</Container>
		</Nav>
	)
}

export default Navbar;