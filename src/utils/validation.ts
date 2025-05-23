import * as yup from 'yup';

export const schemaLogin = yup
	.object({
		email: yup.string().email('Некорректный email').required('Введите email'),
		password: yup
			.string()
			.min(6, 'Пароль должен быть не менее 6 символов')
			.required('Введите пароль'),
	})
	.required();

export const schemaRegister = yup
	.object({
		name: yup.string().required('Введите имя'),
		login: yup.string().min(3, 'Логин должен быть не менее 3 символов').required('Введите логин'),
		email: yup.string().email('Некорректный email').required('Введите email'),
		password: yup
			.string()
			.min(6, 'Пароль должен быть не менее 6 символов')
			.required('Введите пароль'),
		confirmPassword: yup
			.string()
			.oneOf([yup.ref('password')], 'Пароли не совпадают')
			.required('Повторите пароль'),
	})
	.required();

export const schemaReset = yup
	.object({
		password: yup
			.string()
			.min(6, 'Пароль должен быть не менее 6 символов')
			.required('Введите пароль'),
		confirmPassword: yup
			.string()
			.oneOf([yup.ref('password')], 'Пароли не совпадают')
			.required('Повторите пароль'),
		code: yup.string().required('Введите код из письма'),
	})
	.required();

export const schemaForgot = yup
	.object({
		email: yup.string().email('Некорректный email').required('Введите email'),
	})
	.required();

export const schemaUpdateUser = yup
	.object({
		email: yup.string().email('Некорректный email').required('Введите email'),
		name: yup.string().required('Введите имя'),
		login: yup.string().required('Введите логин'),
	})
	.required();

export const schemaUpdatePost = yup
	.object({
		name: yup.string().required('Введите название'),
		description: yup.string().required('Введите описание'),
		text: yup.string().required('Введите текст'),
	})
	.required();

export const schemaUpdateAdventure = yup
	.object({
		name: yup.string().required('Введите название'),
		description: yup.string().required('Введите описание'),
		text: yup.string().required('Введите текст'),
	})
	.required();

export const schemaCreatePost = yup
	.object({
		name: yup.string().required('Введите название'),
		description: yup.string().required('Введите описание'),
		text: yup.string().required('Введите текст'),
	})
	.required();

export const schemaCreateAdventure = yup
	.object({
		name: yup.string().required('Введите название'),
		description: yup.string().required('Введите описание'),
		text: yup.string().required('Введите текст'),
	})
	.required();

export const schemaCreateThread = yup
	.object({
		name: yup.string().required('Введите название'),
		description: yup.string().required('Введите описание'),
	})
	.required();

export const schemaUpdateThread = yup
	.object({
		name: yup.string().required('Введите название'),
		description: yup.string().required('Введите описание'),
	})
	.required();

export const schemaCreateComment = yup
	.object({
		text: yup.string().required('Введите текст'),
	})
	.required();

export const schemaUpdateComment = yup
	.object({
		text: yup.string().required('Введите текст'),
	})
	.required();

export const schemaCreateMessage = yup
	.object({
		text: yup.string().required('Введите текст'),
	})
	.required();

export const schemaUpdateMessage = yup
	.object({
		text: yup.string().required('Введите текст'),
	})
	.required();
