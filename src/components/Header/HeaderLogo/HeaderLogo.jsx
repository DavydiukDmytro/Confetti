import logoPng from '../../../assets/images/logo/logo.png';
import logoWebp from '../../../assets/images/logo/logo.webp';

export const HeaderLogo = () => {
	return (
		<img
			srcSet={`${logoWebp}, ${logoPng}`}
			src={logoPng}
			alt='Logo "Confetti"'
			width={104}
			role='image'
		/>
	);
};
