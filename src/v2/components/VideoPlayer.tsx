import { useRef } from "react";

interface VideoPlayerProps {
	videoSrc: string;
}

export function VideoPlayer({ videoSrc, ...props }: VideoPlayerProps) {
	const videoRef = useRef(null);

	const handleMouseOver = () => {
		videoRef.current?.play().catch(error => console.log("Video play error:", error));
	};

	const handleMouseOut = () => {
		videoRef.current?.pause();
	};

	return (
		<video
			ref={videoRef}
			src={videoSrc}
			onMouseOver={handleMouseOver}
			onMouseOut={handleMouseOut}
			muted
			loop
			playsInline
			{...props}
		></video>
	);
}
