import PropTypes from 'prop-types';
import { SectionContainer } from './Section.styled';

export const Section = ({ id, children, hero }) => {
	return (
		<SectionContainer id={id} hero={hero}>
			{children}
		</SectionContainer>
	);
};

Section.propTypes = {
	id: PropTypes.string,
	children: PropTypes.node.isRequired,
	hero: PropTypes.bool,
};
