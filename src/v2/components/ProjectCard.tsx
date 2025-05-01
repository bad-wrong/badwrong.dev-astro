import type React from "react";
import { clsx } from "../../utils/common";
import { useEffect, useState } from "react";
import { VideoPlayer } from "./VideoPlayer";

interface ProjectCardProps {
	className?: string;
	images?: string[];
	imageAlt?: string
	imageFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
	imageWidth?: number;
	imageLink?: string;
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
	imageLink,
	video,
	coverText,
	children
}: ProjectCardProps) => {
	const imageClasses = clsx('cover', imageFit && `cover--fit-${imageFit}`, imageWidth && `cover--width-${imageWidth}`);
	const cardClasses = clsx('card', className || "");

	const [curImgIdx, setImgIdx] = useState(0);
	const [cursorStyle, setCursorStyle] = useState<string>("auto");

	const handleClick = () => {
		setImgIdx((curImgIdx + 1) % images.length);

		if (imageLink) {
			window.open(imageLink);
		}
	};

	useEffect(() => {
		if (images.length > 1) {
			setCursorStyle("e-resize");
		} else if (imageLink) {
			setCursorStyle("pointer");
		} else {
			setCursorStyle("auto");
		}
	}, [imageLink]);



	return (
		<article className={cardClasses}>
			<picture onClick={handleClick} className={imageClasses} style={{ cursor: cursorStyle }}>
				{images && images.length > 0 && (
					<>
						<img src={images[curImgIdx]} alt={imageAlt} />
					</>
				)}
				{video && (
					<VideoPlayer videoSrc={video} />
				)}
				{coverText && (<div className="cover-text">{coverText}</div>)}
			</picture>
			{images.length > 1 && (<div className="picture-number">{curImgIdx + 1} / {images.length}</div>)}
			{children}
		</article>
	);
}

