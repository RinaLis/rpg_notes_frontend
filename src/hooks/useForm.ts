import React, { useState } from 'react';

export function useForm<T>(inputValues: T) {
	const [values, setValues] = useState<T>(inputValues);
	const [errors, setErrors] = React.useState<Record<string, string | null>>({});

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value, name } = event.target;
		setValues({ ...values, [name]: value });
		if (value === '') {
			setErrors((prevErrors) => ({ ...prevErrors, [name]: null }));
		}
	};
	const validateField = (
		name: string,
		value: string,
		validate?: (value: string) => string | null
	) => {
		if (validate) {
			const error = validate(value);
			setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
		}
		if (value === '') {
			setErrors((prevErrors) => ({ ...prevErrors, [name]: null }));
		}
	};
	return { values, errors, setValues, handleChange, validateField };
}
