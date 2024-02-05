import styled from '@emotion/styled';

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
