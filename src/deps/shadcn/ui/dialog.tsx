'use client';

import * as React from 'react';

import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger
} from '@/deps/shadcn/ui/drawer';
import {
	Modal,
	ModalClose,
	ModalContent,
	ModalDescription,
	ModalFooter,
	ModalHeader,
	ModalTitle,
	ModalTrigger
} from '@/deps/shadcn/ui/modal';
import { useViewport } from '@/utils/use-viewport';
import {
	createContext,
	useContext,
	useEffect,
	useImperativeHandle,
	useState
} from 'react';

interface BaseProps {
	children: React.ReactNode;
}

interface RootDialogProps extends BaseProps {
	open?: boolean;
	onOpenChange?: (open: boolean) => void;
}

interface DialogProps extends BaseProps {
	className?: string;
	asChild?: true;
}

export type DialogContextType = {
	closeDialog: () => void;
	openDialog: () => void;
};

const DialogContext = createContext<DialogContextType>({
	closeDialog: () => {},
	openDialog: () => {}
});

export const useDialog = () => {
	const context = useContext(DialogContext);
	if (!context) {
		throw new Error('useDialog must be used within a DialogProvider');
	}
	return context;
};

const Dialog = ({
	children,
	open: openProp,
	onOpenChange: onOpenChangeProp,
	ref,
	...props
}: RootDialogProps & { ref?: React.RefObject<{}> }) => {
	const { isDesktop } = useViewport();

	const [open, setOpen] = useState(openProp ?? false);

	useEffect(() => {
		onOpenChangeProp?.(open);
	}, [open]);

	const closeDialog = () => {
		setOpen(false);
	};

	const openDialog = () => {
		setOpen(true);
	};

	useImperativeHandle(ref, () => ({
		closeDialog,
		openDialog
	}));

	const Dialog = isDesktop ? Modal : Drawer;

	return (
		<DialogContext.Provider value={{ closeDialog, openDialog }}>
			<Dialog {...props} open={open} onOpenChange={setOpen}>
				{children}
			</Dialog>
		</DialogContext.Provider>
	);
};

const DialogTrigger = ({ className, children, ...props }: DialogProps) => {
	const { isDesktop } = useViewport();
	const DialogTrigger = isDesktop ? ModalTrigger : DrawerTrigger;

	return (
		<DialogTrigger className={className} {...props}>
			{children}
		</DialogTrigger>
	);
};

const DialogClose = ({ className, children, ...props }: DialogProps) => {
	const { isDesktop } = useViewport();
	const DialogClose = isDesktop ? ModalClose : DrawerClose;

	return (
		<DialogClose className={className} {...props}>
			{children}
		</DialogClose>
	);
};

const DialogContent = ({ className, children, ...props }: DialogProps) => {
	const { isDesktop } = useViewport();
	const DialogContent = isDesktop ? ModalContent : DrawerContent;

	return (
		<DialogContent className={className} {...props}>
			{children}
		</DialogContent>
	);
};

const DialogDescription = ({ className, children, ...props }: DialogProps) => {
	const { isDesktop } = useViewport();
	const DialogDescription = isDesktop ? ModalDescription : DrawerDescription;

	return (
		<DialogDescription className={className} {...props}>
			{children}
		</DialogDescription>
	);
};

const DialogHeader = ({ className, children, ...props }: DialogProps) => {
	const { isDesktop } = useViewport();
	const DialogHeader = isDesktop ? ModalHeader : DrawerHeader;

	return (
		<DialogHeader className={className} {...props}>
			{children}
		</DialogHeader>
	);
};

const DialogTitle = ({ className, children, ...props }: DialogProps) => {
	const { isDesktop } = useViewport();
	const DialogTitle = isDesktop ? ModalTitle : DrawerTitle;

	return (
		<DialogTitle className={className} {...props}>
			{children}
		</DialogTitle>
	);
};

const DialogBody = ({ className, children, ...props }: DialogProps) => {
	return (
		<div className={className} {...props}>
			{children}
		</div>
	);
};

const DialogFooter = ({ className, children, ...props }: DialogProps) => {
	const { isDesktop } = useViewport();
	const DialogFooter = isDesktop ? ModalFooter : DrawerFooter;

	return (
		<DialogFooter className={className} {...props}>
			{children}
		</DialogFooter>
	);
};

export {
	Dialog,
	DialogBody,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger
};
