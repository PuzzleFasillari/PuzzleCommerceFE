import { FieldErrors, FieldPath, FieldValues, UseControllerProps } from 'react-hook-form';

export interface FormItemModel<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>>
  extends UseControllerProps<TFieldValues, TName> {
  children: any;
  errors: FieldErrors<TFieldValues>;
}
