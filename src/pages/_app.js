// Import Gloable Style With Tailwind-css
import '@/styles/globals.css';

// Import Layout Design:
import Layout from '@/layout/Layout';

// Import Context Provider:
import { RequsetModalProvider } from '@/context/RequsetModalContext';
import Modal from '@/components/ui/Modal';

export default function App({ Component, pageProps }) {
	return (
		<RequsetModalProvider>
			<Layout>
				<Component {...pageProps} />
				<Modal />
			</Layout>
		</RequsetModalProvider>
	)
}