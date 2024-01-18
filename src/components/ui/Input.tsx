'use client';

import { Input as ChakraInput, IconButton, InputGroup, InputRightElement } from '@chakra-ui/react';
import { InputModel } from '@models/ui/input.model';
import { Ref, forwardRef } from 'react';

const Input = (
  { size, inputGroupProps, rightIcon, rightIconBackground, buttonHandleClick, ...rest }: InputModel,
  ref: Ref<HTMLInputElement>,
) => {
  if (rightIcon) {
    return (
      <InputGroup>
        <ChakraInput data-peer {...rest} ref={ref} />
        <InputRightElement>
          <IconButton
            size="sm"
            colorScheme="pink"
            variant="ghost"
            aria-label="search button"
            icon={rightIcon}
            onClick={buttonHandleClick}
          />
        </InputRightElement>
      </InputGroup>
    );
  }
  return <ChakraInput ref={ref} {...rest} />;
};

export default forwardRef(Input);
