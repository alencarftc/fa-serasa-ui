import { useState } from 'react';

import classes from './StarList.module.scss';
import { StyleHelper } from '@helpers/sass';
import { ReactHookFormInputProps } from '@interfaces/shared';
import Text from '@components/Text';

export type FeedbackValue = 1 | 2 | 3 | 4 | 5;

type StarListProps = ReactHookFormInputProps;

/**
 * Component for asking the user for rating something.
 */
const StarList = ({ errors, register }: StarListProps) => {
	const [hovered, setHovered] = useState<FeedbackValue | null>(null);
	const [selected, setSelected] = useState<FeedbackValue | null>(null);

	const handleOnStarClick = (value: FeedbackValue) => setSelected(value);
	const handleOnStarLeave = () => setHovered(null);
	const handleOnStarEnter = (value: FeedbackValue) => setHovered(value);

	const getStarClassName = (value: FeedbackValue) =>
		StyleHelper.classnames(
			!selected && hovered && value <= hovered
				? classes['stars__item--highlight']
				: '',
			selected && value <= selected ? classes['stars__item--highlight'] : '',
			value == selected ? classes['stars__item--active'] : ''
		);

	const getFullClassName = (value: FeedbackValue) =>
		StyleHelper.classnames(classes.stars__item, getStarClassName(value));

	return (
		<div data-testid="stars" className={classes.stars}>
			<Text fw="bold">Marque de 1 à 5 estrelas</Text>
			<ul className={classes.stars__list}>
				{[1, 2, 3, 4, 5].map((value) => {
					const id = `rating-${value}`;
					return (
						<li key={value}>
							<input
								data-testid={id}
								id={id}
								value={value}
								type="radio"
								name="rating"
								hidden
								{...register}
							/>
							<label
								role="button"
								data-testid={`star-${value}`}
								className={getFullClassName(value as FeedbackValue)}
								onMouseEnter={() => handleOnStarEnter(value as FeedbackValue)}
								onClick={() => handleOnStarClick(value as FeedbackValue)}
								onMouseLeave={() => handleOnStarLeave()}
								aria-label={`Selecionar ${value} estrelas`}
								htmlFor={id}
							>
								★
							</label>
						</li>
					);
				})}
			</ul>
			<Text variant="error" hidden={!errors?.message}>
				{errors ? errors.message : ''}
			</Text>
		</div>
	);
};

export default StarList;
