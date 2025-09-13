import { ReactNode } from "react";
import { Providers } from "./providers";
import ClientLayout from "./Clientlayout";

export const metadata = {
  title: "MIYA Guide",
  description: "MIYA Guide - 自作PCガイド",
};

type LayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="ja">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Staatliches&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <Providers>
          <ClientLayout>{children}</ClientLayout>
        </Providers>
      </body>
    </html>
  );
}
