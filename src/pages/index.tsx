import type { NextPage } from "next";

import { getSession } from "next-auth/react";

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

export async function getServerSideProps({ req, res }) {
  const session = await getSession({ req });

  if (session) {
    res.writeHead(302, { Location: "/chat" }).end();
  }

  return {
    props: {},
  };
}

export default Home;
