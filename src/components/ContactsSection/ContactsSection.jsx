import { Container } from '../Container';
import { Section } from '../Section';
import { Contacts } from './Contacts';
import { Feedback } from './Feedback';

export const ContactsSection = () => {
	return (
		<Section id={'contacts'}>
			<Container last={true}>
				<Contacts />
				<Feedback />
			</Container>
		</Section>
	);
};
