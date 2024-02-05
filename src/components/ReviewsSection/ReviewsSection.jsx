import svgSprite from '../../assets/svg/svgSprite.svg';
import { Container } from '../Container';
import { Section } from '../Section';
import { SliderCard } from '../Slider/Slider';
import { Title } from '../Title';
import { CardInfo, ItemCard, Name, Text } from './ReviewsSection.styled';

export const ReviewsSection = () => {
	const reviewsSectionData = {
		title: 'Recenzje',
		reviews: [
			{
				id: 1,
				text: 'Baaardzo super ścianka , dziękuję za współpracę 🫶',
				name: 'Anetta Ostalczyk ',
			},
			{
				id: 2,
				text: 'Jeszcze raz wielkie dzięki! Ciężko nam było foty robić jak ustawili te stoły 🥰 ale sam klimat i dekoracja robiła meegaaa wrażenie!',
				name: 'Aleksandra Murawska ',
			},
			{
				id: 3,
				text: 'Ścianka była piękna , bardzo delikatna , Jeszcze raz bardzo dziękuję )',
				name: 'Katia Maksymiw ',
			},
		],
	};
	return (
		<Section>
			<Container>
				<Title>{reviewsSectionData.title}</Title>
				<SliderCard>
					{reviewsSectionData.reviews.map((i) => (
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
