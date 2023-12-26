import { InputGroupProps, InputProps } from '@chakra-ui/react';

export interface InputModel extends InputProps {
  rightIcon?: JSX.Element;
  rightIconBackground?: string;
  inputGroupProps?: InputGroupProps;
}
