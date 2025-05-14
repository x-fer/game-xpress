import { FC, PropsWithChildren } from 'react';
import Marquee from 'react-fast-marquee';

const FloatingWindow: FC<PropsWithChildren> = ({ children }) => {
	return <div className="backdrop-retro bg-section w-[800px]">{children}</div>;
};

const BannerArea = () => {
	return (
		<div className="fixed backdrop-retro bg-bsod text-white py-6">
			<Marquee>
				{new Array(20).fill(0).map((_, index) => (
					<div className="text-center inline-block mr-6" key={index}>
						Prijave otvorene
					</div>
				))}
			</Marquee>
		</div>
	);
};

const ConsoleArea = () => {
	return (
		<div className="backdrop-retro-light h-[420px] bg-black text-white py-6 flex flex-col gap-6 overflow-hidden">
			<Marquee className="shrink-0">
				<img
					src="/assets/illustrations/xpress.svg"
					alt="Game X.PRESS"
					className="h-12 fill-white inline-block mr-10"
				/>
				<img
					src="/assets/illustrations/xpress.svg"
					alt="Game X.PRESS"
					className="h-12 fill-white inline-block mr-10"
				/>
				<img
					src="/assets/illustrations/xpress.svg"
					alt="Game X.PRESS"
					className="h-12 fill-white inline-block mr-10"
				/>
			</Marquee>
			<Marquee className="shrink-0">
				<img
					src="/assets/illustrations/gamejam.svg"
					alt="Game X.PRESS"
					className="h-6 fill-white inline-block mr-10"
				/>
				<img
					src="/assets/illustrations/gamejam.svg"
					alt="Game X.PRESS"
					className="h-6 fill-white inline-block mr-10"
				/>
				<img
					src="/assets/illustrations/gamejam.svg"
					alt="Game X.PRESS"
					className="h-6 fill-white inline-block mr-10"
				/>
			</Marquee>
			<div className="px-6">
				<pre>
					{`$ sudo ./xpress_event_init -f --no-sandbox
[ OK ] Boot sequence engaged...
[ * ] Mounting /opt/X.FER/GameX.PRESS/ 🔥
[ * ] Patching runtime environment...
[ * ] Bypassing legacy checks...
[ERROR] checksum mismatch... ignoring
[ OK ] Core injection successful.

>> INITIALIZING: PARTICIPANT CODEX [█████████░░░░░░░░░] 47%
>> LINKING: FER STUDENT HUB [██████████████░░░░░░░░] 68%
>> LOADING: CODE OF CONDUCT... COMPLETE.

# CODEX INJECTION:
 - Respect. Inclusion. Professionalism.
 - 🛑 Zero tolerance for harassment, cheating, sabotage.
 - 🚨 Violators = EJECT + BANISH.`}
				</pre>
			</div>
		</div>
	);
};

const NavigationArea = () => {
	return (
		<div className="backdrop-retro flex flex-col gap-6 p-6 bg-section-weak">
			<div className="p-4 backdrop-retro">Eligibility Team size</div>

			<div className="p-4 backdrop-retro-light bg-black text-white">
				Theme & Content
			</div>

			<div className="p-4 backdrop-retro-light bg-black text-white">
				Scoring
			</div>

			<div className="p-4 backdrop-retro-light bg-black text-white">Prizes</div>

			<div className="p-4 backdrop-retro-light bg-black text-white">
				Register
			</div>
		</div>
	);
};

const AboutSection = () => {
	return (
		<div className="backdrop-retro bg-section-weak h-[60vh]">
			<FloatingWindow>
				<p>
					The theme of Game X.PRESS is secret and will be revealed at the
					official start of the event.
					<br />
					You have complete creative freedom in choosing how you build your
					game. This includes:
					<br />
					Genre - Anything from Adventure, Puzzle, Simulation, FPS, MOBA,
					Platformer, etc.
					<br />
					Style - 2D, 3D, pixel art, low poly, minimalist, text-based, or
					anything else that suits your game
					<br />
					Technology - You may use any engine or tools (e.g. Unity, Unreal
					Engine, Godot, PyGame, custom engines) Choose whatever suits your
					team's skills and vision best. Your originality and execution are what
					count.
				</p>
			</FloatingWindow>
		</div>
	);
};

const FooterSection = () => {
	return (
		<div className="backdrop-retro bg-section-weak h-[60vh]">
			<FloatingWindow>
				<p>
					The theme of Game X.PRESS is secret and will be revealed at the
					official start of the event.
					<br />
					You have complete creative freedom in choosing how you build your
					game. This includes:
					<br />
					Genre - Anything from Adventure, Puzzle, Simulation, FPS, MOBA,
					Platformer, etc.
					<br />
					Style - 2D, 3D, pixel art, low poly, minimalist, text-based, or
					anything else that suits your game
					<br />
					Technology - You may use any engine or tools (e.g. Unity, Unreal
					Engine, Godot, PyGame, custom engines) Choose whatever suits your
					team's skills and vision best. Your originality and execution are what
					count.
				</p>
			</FloatingWindow>
		</div>
	);
};

export const LandingPage = () => {
	return (
		<div className="flex flex-col gap-6 p-6 md:p-12 lg:p-20">
			<BannerArea />
			<div className="flex flex-col w-full md:flex-row gap-6">
				<div className="fixed flex flex-col gap-6 shrink-0 md:w-[568px] md:max-w-1/3 grow-1">
					<ConsoleArea />
					<NavigationArea />
				</div>
				<div className="flex flex-col gap-6 grow-1 shrink-0 h-fit">
					<AboutSection />
					<AboutSection />
					<AboutSection />
					<FooterSection />
				</div>
			</div>
		</div>
	);
};
