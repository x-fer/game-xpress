'use client';

import { HeaderBanner } from '@/global/components/header-banner';
import FloatingWindow from '@/global/components/floating-window';
import { ConsoleArea } from '@/global/components/console-area';
import { Wizard } from '@/global/components/wizard';

export const LandingPage = () => {
	const totalSteps = 5;

	return (
		<div className="flex flex-col w-full h-screen p-1 md:p-3 lg:p-5 gap-6 overflow-hidden">
			<HeaderBanner />
			<div className="flex flex-1 w-full gap-6 h-[calc(100vh-120px)]">
				{/* Left column - Console */}
				<div className="flex flex-col gap-6 w-full md:w-[350px] max-w-full md:max-w-[350px] h-full">
					<ConsoleArea />
				</div>
				{/* Right column - Wizard */}
				<Wizard totalSteps={totalSteps} className="w-full">
					<FloatingWindow />
				</Wizard>
			</div>
		</div>
	);
};
