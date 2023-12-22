"use client";

import { SWRConfig } from "swr";

export const SWRProvider = ({ children }: any) => {
  return <SWRConfig value={{ provider: () => new Map() }}>{children}</SWRConfig>;
};
