import logoPng from '../../assets/images/logo/logo.png';
import logoWebp from '../../assets/images/logo/logo.webp';
import svgSprite from '../../assets/svg/svgSprite.svg';
import { Container } from '../Container/Container';
import { Button, ButtonText, HeaderContainer, Svg } from './Header.styled';

export const Header = () => {
	return (
		<HeaderContainer>
			<Container flex={true} fixed={true}>
				<img
					srcSet={`${logoWebp}, ${logoPng}`}
					src={logoPng}
					alt='Logo "Confetti"'
					width={104}
					role='image'
				/>
				<Button type='button' aria-label='Open Menu'>
					<ButtonText>Menu</ButtonText>
					<Svg width={24} height={24}>
						<use xlinkHref={svgSprite + '#icon-menu'} />
					</Svg>
				</Button>
			</Container>
		</HeaderContainer>
	);
};
