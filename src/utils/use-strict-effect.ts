import { type DependencyList, useEffect, useState } from 'react';

export const useStrictEffect = (effect: () => void, deps: DependencyList) => {
	const [lastDeps, setLastDeps] = useState(deps);

	useEffect(() => {
		if (JSON.stringify(lastDeps) === JSON.stringify(deps)) {
			return;
		}

		effect();
		setLastDeps(deps);
	}, [...deps]);
};
