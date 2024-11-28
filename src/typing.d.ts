declare module '*.module.scss' {
	const classes: { [key: string]: string };
	export default classes;
}

declare module '*.svg' {
	import React from 'react';

	const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
	const content: string;
	export { ReactComponent };
	export default content;
}

declare module '*.png' {
	const content: string;
	export default content;
}

interface ImportMetaEnv {
	VITE_API_URL: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
