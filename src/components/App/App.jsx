import logoPng from '../../assets/images/logo/logo.png';
import logoWebp from '../../assets/images/logo/logo.webp';

export const App = () => {
	return <img srcSet={`${logoWebp}, ${logoPng}`} src={logoPng} alt='Logo "Confetti"' width={104} />;
};
