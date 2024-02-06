import { useFormik } from 'formik';
import validationSchema from '../../../utils/schema/svhema';
import { Button, ErrorText, Form, GroupContainer, Input, Label, Textarea } from './Feedback.styled';

export const Feedback = () => {
	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
			message: '',
		},
		validationSchema: validationSchema,
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		},
	});
	return (
		<Form onSubmit={formik.handleSubmit}>
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
				type='text'
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				value={formik.values.message}
				placeholder='Twoja wiadomość...'
			/>

			<Button type='submit'>Wyślij</Button>
		</Form>
	);
};
