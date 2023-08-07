import { Fragment } from 'react';

import Head from 'next/head';
import Navbar from '@/components/common/navbar/Navbar';
import Footer from '@/components/common/Footer';

const Layout = ({ children }) => {
	return (
		<Fragment>

			<Head>
				<title>Qryptek TechHub</title>
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta name="description" content="Qryptek Consulting Redefining Synergies Between Life Science and IT"></meta>
			</Head>

			<Navbar  />

			<main>{children}</main>
			
			<Footer  />

		</Fragment>
	)
}

export default Layout;