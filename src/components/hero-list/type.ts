import { UserDTO, HeroDTO } from '@utils-types';

type HeroWithUsername = HeroDTO & { username: string };

export type HeroListProps = {
	master: UserDTO;
	heroes: HeroWithUsername[];
};
