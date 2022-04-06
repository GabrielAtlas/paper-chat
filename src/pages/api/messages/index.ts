import type { NextApiRequest, NextApiResponse } from "next";

import { Exception } from "./types";

export type Data = {
  messages: Chat[];
};

interface Chat {
  username: string;
  date: string;
  lastMessage: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | Exception>
) {}
