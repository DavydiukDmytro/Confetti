import { Container } from '../Container';
import { Logo } from '../Logo';
import { FooterContainer, Text } from './Footer.styled';

export const Footer = () => {
	return (
		<FooterContainer>
			<Container footer={true}>
				<Logo footer={true} />
				<Text>confetti &copy; 2023</Text>
			</Container>
		</FooterContainer>
	);
};
