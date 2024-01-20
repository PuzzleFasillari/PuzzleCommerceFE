import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  ButtonGroup,
  Center,
  Divider,
  Heading,
  IconButton,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import { ProductService } from '@service/product-service';
import { capitalizeFirstLetter } from '@utils/string-util';
import { FiHeart } from 'react-icons/fi';

export default async function Page({ params }: { params: { pid: string } }) {
  const { pid } = params;
  const productData = await ProductService.getProduct(pid);
  return (
    <Center flexDirection="column" alignItems="flex-start" p={10}>
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink>Product Detail</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Stack direction="row" w="100%" py={4}>
        <Image src={productData.imageUrl} alt={'product-image-' + pid} w="lg" />
        <Stack w="100%">
          <Heading fontSize="xl">{productData.name}</Heading>
          <Text color="pink.400" fontWeight={600} fontSize="xl">
            ${productData.price}
          </Text>
          <Divider my={2} />
          <ButtonGroup w="100%">
            <Button w="100%" colorScheme="pink">
              Add to Cart
            </Button>
            <IconButton isRound={true} aria-label="Fav" _hover={{ color: 'red' }} fontSize="20px" icon={<FiHeart />} />
          </ButtonGroup>
          <Heading mt={4} fontSize="md">
            Product Details
          </Heading>
          <Stack direction="row" mt={1}>
            <Box backgroundColor="#f5f5f5" p={2} w={100} borderRadius={4}>
              <Text fontSize="sm">Material</Text>
              <Heading fontSize="sm">{capitalizeFirstLetter(productData.material)}</Heading>
            </Box>
            <Box backgroundColor="#f5f5f5" p={2} w={100} borderRadius={4}>
              <Text fontSize="sm">Size</Text>
              <Heading fontSize="sm">{productData.size}</Heading>
            </Box>
            <Box backgroundColor="#f5f5f5" p={2} w={100} borderRadius={4}>
              <Text fontSize="sm">Age Group</Text>
              <Heading fontSize="sm">{capitalizeFirstLetter(productData.ageGroup)}</Heading>
            </Box>
            <Box backgroundColor="#f5f5f5" p={2} w={100} borderRadius={4}>
              <Text fontSize="sm">Difficulty</Text>
              <Heading fontSize="sm">{capitalizeFirstLetter(productData.difficultyLevel)}</Heading>
            </Box>
            <Box backgroundColor="#f5f5f5" p={2} w={100} borderRadius={4}>
              <Text fontSize="sm">Type</Text>
              <Heading fontSize="sm">{capitalizeFirstLetter(productData.type)}</Heading>
            </Box>
          </Stack>
          <Heading mt={4} fontSize="sm">
            Description
          </Heading>
          <Text fontSize="sm">{productData.description}</Text>
        </Stack>
      </Stack>
    </Center>
  );
}
