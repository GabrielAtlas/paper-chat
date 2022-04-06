import type { NextApiRequest, NextApiResponse } from "next";

import { Exception } from "./types";

import { verifyOauth2Token } from "@libs/oauth2";

export type Data = {
  messages: Message[];
};

interface Message {
  message: string;
  date: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | Exception>
) {
  const { chatId } = req.query;

  console.log(chatId);

  const cookie = req.cookies["Paper@Chat"];

  if (!cookie) {
    return res.status(400).json({ message: "Unauthorized" });
  }

  const tokenInfo = await verifyOauth2Token(cookie);

  if (!tokenInfo) {
    return res.status(400).json({ message: "Unauthorized" });
  }

  return res.status(200).json({ messages: [] });
}
