import { useMemo, useState } from "react";


export const VSCodeMarketplaceInstalls = () => {
	const [text, setText] = useState<string | null>(null);

	const easyBracketsHref = "https://marketplace.visualstudio.com/items?itemName=badwrong.easybrackets";

	useMemo(() => {
		fetch(easyBracketsHref).then(async response => {
			if (!response.ok) { return };

			const body = await response.text();

			try {
				const parser = new DOMParser();
				const doc = parser.parseFromString(body, "text/html");
				const installSpan = doc.querySelector("span.installs-text");
				if (installSpan) {
					const text = installSpan.textContent?.trim();
					if (text) {
						setText(text);
					}
				}
			} catch {
				console.log("Unable to fetch VS Marketplace extention stats");
			}
		}).catch(error => {
			console.error(error);
		});
	}, [easyBracketsHref])

	if (text) {
		return (<div>{text}</div>);
	} else {
		return <></>;
	}
};
