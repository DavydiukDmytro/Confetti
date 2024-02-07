import PropTypes from 'prop-types';
import { TitleText } from './Title.styled';
export const Title = ({ contacts, subTitle, children }) => {
	return (
		<TitleText contacts={contacts} subTitle={subTitle}>
			{children}
		</TitleText>
	);
};

Title.propTypes = {
	contacts: PropTypes.bool,
	subTitle: PropTypes.bool,
	children: PropTypes.node.isRequired,
};
