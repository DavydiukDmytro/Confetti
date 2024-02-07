import styled from '@emotion/styled';

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
	transform: translate(-35%, 5%);

	@media (min-width: 768px) {
		transform: translate(-25%, 30%);
		width: 273px;
		height: 278px;
	}

	@media (min-width: 1280px) {
		transform: translate(5%, 45%) rotate(330deg);
		width: 398px;
		height: 404px;
	}
`;

export const Img2 = styled.img`
	position: absolute;
	right: 0;
	top: 50%;
	transform: translate(20%, 20%);

	@media (min-width: 768px) {
		transform: translate(10%, 2%);
		width: 307px;
		height: 312px;
	}

	@media (min-width: 1280px) {
		transform: translate(-5%, -20%);
		width: 460px;
		height: 468px;
	}
`;
