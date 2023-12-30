import { InputProps } from '@nextui-org/react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

export interface InputModel extends InputProps {
  rightIcon?: JSX.Element;
  rightIconBackground?: string;
  control?: UseFormRegister<FieldValues>;
}
