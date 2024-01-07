import { FormControl, FormErrorMessage } from '@chakra-ui/react';
import { FormItemModel } from '@models/ui/form/form-item.model';
import { Controller, FieldPath, FieldValues } from 'react-hook-form';

const FormItem = <TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>({
  control,
  defaultValue,
  name,
  errors,
  children,
}: FormItemModel<TFieldValues, TName>) => {
  return (
    <FormControl isInvalid={errors[name]?.message ? true : false}>
      <Controller
        name={name}
        defaultValue={defaultValue}
        control={control}
        render={({ field: { ref, ...field }, fieldState: { invalid, error } }) => {
          return (
            <>
              {children}
              {invalid && <FormErrorMessage color="crimson">{error?.message}</FormErrorMessage>}
            </>
          );
        }}
      />
    </FormControl>
  );
};

export default FormItem;
