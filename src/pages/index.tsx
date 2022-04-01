import type { NextPage } from "next";

import { Box } from "@chakra-ui/react";

import Header from "../components/Index/Header";
import Body from "../components/Index/Body";

import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Paper Chat | Home</title>
      </Head>
      <Box>
        <Header />
        <Body />
      </Box>
    </>
  );
};

export default Home;
