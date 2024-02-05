import PropTypes from 'prop-types';
import logoPng from '../../../assets/images/logo/logo.png';
import { Img } from './HeaderLogo.styled';

export const HeaderLogo = ({ positionTop }) => {
	return <Img src={logoPng} alt='Logo "Confetti"' width={104} positionTop={positionTop} />;
};

HeaderLogo.propTypes = {
	positionTop: PropTypes.bool,
};
