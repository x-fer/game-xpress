'use client';

import { Toaster as Sonner } from 'sonner';

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
	return (
		<Sonner
			className="toaster group"
			toastOptions={{
				classNames: {
					toast:
						'group toast group-[.toaster]:bg-background group-[.toaster]:text-neutral group-[.toaster]:border-border group-[.toaster]:shadow-lg',
					description: 'group-[.toast]:text-neutral-strong',
					actionButton: 'group-[.toast]:bg-primary group-[.toast]:text-neutral',
					cancelButton:
						'group-[.toast]:bg-neutral-weak group-[.toast]:text-neutral-strong'
				}
			}}
			{...props}
		/>
	);
};

export { Toaster };
