import { cn } from '@/deps/shadcn/utils';

function Skeleton({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			className={cn('animate-pulse rounded-md bg-neutral-weak', className)}
			{...props}
		/>
	);
}

export { Skeleton };
