import type React from "react";
import { clsx } from "../../utils/common";
import { useState } from "react";
import { VideoPlayer } from "./VideoPlayer";

interface ProjectCardProps {
	className?: string;
	images?: string[];
	imageAlt?: string
	imageFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
	imageWidth?: number;
	video?: string;
	coverText?: string;
	children?: React.ReactNode;
}

export const ProjectCard = ({
	className,
	images = [],
	imageAlt = '',
	imageFit = 'cover',
	imageWidth,
	video,
	coverText,
	children
}: ProjectCardProps) => {
	const imageClasses = clsx('cover', imageFit && `cover--fit-${imageFit}`, imageWidth && `cover--width-${imageWidth}`);
	const cardClasses = clsx('card', className || "");

	const [curImgIdx, setImgIdx] = useState(0);

	const handleClick = () => {
		setImgIdx((curImgIdx + 1) % images.length);
	};

	return (
		<article className={cardClasses}>
			<picture onClick={handleClick} className={imageClasses} style={{ cursor: images.length > 1 ? "e-resize" : "auto" }}>
				{images && images.length > 0 && (
					<img src={images[curImgIdx]} alt={imageAlt} />
				)}
				{video && (
					<VideoPlayer videoSrc={video} />
				)}
				{coverText && (<div className="cover-text">{coverText}</div>)}
			</picture>
			{children}
		</article>
	);
}

