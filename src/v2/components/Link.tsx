import { ExternalLink, SquareArrowOutUpRight } from "lucide-react";

interface LinkProps {
	external: boolean;
	text: string;
	title?: string;
	href: string;
}

export const Link = ({ text, title, href, external = false }: LinkProps) => {
	const clazz = external ? "external-link" : "";
	return (
		<a className={clazz} href={href}>{text}{external && (<SquareArrowOutUpRight size={18} />)}</a>
	);
}
