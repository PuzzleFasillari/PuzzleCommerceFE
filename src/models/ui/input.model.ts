import { InputGroupProps, InputProps } from '@chakra-ui/react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

export interface InputModel extends InputProps {
  rightIcon?: JSX.Element;
  rightIconBackground?: string;
  inputGroupProps?: InputGroupProps;
  buttonHandleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  control?: UseFormRegister<FieldValues>;
}
