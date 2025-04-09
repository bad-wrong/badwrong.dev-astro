interface ProjectCardProps {
	rowSpan?: number;
	heading: string;
}

export const ProjectCard = ({ rowSpan, heading }: ProjectCardProps) => {
	const rows = rowSpan || 3;

	return (
		<div
			className={`card card-2x${rows}`}
		>
			<div className="cover"></div>
			<h3>{heading}</h3>
		</div>

	);
}

