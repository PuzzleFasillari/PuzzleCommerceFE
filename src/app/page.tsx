import { Card, CardBody, CardFooter, Center, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react';
import { ProductService } from '@service/product-service';
import Link from 'next/link';

export default async function Home() {
  const products = await ProductService.getProducts();
  return (
    <SimpleGrid minChildWidth="200px" spacing="40px">
      {products.map((item, key) => (
        <Link key={key} href={`/product/${item._id}`}>
          <Card maxW="xs" h={300}>
            <CardBody>
              <Center flexDirection="column">
                <Image src={item.imageUrl} alt={'puzzle-image-' + key} h={140} maxH={140} borderRadius="lg" />
              </Center>
              <Heading mt="6" size="xs">
                {item.name}
              </Heading>
              <Text color="black" fontSize="xs" noOfLines={2}>
                {item.description}
              </Text>
            </CardBody>
            <CardFooter justifyContent="space-between" alignItems="center" pt={2}>
              <Text color="pink.400" fontWeight={600} fontSize="md">
                ${item.price}
              </Text>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </SimpleGrid>
  );
}
