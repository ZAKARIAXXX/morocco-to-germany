import { createServerFn } from "@tanstack/react-start";
import { getCookie } from "@tanstack/react-start/server";

import type { Locale } from "./translations";

export const getLocale = createServerFn({ method: "GET" }).handler(async (): Promise<Locale> => {
  const value = getCookie("locale");
  return value === "en" ? "en" : "ar";
});
