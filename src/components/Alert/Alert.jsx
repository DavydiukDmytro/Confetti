import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import svgSprite from '../../assets/svg/svgSprite.svg';
import { AlertContainer, SubTitle, Svg, Text, Title, TitleContainer } from './Alert.styled';
import { useEffect } from 'react';

export const Alert = ({ data, close }) => {
	const modalRoot = document.getElementById('modal-root');

	useEffect(() => {
		const timer = setTimeout(() => {
			close();
		}, 3000);

		return () => clearTimeout(timer);
	}, [close]);

	return createPortal(
		<AlertContainer>
			<TitleContainer>
				<Svg width={34} height={34}>
					<use xlinkHref={svgSprite + '#icon-check'} />
				</Svg>
				<Title>wysłano</Title>
			</TitleContainer>
			<SubTitle>Imię</SubTitle>
			<Text>{data.name}</Text>
			<SubTitle>E-mail</SubTitle>
			<Text>{data.email}</Text>
			{data.message && (
				<>
					<SubTitle>Wiadomość</SubTitle>
					<Text>{data.message}</Text>
				</>
			)}
		</AlertContainer>,
		modalRoot
	);
};

Alert.propTypes = {
	data: PropTypes.shape({
		name: PropTypes.string.isRequired,
		email: PropTypes.string.isRequired,
		message: PropTypes.string,
	}).isRequired,
	close: PropTypes.func.isRequired,
};
