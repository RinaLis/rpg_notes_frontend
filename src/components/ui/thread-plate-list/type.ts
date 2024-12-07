import { ThreadDTO } from '@utils-types';

export type ThreadPlateListUIProps = {
	threads: ThreadDTO[];
	onAdd?: () => void;
};
