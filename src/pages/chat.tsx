import { useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";
import type { NextPage } from "next";

import useAuth from "@hooks/useAuth";

import withAuthentication from "@hocs/with-authentication";

import io from "socket.io-client";
import { Socket } from "socket.io-client";

var socket: Socket;

const Chat: NextPage = () => {
  const { user, signOut } = useAuth();

  async function connectWebSocket() {
    await fetch("/api/socket");
    socket = io();

    socket.on("connect", () => {
      console.log("connected");
    });
  }

  useEffect(() => {
    connectWebSocket();
  }, []);

  return (
    <Box>
      <Text>
        Signed in as {user?.displayName} <br />
      </Text>
      <button onClick={() => signOut()}>Sign out</button>
    </Box>
  );
};

export const getServerSideProps = withAuthentication();

export default Chat;
