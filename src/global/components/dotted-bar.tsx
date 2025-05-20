import React from 'react';

type DottedBarProps = {
	rows?: number;
	dotSize?: number;
	gap?: number;
	children?: React.ReactNode;
};

export const DottedBar = ({
	rows = 3,
	dotSize = 2,
	gap = 2,
	children
}: DottedBarProps) => {
	const patternSize = dotSize + gap;
	const height = rows * patternSize - gap;

	return (
		<div className="flex-1 flex items-center relative">
			<svg className="w-full" height={height}>
				<defs>
					<pattern
						id="dotPattern"
						width={patternSize}
						height={patternSize}
						patternUnits="userSpaceOnUse"
					>
						<rect width={dotSize} height={dotSize} fill="white" />
					</pattern>
				</defs>
				<rect width="100%" height="100%" fill="url(#dotPattern)" />
			</svg>
			{children && (
				<div className="absolute left-1/2 transform -translate-x-1/2">
					{children}
				</div>
			)}
		</div>
	);
};
