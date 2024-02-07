import svgSprite from '../../../assets/svg/svgSprite.svg';
import contactsSectionData from '../../../data/ContactsData.json';
import { Title } from '../../Title';
import { Description, DescriptionSpan, ItemList } from '../ContactsSection.styled';
import { Link, List } from './Contacts.styled';

export const Contacts = () => {
	const { title, description, contacts } = contactsSectionData;
	return (
		<>
			<Title contacts={true}>{title}</Title>
			<Description>
				{description.map((i, index) => (
					<DescriptionSpan key={index}>{i}</DescriptionSpan>
				))}
			</Description>
			<List>
				{contacts.map((i) => (
					<ItemList key={i.icon}>
						<Link href={i.link} target='_blank' rel='noopener noreferrer nofollow'>
							<svg width={24} height={24} style={{ marginRight: '8px' }}>
								<use xlinkHref={svgSprite + '#' + i.icon} />
							</svg>
							{i.title}
						</Link>
					</ItemList>
				))}
			</List>
		</>
	);
};
