import { InputGroupProps, InputProps } from '@chakra-ui/react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

export interface InputModel extends InputProps {
  rightIcon?: JSX.Element;
  rightIconBackground?: string;
  inputGroupProps?: InputGroupProps;
  control?: UseFormRegister<FieldValues>;
}
