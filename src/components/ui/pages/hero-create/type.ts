import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { schemaCreateHero } from '@validation';
import * as yup from 'yup';

type FormValues = yup.InferType<typeof schemaCreateHero>;

export interface HeroCreateUIProps {
	onSubmit: (e: React.FormEvent) => void;
	register: UseFormRegister<FormValues>;
	errors: FieldErrors<FormValues>;
	error: string | null;
}
