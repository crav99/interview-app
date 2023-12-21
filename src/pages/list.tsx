import {
  Center,
  SimpleGrid,
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Container,
  Link,
} from "@chakra-ui/react";

export default function List({ data }) {
  return (
    <Container maxW="80%" paddingTop="5rem">
      <Center>
        <SimpleGrid columns={3} spacing={5}>
          {data.products.map((product) => (
            <Card maxW="sm">
              <Link href={`product/${product.id}`}>
                <CardBody>
                  <Image
                    src={`https://content.backcountry.com/${product.productMainImage.mediumImg}`}
                    width="100%"
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">{product.title}</Heading>
                    <Heading size="sm">{product.brand.name}</Heading>
                    <Text color="blue.600" fontSize="2xl" alignSelf="">
                      {`$${product.minSalePrice}`}
                    </Text>
                  </Stack>
                </CardBody>
              </Link>
            </Card>
          ))}
        </SimpleGrid>
      </Center>
    </Container>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    "https://www.stage.backcountry.com/api/products/search/jackets"
  );
  const data = await res.json();

  return { props: { data } };
}
