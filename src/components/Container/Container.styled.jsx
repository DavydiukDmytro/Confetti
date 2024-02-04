import styled from '@emotion/styled';
import bg from '../../assets/images/bgPng/bg.png';

export const ContainerMain = styled.div`
	width: var(--mobile);
	padding: 0 20px;
	margin-left: auto;
	margin-right: auto;

	${({ flex }) => flex && 'display: flex; justify-content: space-between;'};

	${({ hero }) =>
		hero &&
		`
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
		padding-top: 62px;
		background-image: url(${bg});
		background-size: cover;
		`};
`;
