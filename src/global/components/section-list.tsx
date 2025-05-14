'use client';

import { Button } from '@/deps/shadcn/ui/button';
import { cn } from '@/deps/shadcn/utils';
import Link from 'next/link';
import React, {
	useState,
	type FC,
	type HTMLAttributes,
	type PropsWithChildren,
	type ReactNode
} from 'react';

const EXPAND_THRESHOLD = 5;

interface SectionListProps<T> {
	title?: string;
	description?: ReactNode;
	showAll?: boolean;
	data: T[];
	keyKey?: keyof T;
	headerRow?: ReactNode;
	rows: (item: T, index: number) => ReactNode;
	actions?: (item: T, index: number) => ReactNode;
	emptyRow?: ReactNode;
	wrapper?: (props: { children: ReactNode }) => ReactNode;
}

const Item: FC<HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => {
	return (
		<div
			className={cn(
				'flex flex-row gap-2 items-center bg-section button-md group px-2 md:px-4 py-4',
				className
			)}
			{...props}
		/>
	);
};
const ItemActions: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className="flex flex-row shrink-0 items-center gap-2">{children}</div>
	);
};

const ItemContent: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className="flex flex-row grow-1 shrink items-center gap-2">
			{children}
		</div>
	);
};

const ItemEmptyContent: FC<HTMLAttributes<HTMLDivElement>> = ({
	className,
	...props
}) => {
	return (
		<div
			className={cn(
				'flex flex-row w-full items-center gap-2 px-3 md:px-4 py-4',
				className
			)}
			{...props}
		/>
	);
};

export const SectionList = <T extends Record<string, unknown>>({
	title,
	description,
	headerRow,
	data,
	rows,
	actions,
	emptyRow,
	showAll = false,
	wrapper
}: SectionListProps<T>) => {
	const [expanded, setExpanded] = useState(false);

	const firstHalf = data.slice(0, EXPAND_THRESHOLD);
	const secondHalf = data.slice(EXPAND_THRESHOLD);

	const handleClick = () => {
		setExpanded((expanded) => !expanded);
	};

	const Wrapper = wrapper ?? React.Fragment;

	const ItemList = ({ items }: { items: T[] }) =>
		items
			.slice(0, showAll || expanded ? undefined : EXPAND_THRESHOLD)
			.map((item, index) => {
				const key = index; // keyKey ? (item[keyKey] as string) : index;

				return (
					<React.Fragment key={key}>
						{item.link ? (
							<Item className="cursor-pointer">
								<Link href={item.link} className="flex-1">
									<ItemContent>{rows(item, index)}</ItemContent>
								</Link>
								{actions && <ItemActions>{actions(item, index)}</ItemActions>}
							</Item>
						) : (
							<Item>
								<ItemContent>{rows(item, index)}</ItemContent>
								{actions && <ItemActions>{actions(item, index)}</ItemActions>}
							</Item>
						)}
					</React.Fragment>
				);
			});

	return (
		<div className="flex flex-col gap-2 w-full">
			<div className="flex flex-row items-center justify-between px-4">
				{headerRow ? (
					<>
						<div className="flex flex-row w-full items-center gap-2">
							{headerRow}
						</div>
						{actions && (
							<div className="flex flex-row shrink-0 items-center gap-2 h-1 pl-2">
								{actions(data[0]!, 0)}
							</div>
						)}
					</>
				) : (
					<>
						<p className="caption text-neutral-strong">{title}</p>
						<p className="caption text-neutral-strong">{description}</p>
					</>
				)}
			</div>
			<Wrapper>
				<div className="rounded-xl overflow-x-auto overflow-y-hidden scrollbar-hidden">
					<div className="flex flex-col gap-px">
						{data.length === 0 && (
							<Item>
								<ItemEmptyContent>{emptyRow}</ItemEmptyContent>
							</Item>
						)}
						<div className="flex flex-col gap-px">
							<ItemList items={firstHalf} />
						</div>
						<div
							className="flex flex-col gap-px"
							style={{
								display: showAll || expanded ? 'flex' : 'none'
							}}
						>
							<ItemList items={secondHalf} />
						</div>
					</div>
				</div>
			</Wrapper>
			{!showAll && data.length > EXPAND_THRESHOLD && (
				<div className="flex w-full justify-center">
					<Button onClick={handleClick} variant="outline" size="sm">
						{expanded ? 'Sakrij' : 'Prikaži sve'}
					</Button>
				</div>
			)}
		</div>
	);
};
