export type AsidePanelProps = {
	children: React.ReactNode;
};

export type AsidePanelUIProps = AsidePanelProps & {
	isOpen: boolean;
	onClick: () => void;
	overlayRef?: React.RefObject<HTMLDivElement>;
};
