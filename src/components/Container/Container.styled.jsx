import styled from '@emotion/styled';

export const ContainerMain = styled.div`
	min-width: var(--mobile);
	max-width: var(--mobile-end);
	padding: 40px 20px;
	margin-left: auto;
	margin-right: auto;

	${({ first }) => first && 'padding-top: 80px'};

	${({ last }) =>
		last &&
		`padding: 40px 0 80px 0;
		position: relative;
	&::after {
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
		content: '';
		width: calc(100% - 40px);
		height: 1px;
		background-color: var(--accent);
	}
	`};

	${({ header }) => header && 'display: flex; justify-content: space-between; padding: 0 20px;'};

	${({ hero }) =>
		hero &&
		`
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		padding-top: 62px;
		padding-bottom: 0;
		background-size: cover;
		`};

	${({ footer }) =>
		footer &&
		`
		padding: 32px 20px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		
			@media (min-width: 768px) {
		padding-top: 25px;
		padding-bottom: 28px;
	}
		`};

	@media (min-width: 768px) {
		max-width: var(--tablet);
		padding-left: 30px;
		padding-right: 30px;
		${({ hero }) => hero && `padding-top: 0;`};
	}
`;
