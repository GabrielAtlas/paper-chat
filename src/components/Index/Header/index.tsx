import React from "react";
import Image from "next/image";

import { Box, Flex, Link } from "@chakra-ui/react";

const Header: React.FC = () => {
  return (
    <Box w="100%" h="200px">
      <Flex flexDir="row" justify="space-between" align="center">
        <Image
          src="/images/paper-chat-logo.svg"
          width="200px"
          height="70px"
          alt="Paper Chat Logo"
          layout="fixed"
        />
        <Flex w="400px" justify="space-between">
          <Link color="white">Sobre nós</Link>
          <Link color="white">Criptografia</Link>
          <Link color="white">Suporte</Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
