import { useState, useEffect, useRef } from "react";

// Import Packeges:
import { useRouter } from "next/router";

// Import Styled Components:
import { MenuContainer, NavList, NavItem, NavLink, MenuDrop, MenuAside, BackdropMenu } from './styled';

export const NavMenu = ({ items, children, isOpen, setCloseMenu }) => {

	const [isMobile, setIsMobile] = useState(false);
	const menuDrop = useRef(null);
	const router = useRouter();

	const handlerCloseMenu = () => {
		setCloseMenu(false)
	}
  
	const navEffectHandler = (elem) => {

		const listItem = document.querySelectorAll("#nav-menu ul li a");
		listItem.forEach((e) => {
			e.classList.remove('text-orange-500', 'lg:text-light');
		});

		if (  elem === false ) {
			menuDrop.current.setAttribute("style",
				`
					--block-left: ${0}px;
					--block-width: ${0}px;
					opacity: 0;
					visibility: hidden
				`
			);
		} else {
			elem.classList.add('text-orange-500', 'lg:text-light')
			menuDrop.current.setAttribute("style",
				`
					--block-left: ${elem.offsetLeft}px;
					--block-width: ${elem.clientWidth}px;
					opacity: 1;
					visibility: visible
				`
			);
		}
		
	};
  
	useEffect(() => {

		// For Navbar Menu Effects
		const navMenu = document.querySelector("#nav-menu aside");
		const listItem = document.querySelectorAll("#nav-menu ul li a");

	  	listItem.forEach((e) => {
			e.addEventListener("mouseenter", function () {
				navEffectHandler(e);
			});
  
			navMenu.addEventListener("mouseleave", function () {
				if (router.pathname === "/") {
					navEffectHandler(listItem[0]);
				} else if (e.href.includes(router.pathname)) {
					navEffectHandler(e)
				} else if (router.pathname === "/contact") {
					navEffectHandler(false)
				}
			});
  
			if (router.pathname === "/") {
				navEffectHandler(listItem[0]);
			} else if (e.href.includes(router.pathname)) {
				navEffectHandler(e)
		   	} else if (router.pathname === "/contact") {
			   navEffectHandler(false)
		    }
	  	});

		// For Navbar Menu Mobile Exclude Contact-Us Item
		const handleResize = () => {
			setIsMobile(window.innerWidth < 1024);
		};
	
		window.addEventListener('resize', handleResize);
		handleResize();
	
		return () => {
			window.removeEventListener('resize', handleResize);
		};

	}, [router]);
  
	return (
	  <MenuContainer  id="nav-menu">

		<MenuAside className="" isOpen={isOpen}>			
			<NavList>

			{isMobile ? 
				items.map((item, idx) => (
					<NavItem key={idx}>
						<NavLink href={`${item.path}`} onClick={handlerCloseMenu}>
							{item.label}
						</NavLink>
					</NavItem>
				))
			:
				items.filter(item => item.path !== '/contact').map((item, idx) => (
					<NavItem key={idx}>
						<NavLink href={`${item.path}`} onClick={handlerCloseMenu}>
							{item.label}
						</NavLink>
					</NavItem>
				))
			}
			</NavList>

			<MenuDrop ref={menuDrop} />
		</MenuAside>
		
		<BackdropMenu isOpen={isOpen} onClick={handlerCloseMenu} />
  
		{children}
	  </MenuContainer>
	);
};