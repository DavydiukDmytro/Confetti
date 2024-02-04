import styled from '@emotion/styled';

export const ContainerMenu = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	text-align: center;
	background-color: var(--bg);
`;

export const HeaderMenu = styled.div`
	width: var(--mobile);
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
	padding: 0 20px;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 62px;
	padding-top: 30px;
`;

export const Logo = styled.a``;

export const Button = styled.button`
	padding: 0;
	margin: 0;
	border: none;
	cursor: pointer;
	background-color: inherit;
`;

export const Svg = styled.svg`
	fill: none;
	stroke: var(--main);
`;

export const ListItem = styled.li`
	&:not(:last-child) {
		margin-bottom: 24px;
	}
`;

export const Link = styled.a`
	padding: 0;
	font-family: 'Anzeigengrot';
	text-transform: uppercase;
	font-size: 24px;
	line-height: 19px;
	color: var(--main);
`;
