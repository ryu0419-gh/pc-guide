import { ReactNode } from "react";
import {Staatliches} from "next/font/google"
import { Providers } from "./providers";
import ClientLayout from "./Clientlayout";

export const metadata = {
  title: "MIYA Guide",
  description: "MIYA Guide - 自作PCガイド",
};

const staatliches = Staatliches({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-staatliches',
})

type LayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="ja" className={staatliches.variable}>
      <head>
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
