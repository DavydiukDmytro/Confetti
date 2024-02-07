import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const fadeInOut = keyframes`
    0% {
      opacity: 0;
    }
    15% {
      opacity: 1;
    }
    85% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
`;

export const AlertContainer = styled.div`
	position: fixed;
	top: 30px;
	left: 50%;
	transform: translateX(-50%);
	max-width: 80%;

	padding: 10px 20px;
	background-color: var(--extra-accent);
	border: 1px solid var(--accent);

	border-radius: 20px;
	z-index: 10;

	opacity: 0;
	animation: ${fadeInOut} 3s ease-in-out;

	@media (min-width: 768px) {
		top: 32px;
		padding: 20px 40px;
	}

	@media (min-width: 1280px) {
		top: 37px;
		padding: 30px 50px;
	}
`;

export const TitleContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 15px;
`;

export const Svg = styled.svg`
	fill: var(--accent);
	margin-right: 10px;
`;

export const Title = styled.p`
	font-family: Anzeigengrot;
	color: var(--accent);
	font-size: 24px;
	text-transform: uppercase;

	@media (min-width: 768px) {
		font-size: 28px;
	}

	@media (min-width: 1280px) {
		font-size: 32px;
	}
`;

export const SubTitle = styled.p`
	display: block;
	font-size: 16px;
	margin-bottom: 6px;
	color: var(--accent);

	@media (min-width: 768px) {
		font-size: 20px;
	}
`;

export const Text = styled.p`
	font-size: 16px;

	&:not(:last-child) {
		margin-bottom: 10px;
	}

	@media (min-width: 768px) {
		font-size: 20px;
	}
`;
