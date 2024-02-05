import PropTypes from 'prop-types';
import { SectionContainer } from './Section.styled';

export const Section = ({ children, hero }) => {
	return <SectionContainer hero={hero}>{children}</SectionContainer>;
};

Section.propTypes = {
	children: PropTypes.node.isRequired,
	hero: PropTypes.bool,
};
