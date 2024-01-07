import { FieldValues, SubmitHandler, UseFormReturn } from 'react-hook-form';
import * as yup from 'yup';

export type FormProps<TFormValues extends FieldValues> = {
  onSubmit: SubmitHandler<TFormValues>;
  children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
  validationSchema: ReturnType<typeof yup.object>;
};
