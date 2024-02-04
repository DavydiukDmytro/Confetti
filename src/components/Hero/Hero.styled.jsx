import styled from '@emotion/styled';

export const SectionHero = styled.section`
	width: 100%;
	height: 100vh;
	overflow: hidden;
`;

export const Title = styled.h1`
	position: absolute;
	white-space: nowrap;
	width: 1px;
	height: 1px;
	overflow: hidden;
	border: 0;
	padding: 0;
	clip: rect(0 0 0 0);
	clip-path: inset(50%);
	margin: -1px;
`;

export const Text = styled.p`
	z-index: 1;
	font-family: 'Anzeigengrot';
	font-size: 40px;
	line-height: 32px;
	text-transform: uppercase;
	color: var(--accent);
	text-align: center;
`;

export const SubText = styled.span`
	color: var(--main);
`;

export const Img = styled.img`
	position: absolute;
	left: 0;
	bottom: 50%;
	transform: translate(-35%, 5%);
`;

export const Img2 = styled.img`
	position: absolute;
	right: 0;
	top: 50%;
	transform: translate(20%, 20%);
`;
