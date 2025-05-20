import { cn } from '@/deps/shadcn/utils';
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
					<div className="w-[100px]">
						{currentStep > 1 && (
							<button
								onClick={() => {
									const prevStep = Math.max(1, currentStep - 1);
									setCurrentStep(prevStep);
								}}
								className="cursor-pointer px-4 py-2 backdrop-retro bg-black text-white disabled:opacity-50"
							>
								PREVIOUS
							</button>
						)}
					</div>
					<span className="text-lg font-bold absolute left-1/2 -translate-x-1/2">
						Step {currentStep} of {totalSteps}
					</span>
					<div className="w-[100px] flex justify-end">
						{currentStep < totalSteps && (
							<button
								onClick={() => {
									const nextStep = Math.min(totalSteps, currentStep + 1);
									setCurrentStep(nextStep);
								}}
								className="cursor-pointer px-4 py-2 bg-black backdrop-retro text-white disabled:opacity-50"
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

export const WizardStep: FC<{ step: number; children: React.ReactNode }> = ({
	step,
	children
}) => {
	const { currentStep, setCurrentStep } = useContext(wizardContext);

	const isActive = currentStep === step;
	const isBehind = currentStep > step;
	const isAhead = currentStep < step;

	return (
		<div
			className={cn(
				'flex flex-col gap-10 w-full shrink-0 [&:not(:first-child)]:ml-[-100%]',
				'transition-all duration-600 ease-[cubic-bezier(0.25, 0.1, 0.25, 1)]',
				'transform-3d',
				isActive && 'scale-100',
				isBehind && 'scale-110 opacity-0 pointer-events-none',
				isAhead && 'scale-90 opacity-0 pointer-events-none'
			)}
		>
			{children}
		</div>
	);
};
