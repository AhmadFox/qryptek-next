import { Fragment } from 'react';

import Head from 'next/head';
import Navbar from '@/components/common/navbar/Navbar';
import Footer from '@/components/common/Footer';
import JumpToTopButton from '@/components/ui/JumpTopButton';

const Layout = ({ children }) => {
	return (
		<Fragment>

			<Head>
				<title>Qryptek TechHub</title>
				<meta charSet="utf-8" />
				<meta name="format-detection" content="telephone=no, date=no, email=no, address=no" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta name="description" content="Qryptek Consulting Redefining Synergies Between Life Science and IT"></meta>
			</Head>

			<Navbar  />

			<main>{children}</main>

			<JumpToTopButton  />
			
			<Footer  />

		</Fragment>
	)
}

export default Layout;