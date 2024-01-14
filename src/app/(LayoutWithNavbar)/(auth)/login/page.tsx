'use client';

import { loginAction } from '@actions/user-actions';
import { Link } from '@chakra-ui/next-js';
import { Box, Button, Center, FormControl, FormErrorMessage, Heading, Stack, Text } from '@chakra-ui/react';
import Input from '@components/ui/Input';
import useYupValidationResolver from '@hooks/useYupValidationResolver';
import { LoginRequestModel } from '@models/http/request/login-request.model';
import { loginValidationSchema } from '@utils/validation-schemas';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const Page = () => {
  const [errorMessage, setErrorMessage] = useState<boolean>();
  const router = useRouter();
  const resolver = useYupValidationResolver(loginValidationSchema);
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<LoginRequestModel>({ resolver });

  const onSubmit = handleSubmit(async (data) => {
    try {
      await loginAction(data);
      router.push('/');
    } catch (error) {
      setErrorMessage(true);
    }
  });

  return (
    <form onSubmit={onSubmit}>
      <Center flexDirection="column">
        <Heading fontSize="3xl" mb={2}>
          Login
        </Heading>
        <Text fontSize="sm" color="grey.default">
          Please login using account detail bellow.
        </Text>
        {errorMessage && (
          <Box bg="tomato" w="100%" mt={5} p={4} color="white">
            <Text textAlign="center" fontWeight={600}>
              Email or password is wrong !
            </Text>
          </Box>
        )}
        <Stack w="100%" spacing={4} mt={5} mb={5}>
          <Stack w="100%" spacing={4} mt={5} mb={5}>
            <FormControl isInvalid={errors.username ? true : false}>
              <Input placeholder="Username" {...register('username')} />
              {errors.username && <FormErrorMessage color="crimson">{errors.username?.message}</FormErrorMessage>}
            </FormControl>
            <FormControl isInvalid={errors.password ? true : false}>
              <Input placeholder="Password" type="password" {...register('password')} />
              {errors.password && <FormErrorMessage color="crimson">{errors.password?.message}</FormErrorMessage>}
            </FormControl>
          </Stack>
        </Stack>
        <Button isLoading={isSubmitting} backgroundColor="pink" color="white" w="100%" type="submit">
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
