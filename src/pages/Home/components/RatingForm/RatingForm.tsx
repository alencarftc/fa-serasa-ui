/* eslint-disable @typescript-eslint/no-misused-promises */
import { useForm } from 'react-hook-form';

import TextInput from '@components/TextInput';
import StarList, { FeedbackValue } from '@components/StarList';
import Button from '@components/Button';

import classes from './RatingForm.module.scss';
import FeedbackModal, {
	MODAL_CONFIGS,
	ModalConfig,
} from '@components/FeedbackModal';
import { useContext, useEffect, useState } from 'react';
import { ModalContext } from '@helpers/providers/ModalContext';

export interface RatingFormValues {
	rating: FeedbackValue;
	name: string;
	comment: string;
}

interface RatingFormProps {
	onSubmit: (data: RatingFormValues) => void;
}

/**
 * Component for showing a form for collecting the user feedback.
 */
const RatingForm = ({ onSubmit }: RatingFormProps) => {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<RatingFormValues>({ mode: 'onTouched' });
	const { configType } = useContext(ModalContext);
	const [{ id, children: message }, setModalConfig] = useState<ModalConfig>(
		MODAL_CONFIGS.default
	);

	useEffect(() => {
		setModalConfig(MODAL_CONFIGS[configType]);
	}, [configType]);

	return (
		<>
			<form
				data-testid="form"
				onSubmit={handleSubmit(onSubmit)}
				className={classes.form}
			>
				<StarList
					errors={errors.rating}
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
			<FeedbackModal id={id}>{message}</FeedbackModal>
		</>
	);
};

export default RatingForm;
