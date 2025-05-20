import { PropsWithChildren } from 'react';

const FloatingWindow = ({ children }: PropsWithChildren) => {
	return <div className="backdrop-retro bg-section w-[800px]">{children}</div>;
};

export default FloatingWindow;
