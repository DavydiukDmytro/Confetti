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
} from './AboutUsSection.styled';

export const AboutUsSection = () => {
	const { title, description, arrCard } = aboutUsSectionData;

	return (
		<Section>
			<Container first={true}>
				<Title subTitle={true}>{title}</Title>
				<Description>{description}</Description>
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
			</Container>
		</Section>
	);
};
