export const clsx = (...classes: string[]) => {
	return classes
		.filter((clazz) => clazz.length > 0 && clazz !== " ")
		.join(" ");
}
