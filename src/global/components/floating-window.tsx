import { useContext } from 'react';
import { DottedBar } from './dotted-bar';
import { wizardContext } from './wizard';
import Link from 'next/link';

const FloatingWindow = () => {
	const { currentStep } = useContext(wizardContext);

	const steps = [
		'Eligibility & team rules',
		'Theme implementation',
		'Evaluation & scoring',
		'Bonus points & special awards',
		'Registration & socials'
	];

	const stepContent = {
		1: (
			<>
				<p>
					Each team can consist of 1 to 4 members. All participants must be at
					least 18 years old at the time of the event.
				</p>

				<p>
					Every participant can only be part of one team. Once the GameJam
					begins, no team changes are allowed.
				</p>

				<p>
					If there are too many applicants, teams with currently enrolled
					bachelor's or master's students may be prioritized. Proof of identity
					and student status may be requested.
				</p>

				<p>
					Team members must not include organizers or members of the X.FER
					association presidency. If a participant has a professional,
					mentoring, or family connection with a jury member, this must be
					reported in advance.
				</p>

				<p className="mt-6  text-bsod hover:text-bsod/75">
					<Link href="/2025/ordinance" className="underline">
						Read the full ordinance document →
					</Link>
				</p>
			</>
		),
		2: (
			<>
				<p>
					The theme of the GameJam is kept secret until the start of the event.
					It will be announced at the opening on May 31 at 9:00, held at Algebra
					Campus (Gradišćanska ul. 24).
				</p>

				<p>Each team must create a game that clearly reflects the theme.</p>

				<p>
					The degree of theme integration is evaluated using a tiered system:
				</p>
				<ul className="list-disc pl-6 space-y-1">
					<li>
						Tier 1 (5%): Theme appears only visually or in the background.
					</li>
					<li>
						Tier 2 (10%): Theme influences gameplay, mechanics, or objectives.
					</li>
					<li>
						Tier 3 (15%): Theme is deeply embedded in the core game systems and
						design.
					</li>
				</ul>

				<p>
					Games that do not implement the theme at all will receive 0 points in
					this category and be disqualified from the competition.
				</p>
			</>
		),
		3: (
			<>
				<p>
					Games are evaluated based on multiple criteria by both peers and a
					professional jury. The final score is calculated as 60% jury
					evaluation and 40% peer review. Scores are then adjusted with any
					bonus points earned.
				</p>

				<p>The main categories are:</p>
				<ul className="list-disc pl-6 space-y-1">
					<li>Gameplay and game design (25%)</li>
					<li>Graphics and visual design (20%)</li>
					<li>Playability and technical quality (15%)</li>
					<li>Theme implementation (15%)</li>
					<li>Onboarding and documentation (10%)</li>
					<li>Game pitch (10%)</li>
					<li>Deployment to itch.io (5%)</li>
				</ul>

				<p>
					The pitch must be up to 3 minutes long and presented by all team
					members.
				</p>

				<p className="mt-6 text-bsod hover:text-bsod/75">
					<Link href="/2025/grading-criteria" className="underline">
						View detailed grading criteria →
					</Link>
				</p>
			</>
		),
		4: (
			<>
				<p>Teams can earn up to 20 bonus points.</p>

				<p>
					You can get up to +5 bonus points for including one of the following
					features:
				</p>
				<ul className="list-disc pl-6 space-y-1">
					<li>A hidden easter egg hunt</li>
					<li>A functional achievement system</li>
					<li>A secret developer room or creative fourth-wall break</li>
					<li>
						An accessibility mode (e.g., colorblind toggle, simplified controls)
					</li>
				</ul>

				<p>An additional +5 points each are awarded to the best games in:</p>
				<ul className="list-disc pl-6 space-y-1">
					<li>Audio</li>
					<li>Graphics</li>
					<li>Overall game</li>
				</ul>

				<p>Only one optional design challenge bonus can be counted per team.</p>
			</>
		),
		5: (
			<>
				<p>
					Applications open on May 19 and close on May 29 at 23:59. All teams
					must register using the official form provided on the organizer's
					website.
				</p>

				<p>
					Each team must assign a representative for all official communication.
					Applications may close early if the maximum number of teams is
					reached.
				</p>

				<p>
					There is no registration fee. The selection process may take into
					account your field and year of study, experience in relevant
					competitions, game-related projects, or industry work.
				</p>

				<div className="mt-6 space-y-2">
					<p className="font-bold">Follow us on social media:</p>
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
			</>
		)
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
			<div className="p-6 space-y-4 font-mono text-sm">
				{stepContent[currentStep as keyof typeof stepContent]}
			</div>
		</div>
	);
};

export default FloatingWindow;
