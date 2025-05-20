import { PropsWithChildren, useContext } from 'react';
import { DottedBar } from './dotted-bar';
import { wizardContext } from './wizard';

const FloatingWindow = ({ children }: PropsWithChildren) => {
	const { currentStep } = useContext(wizardContext);

	const steps = [
		'Eligibility & Team size',
		'Theme & Content',
		'Scoring',
		'Prizes',
		'Register'
	];

	const stepContent = {
		1: 'Teams must have 2-4 members. All participants must be current students.',
		2: "Create a game that follows the theme 'Retro Revival'. Focus on classic gameplay mechanics.",
		3: 'Games will be scored on: Innovation (30%), Technical Execution (30%), Theme Adherence (20%), and Fun Factor (20%).',
		4: '1st Place: $1000, 2nd Place: $500, 3rd Place: $250',
		5: 'Fill out the registration form with your team details and game concept.'
	};

	return (
		<div className="w-full border border-black shadow-[4px_4px_0_#000] bg-section">
			<div className="bg-bsod flex items-center justify-between h-8 px-2 font-mono text-sm text-white">
				<DottedBar />
				<span className="px-2 underline text-white">
					{steps[currentStep - 1]}
				</span>
				<DottedBar />
			</div>
			<div className="bg-white font-mono text-sm p-6">
				<div className="flex flex-col gap-4">
					<p>{stepContent[currentStep as keyof typeof stepContent]}</p>
				</div>
			</div>
		</div>
	);
};

export default FloatingWindow;
