import { ContainerMain } from './Container.styled';
import PropTypes from 'prop-types';

export const Container = ({ flex, fixed, children }) => {
	return (
		<ContainerMain fixed={fixed} flex={flex}>
			{children}
		</ContainerMain>
	);
};

Container.propTypes = {
	flex: PropTypes.bool,
	fixed: PropTypes.bool,
	children: PropTypes.node.isRequired,
};
