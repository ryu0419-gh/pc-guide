"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";
import globalstyle from "@/styles/globalstyle";
import { CacheProvider } from "@chakra-ui/next-js";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={globalstyle}>{children}</ChakraProvider>
    </CacheProvider>
  );
}
