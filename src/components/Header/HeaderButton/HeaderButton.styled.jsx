import styled from '@emotion/styled';

export const ButtonText = styled.span`
	display: inline-block;
	margin-right: 8px;
	font-family: 'Anzeigengrot';
	text-transform: uppercase;
	font-size: 24px;
	line-height: 22px;

	opacity: 1;
	transition: opacity 1s ease;

	${({ positionTop }) => !positionTop && `opacity: 0; `};
`;

export const Svg = styled.svg`
	background-color: var(--white);
	border-radius: 4px;
`;

export const Button = styled.button`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 32px;
	padding: 0;
	border: none;
	cursor: pointer;
	background-color: inherit;

	color: var(--main);
	fill: var(--main);
	stroke: var(--main);

	transition: color 0.3s ease, fill 0.3s ease, stroke 0.3s ease;

	&:hover,
	&:focus {
		color: var(--accent);
		fill: var(--accent);
		stroke: var(--accent);
	}

	&::after {
		content: '';
		position: absolute;
		top: 50%;
		right: 0;
		display: block;
		width: 40px;
		height: 40px;
		z-index: -1;
		transform: translate(8px, -50%);
		border-radius: 8px;
		background-color: var(--white);
	}
`;
