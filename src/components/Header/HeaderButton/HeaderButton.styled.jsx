import styled from '@emotion/styled';

export const Button = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 32px;
	padding: 0;
	border: none;
	cursor: pointer;
	background-color: inherit;
`;

export const ButtonText = styled.p`
	margin-right: 8px;
	font-family: 'Anzeigengrot';
	text-transform: uppercase;
	font-size: 24px;
	line-height: 22px;
	color: var(--main);
`;

export const Svg = styled.svg`
	fill: #222;
	stroke: #222;
`;
