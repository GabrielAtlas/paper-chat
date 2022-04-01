import React from "react";

import { Box, Flex, SimpleGrid, Text, Heading } from "@chakra-ui/react";

import Image from "next/image";
import GoogleAuthButton from "../../Global/GoogleAuthButton";

const Body: React.FC = () => {
  return (
    <Box h="600px">
      <Flex flexDir="row" justify="space-between">
        <Box maxWidth="50%">
          <Heading as="h1" size="3xl" color="white" mb={10}>
            Converse com seus amigos com segurança.
          </Heading>
          <Text color="white" fontSize="xl" whiteSpace="pre-line" mb={20}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />{" "}
            Fusce felis metus, vulputate et odio convallis, congue eleifend
            purus.
            <br /> In laoreet mauris nec velit imperdiet, eu ornare ipsum
            fermentum.
            <br /> Mauris ornare purus ac finibus aliquet.
          </Text>
          <GoogleAuthButton />
        </Box>
        <Image
          src="/images/home-chat.svg"
          width="750px"
          height="500px"
          alt="Paper Chat Logo"
          layout="fixed"
        />
      </Flex>
    </Box>
  );
};

export default Body;
