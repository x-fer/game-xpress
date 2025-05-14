import { cn } from '@/deps/shadcn/utils';

export const Spinner = ({
	className,
	absolutelyCentered = false
}: {
	className?: string;
	absolutelyCentered?: boolean;
}) => {
	return (
		<>
			<div
				className={cn(
					absolutelyCentered
						? 'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'
						: 'relative',
					'inline-block h-4 w-4',
					className,
					'border-none'
				)}
			>
				<span
					className={cn(
						'absolute left-0 top-0 box-border h-4 w-4 rounded-full border-2',
						'border-white',
						className,
						'opacity-20'
					)}
				/>
				<span
					className={cn(
						'rounded-full',
						'absolute left-0 top-0 box-border h-4 w-4 animate-spin border-2 border-white',
						className,
						'border-l-0 border-t-0'
					)}
				/>
			</div>
		</>
	);
};
