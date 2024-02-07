import styled from '@emotion/styled';
import bgHero from '../../assets/images/bgPng/bgHero.png';

export const SectionContainer = styled.section`
	width: 100%;
	overflow: hidden;
	${({ hero }) => hero && `height: 100vh; background-image: url(${bgHero});`};
`;
