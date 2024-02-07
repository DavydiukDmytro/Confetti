import { useMediaQuery } from 'react-responsive';
import aboutUsSectionData from '../../data/AboutUsData.json';
import { Container } from '../Container';
import { Section } from '../Section';
import { SliderCard } from '../Slider/Slider';
import { Title } from '../Title';
import {
	CardDescription,
	CardInfo,
	CardTitle,
	Description,
	ItemCard,
	List,
} from './AboutUsSection.styled';

export const AboutUsSection = () => {
	const { description, arrCard } = aboutUsSectionData;
	const isTablet = useMediaQuery({ minWidth: 768 });

	return (
		<Section id={'aboutus'}>
			<Container first={true}>
				<Title subTitle={true}>
					Kreatywny zespół <br /> dekoratorów
				</Title>
				<Description>{description}</Description>
				{!isTablet ? (
					<SliderCard>
						{arrCard.map((i) => (
							<ItemCard key={i.id} color={i.bgColor}>
								<CardInfo>
									<CardTitle>{i.title}</CardTitle>
									<CardDescription>{i.description}</CardDescription>
								</CardInfo>
							</ItemCard>
						))}
					</SliderCard>
				) : (
					<List>
						{arrCard.map((i) => (
							<ItemCard key={i.id} color={i.bgColor}>
								<CardInfo>
									<CardTitle>{i.title}</CardTitle>
									<CardDescription>{i.description}</CardDescription>
								</CardInfo>
							</ItemCard>
						))}
					</List>
				)}
			</Container>
		</Section>
	);
};
