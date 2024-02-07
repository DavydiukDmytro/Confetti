import PropTypes from 'prop-types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import svgSprite from '../../assets/svg/svgSprite.svg';
import './customStyleSlider.css';
import { useMediaQuery } from 'react-responsive';
import { useEffect, useRef, useState } from 'react';
import { Button, ButtonContainer } from './Slider.styled';

export const SliderCard = ({ sumSlide, children }) => {
	let sliderRef = useRef(null);
	const [slideToShow, setSlideToShow] = useState(1);
	const [navigateToSlide, setNavigateToSlide] = useState(true);
	const isTablet = useMediaQuery({ minWidth: 768 });
	const isLaptop = useMediaQuery({ minWidth: 1280 });

	useEffect(() => {
		if (isLaptop) {
			setSlideToShow(3);
		} else if (isTablet) {
			setSlideToShow(2);
		} else {
			setSlideToShow(1);
		}

		if (sumSlide <= slideToShow) {
			setNavigateToSlide(false);
		} else {
			setNavigateToSlide(true);
		}
	}, [isLaptop, isTablet, slideToShow, sumSlide]);

	const next = () => {
		sliderRef.slickNext();
	};

	const previous = () => {
		sliderRef.slickPrev();
	};

	const settings = {
		arrows: false,
		dots: isTablet ? false : true,
		infinite: true,
		speed: 500,
		slidesToShow: slideToShow,
		slidesToScroll: 1,
		dotsClass: 'list-dots',
		swipe: navigateToSlide,

		customPaging: () => <button type='button' aria-label='Next slide'></button>,
	};

	return (
		<>
			<Slider
				style={{ marginBottom: isTablet && navigateToSlide ? '48px' : '0' }}
				ref={(slider) => {
					sliderRef = slider;
				}}
				{...settings}
			>
				{children}
			</Slider>
			{isTablet && navigateToSlide && (
				<ButtonContainer>
					<Button type='button' onClick={previous} aria-label='Previous slide'>
						<svg width={24} height={24}>
							<use xlinkHref={svgSprite + '#icon-arrow-left'} />
						</svg>
					</Button>
					<Button type='button' onClick={next} aria-label='Next slide'>
						<svg width={24} height={24}>
							<use xlinkHref={svgSprite + '#icon-arrow-right'} />
						</svg>
					</Button>
				</ButtonContainer>
			)}
		</>
	);
};

SliderCard.propTypes = {
	sumSlide: PropTypes.number,
	children: PropTypes.node.isRequired,
};
