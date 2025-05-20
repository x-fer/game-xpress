'use client';

import { HeaderBanner } from '@/global/components/header-banner';
import { AboutSection } from '@/global/components/about-section';
import { ConsoleArea } from '@/global/components/console-area';
import { useState } from 'react';

export const LandingPage = () => {
	const [currentPage, setCurrentPage] = useState(0);
	const totalPages = 5;

	return (
		<div className="flex flex-col w-full h-screen p-1 md:p-3 lg:p-5 gap-6">
			<HeaderBanner />
			<div className="flex flex-1 w-full gap-6 h-[calc(100vh-120px)]">
				{/* Left column - Console */}
				<div className="flex flex-col gap-6 w-full md:w-[350px] max-w-full md:max-w-[350px] h-full">
					<ConsoleArea />
				</div>
				{/* Right column - Wizard */}
				<div className="flex-1 flex flex-col gap-6 overflow-y-auto h-full">
					<div className="flex flex-row justify-between items-center mb-4">
						<button
							disabled={currentPage === 0}
							onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
							className="px-4 py-2 bg-black text-white rounded disabled:opacity-50"
						>
							Previous
						</button>
						<span className="text-lg font-bold">
							Step {currentPage + 1} of {totalPages}
						</span>
						<button
							disabled={currentPage === totalPages - 1}
							onClick={() =>
								setCurrentPage((p) => Math.min(totalPages - 1, p + 1))
							}
							className="px-4 py-2 bg-black text-white rounded disabled:opacity-50"
						>
							Next
						</button>
					</div>
					{/* Wizard pages */}
					{Array.from({ length: totalPages }).map((_, idx) => (
						<div
							key={idx}
							style={{ display: idx === currentPage ? 'block' : 'none' }}
							className="h-full"
						>
							<AboutSection />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
