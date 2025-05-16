import type { Config } from 'tailwindcss';

const config: Config = {
	theme: {
		extend: {
			fontFamily: {
				'sans-serif-system': 'var(--sans-serif-system)',
				'serif-system': 'var(--serif-system)',
				'monospace-system': 'var(--monospace-system)',
				'emoji-system': 'var(--emoji-system)'
			}
		}
	}
};

export default config;
