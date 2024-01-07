'use client';

import { Link } from '@chakra-ui/next-js';
import { Box, Button, Center, Heading, Stack, Text } from '@chakra-ui/react';
import Input from '@components/ui/Input';
import Form from '@components/ui/form/Form';
import FormItem from '@components/ui/form/FormItem';
import { LoginRequestModel } from '@models/http/request/login-request.model';
import { UserService } from '@services/user-service';
import { loginValidationSchema } from '@utils/yup-validation-schemas';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const Page = () => {
  const [errorMessage, setErrorMessage] = useState<boolean>();
  const router = useRouter();

  const onSubmit = async (data: LoginRequestModel) => {
    console.log(data);
    try {
      await UserService.login(data);
      router.push('/');
    } catch (error) {
      setErrorMessage(true);
    }
  };

  return (
    <Form<LoginRequestModel> onSubmit={onSubmit} validationSchema={loginValidationSchema}>
      {({ control, formState: { errors, isSubmitting } }) => (
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
            <FormItem<LoginRequestModel> control={control} defaultValue="" name="username" errors={errors}>
              <Input placeholder="Username" errorBorderColor="crimson" />
            </FormItem>
            <FormItem<LoginRequestModel> control={control} defaultValue="" name="password" errors={errors}>
              <Input placeholder="Password" errorBorderColor="crimson" />
            </FormItem>
          </Stack>
          <Button backgroundColor="pink" color="white" w="100%" mt={5} type="submit">
            Login
          </Button>
          <Link href="/register" fontSize="sm" color="grey.default" mt={5}>
            Don’t have an Account? Create account
          </Link>
        </Center>
      )}
    </Form>
  );
};

export default Page;
