import styled from '@emotion/styled';
import bg from '../../assets/images/bgPng/bg.png';

export const ContainerMain = styled.div`
	width: var(--mobile);
	padding: 40px 20px;
	margin-left: auto;
	margin-right: auto;

	${({ first }) => first && 'padding-top: 80px'};

	${({ last }) => last && 'padding-bottom: 80px'};

	${({ header }) => header && 'display: flex; justify-content: space-between; padding: 0 20px;'};

	${({ hero }) =>
		hero &&
		`
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		padding-top: 62px;
		padding-bottom: 0;
		background-image: url(${bg});
		background-size: cover;
		`};
`;
