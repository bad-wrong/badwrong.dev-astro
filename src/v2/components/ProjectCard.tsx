import type React from "react";
import { clsx } from "../../utils/common";

interface ProjectCardProps {
	className?: string;
	image?: string;
	imageAlt?: string
	imageFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
	imageWidth?: number;
	children?: React.ReactNode;

}

export const ProjectCard = ({
	className,
	image,
	imageAlt = '',
	imageFit = 'cover',
	imageWidth,
	children
}: ProjectCardProps) => {
	const imageClasses = clsx('cover', imageFit && `cover--fit-${imageFit}`, imageWidth && `cover--width-${imageWidth}`);

	const cardClasses = clsx('card', className || "");

	return (
		<div className={cardClasses}>
			<picture className={imageClasses}>
				{image && (
					<img src={image} alt={imageAlt} />
				)}
			</picture>
			<div className="card-content">
				{children}
			</div>
		</div>
	);
}

