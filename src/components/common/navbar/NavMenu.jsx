import { useEffect, useRef } from "react";

// Import Packeges:
import { useRouter } from "next/router";

// Import Styled Components:
import { MenuContainer, NavList, NavItem, NavLink, MenuDrop, MenuAside, BackdropMenu } from './styled';

export const NavMenu = ({ items, children, isOpen, setCloseMenu }) => {

	const menuDrop = useRef(null);
	const router = useRouter();

	const handlerCloseMenu = () => {
		setCloseMenu(false)
	}
  
	const navEffectHandler = (elem) => {

		const listItem = document.querySelectorAll("#nav-menu ul li a");
		listItem.forEach((e) => {
			e.classList.remove('text-orange-500');
		});

		elem === false ?
		menuDrop.current.setAttribute("style",
			`
				--block-left: ${0}px;
				--block-width: ${0}px;
				opacity: 0;
				visibility: hidden
			`
		) :
		menuDrop.current.setAttribute("style",
			`
				--block-left: ${elem.offsetLeft}px;
				--block-width: ${elem.clientWidth}px;
				opacity: 1;
				visibility: visible
			`
		);
	};
  
	// For Navbar Menu Effects
	useEffect(() => {
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
					navEffectHandler(e);
				} else if (router.pathname === "/contact") {
					navEffectHandler(false)
				}
			});
  
			if (router.pathname === "/") {
				navEffectHandler(listItem[0]);
			} else if (e.href.includes(router.pathname)) {
				navEffectHandler(e);
		  	} else if (router.pathname === "/contact") {
				navEffectHandler(false)
			}
	  	});

	}, [router]);
  
	return (
	  <MenuContainer  id="nav-menu">

		<MenuAside className="" isOpen={isOpen}>			
			<NavList>
				{items.map((item, idx) => (
				<NavItem key={idx}>
					<NavLink href={`${item.path}`} onClick={handlerCloseMenu}>
						{item.label}
					</NavLink>
				</NavItem>
				))}
			</NavList>

			<MenuDrop ref={menuDrop} />
		</MenuAside>
		
		<BackdropMenu isOpen={isOpen} onClick={handlerCloseMenu} />
  
		{children}
	  </MenuContainer>
	);
};