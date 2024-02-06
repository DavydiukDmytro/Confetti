import { object, string } from 'yup';

const validationSchema = object().shape({
	name: string().required('Nieprawidłowe Іmię'),
	email: string().email('Nieprawidłowy email').required('Nieprawidłowy email'),
	message: string(),
});

export default validationSchema;
