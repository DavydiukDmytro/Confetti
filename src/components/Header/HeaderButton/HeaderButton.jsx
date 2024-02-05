import PropTypes from 'prop-types';
import svgSprite from '../../../assets/svg/svgSprite.svg';
import { Button, ButtonText, Svg } from './HeaderButton.styled';

export const HeaderButton = ({ positionTop, onClick }) => {
	return (
		<Button type='button' aria-label='Open Menu' onClick={onClick}>
			<ButtonText positionTop={positionTop}>Menu</ButtonText>
			<Svg width={24} height={24}>
				<use xlinkHref={svgSprite + '#icon-menu'} />
			</Svg>
		</Button>
	);
};

HeaderButton.propTypes = {
	positionTop: PropTypes.bool,
	onClick: PropTypes.func.isRequired,
};
