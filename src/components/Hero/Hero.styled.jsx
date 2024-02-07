import styled from '@emotion/styled';
import {
	changePositionBallons2Laptop,
	changePositionBallons2Mobile,
	changePositionBallons2Tablet,
	changePositionBallonsLaptop,
	changePositionBallonsMobile,
	changePositionBallonsTablet,
} from './BallsAnimation';

export const Text = styled.p`
	z-index: 1;
	font-family: 'Anzeigengrot';
	font-size: 40px;
	line-height: 32px;
	text-transform: uppercase;
	color: var(--accent);
	text-align: center;

	@media (min-width: 768px) {
		font-size: 64px;
		line-height: 51px;
	}

	@media (min-width: 1280px) {
		font-size: 88px;
		line-height: 80px;
	}
`;

export const SubText = styled.span`
	color: var(--main);
`;

export const Img = styled.img`
	position: absolute;
	left: 0;
	bottom: 50%;
	transform: rotate(-50deg);
	transform-origin: bottom center;

	animation: ${changePositionBallonsMobile} 7000ms linear;
	animation-iteration-count: infinite;
	@media (min-width: 768px) {
		animation-name: ${changePositionBallonsTablet};
		width: 273px;
		height: 278px;
	}

	@media (min-width: 1280px) {
		animation-name: ${changePositionBallonsLaptop};
		width: 298px;
		height: 304px;
	}
`;

export const Img2 = styled.img`
	position: absolute;
	right: 0;
	bottom: 50%;
	transform: translate(10%, 120%) rotate(10deg);
	transform-origin: bottom center;

	animation: ${changePositionBallons2Mobile} 7000ms linear;
	animation-iteration-count: infinite;

	@media (min-width: 768px) {
		animation-name: ${changePositionBallons2Tablet};
		width: 303px;
		height: 310px;
	}

	@media (min-width: 1280px) {
		animation-name: ${changePositionBallons2Laptop};
		width: 360px;
		height: 368px;
	}
`;
