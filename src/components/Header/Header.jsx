import { useEffect, useState } from 'react';
import { Container } from '../Container';
import { Menu } from '../Menu';
import { HeaderButton } from './HeaderButton';
import { HeaderLogo } from './HeaderLogo';
import { HeaderContainer } from './Header.styled';

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
				<Container flex={true}>
					<HeaderLogo />
					<HeaderButton onClick={() => setIsOpenMenu(true)} />
				</Container>
			</HeaderContainer>
			{isOpenMenu && <Menu closeMenu={closeMenu} />}
		</>
	);
};
