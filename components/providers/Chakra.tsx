"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";
import globalstyle from "@/styles/globalstyle";

export function Providers({ children }: { children: ReactNode }) {
  return <ChakraProvider theme={globalstyle}>{children}</ChakraProvider>;
}