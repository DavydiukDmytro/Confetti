import PropTypes from 'prop-types';
import svgSprite from '../../../assets/svg/svgSprite.svg';
import { Button, ButtonText, Svg } from './HeaderButton.styled';

export const HeaderButton = ({ onClick }) => {
	return (
		<Button type='button' aria-label='Open Menu' onClick={onClick}>
			<ButtonText>Menu</ButtonText>
			<Svg width={24} height={24}>
				<use xlinkHref={svgSprite + '#icon-menu'} />
			</Svg>
		</Button>
	);
};

HeaderButton.propTypes = {
	onClick: PropTypes.func.isRequired,
};
