'use client';
import {
  Button,
  Center,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Progress,
  Select,
  Stack,
  Text,
  Textarea,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import ImageUpload from '@components/ui/ImageUpload';
import useYupValidationResolver from '@hooks/useYupValidationResolver';
import { CreateProductRequestModel } from '@models/http/request/add-product-request.model';
import {
  AGE_GROUPS,
  DIFFICULTY_LEVELS,
  PUZZLE_MATERIALS,
  PUZZLE_SIZES,
  PUZZLE_THEMES,
  PUZZLE_TYPES,
} from '@statics/product.static';
import { ChangeEvent, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

export default function AddProduct() {
  const [isLoading, setIsLoading] = useState<boolean>();
  const [image, setImage] = useState<Blob | null>(null);
  const [errorMessage, setErrorMessage] = useState<boolean>();
  const validationSchema = yup.object({
    name: yup.string().required('Name field is required'),
    type: yup.string().required('Type field is required'),
    difficultyLevel: yup.string().required('Difficulty level field is required'),
    material: yup.string().required('Material field is required'),
    theme: yup.string().required('Theme field is required'),
    size: yup.string().required('Size field is required'),
    price: yup.string().required('Price field is required'),
    ageGroup: yup.string().required('Age group field is required'),
    description: yup.string().required('Description field is required'),
    file: yup.string().required('Product image is required'),
  });
  const resolver = useYupValidationResolver(validationSchema);
  const {
    handleSubmit,
    register,
    resetField,
    formState: { errors, isSubmitting },
  } = useForm<CreateProductRequestModel>({ resolver });

  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const processImage = async (file: File) => {
    const blob = new Blob([file], { type: 'image/png' });
    let fileReq = new File([blob], file.name);
    setIsLoading(true);
    try {
      let req = {
        file: fileReq,
      };
      // const response = await DetectionService.boneAgeProcess(req);
      toast({
        title: 'Success',
        // description: response.message,
        status: 'success',
        duration: 4000,
        isClosable: true,
        position: 'top-right',
      });
      setImage(blob);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      toast({
        title: 'Error',
        description: 'Something went wrong.',
        status: 'error',
        duration: 4000,
        isClosable: true,
        position: 'top-right',
      });
      resetField('file');
      setImage(null);
      setIsLoading(false);
    }
  };

  const uploadImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length === 0) {
      return;
    }
    if (e.target.files && e.target.files?.length > 0) {
      let file = e.target.files[0];
      processImage(file);
    }
  };

  const onSubmit = handleSubmit(async (data) => {
    try {
      // await UserService.register(data);
    } catch (error) {
      setErrorMessage(true);
    }
  });
  return (
    <form onSubmit={onSubmit}>
      <Center flexDirection="column">
        <Heading fontSize="3xl" mb={2}>
          Add Your Product
        </Heading>
        <Text fontSize="sm" color="grey.default">
          Please add your product using inputs below.
        </Text>
        <Stack w="100%" spacing={4} mt={5} mb={5}>
          <FormControl isInvalid={errors.name ? true : false}>
            <Input placeholder="Name" {...register('name')} />
            {errors.name && <FormErrorMessage color="crimson">{errors.name?.message}</FormErrorMessage>}
          </FormControl>
          <Flex gap={4}>
            <FormControl isInvalid={errors.type ? true : false}>
              <Stack spacing={3}>
                <Select placeholder="Puzzle types" variant="outline">
                  {PUZZLE_TYPES.map((item, key) => (
                    <option key={key} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </Select>
              </Stack>
              {errors.type && <FormErrorMessage color="crimson">{errors.type?.message}</FormErrorMessage>}
            </FormControl>
            <FormControl isInvalid={errors.difficultyLevel ? true : false}>
              <Stack spacing={3}>
                <Select placeholder="Difficulty Levels" variant="outline">
                  {DIFFICULTY_LEVELS.map((item, key) => (
                    <option key={key} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </Select>
              </Stack>
              {errors.difficultyLevel && (
                <FormErrorMessage color="crimson">{errors.difficultyLevel?.message}</FormErrorMessage>
              )}
            </FormControl>
          </Flex>
          <Flex gap={4}>
            <FormControl isInvalid={errors.material ? true : false}>
              <Stack spacing={3}>
                <Select placeholder="Puzzle Material" variant="outline">
                  {PUZZLE_MATERIALS.map((item, key) => (
                    <option key={key} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </Select>
              </Stack>
              {errors.material && <FormErrorMessage color="crimson">{errors.material?.message}</FormErrorMessage>}
            </FormControl>
            <FormControl isInvalid={errors.theme ? true : false}>
              <Stack spacing={3}>
                <Select placeholder="Puzzle Theme" variant="outline">
                  {PUZZLE_THEMES.map((item, key) => (
                    <option key={key} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </Select>
              </Stack>
              {errors.theme && <FormErrorMessage color="crimson">{errors.theme?.message}</FormErrorMessage>}
            </FormControl>
          </Flex>
          <Flex gap={4}>
            <FormControl isInvalid={errors.size ? true : false}>
              <Stack spacing={3}>
                <Select placeholder="Puzzle Sizes" variant="outline">
                  {PUZZLE_SIZES.map((item, key) => (
                    <option key={key} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </Select>
              </Stack>
              {errors.size && <FormErrorMessage color="crimson">{errors.size?.message}</FormErrorMessage>}
            </FormControl>
            <FormControl isInvalid={errors.price ? true : false}>
              <Input placeholder="Price" {...register('price')} type="number" />
              {errors.price && <FormErrorMessage color="crimson">{errors.price?.message}</FormErrorMessage>}
            </FormControl>
          </Flex>
          <FormControl isInvalid={errors.ageGroup ? true : false}>
            <Stack spacing={3}>
              <Select placeholder="Age Groups" variant="outline">
                {AGE_GROUPS.map((item, key) => (
                  <option key={key} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </Select>
            </Stack>
            {errors.ageGroup && <FormErrorMessage color="crimson">{errors.ageGroup?.message}</FormErrorMessage>}
          </FormControl>
          <FormControl isInvalid={errors.description ? true : false}>
            <Textarea placeholder="Description" {...register('description')} />
            {errors.description && <FormErrorMessage color="crimson">{errors.description?.message}</FormErrorMessage>}
          </FormControl>
          <FormControl isInvalid={errors.file ? true : false} w="100%" h={160}>
            <FormLabel>Upload Product Image</FormLabel>
            <ImageUpload
              previewImage={image && !isLoading ? image : null}
              onImageUpload={uploadImage}
              register={register}
              name="file"
            />
            {isLoading && <Progress size="xs" isIndeterminate />}
            {errors.file && <FormErrorMessage>{errors.file?.message}</FormErrorMessage>}
          </FormControl>
        </Stack>
        <Button isLoading={isSubmitting} backgroundColor="pink" mt={10} color="white" w="100%" type="submit">
          Create Product
        </Button>
        <Button backgroundColor="pink.200" color="black" type="button" w="100%" mt={5}>
          Back
        </Button>
      </Center>
    </form>
  );
}
