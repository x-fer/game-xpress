import { useEffect } from 'react';

export const openTemporaryTab = (url: string, successUrl: string) => {
	return new Promise((resolve) => {
		// Open payment page in new window
		const tab = window.open(url, '_blank', 'popup=true');

		// Listen for messages from the popup
		const messageHandler = (event: MessageEvent) => {
			// Verify the message origin matches our success URL
			const successOrigin = new URL(successUrl).origin;
			if (event.origin === successOrigin && event.data === 'payment_complete') {
				window.removeEventListener('message', messageHandler);
				tab?.close();
				resolve(true);
			}
		};

		window.addEventListener('message', messageHandler);
	});
};

export const useNotifyParent = (message: 'payment_complete') => {
	useEffect(() => {
		// Send message to parent window
		if (window.opener) {
			window.opener.postMessage('payment_complete', window.location.origin);
			// Close window after a short delay to ensure message is sent
			setTimeout(() => window.close(), 300);
		}
	}, []);
};
