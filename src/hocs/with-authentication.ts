import { verifyOauth2Token } from "../libs/oauth2";

export default function withAuthentication(getServerSidePropsFunc?) {
  return async (context) => {
    const { req, res } = context;

    const cookie = req.cookies["Paper@Chat"];

    if (!cookie) {
      res?.writeHead(302, {
        Location: "/",
      });
      res?.end();

      return { props: {} };
    }

    const tokenInfo = await verifyOauth2Token(cookie);

    if (!tokenInfo) {
      res?.writeHead(302, {
        Location: "/",
      });
      res?.end();

      return { props: {} };
    }

    console.log(tokenInfo);

    if (getServerSidePropsFunc) {
      return await getServerSidePropsFunc();
    }

    return { props: {} };
  };
}
