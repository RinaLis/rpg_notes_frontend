import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { schemaCreateAdventure } from 'src/utils/validation';
import * as yup from 'yup';

type FormValues = yup.InferType<typeof schemaCreateAdventure>;

export interface AdventureCreateUIProps {
	onSubmit: (e: React.FormEvent) => void;
	register: UseFormRegister<FormValues>;
	errors: FieldErrors<FormValues>;
	error: string | null;
}
