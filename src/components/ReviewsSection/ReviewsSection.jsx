import svgSprite from '../../assets/svg/svgSprite.svg';
import reviewsSectionData from '../../data/ReviewsData.json';
import { Container } from '../Container';
import { Section } from '../Section';
import { SliderCard } from '../Slider/Slider';
import { Title } from '../Title';
import { CardInfo, ItemCard, Name, Text } from './ReviewsSection.styled';

export const ReviewsSection = () => {
	const { title, reviews } = reviewsSectionData;

	return (
		<Section id={'reviews'}>
			<Container>
				<Title>{title}</Title>
				<SliderCard>
					{reviews.map((i) => (
						<ItemCard key={i.id}>
							<CardInfo>
								<Text>{i.text}</Text>
								<Name>
									<svg style={{ marginRight: '8px' }} width={24} height={24}>
										<use xlinkHref={svgSprite + '#icon-tag-user'} />
									</svg>
									{i.name}
								</Name>
							</CardInfo>
						</ItemCard>
					))}
				</SliderCard>
			</Container>
		</Section>
	);
};
