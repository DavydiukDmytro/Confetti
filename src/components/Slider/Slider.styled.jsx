import styled from '@emotion/styled';

export const ButtonContainer = styled.div`
	display: flex;
	justify-content: center;
`;

export const Button = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 56px;
	height: 56px;
	border: 1px solid #d2d2d2;
	border-radius: 50%;
	background-color: inherit;
	cursor: pointer;

	&:focus,
	&:hover {
		border-color: var(--accent);
		stroke: var(--accent);
	}

	&:not(:last-child) {
		margin-right: 24px;
	}

	fill: none;
	stroke: var(--main);

	transition: border-color 0.3s ease, stroke 0.3s ease;
`;
