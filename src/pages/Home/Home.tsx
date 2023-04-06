import { RatingService } from '@services/RatingService';

import Text from '@components/Text';

import LogoSerasa from '@images/serasa-logo.svg';
import RatingForm, {
	RatingFormValues,
} from '@pages/Home/components/RatingForm';
import { useService } from '@helpers/hooks/useService';

import classes from './Home.module.scss';
import { HOME } from '@configs/content/pt-br/Home';

const Home = () => {
	const [ratingService, handleResponse] = useService<RatingService>(
		new RatingService('rating')
	);

	const handleOnFormSubmit = (data: RatingFormValues) => {
		handleResponse(ratingService.submit(data));
	};

	return (
		<div className={classes.rating}>
			<Text.Heading as="h2">
				<img
					className={classes.rating__img}
					src={LogoSerasa}
					alt="Serasa Logo"
				/>
			</Text.Heading>

			<div className={classes.feedback}>
				<Text.Heading as="h3">{HOME.FEEDBACK_TITLE}</Text.Heading>
			</div>
			<RatingForm onSubmit={handleOnFormSubmit} />
		</div>
	);
};

export default Home;
