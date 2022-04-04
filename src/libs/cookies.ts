import { setCookie, destroyCookie, parseCookies } from "nookies";

const TOKEN_SESSION = "Paper@Chat";

const maxAgeCookies = 3 * 24 * 60 * 60;
const domain = process.env.NEXT_PUBLIC_DOMAIN;

/**
 *  Set token session cookie
 *
 * @param {Object} [context=null]
 * @param {string} token
 * @returns
 */
export function setToken(token, context = null) {
  setCookie(context, TOKEN_SESSION, token, {
    path: "/",
    maxAge: maxAgeCookies,
    domain,
  });
}

export function removeToken(context = null) {
  destroyCookie(context, TOKEN_SESSION, {
    path: "/",
    domain,
  });
}

/**
 *  Get token saved in cookies
 *
 * @param {Object} [context=null]
 * @returns {(string|null)} Storage token
 */
export function getToken(context = null) {
  const cookies = parseCookies(context);

  return cookies[TOKEN_SESSION];
}
