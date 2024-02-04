import styled from '@emotion/styled';

export const ContainerMain = styled.div`
	width: var(--mobile);
	padding: 0 20px;
	margin-left: auto;
	margin-right: auto;
	${({ flex }) => flex && 'display: flex; justify-content: space-between;'};
`;
