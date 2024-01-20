import * as yup from 'yup';

export const loginValidationSchema = yup.object({
  username: yup.string().min(3, 'Username should have at least 3 characters.').required('Username field is required'),
  password: yup.string().min(6, 'Password should have at least 6 characters.').required('Password field is required'),
});

export const registerValidationSchema = yup.object({
  email: yup.string().required('Email field is required').email('Enter a valid mail address'),
  username: yup.string().min(3, 'Username should have at least 3 characters.').required('Username field is required'),
  password: yup.string().min(6, 'Password should have at least 6 characters.').required('Password field is required'),
});

export const addProductValidationSchema = yup.object({
  name: yup.string().required('Name field is required'),
  type: yup.string().required('Type field is required'),
  difficultyLevel: yup.string().required('Difficulty level field is required'),
  material: yup.string().required('Material field is required'),
  theme: yup.string().required('Theme field is required'),
  size: yup.number().typeError('Size field is required'),
  price: yup.number().typeError('Price field is required'),
  ageGroup: yup.string().required('Age group field is required'),
  description: yup.string().required('Description field is required'),
  file: yup.mixed().required('Product image is required'),
});
