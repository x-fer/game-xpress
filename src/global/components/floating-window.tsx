import { PropsWithChildren, useContext } from 'react';
import { DottedBar } from './dotted-bar';
import { wizardContext } from './wizard';
import ReactMarkdown from 'react-markdown';

const FloatingWindow = ({ children }: PropsWithChildren) => {
	const { currentStep } = useContext(wizardContext);

	const steps = [
		'Eligibility & team rules',
		'Theme implementation',
		'Evaluation & scoring',
		'Prizes & bonuses',
		'Registration'
	];

	const stepContent = {
		1: `
- Each team can have **1–4 members**.
- All participants must be **18+** at the time of the event.
- **Students are prioritized** in case of over-registration.
- Teams must be fixed once the Game Jam starts — no adding or swapping members.`,

		2: `
- The theme will be **secret** until the event starts.
- You must implement the theme in a meaningful way:
  - **Tier 1 (5%)**: Theme is only visual/flavor.
  - **Tier 2 (10%)**: Theme affects mechanics or objectives.
  - **Tier 3 (15%)**: Theme is deeply embedded in core systems.
- **Games that ignore the theme are disqualified**.`,

		3: `
Games are scored on the following criteria (out of 100 points):

- **Gameplay & design** – 25%
- **Graphics & visual design** – 20%
- **Technical quality** – 15%
- **Theme implementation** – 15%
- **Onboarding & documentation** – 10%
- **Pitch (3-minute presentation)** – 10%
- **Deployment to itch.io** – 5%

Final score = **60% jury** + **40% peer review**. Bonus points are added afterward.`,

		4: `
- **1st Place**: $1000
- **2nd Place**: $500
- **3rd Place**: $250

Bonus points:
- **+5 points** for optional challenges like:
  - Easter egg hunt
  - Achievement system
  - Secret dev room
  - Accessibility features

- **+5 points each** for best in:
  - Audio
  - Graphics
  - Overall game`,

		5: `
- Registration opens **May 19** and closes **May 29 at 23:59**.
- Submit your **team details and project concept** via the official form.
- In case of overbooking, priority is given to students in STEM fields or with relevant experience.
- You may be asked to prove student status.

No registration fee is required.`
	};

	return (
		<div className="relative w-full border backdrop-retro-light bg-section">
			<div className="bg-bsod flex items-center justify-between h-8 px-2 font-mono text-sm text-white">
				<DottedBar />
				<span className="px-2 underline text-white whitespace-nowrap">
					{steps[currentStep - 1]}
				</span>
				<DottedBar />
			</div>
			<div className="p-6">
				<ReactMarkdown
					components={{
						div: ({ children }) => (
							<div className="prose prose-invert prose-headings:mb-4 prose-headings:mt-0 prose-p:mt-4 prose-p:mb-4 prose-ul:mt-2 prose-li:mt-0 prose-li:mb-1 max-w-none font-sans">
								{children}
							</div>
						)
					}}
				>
					{stepContent[currentStep as keyof typeof stepContent]}
				</ReactMarkdown>
			</div>
		</div>
	);
};

export default FloatingWindow;
