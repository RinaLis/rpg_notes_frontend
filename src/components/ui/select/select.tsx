import ReactSelect, { components } from 'react-select';
import './select.scss';

import { ReactComponent as TriangleSVG } from '@assets/triangle.svg';
import clsx from 'clsx';
import { SelectProps } from './types';

const { DropdownIndicator } = components;

const CustomDropdownIndicator = (props: any) => {
	return (
		// это требование библиотеки
		// eslint-disable-next-line react/jsx-props-no-spreading
		<DropdownIndicator {...props}>
			<TriangleSVG />
		</DropdownIndicator>
	);
};

export const Select: React.FC<SelectProps> = ({
	options,
	placeholder,
	onChange,
	classNameProp,
}) => {
	return (
		<ReactSelect
			options={options}
			placeholder={placeholder}
			onChange={onChange}
			classNamePrefix="customSelect"
			className={clsx('customSelect', classNameProp)}
			unstyled // чтобы убрать стандартные стили
			hideSelectedOptions // чтобы скрывать выбранные опции
			isSearchable={false}
			closeMenuOnScroll
			closeMenuOnSelect
			controlShouldRenderValue
			// isClearable // чтобы добавить кнопку очистки выбора
			// menuIsOpen // для того что бы стилить выпадающий список можно использовать этот параметр
			components={{ DropdownIndicator: CustomDropdownIndicator }}
		/>
	);
};
