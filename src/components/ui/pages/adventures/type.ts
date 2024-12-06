import { AdventureDTO } from '@utils-types';
import { TOption } from '../../select/types';

export type AdventuresUIProps = {
	adventures: AdventureDTO[] | null;
	onFilterChange: (option: TOption | null) => void;
	options: TOption[];
};
