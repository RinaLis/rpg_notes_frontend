export type TOption = {
	label: string;
	value: string;
};

export type SelectProps = {
	options: TOption[];
	placeholder: string;
	onChange: (option: TOption | null) => void;
	classNameProp?: string;
};
