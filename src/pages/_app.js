import { Fragment, useEffect } from 'react';
import Head from 'next/head';

// Import Gloable Style With Tailwind-css
import '@/styles/globals.css';

// Import Layout Design:
import Layout from '@/layout/Layout';

export default function App({ Component, pageProps }) {
	useEffect(() => {
		if ('serviceWorker' in navigator) {
			window.addEventListener('load', () => {
				navigator.serviceWorker.register('/service-worker.js').then((registration) => {
					console.log('Service Worker registered with scope:', registration.scope);
				}).catch((error) => {
					console.error('Service Worker registration failed:', error);
				});
			});
		}
	}, []);

	return (
		<Fragment>
			<Head>
				<title>Qryptek TechHub</title>
				<meta charSet="utf-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="format-detection" content="telephone=no, date=no, email=no, address=no" />
				<meta name='viewport' content='minimum-scale=1, maximum-scale=5, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover' />
				<meta name="description" content="Qryptek Consulting Redefining Synergies Between Life Science and IT"></meta>
				<meta name="keywords" content="TechHub, helth tech, technology" />
				<link rel="manifest" href="/manifest.json" />
				{/* Favicon Meta Source */}
				<link rel="icon" href="/favicon/favicon.ico" />
				<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
				<link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#333333" />
				<meta name="msapplication-TileColor" content="#da532c" />
				<meta name="theme-color" content="#F1F1F1"></meta>				
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Fragment>
	)
}