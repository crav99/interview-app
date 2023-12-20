import { Center, SimpleGrid, Card, CardBody, Image, Stack, Heading, Text, Container } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function List({ data }) {
  const router = useRouter();

  return (
    <Container maxW='80%' paddingTop='5rem'>
      <Center>
        <SimpleGrid columns={1} spacing={5}>
          {data.map((product) => (
            <Card maxW='sm' key={product.id}>
              <CardBody>
                <Image src={`https://content.backcountry.com/${product.productMainImage.mediumImg}`} width="100%" />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{product.title}</Heading>
                    <Heading size='sm'>{product.brand.name}</Heading>
                    <Text alignSelf="" dangerouslySetInnerHTML={{__html: product.description}}>
                    </Text>
                    <Text color='blue.600' fontSize='2xl' alignSelf="">
                      {`$${product.minSalePrice}`}
                    </Text>
                  </Stack>
                </CardBody>
            </Card>
          ))}
        </SimpleGrid>
      </Center>
    </Container>
  );
}

export async function getServerSideProps({ params }) {
  const res = await fetch(
    `https://www.stage.backcountry.com/api/products/${params.id}`
  );
  const data = await res.json();

  return { props: { data } };
}
