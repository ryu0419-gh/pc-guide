"use client";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { ReactNode } from "react";

// フォントのインポート
import { Staatliches } from "next/font/google";

const staatliches = Staatliches({
  weight: "400",
  subsets: ["latin"],
});

// Chakra UI のテーマを拡張
const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        backgroundColor: "#000000",
        color: "#FFFFFF",
        fontFamily: `${staatliches.style.fontFamily}, sans-serif`,
      },
    },
  },
});

export function Providers({ children }: { children: ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
