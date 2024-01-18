'use client';
import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Link,
  Select,
  Stack,
  Text,
  Textarea,
  useToast,
} from '@chakra-ui/react';
import ImageUpload from '@components/ui/ImageUpload';
import useYupValidationResolver from '@hooks/useYupValidationResolver';
import { CreatePuzzleFormModel } from '@models/ui/create-puzzle-form-model';
import {
  AGE_GROUPS,
  DIFFICULTY_LEVELS,
  PUZZLE_MATERIALS,
  PUZZLE_SIZES,
  PUZZLE_THEMES,
  PUZZLE_TYPES,
} from '@statics/product.static';
import { addProductValidationSchema } from '@utils/validation-schemas';
import Compressor from 'compressorjs';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useState } from 'react';
import { useForm } from 'react-hook-form';

export default function Page() {
  const [image, setImage] = useState<Blob | File | null>(null);
  const [imageIsLoading, setImageIsLoading] = useState(false);
  const router = useRouter();
  const resolver = useYupValidationResolver(addProductValidationSchema);
  const {
    handleSubmit,
    register,
    resetField,
    formState: { errors, isSubmitting },
  } = useForm<CreatePuzzleFormModel>({ resolver });

  const toast = useToast();

  const processImage = async (file: File) => {
    setImageIsLoading(true);
    new Compressor(file, {
      quality: 0.8,
      success(result) {
        setImage(result);
        setImageIsLoading(false);
      },
    });
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
      const formData = new FormData();
      let product_data = {
        name: data.name,
        type: data.type,
        difficultyLevel: data.difficultyLevel,
        material: data.material,
        theme: data.theme,
        size: data.size,
        price: data.price,
        ageGroup: data.ageGroup,
        description: data.description,
      };
      formData.append('puzzle_data', JSON.stringify(product_data));
      if (image) {
        formData.append('file', image, (image as File).name);
      }
      try {
        console.log(formData.get('file'));
        // await ProductService.createProduct(formData);
      } catch (error) {
        throw new Error(`${error}`);
      }
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <form onSubmit={onSubmit}>
      <Center flexDirection="column">
        <Box w="3xl" boxShadow="2xl" px="10" py={10} rounded="md">
          <Heading fontSize="3xl" mb={2}>
            Add Your Product
          </Heading>
          <Text fontSize="sm" color="grey.default">
            Please add your product using inputs below.
          </Text>
          <Stack w="100%" spacing={4} mt={5} mb={5}>
            <FormControl isInvalid={errors.name ? true : false}>
              <Input focusBorderColor="pink.400" placeholder="Name" {...register('name')} />
              {errors.name && <FormErrorMessage color="crimson">{errors.name?.message}</FormErrorMessage>}
            </FormControl>
            <Flex gap={4}>
              <FormControl isInvalid={errors.type ? true : false}>
                <Stack spacing={3}>
                  <Select
                    focusBorderColor="pink.400"
                    placeholder="Puzzle types"
                    variant="outline"
                    {...register('type')}
                  >
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
                  <Select
                    focusBorderColor="pink.400"
                    placeholder="Difficulty Levels"
                    variant="outline"
                    {...register('difficultyLevel')}
                  >
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
                  <Select
                    focusBorderColor="pink.400"
                    placeholder="Puzzle Material"
                    variant="outline"
                    {...register('material')}
                  >
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
                  <Select
                    focusBorderColor="pink.400"
                    placeholder="Puzzle Theme"
                    variant="outline"
                    {...register('theme')}
                  >
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
                  <Select
                    focusBorderColor="pink.400"
                    placeholder="Puzzle Sizes"
                    variant="outline"
                    {...register('size')}
                  >
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
                <Input focusBorderColor="pink.400" placeholder="Price" {...register('price')} type="number" />
                {errors.price && <FormErrorMessage color="crimson">{errors.price?.message}</FormErrorMessage>}
              </FormControl>
            </Flex>
            <FormControl isInvalid={errors.ageGroup ? true : false}>
              <Stack spacing={3}>
                <Select
                  focusBorderColor="pink.400"
                  placeholder="Age Groups"
                  variant="outline"
                  {...register('ageGroup')}
                >
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
              <Textarea focusBorderColor="pink.400" placeholder="Description" {...register('description')} />
              {errors.description && <FormErrorMessage color="crimson">{errors.description?.message}</FormErrorMessage>}
            </FormControl>
            <FormControl isInvalid={errors.file ? true : false} w="100%" h={320}>
              <FormLabel>Upload Product Image</FormLabel>
              <ImageUpload
                previewImage={image && !imageIsLoading ? image : null}
                onImageUpload={uploadImage}
                register={register}
                name="file"
              />
              {errors.file && <FormErrorMessage>{errors.file?.message}</FormErrorMessage>}
            </FormControl>
          </Stack>
          <Button isLoading={isSubmitting || imageIsLoading} colorScheme="pink" mt={10} w="100%" type="submit">
            Create Product
          </Button>
          <Link href="/" w="100%">
            <Button color="black" variant="ghost" type="button" w="100%" mt={5}>
              Back
            </Button>
          </Link>
        </Box>
      </Center>
    </form>
  );
}
