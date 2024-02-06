import { AboutUsSection } from '../AboutUsSection';
import { ContactsSection } from '../ContactsSection';
import { Header } from '../Header';
import { Hero } from '../Hero';
import { ReviewsSection } from '../ReviewsSection';

export const App = () => {
	return (
		<>
			<Header />
			<main>
				<Hero />
				<AboutUsSection />
				<ReviewsSection />
				<ContactsSection />
			</main>
		</>
	);
};
