import { UseFormRegisterReturn } from 'react-hook-form';

export type CheckboxProps = {
	name: string; // тип для id и htmlFor
	label?: string; // Надпись, если есть
	register: UseFormRegisterReturn; // Тип для регистрации инпута
	icon?: React.ReactNode; // Иконка
	className?: string;
};
