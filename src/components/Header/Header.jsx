import { useEffect, useState } from 'react';
import { Container } from '../Container';
import { Menu } from '../Menu';
import { HeaderButton } from './HeaderButton';
import { HeaderLogo } from './HeaderLogo';
import { HeaderContainer } from './Header.styled';

export const Header = () => {
	const [isOpenMenu, setIsOpenMenu] = useState(false);
	const [positionTop, setPositionTop] = useState(true);

	useEffect(() => {
		const handleScroll = () => {
			const scroll = window.scrollY || document.documentElement.scrollTop;
			scroll > 80 ? setPositionTop(false) : setPositionTop(true);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	useEffect(() => {
		if (isOpenMenu) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'visible';
		}

		return () => {
			document.body.style.overflow = 'visible';
		};
	}, [isOpenMenu]);

	const closeMenu = () => {
		setIsOpenMenu(false);
	};

	return (
		<>
			<HeaderContainer>
				<Container header={true}>
					<HeaderLogo positionTop={positionTop} />
					<HeaderButton positionTop={positionTop} onClick={() => setIsOpenMenu(true)} />
				</Container>
			</HeaderContainer>
			<Menu isOpenMenu={isOpenMenu} closeMenu={closeMenu} />
		</>
	);
};
