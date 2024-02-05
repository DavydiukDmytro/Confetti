import aboutUsSectionData from '../../data/AboutUsData.json';
import { Container } from '../Container';
import { Section } from '../Section';
import { SliderCard } from '../Slider/Slider';
import {
	CardDescription,
	CardInfo,
	CardTitle,
	Description,
	ItemCard,
	Title,
} from './AboutUsSection.styled';

export const AboutUsSection = () => {
	const { title, description, arrCard } = aboutUsSectionData;

	return (
		<Section>
			<Container first={true}>
				<Title>{title}</Title>
				<Description>{description}</Description>
				<SliderCard>
					{arrCard.map((item) => (
						<ItemCard key={item.id} color={item.bgColor}>
							<CardInfo>
								<CardTitle>{item.title}</CardTitle>
								<CardDescription>{item.description}</CardDescription>
							</CardInfo>
						</ItemCard>
					))}
				</SliderCard>
			</Container>
		</Section>
	);
};
