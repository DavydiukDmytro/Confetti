import ballons1 from '../../assets/images/ballons/ballons1.png';
import ballons2 from '../../assets/images/ballons/ballons2.png';
import { Container } from '../Container';
import { Img, Img2, SectionHero, SubText, Text, Title } from './Hero.styled';

export const Hero = () => {
	return (
		<>
			<SectionHero>
				<Container hero={true}>
					<Title>Confetti</Title>
					<Img src={ballons1} alt='Ballons' width={158} role='image' />
					<Text>
						Tworzymy unikalne <br />i niepowtarzalne <SubText>dekoracje balonowe</SubText> na
						imprezy
					</Text>
					<Img2 src={ballons2} alt='Ballons' width={180} role='image' />
				</Container>
				<Container hero={true}>awsawawdawdawd</Container>
			</SectionHero>
		</>
	);
};
