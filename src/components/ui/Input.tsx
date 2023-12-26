import { Input as ChakraInput, IconButton, InputGroup, InputRightElement } from '@chakra-ui/react';
import SearchIcon from '@components/Icons/SearchIcon';
import { InputModel } from '@models/ui/input.model';

const Input = ({ size, inputGroupProps, rightIcon, rightIconBackground, ...rest }: InputModel) => {
  if (rightIcon) {
    return (
      <InputGroup>
        <ChakraInput data-peer {...rest} />
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
  return <ChakraInput {...rest} />;
};

export default Input;
