import styled from '@emotion/styled';

export const ItemCard = styled.div`
	height: 230px;
	padding: 24px;
	background-color: var(--extra-accent);
	border-radius: 24px;

	@media (min-width: 768px) {
		height: 220px;
	}

	@media (min-width: 1280px) {
		padding: 36px 24px;
		height: 277px;
	}
`;

export const CardInfo = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export const Text = styled.p`
	font-size: 18px;
	line-height: 24px;

	@media (min-width: 1280px) {
		font-size: 24px;
		line-height: 29px;
	}
`;

export const Name = styled.p`
	display: flex;
	font-size: 16px;
	line-height: 20px;
	color: var(--extra-text);
`;
