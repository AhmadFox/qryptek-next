import Link from 'next/link';

const Navbar = () => {
	return (
		<nav className="py-2 flex justify-between items-center">
			<span className="font-bold">Navbar</span>

			<div className="flex gap-x-3">
				<Link href="/">Home</Link>
				<Link href="/about">About</Link>
			</div>
		</nav>
	)
}

export default Navbar;