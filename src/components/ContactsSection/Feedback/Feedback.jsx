import ballons1 from '../../../assets/images/ballons/ballons1.png';
import ballons2 from '../../../assets/images/ballons/ballons2.png';
import { useFormik } from 'formik';
import validationSchema from '../../../utils/schema/svhema';
import { Alert } from '../../Alert';
import {
	Button,
	ErrorText,
	Form,
	GroupContainer,
	Img,
	Img2,
	Input,
	Label,
	Textarea,
} from './Feedback.styled';
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';

export const Feedback = () => {
	const isTablet = useMediaQuery({ minWidth: 768 });
	const [isSend, setIsSend] = useState(false);

	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
			message: '',
		},
		validationSchema: validationSchema,
		onSubmit: () => {
			setIsSend(true);
		},
	});
	return (
		<Form onSubmit={formik.handleSubmit}>
			{isTablet && <Img src={ballons1} alt='Ballons' width={412} loading='lazy' />}
			<GroupContainer aria-labelledby='name'>
				<Label htmlFor='name'>Imię*</Label>
				<Input
					id='name'
					name='name'
					type='text'
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.name}
					placeholder='Imię'
					required
					error={formik.touched.name && formik.errors.name}
				/>
				{formik.touched.name && formik.errors.name && <ErrorText>{formik.errors.name}</ErrorText>}
			</GroupContainer>
			<GroupContainer aria-labelledby='email'>
				<Label htmlFor='email'>E-mail*</Label>
				<Input
					id='email'
					name='email'
					type='email'
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.email}
					placeholder='mail@gmail.com'
					required
					error={formik.touched.email && formik.errors.email}
				/>
				{formik.touched.email && formik.errors.email && (
					<ErrorText>{formik.errors.email}</ErrorText>
				)}
			</GroupContainer>

			<Label htmlFor='message'>Wiadomość</Label>
			<Textarea
				id='message'
				name='message'
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				value={formik.values.message}
				placeholder='Twoja wiadomość...'
			/>

			<Button type='submit' disabled={!formik.isValid}>
				Wyślij
			</Button>
			{isTablet && <Img2 src={ballons2} alt='Ballons' width={343} loading='lazy' />}
			{isSend && <Alert data={formik.values} close={() => setIsSend(false)} />}
		</Form>
	);
};
