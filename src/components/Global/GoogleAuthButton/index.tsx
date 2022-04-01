import React from "react";

import { Box, Text } from "@chakra-ui/react";

import Image from "next/image";

const GoogleAuthButton: React.FC = () => {
  function handleClick() {}

  return (
    <Box
      display="flex"
      onClick={handleClick}
      w="400px"
      h="64px"
      bgColor="white"
      justifyContent="center"
      alignItems="center"
      borderRadius="10px"
      cursor="pointer"
    >
      <Image
        src="/images/google-logo.svg"
        width="30px"
        height="40px"
        alt="Paper Chat Logo"
        layout="fixed"
      />
      <Text
        ml={3}
        fontSize="xl"
        display="inline-block"
        color="#757575"
        fontWeight="bold"
      >
        Continuar com o Google
      </Text>
    </Box>
  );
};

export default GoogleAuthButton;
