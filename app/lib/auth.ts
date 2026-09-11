import { createHmac, timingSafeEqual } from "crypto";

export const PORTFOLIO_COOKIE = "portfolio_access";

const getPassword = () => process.env.PORTFOLIO_PASSWORD || "AbhiGenius";

const computeAccessToken = () =>
  createHmac("sha256", getPassword()).update("portfolio-access").digest("hex");

export function isValidPassword(password: string) {
  const provided = Buffer.from(password);
  const expected = Buffer.from(getPassword());

  return provided.length === expected.length && timingSafeEqual(provided, expected);
}

export function isValidAccessToken(token: string | undefined) {
  if (!token) return false;

  const provided = Buffer.from(token);
  const expected = Buffer.from(computeAccessToken());

  return provided.length === expected.length && timingSafeEqual(provided, expected);
}

export function getAccessToken() {
  return computeAccessToken();
}