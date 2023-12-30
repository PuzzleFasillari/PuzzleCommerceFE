import SearchIcon from '@components/Icons/SearchIcon';
import { InputModel } from '@models/ui/input.model';
import { Button, Input as NextInput } from '@nextui-org/react';
import { Ref, forwardRef } from 'react';

const Input = ({ rightIcon, rightIconBackground, ...rest }: InputModel, ref: Ref<HTMLInputElement>) => {
  if (rightIcon) {
    return (
      <div className="w-max">
        <NextInput
          {...rest}
          ref={ref}
          endContent={
            <Button
              isIconOnly
              className={rightIconBackground && `bg-${rightIconBackground}`}
              aria-label="search button"
            >
              <SearchIcon />
            </Button>
          }
        />
      </div>
    );
  }
  return <NextInput ref={ref} {...rest} />;
};

export default forwardRef(Input);
