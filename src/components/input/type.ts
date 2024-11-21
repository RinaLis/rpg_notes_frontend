import { UseFormRegisterReturn } from 'react-hook-form';

export type InputProps = {
	label?: string;
	error?: string;
	register: UseFormRegisterReturn; // Тип для регистрации инпута
	type?: string;
	placeholder?: string;
};
