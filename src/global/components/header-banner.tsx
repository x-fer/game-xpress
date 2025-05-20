import Marquee from 'react-fast-marquee';
import Link from 'next/link';

export const HeaderBanner = ({}: {}) => {
	return (
		<header className="backdrop-retro bg-bsod text-white py-6 w-full flex items-center justify-between px-4">
			<Marquee className="flex-1">
				{new Array(10).fill(0).map((_, index) => (
					<p className="text-center inline-block mr-6" key={index}>
						Registrations open
					</p>
				))}
			</Marquee>
			<Link
				href="/register"
				className="backdrop-retro-light bg-black text-white px-6 py-2 ml-4 whitespace-nowrap"
			>
				REGISTER
			</Link>
		</header>
	);
};
