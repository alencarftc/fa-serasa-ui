/* eslint-disable @typescript-eslint/no-misused-promises */
import { useForm } from 'react-hook-form';

import TextInput from '@components/TextInput';
import StarList, { FeedbackValue } from '@components/StarList';
import Button from '@components/Button';

import classes from './RatingForm.module.scss';
import FeedbackModal from '@components/FeedbackModal';

export interface RatingFormValues {
	rating: FeedbackValue;
	name: string;
	comment: string;
}

interface RatingFormProps {
	onSubmit: (data: RatingFormValues) => void;
}

const RatingForm = ({ onSubmit }: RatingFormProps) => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors, isValid },
	} = useForm<RatingFormValues>({ mode: 'onTouched' });

	return (
		<>
			<form
				data-testid="form"
				onSubmit={handleSubmit(onSubmit)}
				className={classes.form}
			>
				<StarList
					errors={errors.rating}
					selected={watch('rating')}
					register={register('rating', {
						min: 1,
						max: 5,
						required: 'Selecione de 1 à 5 estrelas.',
					})}
				/>
				<TextInput
					label="Nome *"
					placeholder="João Silva"
					name="name"
					register={register('name', { required: 'O nome é obrigatório' })}
					errors={errors.name}
				/>
				<TextInput
					label="Comentário"
					name="comment"
					placeholder="Experiência fantástica!"
					as="textarea"
					register={register('comment')}
					errors={errors.comment}
				/>
				<Button type="submit" disabled={!isValid}>
					Enviar avaliação
				</Button>
			</form>
			<FeedbackModal />
		</>
	);
};

export default RatingForm;
