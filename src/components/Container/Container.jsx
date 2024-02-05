import PropTypes from 'prop-types';
import { ContainerMain } from './Container.styled';

export const Container = ({ first, last, header, hero, children }) => {
	return (
		<ContainerMain first={first} last={last} header={header} hero={hero}>
			{children}
		</ContainerMain>
	);
};

Container.propTypes = {
	first: PropTypes.bool,
	last: PropTypes.bool,
	header: PropTypes.bool,
	hero: PropTypes.bool,
	children: PropTypes.node.isRequired,
};
