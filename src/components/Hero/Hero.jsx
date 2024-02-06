import ballons1 from '../../assets/images/ballons/ballons1.png';
import ballons2 from '../../assets/images/ballons/ballons2.png';
import { Container } from '../Container';
import { Section } from '../Section';
import { Img, Img2, SubText, Text } from './Hero.styled';

export const Hero = () => {
	return (
		<>
			<Section id={'hero'} hero={true}>
				<Container hero={true}>
					<h1 className='invisible'>Confetti</h1>
					<Img src={ballons1} alt='Ballons' width={158} />
					<Text>
						Tworzymy unikalne <br />i niepowtarzalne <SubText>dekoracje balonowe</SubText> na
						imprezy
					</Text>
					<Img2 src={ballons2} alt='Ballons' width={180} />
				</Container>
				<Container hero={true}>awsawawdawdawd</Container>
			</Section>
		</>
	);
};
