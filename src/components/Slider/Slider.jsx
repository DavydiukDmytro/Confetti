import PropTypes from 'prop-types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './customStyleSlider.css';

export const SliderCard = ({ children }) => {
	const settings = {
		arrows: false,
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		dotsClass: 'list-dots',
		customPaging: () => <button type='button' aria-label='Next slide'></button>,
	};

	return <Slider {...settings}>{children}</Slider>;
};

SliderCard.propTypes = {
	children: PropTypes.node.isRequired,
};
