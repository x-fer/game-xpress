'use client';

import { cn } from '@/deps/shadcn/utils';
import { Icon, IconName } from '@/global/components/icon';
import { Spinner } from '@/global/components/spinner';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

export const IconSizeContext = React.createContext<number | undefined>(
	undefined
);
export const IconClassnameContext = React.createContext<string | undefined>(
	undefined
);

const buttonVariants = cva(
	cn(
		'relative inline-flex items-center justify-center whitespace-nowrap transition-all duration-300 hover:sm:duration-100 disabled:opacity-50 active:opacity-50 group-[btn] [&:not(:disabled)]:clickable disabled:cursor-not-allowed',
		'focus-visible:outline-neutral focus-visible:outline-offset-2 outline-offset-2 focus-visible:outline-2 outline-neutral'
	),
	{
		variants: {
			theme: {
				accent: 'theme-accent',
				neutral: 'theme-neutral',
				info: 'theme-info',
				success: 'theme-success',
				warning: 'theme-warning',
				danger: 'theme-danger'
			},
			variant: {
				solid:
					'border border-transparent bg-theme text-theme-contrast hover:sm:bg-theme-strong',
				'solid-weak':
					'border border-transparent bg-theme-weak text-theme hover:sm:bg-theme-medium',
				outline:
					'border border-theme-medium text-theme hover:sm:bg-theme-medium',
				'outline-weak':
					'border border-theme-weak text-theme-strong hover:sm:bg-theme-medium hover:sm:text-theme',
				ghost: 'border border-transparent text-theme hover:sm:bg-theme-medium',
				'ghost-weak':
					'border border-transparent text-theme-strong hover:sm:text-theme hover:sm:bg-neutral-medium',
				section:
					'border border-transparent bg-section text-theme hover:sm:bg-theme-weak hover:sm:text-theme'
			},
			size: {
				lg: 'h-[60px] px-[24px] gap-[8px] button-lg rounded-[12px]',
				md: 'h-[40px] px-[16px] gap-[6px] button-md rounded-[8px]',
				sm: 'h-[32px] px-[12px] gap-[4px] button-md rounded-[6px]',
				xs: 'h-[24px] px-[8px] gap-[4px] button-sm rounded-[6px]',
				card: 'p-6 rounded-[16px]'
			},
			loading: {
				true: '!text-transparent',
				false: ''
			},
			hasSingleIcon: {
				true: '',
				false: ''
			}
		},
		defaultVariants: {
			variant: 'solid',
			size: 'md',
			theme: 'neutral',
			loading: false,
			hasSingleIcon: false
		},
		compoundVariants: [
			{
				hasSingleIcon: true,
				size: 'lg',
				class: 'size-[52px] !p-0'
			},
			{
				hasSingleIcon: true,
				size: 'md',
				class: 'size-[40px] !p-0'
			},
			{
				hasSingleIcon: true,
				size: 'sm',
				class: 'size-[32px] !p-0'
			},
			{
				hasSingleIcon: true,
				size: 'xs',
				class: 'size-[24px] !p-0'
			}
		]
	}
);

export const iconVariants = cva('shrink-0', {
	variants: {
		variant: {
			solid: 'bg-theme-contrast group-[btn]-hover:sm:bg-theme-contrast',
			'solid-weak': 'bg-theme group-[btn]-hover:sm:bg-theme',
			outline: 'bg-theme group-[btn]-hover:sm:bg-theme-contrast',
			'outline-weak': 'bg-theme-strong group-[btn]-hover:sm:bg-theme',
			ghost: 'bg-theme group-[btn]-hover:sm:bg-theme',
			'ghost-weak': 'bg-theme-strong group-[btn]-hover:sm:bg-theme',
			section: 'bg-theme-strong group-[btn]-hover:sm:bg-theme-weak'
		},
		size: {
			lg: 'size-6',
			md: 'size-4',
			sm: 'size-4',
			xs: 'size-3',
			card: 'size-6'
		},
		loading: {
			true: '!opacity-0 duration-0',
			false: ''
		}
	},
	defaultVariants: {
		variant: 'solid',
		loading: false
	}
});

export const singleIconVariants = cva('', {
	variants: {
		variant: {
			solid: 'bg-theme-contrast',
			'solid-weak': 'bg-theme',
			outline: 'bg-theme-contrast',
			'outline-weak': 'bg-theme-strong',
			ghost: 'bg-theme',
			'ghost-weak': 'bg-theme-strong',
			section: 'bg-theme'
		},
		size: {
			lg: 'size-6',
			md: 'size-5',
			sm: 'size-5',
			xs: 'size-4',
			card: 'size-6'
		},
		loading: {
			true: '!opacity-0 duration-0',
			false: ''
		}
	},
	defaultVariants: {
		variant: 'solid',
		size: 'md',
		loading: false
	}
});

const spinnerVariants = cva('', {
	variants: {
		variant: {
			solid: 'border-neutral-contrast',
			'solid-weak': 'border-neutral',
			outline: 'border-neutral',
			'outline-weak': 'border-neutral',
			ghost: 'border-neutral',
			'ghost-weak': 'border-neutral',
			section: 'border-neutral'
		},
		size: {
			lg: 'size-6 border-4',
			md: 'size-6 border-4',
			sm: 'size-5 border-3',
			xs: 'size-4 border-3',
			card: 'size-6 border-4'
		}
	}
});

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
	VariantProps<typeof buttonVariants> & {
		asChild?: boolean;
		singleIcon?: IconName;
		leftIcon?: IconName;
		rightIcon?: IconName;
	};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			className,
			variant,
			size,
			loading,
			asChild,
			children,
			theme,
			singleIcon,
			hasSingleIcon,
			leftIcon,
			rightIcon,
			disabled,
			onClick,
			...props
		},
		ref
	) => {
		const Comp = asChild ? Slot : 'button';

		// Button
		const buttonClass = cn(
			buttonVariants({
				variant,
				size,
				loading,
				theme,
				hasSingleIcon: hasSingleIcon ?? !!singleIcon,
				className
			}),
			'group'
		);

		// Icons
		const iconClass = cn(iconVariants({ size, variant, loading }));
		const singleIconClass = cn(singleIconVariants({ size, variant, loading }));

		// Spinner
		const spinnerClass = cn(spinnerVariants({ size, variant }));

		return (
			<Comp
				className={buttonClass}
				ref={ref}
				{...props}
				onClick={disabled ? undefined : onClick}
				disabled={disabled}
			>
				{leftIcon && <Icon icon={leftIcon} className={iconClass} />}
				{children}
				{rightIcon && <Icon icon={rightIcon} className={iconClass} />}

				{/* Only icon */}
				{singleIcon && <Icon icon={singleIcon} className={singleIconClass} />}

				{/* Spinner */}
				{loading && <Spinner className={spinnerClass} absolutelyCentered />}
			</Comp>
		);
	}
);

Button.displayName = 'Button';

export { Button, buttonVariants };
