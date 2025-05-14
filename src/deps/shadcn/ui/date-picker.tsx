'use client';

import { format } from 'date-fns';
import { useRef, useState, type FC } from 'react';

import { Calendar } from '@/deps/shadcn/ui/calendar';
import {
	Popover,
	PopoverContent,
	PopoverTrigger
} from '@/deps/shadcn/ui/popover';
import { cn } from '@/deps/shadcn/utils';
import { Icon } from '@/global/components/icon';
import { Button } from './button';
import { inputVariants } from './input';

export const DatePicker: FC<{
	value?: Date;
	defaultValue?: Date;
	onChange?: (date: Date | undefined) => void;
	disabled?: boolean;
}> = ({ value, defaultValue, onChange, disabled }) => {
	const [internalDate, setInternalDate] = useState<Date | undefined>(
		defaultValue
	);

	const isEmpty = !value && !internalDate;

	const shownDate = value ?? internalDate;

	const handleDateChange = (date: Date | undefined) => {
		const newDate = date;

		if (!newDate) {
			setInternalDate(undefined);
			onChange?.(undefined);
			return;
		}

		newDate.setHours(shownDate?.getHours() ?? 0);
		newDate.setMinutes(shownDate?.getMinutes() ?? 0);

		setInternalDate(newDate);
		onChange?.(newDate);
	};

	const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const time = e.target.value;
		const [hourRaw, minuteRaw] = time.split(':');

		const hour = parseInt(hourRaw!) % 24;
		const minute = parseInt(minuteRaw!) % 60;

		if (isNaN(hour) || isNaN(minute)) return;

		const newDate = shownDate ? new Date(shownDate) : new Date();

		newDate.setHours(hour);
		newDate.setMinutes(minute);

		setInternalDate(newDate);
		onChange?.(newDate);
	};

	const timeRef = useRef<HTMLInputElement>(null);

	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					theme="neutral"
					// className={cn(
					// 	'relative inline-flex items-center justify-start whitespace-nowrap ring-offset-background duration-300 hover:md:duration-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:opacity-50 group-[btn]',
					// 	'border border-neutral-medium text-neutral hover:md:bg-neutral-weak',
					// 	'h-[40px] px-[16px] gap-[6px] button-md',
					// 	'rounded-lg',
					// 	isEmpty && 'text-neutral-medium'
					// )}
					className="justify-start px-3"
					disabled={disabled}
				>
					<Icon
						icon="calendar-done"
						className={cn('bg-neutral-strong size-4')}
					/>
					{shownDate ? (
						<span className="input">
							{format(shownDate, 'dd. MM. yyyy. HH:mm')}
						</span>
					) : (
						<span className="input">Pick a date</span>
					)}
				</Button>
			</PopoverTrigger>
			<PopoverContent
				className="w-auto p-0 flex flex-col items-center"
				align="start"
			>
				<Calendar
					mode="single"
					selected={shownDate}
					onSelect={handleDateChange}
					initialFocus
				/>
				<div className="flex flex-row pb-3 px-3 items-center w-full">
					<div
						onClick={() => timeRef.current?.showPicker()}
						className={cn(
							inputVariants(),
							'w-full flex flex-row items-center justify-center'
						)}
					>
						<input
							ref={timeRef}
							type="time"
							value={format(shownDate || new Date(), 'HH:mm')}
							className="[&::-webkit-calendar-picker-indicator]:hidden"
							onChange={handleTimeChange}
						/>
					</div>
				</div>
			</PopoverContent>
		</Popover>
	);
};
