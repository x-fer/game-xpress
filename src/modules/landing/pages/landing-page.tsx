'use client';

import { HeaderBanner } from '@/global/components/header-banner';
import FloatingWindow from '@/global/components/floating-window';
import { ConsoleArea } from '@/global/components/console-area';
import { Wizard } from '@/global/components/wizard';

export const LandingPage = () => {
	const totalSteps = 5;

	return (
		<div className="flex flex-col w-full min-h-screen py-3 pl-2 pr-3 md:p-4 lg:p-5 gap-6">
			<HeaderBanner />
			<div className="flex flex-col md:flex-row flex-1 w-full gap-6">
				{/* Console */}
				<div className="flex flex-col gap-6 w-full h-[60vh] md:h-[calc(100vh-160px)] md:w-[400px] lg:w-[500px] xl:w-[600px]">
					<ConsoleArea />
				</div>
				{/* Wizard */}
				<Wizard
					totalSteps={totalSteps}
					className="w-full flex-1 md:h-[calc(100vh-160px)]"
				>
					<FloatingWindow />
				</Wizard>
			</div>
		</div>
	);
};
