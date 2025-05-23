import { UseFormRegisterReturn } from 'react-hook-form';

export type InputProps = {
	label?: string; // Метка для инпута, если есть
	error?: string; // Сообщение об ошибке
	register: UseFormRegisterReturn; // Тип для регистрации инпута
	type?: string; // Тип поля ввода (text, email, password и т.д.)
	placeholder?: string; // Подсказка в поле
	icon?: React.ReactNode; // Иконка
	сlassNameCustom?: InputNames;
};
export enum InputNames {
	auth = 'auth', // для инпутов авторизации
	info = 'info', // для инпутов информации
	photo = 'photo', // для инпутов фото
}
