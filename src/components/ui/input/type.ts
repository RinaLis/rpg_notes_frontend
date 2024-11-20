export type InputUIProps = {
	type: string;
	label?: string;
	name: string;
	value: string;
	placeholder?: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
	error: string;
	className?: string;
};

export type InputProps = {
	name: string;
	type?: string;
	label?: string;
	placeholder?: string;
	className?: string;
	validate?: (value: string) => string | null;
};
