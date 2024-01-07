'use client';

import { Link } from '@chakra-ui/next-js';
import { Box, Button, Center, Heading, Stack, Text } from '@chakra-ui/react';
import Form from '@components/ui/form/Form';
import FormItem from '@components/ui/form/FormItem';
import Input from '@components/ui/Input';
import { RegisterRequestModel } from '@models/http/request/register-request.model';
import { UserService } from '@services/user-service';
import { registerValidationSchema } from '@utils/yup-validation-schemas';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const Page = () => {
  const [errorMessage, setErrorMessage] = useState<boolean>();
  const router = useRouter();

  const onSubmit = async (data: RegisterRequestModel) => {
    try {
      await UserService.register(data);
      router.push('/login');
    } catch (error) {
      setErrorMessage(true);
    }
  };
  return (
    <Form<RegisterRequestModel> onSubmit={onSubmit} validationSchema={registerValidationSchema}>
      {({ control, formState: { errors, isSubmitting } }) => (
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
            <FormItem<RegisterRequestModel> control={control} defaultValue="" name="email" errors={errors}>
              <Input placeholder="Email Address" errorBorderColor="crimson" />
            </FormItem>
            <FormItem<RegisterRequestModel> control={control} defaultValue="" name="username" errors={errors}>
              <Input placeholder="Username" errorBorderColor="crimson" />
            </FormItem>
            <FormItem<RegisterRequestModel> control={control} defaultValue="" name="password" errors={errors}>
              <Input placeholder="Password" errorBorderColor="crimson" />
            </FormItem>
          </Stack>
          <Button backgroundColor="pink" color="white" w="100%" mt={5} type="submit">
            Sign Up
          </Button>
          <Link href="/login" fontSize="sm" color="grey.default" mt={5}>
            Do you have an Account? Sign in
          </Link>
        </Center>
      )}
    </Form>
  );
};

export default Page;
