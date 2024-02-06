import styled from '@emotion/styled';

export const Form = styled.form`
	padding: 51px 20px;
	background-color: var(--extra-accent);

	@media (min-width: 480px) {
		border-radius: 24px;
	}
`;

export const GroupContainer = styled.div`
	width: 100%;
	position: relative;
	margin-bottom: 24px;
`;

export const Label = styled.label`
	display: inline-block;
	padding: 0 24px;
	margin-bottom: 8px;
	font-size: 16px;
	line-height: 20px;
	color: var(--sub-text);
`;

export const Input = styled.input`
	width: 100%;
	height: 62px;
	padding: 20px 24px;
	border-radius: 9px;
	border: 1px solid #d2d2d2;

	font-size: 18px;
	line-height: 22px;

	color: ${({ error }) => (error ? 'var(--accent)' : 'var(--main)')};

	::placeholder {
		color: ${({ error }) => (error ? 'var(--accent)' : 'var(--placeholder)')};
	}
`;

export const ErrorText = styled.p`
	position: absolute;
	bottom: -20px;
	right: 24px;
	font-size: 14px;
	line-height: 17px;
	color: var(--accent);
`;

export const Textarea = styled.textarea`
	width: 100%;
	height: 128px;
	resize: none;
	padding: 20px 24px;
	border-radius: 9px;
	border: 1px solid #d2d2d2;
	margin-bottom: 32px;

	font-size: 18px;
	line-height: 22px;
	color: var(--main);

	::placeholder {
		color: var(--placeholder);
	}
`;

export const Button = styled.button`
	width: 100%;
	height: 62px;
	border: none;
	border-radius: 24px;

	font-family: 'Anzeigengrot';
	text-transform: uppercase;
	font-size: 28px;
	line-height: 22px;
	color: var(--white);
	background-color: ${({ disabled }) => (disabled ? 'rgba(237, 75, 94, 0.75)' : 'var(--accent)')};
	cursor: ${({ disabled }) => (disabled ? 'auto;' : 'pointer')};
`;
