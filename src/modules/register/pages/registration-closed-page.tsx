'use client';

import { HeaderBanner } from '@/global/components/header-banner';
import { ConsoleArea } from '@/global/components/console-area';
import { DottedBar } from '@/global/components/dotted-bar';

export const RegistrationClosedPage = () => {
	return (
		<div className="flex flex-col w-full min-h-screen py-3 pl-2 pr-3 md:p-4 lg:p-5 gap-6">
			<HeaderBanner />
			<div className="flex flex-col md:flex-row flex-1 w-full gap-6">
				{/* Console */}
				<div className="flex flex-col gap-6 w-full h-[60vh] md:h-[calc(100vh-160px)] md:w-[400px] lg:w-[500px] xl:w-[600px]">
					<ConsoleArea />
				</div>
				{/* Registration Closed Message - Styled like FloatingWindow */}
				<div className="w-full flex-1 flex items-center justify-center">
					<div className="relative w-full border h-full backdrop-retro-light bg-section">
						<div className="bg-bsod flex items-center justify-between h-8 px-2 font-mono text-sm text-white">
							<DottedBar />
							<span className="px-2 underline text-white whitespace-nowrap">
								Registration Status
							</span>
							<DottedBar />
						</div>
						<div className="p-6 space-y-4 font-mono text-sm text-center">
							<h1 className="text-2xl font-bold text-bsod mb-6">
								Registration Closed
							</h1>
							<p className="text-lg mb-4">
								Sorry, the registration period for Game X.Press 2025 has ended.
							</p>
							<p className="mb-6">
								Thank you for your interest! We'll see you next year for another
								exciting GameJam.
							</p>
							<div className="mt-8 space-y-2">
								<p className="font-bold">Stay updated for next year:</p>
								<div className="space-y-1">
									<p>
										<a
											href="https://www.instagram.com/game_x.press/"
											target="_blank"
											rel="noopener noreferrer"
											className="text-bsod hover:text-bsod/75 underline"
										>
											Instagram →
										</a>
									</p>
									<p>
										<a
											href="https://www.linkedin.com/showcase/game-x-press"
											target="_blank"
											rel="noopener noreferrer"
											className="text-bsod hover:text-bsod/75 underline"
										>
											LinkedIn →
										</a>
									</p>
									<p>
										<a
											href="https://discord.com/invite/rvQzRB6WHb"
											target="_blank"
											rel="noopener noreferrer"
											className="text-bsod hover:text-bsod/75 underline"
										>
											Discord →
										</a>
									</p>
								</div>
							</div>
							<div className="mt-8">
								<a
									href="/"
									className="inline-block px-6 py-2 bg-bsod text-white font-mono text-sm hover:bg-bsod/75 transition-colors"
								>
									← Back to Home
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
