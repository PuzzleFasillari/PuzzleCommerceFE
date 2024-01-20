'use client';

import { registerAction } from '@actions/user-actions';
import { Link } from '@chakra-ui/next-js';
import { Box, Button, Center, FormControl, FormErrorMessage, Heading, Stack, Text, useToast } from '@chakra-ui/react';
import Input from '@components/ui/Input';
import useYupValidationResolver from '@hooks/useYupValidationResolver';
import { RegisterRequestModel } from '@models/http/request/register-request.model';
import { registerValidationSchema } from '@utils/validation-schemas';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FiEye, FiEyeOff } from 'react-icons/fi';

const Page = () => {
  const [errorMessage, setErrorMessage] = useState<boolean>();
  const [showPassword, setShowPassword] = useState(false);
  const resolver = useYupValidationResolver(registerValidationSchema);
  const router = useRouter();
  const toast = useToast();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<RegisterRequestModel>({ resolver });

  const onShowPasswordChange = () => {
    setShowPassword(!showPassword);
  };
  const onSubmit = handleSubmit(async (data) => {
    try {
      await registerAction(data);
      toast({
        title: 'Account created.',
        description: "We've created your account.",
        status: 'success',
        duration: 4000,
        isClosable: true,
      });
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
            <Input placeholder="Email" {...register('email')} focusBorderColor="pink.400" />
            {errors.email && <FormErrorMessage color="crimson">{errors.email?.message}</FormErrorMessage>}
          </FormControl>
          <FormControl isInvalid={errors.username ? true : false}>
            <Input placeholder="Username" {...register('username')} focusBorderColor="pink.400" />
            {errors.username && <FormErrorMessage color="crimson">{errors.username?.message}</FormErrorMessage>}
          </FormControl>
          <FormControl isInvalid={errors.password ? true : false}>
            <Input
              placeholder="Password"
              type={showPassword ? 'text' : 'password'}
              focusBorderColor="pink.400"
              buttonHandleClick={onShowPasswordChange}
              rightIcon={showPassword ? <FiEyeOff /> : <FiEye />}
              {...register('password')}
            />
            {errors.password && <FormErrorMessage color="crimson">{errors.password?.message}</FormErrorMessage>}
          </FormControl>
        </Stack>
        <Button isLoading={isSubmitting} colorScheme="pink" w="100%" type="submit">
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
