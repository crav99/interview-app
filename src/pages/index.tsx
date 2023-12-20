import {
  Link as ChakraLink,
  Text,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import { CheckCircleIcon, LinkIcon } from "@chakra-ui/icons";

import { Hero } from "../components/Hero";
import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { CTA } from "../components/CTA";
import { Footer } from "../components/Footer";
import Link from "next/link";

const Index = () => (
  <Container height="100vh">
    <Hero title="Frontend Interview" />
    <Main>
      <Text color="text">Tasks to be completed as part of the interview</Text>

      <List spacing={3} my={0} color="text">
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          <Link href="/list" mr={2}>
            Complete the listing of products on the page <LinkIcon />
          </Link>
        </ListItem>
        <ListItem display="flex">
          <ListIcon as={CheckCircleIcon} color="green.500" />
          <Text flexGrow={1} mr={2}>
            Add a Product Details View <LinkIcon />
          </Text>
        </ListItem>
      </List>
    </Main>

    <DarkModeSwitch />
    <Footer>
      <Text>Next ❤️ Chakra</Text>
    </Footer>
    <CTA />
  </Container>
);

export default Index;
