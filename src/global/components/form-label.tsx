export const FormLabel = ({
	title,
	error,
	description,
	children
}: {
	title?: string;
	error?: string;
	description?: string;
	children: React.ReactNode;
}) => {
	return (
		<div className="flex flex-col gap-1 w-full">
			{title && <p className="caption text-neutral-strong">{title}</p>}
			{children}
			{description && (
				<p className="body-3 text-neutral-strong">{description}</p>
			)}
			{error && <p className="body-2 text-danger">{error}</p>}
		</div>
	);
};
