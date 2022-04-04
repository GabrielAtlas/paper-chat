import { OAuth2Client } from "google-auth-library";

const oauth2Client = new OAuth2Client(
  "333300820340-m926q9c0bsum56gf49qqf13d43fdetvq.apps.googleusercontent.com"
);

export async function verifyOauth2Token(token: string) {
  const ticket = await oauth2Client.verifyIdToken({
    idToken: token,
    audience: [
      "333300820340-m926q9c0bsum56gf49qqf13d43fdetvq.apps.googleusercontent.com",
    ],
  });
  return ticket.getPayload();
}
