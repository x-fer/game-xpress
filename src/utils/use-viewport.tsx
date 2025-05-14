'use client';

import {
	createContext,
	type ReactNode,
	useContext,
	useEffect,
	useState
} from 'react';

const ViewportSizeContext = createContext({
	isMobile: false
});

export const ViewportSizeProvider = ({ children }: { children: ReactNode }) => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 768) {
				setIsMobile(true);
			} else {
				setIsMobile(false);
			}
		};
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<ViewportSizeContext.Provider value={{ isMobile }}>
			{children}
		</ViewportSizeContext.Provider>
	);
};

export const useViewport = () => {
	const context = useContext(ViewportSizeContext);

	return {
		isMobile: context.isMobile,
		isDesktop: !context.isMobile
	};
};
