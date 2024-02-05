import styled from '@emotion/styled';

export const Title = styled.h2`
	margin-bottom: 16px;
	text-align: center;
	font-family: 'Anzeigengrot';
	font-size: 36px;
	line-height: 28px;
	text-transform: uppercase;
`;

export const Description = styled.p`
	margin-bottom: 36px;
	text-align: center;
	font-size: 20px;
	line-height: 28px;
	letter-spacing: -1px;
	color: var(--extra-text);
`;

export const ItemCard = styled.div`
	height: 253px;
	padding: 24px;
	border-radius: 24px;
	${({ color }) => color && `background-color: ${color}`};
`;
export const CardInfo = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export const CardTitle = styled.h3`
	font-family: 'Anzeigengrot';
	font-size: 24px;
	line-height: 29px;
	letter-spacing: 1px;
	text-transform: uppercase;
	color: var(--white);
`;

export const CardDescription = styled.p`
	font-size: 16px;
	line-height: 23px;
	color: var(--white);
`;
