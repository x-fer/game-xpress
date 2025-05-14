'use client';

import { cn } from '@/deps/shadcn/utils';
import { Icon, IconName } from '@/global/components/icon';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

const badgeVariants = cva(
	'relative inline-flex flex-row items-center justify-center whitespace-nowrap backdrop-blur-xs',
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
				primary: 'bg-theme text-theme-contrast',
				secondary: 'bg-theme-weak text-theme',
				tertiary: 'bg-theme-weak text-theme-strong'
			},
			size: {
				lg: 'h-[24px] px-[12px] gap-2 rounded-full title-3',
				md: 'h-[20px] px-[8px] gap-1 rounded-full caption',
				sm: 'h-[12px] px-[6px] gap-1 rounded-full overline'
			}
		},
		defaultVariants: {
			variant: 'primary',
			size: 'md',
			theme: 'accent'
		}
	}
);

const iconVariants = cva('shrink-0', {
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
			primary: 'bg-theme-contrast',
			secondary: 'bg-theme',
			tertiary: 'bg-theme-strong'
		},
		size: {
			lg: 'w-4 h-4',
			md: 'w-4 h-4',
			sm: 'h-3 w-3'
		}
	},
	defaultVariants: {
		variant: 'primary',
		theme: 'neutral'
	}
});

export type BadgeProps = React.HTMLAttributes<HTMLDivElement> &
	VariantProps<typeof badgeVariants> & {
		icon?: IconName;
	};

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
	(
		{
			className,
			variant = 'primary',
			size = 'md',
			children,
			theme = 'neutral',
			icon,
			...props
		},
		ref
	) => {
		const Comp = 'div';
		return (
			<Comp
				className={cn(
					badgeVariants({
						variant,
						size,
						theme,
						className
					}),
					'group'
				)}
				style={{
					textDecoration: 'none'
				}}
				ref={ref}
				{...props}
			>
				{/* Icon */}
				{icon && (
					<Icon
						icon={icon}
						className={cn(iconVariants({ theme, variant, size }))}
					/>
				)}

				{/* Text */}
				{children}
			</Comp>
		);
	}
);

Badge.displayName = 'Badge';

export { Badge, badgeVariants };
