import styled from '@emotion/styled';

export const Img = styled.img`
	opacity: 1;
	transition: opacity 1s ease;

	${({ positionTop }) => !positionTop && `opacity: 0;`};
	${({ footer }) => footer && `opacity: 1;`};
`;
