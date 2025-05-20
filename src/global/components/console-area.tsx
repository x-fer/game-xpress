'use client';
import Marquee from 'react-fast-marquee';
import { useEffect, useRef, useState } from 'react';

const CONSOLE_LINES = [
	'$ sudo ./xpress_event_init -f --no-sandbox',
	'[ OK ] Boot sequence engaged...\n',
	'[ * ] Mounting /opt/X.FER/Game-X.PRESS/',
	'[ * ] Patching runtime environment...',
	'[ * ] Bypassing legacy checks...',
	'[WARN] checksum mismatch... ignoring',
	'[ OK ] Core injection successful.',
	'',
	'>> INITIALIZING: PARTICIPANT CODEX',
	'>> INITIALIZING: PARTICIPANT CODEX [          ] 0%',
	'',
	'>> LINKING: X.FER NETWORK',
	'>> LINKING: X.FER NETWORK [          ] 0%',
	'',
	'>> INITIALIZING: LOCATION ALGEBRA KAMPUS',
	'>> INITIALIZING: LOCATION ALGEBRA KAMPUS [          ] 0%',
	'',
	'>> LOADING: CODE OF CONDUCT... COMPLETE.',
	'',
	'# CODEX INJECTION:',
	' - Respect. Inclusion. Professionalism.',
	' - 🛑 Zero tolerance for harassment, cheating, sabotage.',
	' - 🚨 Violators = EJECT + BANISH.',
	'',
	'# X.FER GAME JAM:',
	' - Welcome to the ultimate game development challenge',
	' - 24 hours of pure creativity and innovation',
	' - Powered by X.FER',
	' - Location: Algebra Kampus, Zagreb'
];

const BAR_LENGTH = 20;

export const ConsoleArea = () => {
	const [displayedText, setDisplayedText] = useState('');
	const [codexBar, setCodexBar] = useState(0);
	const [hubBar, setHubBar] = useState(0);
	const [locationBar, setLocationBar] = useState(0);
	const idxRef = useRef(0);
	const fullText = CONSOLE_LINES.join('\n');
	const preRef = useRef<HTMLPreElement>(null);

	useEffect(() => {
		const interval = setInterval(() => {
			idxRef.current += 1;
			const current = fullText.slice(0, idxRef.current);
			setDisplayedText(current);

			// Animate loading bars based on how much of the bar line is revealed
			const codexBarMatch = current.match(
				/INITIALIZING: PARTICIPANT CODEX \[(.*?)\]/
			);
			if (codexBarMatch) {
				const progress = Math.floor(
					((current.split('INITIALIZING: PARTICIPANT CODEX [')[1] || '')
						.length /
						(BAR_LENGTH + 1)) *
						100
				);
				setCodexBar(Math.min(progress, 100));
			}
			const hubBarMatch = current.match(/LINKING: X.FER NETWORK \[(.*?)\]/);
			if (hubBarMatch) {
				const progress = Math.floor(
					((current.split('LINKING: X.FER NETWORK [')[1] || '').length /
						(BAR_LENGTH + 1)) *
						100
				);
				setHubBar(Math.min(progress, 100));
			}
			const locationBarMatch = current.match(
				/INITIALIZING: LOCATION ALGEBRA KAMPUS \[(.*?)\]/
			);
			if (locationBarMatch) {
				const progress = Math.floor(
					((current.split('INITIALIZING: LOCATION ALGEBRA KAMPUS [')[1] || '')
						.length /
						(BAR_LENGTH + 1)) *
						100
				);
				setLocationBar(Math.min(progress, 100));
			}

			if (idxRef.current >= fullText.length) {
				clearInterval(interval);
			}
		}, 50);
		return () => clearInterval(interval);
	}, [fullText]);

	// Scroll to bottom as text animates
	useEffect(() => {
		if (preRef.current) {
			preRef.current.scrollTop = preRef.current.scrollHeight;
		}
	}, [displayedText]);

	// Render loading bars visually
	const renderBars = (label: string, percent: number) => {
		// Slow down the bar progression by using a smaller step size
		const stepSize = 5; // This will make the bar move in 5% increments
		const smoothedPercent = Math.floor(percent / stepSize) * stepSize;
		const filled = Math.round((smoothedPercent / 100) * BAR_LENGTH);
		const bar = '█'.repeat(filled) + '░'.repeat(BAR_LENGTH - filled);
		return `${label} [${bar}] ${smoothedPercent}%`;
	};

	// Replace the bar lines in the displayed text with animated bars
	let animatedText = displayedText
		.replace(
			/INITIALIZING: PARTICIPANT CODEX \[.*?\] \d+%/,
			renderBars('>> INITIALIZING: PARTICIPANT CODEX', codexBar)
		)
		.replace(
			/LINKING: X.FER NETWORK \[.*?\] \d+%/,
			renderBars('>> LINKING: X.FER NETWORK', hubBar)
		)
		.replace(
			/INITIALIZING: LOCATION ALGEBRA KAMPUS \[.*?\] \d+%/,
			renderBars('>> INITIALIZING: LOCATION ALGEBRA KAMPUS', locationBar)
		);

	return (
		<div className="backdrop-retro-light h-full max-h-full bg-black text-white py-6 flex flex-col gap-6 overflow-hidden ">
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
			<div className="h-full max-h-full w-full overflow-y-auto ">
				<pre
					ref={preRef}
					className="font-mono h-full px-6 max-h-full overflow-y-auto text-xs whitespace-pre-wrap break-words w-full m-0"
				>
					{animatedText}
				</pre>
			</div>
		</div>
	);
};
