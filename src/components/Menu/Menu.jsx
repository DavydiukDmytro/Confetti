import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import svgSprite from '../../assets/svg/svgSprite.svg';
import { Button, ContainerMenu, HeaderMenu, Link, ListItem, Svg } from './Menu.styled';
import logoPng from '../../assets/images/logo/logoMenu.png';
import logoWebp from '../../assets/images/logo/logoMenu.webp';

const modalRoot = document.getElementById('modal-root');

export const Menu = ({ closeMenu }) => {
	return createPortal(
		<ContainerMenu>
			<HeaderMenu>
				<img
					srcSet={`${logoWebp}, ${logoPng}`}
					src={logoPng}
					alt='Logo "Confetti"'
					width={98}
					role='image'
				/>

				<Button type='button' aria-label='Close Menu' onClick={() => closeMenu()}>
					<Svg width={24} height={24}>
						<use xlinkHref={svgSprite + '#icon-close'} />
					</Svg>
				</Button>
			</HeaderMenu>
			<nav>
				<ul>
					<ListItem>
						<Link href=''>główna</Link>
					</ListItem>
					<ListItem>
						<Link href=''>O nas</Link>
					</ListItem>
					<ListItem>
						<Link href=''>Recenzje</Link>
					</ListItem>
					<ListItem>
						<Link href=''>Kontakty</Link>
					</ListItem>
				</ul>
			</nav>
		</ContainerMenu>,
		modalRoot
	);
};

Menu.propTypes = {
	closeMenu: PropTypes.func.isRequired,
};
