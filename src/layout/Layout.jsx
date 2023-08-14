import { Fragment } from 'react';

// Import Context Provider:
import { RequsetModalProvider } from '@/context/RequsetModalContext';

import Navbar from '@/components/common/navbar/Navbar';
import Footer from '@/components/common/Footer';
import Modal from '@/components/ui/Modal';
import JumpToTopButton from '@/components/ui/JumpTopButton';

const Layout = ({ children }) => {
	return (
		<Fragment>

			<Navbar  />

			<RequsetModalProvider>
				<main>{children}</main>
				<Modal />
			</RequsetModalProvider>

			<Footer  />

			<JumpToTopButton  />
			
		</Fragment>
	)
}

export default Layout;