'use client';

import * as ModalPrimitive from '@radix-ui/react-dialog';
import * as React from 'react';

import { cn } from '@/deps/shadcn/utils';
import { Button } from './button';

const Modal = ModalPrimitive.Root;

const ModalTrigger = ModalPrimitive.Trigger;

const ModalPortal = ModalPrimitive.Portal;

const ModalClose = ModalPrimitive.Close;

const ModalOverlay = React.forwardRef<
	React.ElementRef<typeof ModalPrimitive.Overlay>,
	React.ComponentPropsWithoutRef<typeof ModalPrimitive.Overlay>
>(({ className, ...props }, ref) => (
	<ModalPrimitive.Overlay
		ref={ref}
		className={cn(
			'fixed inset-0 z-50 bg-overlay data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
			className
		)}
		{...props}
	/>
));
ModalOverlay.displayName = ModalPrimitive.Overlay.displayName;

const ModalContent = React.forwardRef<
	React.ElementRef<typeof ModalPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof ModalPrimitive.Content>
>(({ className, children, ...props }, ref) => (
	<ModalPortal>
		<ModalOverlay />
		<ModalPrimitive.Content
			ref={ref}
			className={cn(
				'fixed left-[50%] top-[50%] z-50 grid container-md translate-x-[-50%] translate-y-[-50%] border border-neutral-weak bg-foreground backdrop-blur-sm shadow-lg duration-200 sm:rounded-xl',
				'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
				'data-[state=closed]:animate-out data-[state=open]:animate-in',
				'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
				'max-h-[80vh]',
				'overflow-y-auto',
				className
			)}
			{...props}
		>
			<div className="flex flex-col py-10 gap-6">{children}</div>
			<ModalPrimitive.Close
				asChild
				className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-neutral-strong"
			>
				<Button variant="ghost" size="md" singleIcon="close" />
			</ModalPrimitive.Close>
		</ModalPrimitive.Content>
	</ModalPortal>
));
ModalContent.displayName = ModalPrimitive.Content.displayName;

const ModalHeader = ({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) => (
	<div
		className={cn(
			'flex flex-col space-y-1.5 text-center sm:text-left',
			className
		)}
		{...props}
	/>
);
ModalHeader.displayName = 'ModalHeader';

const ModalFooter = ({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) => (
	<div
		className={cn(
			'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
			className
		)}
		{...props}
	/>
);
ModalFooter.displayName = 'ModalFooter';

const ModalTitle = React.forwardRef<
	React.ElementRef<typeof ModalPrimitive.Title>,
	React.ComponentPropsWithoutRef<typeof ModalPrimitive.Title>
>(({ className, children, ...props }, ref) => (
	<div className="pad-xl">
		<ModalPrimitive.Title
			ref={ref}
			className={cn('title-2 text-neutral', className)}
			{...props}
		>
			{children}
		</ModalPrimitive.Title>
	</div>
));
ModalTitle.displayName = ModalPrimitive.Title.displayName;

const ModalDescription = React.forwardRef<
	React.ElementRef<typeof ModalPrimitive.Description>,
	React.ComponentPropsWithoutRef<typeof ModalPrimitive.Description>
>(({ className, children, ...props }, ref) => (
	<div className="pad-xl">
		<ModalPrimitive.Description
			ref={ref}
			className={cn('body-2 text-neutral-strong', className)}
			{...props}
		>
			{children}
		</ModalPrimitive.Description>
	</div>
));
ModalDescription.displayName = ModalPrimitive.Description.displayName;

export {
	Modal,
	ModalClose,
	ModalContent,
	ModalDescription,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	ModalPortal,
	ModalTitle,
	ModalTrigger
};
