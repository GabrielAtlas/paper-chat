import { Box, Text } from "@chakra-ui/react";
import type { NextPage } from "next";

import { useSession, signOut, getSession } from "next-auth/react";

// import { Container } from './styles';

const Chat: NextPage = () => {
  const { data: session } = useSession();

  return (
    <Box>
      <Text>
        Signed in as {session?.user?.name} <br />
      </Text>
      <button onClick={() => signOut()}>Sign out</button>
    </Box>
  );
};

export async function getServerSideProps({ req, res }) {
  const session = await getSession({ req });

  if (!session) {
    res.writeHead(302, { Location: "/" }).end();
  }

  console.log(session);

  return {
    props: {},
  };
}

export default Chat;
