'use client';
import Marquee from 'react-fast-marquee';
import { useEffect, useRef, useState } from 'react';

const CONSOLE_LINES = [
	'$ sudo ./xpress_event_init -f --no-sandbox',
	'[ OK ] Boot sequence engaged...\n',
	'[ * ] Mounting /opt/X.FER/GameX.PRESS/ 🔥',
	'[ * ] Patching runtime environment...',
	'[ * ] Bypassing legacy checks...',
	'[WARN] checksum mismatch... ignoring',
	'[ OK ] Core injection successful.',
	'',
	'>> INITIALIZING: PARTICIPANT CODEX [          ] 0%',
	'',
	'>> LINKING: FER STUDENT HUB [          ] 0%',
	'',
	'>> LOADING: CODE OF CONDUCT... COMPLETE.',
	'',
	'# CODEX INJECTION:',
	' - Respect. Inclusion. Professionalism.',
	' - 🛑 Zero tolerance for harassment, cheating, sabotage.',
	' - 🚨 Violators = EJECT + BANISH.'
];

const BAR_LENGTH = 20;
const CODEX_BAR_LINE = 8;
const HUB_BAR_LINE = 10;

export const ConsoleArea = () => {
	const [displayedText, setDisplayedText] = useState('');
	const [codexBar, setCodexBar] = useState(0);
	const [hubBar, setHubBar] = useState(0);
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
			const hubBarMatch = current.match(/LINKING: FER STUDENT HUB \[(.*?)\]/);
			if (hubBarMatch) {
				const progress = Math.floor(
					((current.split('LINKING: FER STUDENT HUB [')[1] || '').length /
						(BAR_LENGTH + 1)) *
						100
				);
				setHubBar(Math.min(progress, 100));
			}

			if (idxRef.current >= fullText.length) {
				clearInterval(interval);
			}
		}, 10);
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
		const filled = Math.round((percent / 100) * BAR_LENGTH);
		const bar = '█'.repeat(filled) + '░'.repeat(BAR_LENGTH - filled);
		return `${label} [${bar}] ${percent}%`;
	};

	// Replace the bar lines in the displayed text with animated bars
	let animatedText = displayedText
		.replace(
			/INITIALIZING: PARTICIPANT CODEX \[.*?\] \d+%/,
			renderBars('>> INITIALIZING: PARTICIPANT CODEX', codexBar)
		)
		.replace(
			/LINKING: FER STUDENT HUB \[.*?\] \d+%/,
			renderBars('>> LINKING: FER STUDENT HUB', hubBar)
		);

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
			<div className="px-6 flex-1 overflow-auto">
				<pre
					ref={preRef}
					className="font-mono text-xs whitespace-pre-wrap break-words h-full w-full m-0 overflow-auto"
				>
					{animatedText}
				</pre>
			</div>
		</div>
	);
};
