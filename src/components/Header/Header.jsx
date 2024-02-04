import { useEffect, useState } from 'react';
import logoPng from '../../assets/images/logo/logo.png';
import logoWebp from '../../assets/images/logo/logo.webp';
import svgSprite from '../../assets/svg/svgSprite.svg';
import { Container } from '../Container/Container';
import { Button, ButtonText, HeaderContainer, Svg } from './Header.styled';
import { Menu } from '../Menu/Menu';

export const Header = () => {
	const [isOpenMenu, setIsOpenMenu] = useState(false);

	useEffect(() => {
		if (isOpenMenu) {
			document.body.style.overflowY = 'hidden';
		} else {
			document.body.style.overflowY = 'visible';
		}

		return () => {
			document.body.style.overflowY = 'visible';
		};
	}, [isOpenMenu]);

	const closeMenu = () => {
		setIsOpenMenu(false);
	};

	return (
		<>
			<HeaderContainer>
				<Container flex={true} fixed={true}>
					<img
						srcSet={`${logoWebp}, ${logoPng}`}
						src={logoPng}
						alt='Logo "Confetti"'
						width={104}
						role='image'
					/>
					<Button
						type='button'
						aria-label='Open Menu'
						onClick={() => {
							setIsOpenMenu(true);
							console.log('awsdd');
						}}
					>
						<ButtonText>Menu</ButtonText>
						<Svg width={24} height={24}>
							<use xlinkHref={svgSprite + '#icon-menu'} />
						</Svg>
					</Button>
				</Container>
			</HeaderContainer>
			{isOpenMenu && <Menu closeMenu={closeMenu} />}
		</>
	);
};
