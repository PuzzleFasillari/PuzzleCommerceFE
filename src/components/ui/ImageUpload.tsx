import { AspectRatio, Box, Center, Heading, Input, Stack, Text } from '@chakra-ui/react';
import { CreateProductRequestModel } from '@models/http/request/add-product-request.model';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { UseFormRegister } from 'react-hook-form';

interface ImageUploadProps {
  onImageUpload: React.ChangeEventHandler<HTMLInputElement>;
  previewImage: Blob | null;
  register?: UseFormRegister<CreateProductRequestModel>;
  name: string;
}

const ImageUpload = ({ previewImage, onImageUpload, register, name }: ImageUploadProps) => {
  const controls = useAnimation();
  const startAnimation = () => controls.start('hover');
  const stopAnimation = () => controls.stop();
  return (
    <Center w="100%" h="100%">
      <Box
        borderColor="gray.300"
        borderStyle="dashed"
        borderWidth="2px"
        rounded="md"
        h="100%"
        w="100%"
        shadow="sm"
        role="group"
        transition="all 150ms ease-in-out"
        _hover={{
          shadow: 'md',
        }}
        as={motion.div}
        initial="rest"
        animate="rest"
        whileHover="hover"
      >
        <Box position="relative" height="100%" width="100%">
          <Box position="absolute" top="0" left="0" height="100%" width="100%" display="flex" flexDirection="column">
            <Stack height="100%" width="100%" display="flex" alignItems="center" justify="center" spacing="4">
              <Stack p="8" textAlign="center" spacing="1" alignItems="center">
                {previewImage && (
                  <AspectRatio maxW="400px" w="160px" ratio={9 / 16}>
                    <Image src={URL.createObjectURL(previewImage)} alt="naruto" width={100} height={100} />
                  </AspectRatio>
                )}
                {!previewImage ? (
                  <>
                    <Heading fontSize="lg" color="gray.700" fontWeight="bold">
                      Drop product image here
                    </Heading>
                    <Text fontWeight="light">or click to upload</Text>
                  </>
                ) : (
                  <Heading fontSize="lg" color="gray.700" fontWeight="bold">
                    Image has been uploaded
                  </Heading>
                )}
              </Stack>
            </Stack>
          </Box>
          <Input
            type="file"
            height="100%"
            width="100%"
            position="absolute"
            cursor="pointer"
            top="0"
            left="0"
            opacity="0"
            aria-hidden="true"
            accept="image/*"
            {...register}
            onDragEnter={startAnimation}
            onDragLeave={stopAnimation}
            onChange={onImageUpload}
          />
        </Box>
      </Box>
    </Center>
  );
};

export default ImageUpload;
