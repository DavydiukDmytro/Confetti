import { AboutUsSection } from '../AboutUsSection';
import { Header } from '../Header';
import { Hero } from '../Hero';

export const App = () => {
	return (
		<>
			<Header />
			<main>
				<Hero />
				<AboutUsSection />
			</main>
		</>
	);
};
