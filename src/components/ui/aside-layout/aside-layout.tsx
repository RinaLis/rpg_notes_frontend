import { AsidePanel } from 'src/components/aside-panel';
import { AsideLayoutUIProps } from './type';

export const AsideLayoutUI: React.FC<AsideLayoutUIProps> = ({ children, asideChildren }) => {
	return (
		<>
			{children}
			<AsidePanel>{asideChildren}</AsidePanel>
		</>
	);
};
