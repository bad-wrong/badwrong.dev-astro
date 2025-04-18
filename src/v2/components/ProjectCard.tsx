import type React from "react";
import { clsx } from "../../utils/common";

interface ProjectCardProps {
	className?: string;
	image?: string;
	imageAlt?: string
	imageFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
	children?: React.ReactNode;

}

export const ProjectCard = ({ className, image, imageAlt = '', imageFit = 'cover', children }: ProjectCardProps) => {
	const imageClasses = clsx('cover', imageFit && `cover--fit-${imageFit}`);

	const cardClasses = clsx('card', className || "");

	return (
		<div className={cardClasses}>
			<div className={imageClasses}>
				{image && (
					<img src={image} alt={imageAlt} />
				)}
			</div>
			<div className="card-content">
				{children}
			</div>
		</div>
	);
}

