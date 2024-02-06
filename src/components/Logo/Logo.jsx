import PropTypes from 'prop-types';
import logoPng from '../../assets/images/logo/logo.png';
import { Img } from './Logo.styled';

export const Logo = ({ footer, positionTop }) => {
	return (
		<Img
			src={logoPng}
			alt='Logo "Confetti"'
			width={104}
			footer={footer}
			positionTop={positionTop}
		/>
	);
};

Logo.propTypes = {
	footer: PropTypes.bool,
	positionTop: PropTypes.bool,
};
