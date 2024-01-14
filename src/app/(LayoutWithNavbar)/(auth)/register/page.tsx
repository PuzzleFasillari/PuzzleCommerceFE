'use client';

import { Link } from '@chakra-ui/next-js';
import { Box, Button, Center, FormControl, FormErrorMessage, Heading, Stack, Text } from '@chakra-ui/react';
import Input from '@components/ui/Input';
import useYupValidationResolver from '@hooks/useYupValidationResolver';
import { RegisterRequestModel } from '@models/http/request/register-request.model';
import { UserService } from '@service/user-service';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const Page = () => {
  const [errorMessage, setErrorMessage] = useState<boolean>();
  const validationSchema = yup.object({
    email: yup.string().required('Email field is required').email('Enter a valid mail address'),
    username: yup.string().min(3, 'Username should have at least 3 characters.').required('Username field is required'),
    password: yup.string().min(6, 'Password should have at least 6 characters.').required('Password field is required'),
  });
  const resolver = useYupValidationResolver(validationSchema);
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<RegisterRequestModel>({ resolver });

  const onSubmit = handleSubmit(async (data) => {
    try {
      await UserService.register(data);
      router.push('/login');
    } catch (error) {
      setErrorMessage(true);
    }
  });
  return (
    <form onSubmit={onSubmit}>
      <Center flexDirection="column">
        <Heading fontSize="3xl" mb={2}>
          Register
        </Heading>
        <Text fontSize="sm" color="grey.default">
          Create your PuzzleCommerce account
        </Text>
        {errorMessage && (
          <Box bg="tomato" w="100%" mt={5} p={4} color="white">
            <Text textAlign="center" fontWeight={600}>
              Username already exist.
            </Text>
          </Box>
        )}
        <Stack w="100%" spacing={4} mt={5} mb={5}>
          <FormControl isInvalid={errors.email ? true : false}>
            <Input placeholder="Email" {...register('email')} />
            {errors.email && <FormErrorMessage color="crimson">{errors.email?.message}</FormErrorMessage>}
          </FormControl>
          <FormControl isInvalid={errors.username ? true : false}>
            <Input placeholder="Username" {...register('username')} />
            {errors.username && <FormErrorMessage color="crimson">{errors.username?.message}</FormErrorMessage>}
          </FormControl>
          <FormControl isInvalid={errors.password ? true : false}>
            <Input placeholder="Password" type="password" {...register('password')} />
            {errors.password && <FormErrorMessage color="crimson">{errors.password?.message}</FormErrorMessage>}
          </FormControl>
        </Stack>
        <Button isLoading={isSubmitting} backgroundColor="pink" color="white" w="100%" type="submit">
          Sign Up
        </Button>
        <Link href="/login" fontSize="sm" color="grey.default" mt={5}>
          Do you have an Account? Sign in
        </Link>
      </Center>
    </form>
  );
};

export default Page;
