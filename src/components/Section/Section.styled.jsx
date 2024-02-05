import styled from '@emotion/styled';

export const SectionContainer = styled.section`
	width: 100%;
	overflow: hidden;
	${({ hero }) => hero && 'height: 100vh;'};
`;
