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
		color: var(--main);`}
`;
