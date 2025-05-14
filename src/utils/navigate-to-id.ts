import { env } from '@/env';

export const navigateToId = (id: string) => {
	const element = document.getElementById(id);

	console.log(window.location.pathname);

	if (window.location.pathname !== '/') {
		window.location.href = `${env.NEXT_PUBLIC_URL}#${id}`;
	}

	if (element) {
		element.scrollIntoView({ behavior: 'smooth' });
	}
};
