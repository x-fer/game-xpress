type DottedBarProps = {
	rows?: number;
	dotSize?: number;
	gap?: number;
};

export const DottedBar = ({
	rows = 3,
	dotSize = 0.75,
	gap = 1.5
}: DottedBarProps) => {
	const verticalSpacing = dotSize + gap;
	const dotsPerRow = Math.floor(100 / (dotSize + gap));
	const totalWidth = dotsPerRow * (dotSize + gap) - gap; // Total width of all dots + gaps
	const leftPadding = (100 - totalWidth) / 2; // Calculate padding to center
	const totalHeight = rows * verticalSpacing - gap;

	return (
		<div className="w-full overflow-hidden flex-1 flex justify-center">
			<svg
				viewBox={`0 0 100 ${totalHeight}`}
				preserveAspectRatio="xMidYMid meet"
				width="100%"
				height="100%"
				xmlns="http://www.w3.org/2000/svg"
			>
				{Array.from({ length: rows }).map((_, row) =>
					Array.from({ length: dotsPerRow }).map((_, col) => (
						<rect
							key={`${row}-${col}`}
							x={leftPadding + col * (dotSize + gap)}
							y={row * verticalSpacing}
							width={dotSize}
							height={dotSize}
							fill="white"
						/>
					))
				)}
			</svg>
		</div>
	);
};
