'use client';

import { Link } from '@chakra-ui/next-js';
import { Button, Center, FormControl, FormErrorMessage, Heading, Stack, Text } from '@chakra-ui/react';
import Input from '@components/ui/Input';
import { Controller, useForm } from 'react-hook-form';

const Page = () => {
  const {
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Center flexDirection="column">
        <Heading fontSize="3xl" mb={2}>
          Login
        </Heading>
        <Text fontSize="sm" color="grey.default">
          Please login using account detail bellow.
        </Text>
        <Stack w="100%" spacing={4} mt={5} mb={5}>
          <FormControl isInvalid={errors.email?.message ? true : false}>
            <Controller
              name="email"
              defaultValue=""
              rules={{ required: 'Email field is required' }}
              control={control}
              render={({ field: { ref, ...field }, fieldState: { invalid, error } }) => {
                return (
                  <>
                    <Input {...field} placeholder="Email Address" isInvalid={invalid} errorBorderColor="crimson" />
                    {invalid && <FormErrorMessage color="crimson">{error?.message}</FormErrorMessage>}
                  </>
                );
              }}
            />
          </FormControl>
          <FormControl isInvalid={errors.password?.message ? true : false}>
            <Controller
              name="password"
              defaultValue=""
              rules={{ required: 'Password field is required' }}
              control={control}
              render={({ field: { ref, ...field }, fieldState: { invalid, error } }) => (
                <>
                  <Input {...field} placeholder="Password" isInvalid={invalid} errorBorderColor="crimson" />
                  {invalid && <FormErrorMessage color="crimson">{error?.message}</FormErrorMessage>}
                </>
              )}
            />
          </FormControl>
        </Stack>
        <Button backgroundColor="pink" color="white" w="100%" mt={5} type="submit">
          Login
        </Button>
        <Link href="/register" fontSize="sm" color="grey.default" mt={5}>
          Don’t have an Account? Create account
        </Link>
      </Center>
    </form>
  );
};

export default Page;
