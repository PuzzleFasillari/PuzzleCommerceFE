import * as yup from 'yup';

export const registerValidationSchema = yup.object({
  email: yup.string().required('Email field is required').email('Enter a valid mail address'),
  username: yup.string().min(3, 'Username should have at least 3 characters.').required('Username field is required'),
  password: yup.string().min(6, 'Password should have at least 6 characters.').required('Password field is required'),
});
export const loginValidationSchema = yup.object({
  username: yup.string().required('Username field is required'),
  password: yup.string().required('Password field is required'),
});
