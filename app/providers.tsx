import { ReactNode } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import globalstyle from "@/styles/globalstyle";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return <ChakraProvider theme={globalstyle}>{children}</ChakraProvider>;
}
