import PropTypes from 'prop-types';
import { TitleText } from './Title.styled';
export const Title = ({ subTitle, children }) => {
	return <TitleText subTitle={subTitle}>{children}</TitleText>;
};

Title.propTypes = {
	subTitle: PropTypes.bool,
	children: PropTypes.node.isRequired,
};
