import useYupValidationResolver from '@hooks/useYupValidationResolver';
import { FormProps } from '@models/ui/form/form.model';
import { FieldValues, useForm } from 'react-hook-form';

const Form = <TFormValues extends FieldValues>({ onSubmit, children, validationSchema }: FormProps<TFormValues>) => {
  const resolver = useYupValidationResolver(validationSchema);
  const methods = useForm<TFormValues>({ resolver });
  return <form onSubmit={methods.handleSubmit(onSubmit)}>{children(methods)}</form>;
};

export default Form;
