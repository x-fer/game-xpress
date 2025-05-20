export const NavigationArea = ({
	currentPage = 0
}: {
	currentPage?: number;
}) => {
	const sections = [
		'Eligibility Team size',
		'Theme & Content',
		'Scoring',
		'Prizes',
		'Register'
	];
	return (
		<div className="backdrop-retro flex flex-col gap-6 p-6 bg-section-weak">
			{sections.map((section, idx) => (
				<div
					key={section}
					className={`p-4 backdrop-retro-light bg-black text-white${currentPage === idx ? ' border-2 border-accent' : ''}`}
				>
					{section}
				</div>
			))}
		</div>
	);
};
