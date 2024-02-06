import styled from '@emotion/styled';

export const Description = styled.p`
	text-align: center;
	font-family: 'Anzeigengrot';
	font-size: 28px;
	line-height: 22px;
	text-transform: uppercase;
	margin-bottom: 24px;
`;

export const DescriptionSpan = styled.span`
	display: block;
`;

export const List = styled.ul`
	margin-bottom: 36px;
`;

export const ItemList = styled.li`
	&:not(:last-child) {
		margin-bottom: 16px;
	}
`;

export const Link = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;

	font-size: 20px;
	line-height: 24px;
	color: var(--extra-text);

	fill: var(--white);
	stroke: var(--extra-text);

	transition: stroke 0.3s ease, color 0.3s ease;

	&:hover {
		color: var(--accent);
		stroke: var(--accent);
	}
`;
