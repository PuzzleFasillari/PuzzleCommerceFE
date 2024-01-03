'use client';

import { Input as ChakraInput, IconButton, InputGroup, InputRightElement } from '@chakra-ui/react';
import SearchIcon from '@components/Icons/SearchIcon';
import { InputModel } from '@models/ui/input.model';
import { Ref, forwardRef } from 'react';

const Input = (
  { size, inputGroupProps, rightIcon, rightIconBackground, ...rest }: InputModel,
  ref: Ref<HTMLInputElement>,
) => {
  if (rightIcon) {
    return (
      <InputGroup>
        <ChakraInput data-peer {...rest} ref={ref} />
        <InputRightElement>
          <IconButton
            backgroundColor={rightIconBackground && rightIconBackground}
            aria-label="search button"
            icon={<SearchIcon />}
          />
        </InputRightElement>
      </InputGroup>
    );
  }
  return <ChakraInput ref={ref} {...rest} />;
};

export default forwardRef(Input);
