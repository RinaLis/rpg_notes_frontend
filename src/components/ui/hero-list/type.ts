import { UserDTO, HeroDTO } from '@utils-types';

type HeroWithUsername = HeroDTO & { username: string };

export type HeroListUIProps = {
	master: UserDTO;
	heroes: HeroWithUsername[];
	onAdd?: () => void;
};
