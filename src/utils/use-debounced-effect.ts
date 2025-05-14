import { type DependencyList, useEffect } from 'react';

export const useDebouncedEffect = (
	effect: () => void,
	deps: DependencyList,
	delay: number
) => {
	useEffect(() => {
		const handler = setTimeout(() => effect(), delay);
		return () => clearTimeout(handler);
	}, [...deps]);
};
