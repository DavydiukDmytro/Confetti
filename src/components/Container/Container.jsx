import PropTypes from 'prop-types';
import { ContainerMain } from './Container.styled';

export const Container = ({ reviews, first, last, header, hero, children, footer }) => {
	return (
		<ContainerMain
			reviews={reviews}
			first={first}
			last={last}
			header={header}
			hero={hero}
			footer={footer}
		>
			{children}
		</ContainerMain>
	);
};

Container.propTypes = {
	reviews: PropTypes.bool,
	footer: PropTypes.bool,
	first: PropTypes.bool,
	last: PropTypes.bool,
	header: PropTypes.bool,
	hero: PropTypes.bool,
	children: PropTypes.node.isRequired,
};
