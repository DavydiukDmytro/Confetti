import styled from '@emotion/styled';

export const HeaderContainer = styled.header`
	position: fixed;
	top: 30px;
	z-index: 2;
	width: 100%;

	@media (min-width: 768px) {
		top: 32px;
	}

	@media (min-width: 1280px) {
		top: 37px;
	}
`;
