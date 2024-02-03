import styled from '@emotion/styled';

export const HeaderContainer = styled.header`
	position: fixed;
	width: 100%;
	outline: 1px solid red;
`;

export const Button = styled.button`
	padding: 0;
	height: 32px;
	display: flex;
	justify-content: center;
	align-items: center;
	border: none;
	cursor: pointer;
`;

export const ButtonText = styled.p`
	margin-right: 8px;
	display: inline-block;
	font-family: 'Anzeigengrot';
	text-transform: uppercase;
	font-size: 24px;
	color: var(--main);
`;

export const Svg = styled.svg`
	fill: #222;
	stroke: #222;
`;
