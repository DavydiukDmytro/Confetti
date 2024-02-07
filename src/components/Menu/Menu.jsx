import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import svgSprite from '../../assets/svg/svgSprite.svg';
import logoPng from '../../assets/images/logo/logoMenu.png';
import scrollToSection from '../../utils/scroll/scroll';
import menuData from '../../data/MenuData.json';
import { Button, ContainerMenu, HeaderMenu, Link, ListItem } from './Menu.styled';

export const Menu = ({ isOpenMenu, closeMenu }) => {
	const modalRoot = document.getElementById('modal-root');

	return createPortal(
		<ContainerMenu isOpenMenu={isOpenMenu}>
			<HeaderMenu>
				<img src={logoPng} alt='Logo "Confetti"' width={98} />

				<Button type='button' aria-label='Close Menu' onClick={() => closeMenu()}>
					<svg width={24} height={24}>
						<use xlinkHref={svgSprite + '#icon-close'} />
					</svg>
				</Button>
			</HeaderMenu>
			<nav>
				<ul>
					{menuData.map((i) => (
						<ListItem key={i.id}>
							<Link
								href={`#${i.id.toLowerCase()}`}
								onClick={(e) => {
									closeMenu();
									scrollToSection(i.id, e);
								}}
							>
								{i.title}
							</Link>
						</ListItem>
					))}
				</ul>
			</nav>
		</ContainerMenu>,
		modalRoot
	);
};

Menu.propTypes = {
	closeMenu: PropTypes.func.isRequired,
};
