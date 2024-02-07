import styled from '@emotion/styled';

export const TitleText = styled.h2`
	margin-bottom: 36px;
	font-size: 36px;
	line-height: 40px;
	text-align: center;
	font-family: 'Anzeigengrot';
	text-transform: uppercase;
	color: var(--accent);

	${({ subTitle }) =>
		subTitle &&
		`margin-bottom: 16px;
        font-size: 36px;
	    line-height: 28px;
		color: var(--main);
		`}

	@media (min-width: 768px) {
		font-size: 48px;
		line-height: 53px;
		margin-bottom: 48px;

		${({ contacts }) =>
			contacts &&
			`margin-bottom: 24px;
       `}

		${({ subTitle }) =>
			subTitle &&
			`
			margin-bottom: 16px;
		  font-size: 48px;
	    line-height: 38px;`}
	}

	@media (min-width: 1280px) {
		font-size: 100px;
		line-height: 79px;
		margin-bottom: 64px;

		${({ subTitle }) =>
			subTitle &&
			`
			margin-bottom: 24px;
		  font-size: 56px;
		line-height: 44px;`}

		${({ contacts }) =>
			contacts &&
			`text-align: left;
			margin-bottom: 56px;
       `}
	}
`;
