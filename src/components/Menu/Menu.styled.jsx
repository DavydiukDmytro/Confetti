import styled from '@emotion/styled';

export const ContainerMenu = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 0;
	z-index: 2;
	text-align: center;
	background-color: var(--bg);
	transition: height 1s ease;
	overflow: hidden;
	${({ isOpenMenu }) => isOpenMenu && 'height: 100%;'};
`;

export const HeaderMenu = styled.div`
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
	width: var(--mobile);
	padding: 0 20px;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 62px;
	padding-top: 30px;
`;

export const Button = styled.button`
	padding: 0;
	margin: 0;
	border: none;
	cursor: pointer;
	background-color: inherit;

	fill: none;
	stroke: var(--main);

	transition: stroke 0.3s ease;

	&:hover,
	&:focus {
		stroke: var(--accent);
	}
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

	transition: color 0.3s ease;

	&:hover,
	&:focus {
		color: var(--accent);
	}
`;
