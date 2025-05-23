import { cn } from '@/deps/utils';
import { createContext, FC, HTMLAttributes, useContext, useState } from 'react';

export const wizardContext = createContext<{
	currentStep: number;
	setCurrentStep: (step: number) => void;
	totalSteps: number;
}>({
	currentStep: 1,
	setCurrentStep: () => {},
	totalSteps: 0
});

const WizardProvider: FC<{
	children: React.ReactNode;
	totalSteps: number;
	initialStep?: number;
}> = ({ children, totalSteps, initialStep = 1 }) => {
	const [currentStep, setCurrentStep] = useState(initialStep);

	return (
		<wizardContext.Provider value={{ currentStep, setCurrentStep, totalSteps }}>
			<div className="flex flex-col gap-4 w-full">
				<div className="flex flex-row justify-between items-center w-full relative">
					<div className="w-20 sm:w-28">
						{currentStep > 1 && (
							<button
								onClick={() => {
									const prevStep = Math.max(1, currentStep - 1);
									setCurrentStep(prevStep);
								}}
								className="w-full text-xs sm:text-base cursor-pointer px-2 sm:px-4 py-1.5 sm:py-2 backdrop-retro bg-black text-white disabled:opacity-50 text-center"
							>
								PREVIOUS
							</button>
						)}
					</div>
					<span className="text-lg font-bold absolute left-1/2 -translate-x-1/2">
						Step {currentStep} of {totalSteps}
					</span>
					<div className="w-20 sm:w-28 flex justify-end">
						{currentStep < totalSteps && (
							<button
								onClick={() => {
									const nextStep = Math.min(totalSteps, currentStep + 1);
									setCurrentStep(nextStep);
								}}
								className="w-full text-xs sm:text-base cursor-pointer px-2 sm:px-4 py-1.5 sm:py-2 bg-black backdrop-retro text-white disabled:opacity-50 text-center"
							>
								NEXT
							</button>
						)}
					</div>
				</div>
				{children}
			</div>
		</wizardContext.Provider>
	);
};

export const Wizard: FC<
	HTMLAttributes<HTMLDivElement> & {
		totalSteps: number;
		initialStep?: number;
	}
> = ({ children, className, totalSteps, initialStep, ...props }) => {
	return (
		<WizardProvider totalSteps={totalSteps} initialStep={initialStep}>
			<div className={cn('flex flex-row w-full', className)} {...props}>
				{children}
			</div>
		</WizardProvider>
	);
};
