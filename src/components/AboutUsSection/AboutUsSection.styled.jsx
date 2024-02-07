import styled from '@emotion/styled';

export const Description = styled.p`
	margin-bottom: 36px;
	text-align: center;
	font-size: 20px;
	line-height: 28px;
	letter-spacing: -1px;
	color: var(--extra-text);

	@media (min-width: 768px) {
		width: 75%;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 48px;
		font-size: 24px;
		line-height: 34px;
	}

	@media (min-width: 1280px) {
		width: 60%;
		margin-bottom: 64px;
	}
`;

export const List = styled.ul`
	display: grid;
	grid-template-columns: 1fr;
	grid-row-gap: 24px;

	@media (min-width: 1280px) {
		grid-template-columns: 1fr 1fr;
		grid-column-gap: 24px;
	}
`;

export const ItemCard = styled.li`
	height: 253px;
	padding: 24px;
	border-radius: 24px;
	${({ color }) => color && `background-color: ${color}`};

	@media (min-width: 768px) {
		height: 287px;
		padding: 48px;
	}

	@media (min-width: 1280px) {
		height: 293px;
	}
`;
export const CardInfo = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export const CardTitle = styled.h3`
	display: inline-block;
	width: 70%;
	font-family: 'Anzeigengrot';
	font-size: 24px;
	line-height: 29px;
	letter-spacing: 1px;
	text-transform: uppercase;
	color: var(--white);

	@media (min-width: 768px) {
		font-size: 40px;
		line-height: 32px;
	}

	@media (min-width: 1280px) {
		width: 90%;
		line-height: 38px;
	}
`;

export const CardDescription = styled.p`
	display: inline-block;
	width: 80%;
	font-size: 16px;
	line-height: 23px;
	color: #fffffe;

	@media (min-width: 768px) {
		font-size: 20px;
		line-height: 29px;
	}

	@media (min-width: 1280px) {
		width: 98%;
		line-height: 27px;
	}
`;
