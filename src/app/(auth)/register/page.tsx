'use client';

import { useForm } from 'react-hook-form';

const Page = () => {
  const {
    handleSubmit,
    watch,
    control,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* <Center flexDirection="column">
        <Heading fontSize="3xl" mb={2}>
          Register
        </Heading>
        <Text fontSize="sm" color="grey.default">
          Create your PuzzleCommerce account
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
          <FormControl isInvalid={errors.username?.message ? true : false}>
            <Controller
              name="username"
              defaultValue=""
              rules={{ required: 'Username field is required' }}
              control={control}
              render={({ field: { ref, ...field }, fieldState: { invalid, error } }) => {
                return (
                  <>
                    <Input {...field} placeholder="Username" isInvalid={invalid} errorBorderColor="crimson" />
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
                  <Input
                    type="password"
                    {...field}
                    placeholder="Password"
                    isInvalid={invalid}
                    errorBorderColor="crimson"
                  />
                  {invalid && <FormErrorMessage color="crimson">{error?.message}</FormErrorMessage>}
                </>
              )}
            />
          </FormControl>
        </Stack>
        <Button backgroundColor="pink" color="white" w="100%" mt={5} type="submit">
          Sign Up
        </Button>
        <Link href="/login" fontSize="sm" color="grey.default" mt={5}>
          Do you have an Account? Sign in
        </Link>
      </Center> */}
    </form>
  );
};

export default Page;
