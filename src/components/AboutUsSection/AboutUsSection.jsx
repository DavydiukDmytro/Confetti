import { Container } from '../Container';
import { Section } from '../Section';
import { CardDescription, CardTitle, Description, ItemCard, Title } from './AboutUsSection.styled';

export const AboutUsSection = () => {
	const AboutUsSectionJson = {
		title: 'Kreatywny zespół dekoratorów',
		description:
			'Młodzi i energiczni, rozwijający działalność w zakresie tworzenia dekoracji na imprezy i wydarzenia',
		arrCard: [
			{
				id: 1,
				title: `Kreatywne podejście i
dbałość o szczegóły`,
				description: `Specjaliści zapewniają doradztwo i
kreatywność przy wyborze dekoracji
balonowych, z dbałością o szczegóły`,
				bgColor: '#ED4B5E',
			},
			{
				id: 2,
				title: `Materiały przyjazne
dla środowiska`,
				description: `Wykorzystywane są materiały najwyższej jakości,
w tym biodegradowalne materiały balonowe,
aby pozostawić jak najmniejszy ślad na środowisku.`,
				bgColor: '#222222',
			},
			{
				id: 3,
				title: `Szeroka gama kolorów
do personalizacji`,
				description: `Balony i dekoracje są wybierane z szerokiej gamy kolorów, co pozwala spersonalizować wystrój na każdą okazję.`,
				bgColor: '#444444',
			},
			{
				id: 4,
				title: `Gwarancja dostawy
i montażu`,
				description: `Firma gwarantuje nie tylko wysokiej jakości dostawę zamówień, ale także ich montaż, zapewniając klientom kompleksową obsługę.`,
				bgColor: '#808080',
			},
		],
	};
	return (
		<Section>
			<Container first={true}>
				<Title>{AboutUsSectionJson.title}</Title>
				<Description>{AboutUsSectionJson.description}</Description>
				<ul>
					{AboutUsSectionJson.arrCard.map((item) => (
						<ItemCard key={item.id} color={item.bgColor}>
							<CardTitle>{item.title}</CardTitle>
							<CardDescription>{item.description}</CardDescription>
						</ItemCard>
					))}
				</ul>
			</Container>
		</Section>
	);
};
