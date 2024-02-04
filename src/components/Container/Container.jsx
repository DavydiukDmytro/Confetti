import PropTypes from 'prop-types';
import { ContainerMain } from './Container.styled';

export const Container = ({ hero, flex, children }) => {
	return (
		<ContainerMain hero={hero} flex={flex}>
			{children}
		</ContainerMain>
	);
};

Container.propTypes = {
	hero: PropTypes.bool,
	flex: PropTypes.bool,
	children: PropTypes.node.isRequired,
};
