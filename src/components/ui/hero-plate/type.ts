export type HeroPlateProps = {
	heroName?: string;
	playerName: string;
	image?: string | null;
	onClick?: () => void;
	master?: boolean;
	dead?: boolean;
};
