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

import { Providers } from "@/components/providers/Chakra";
import "@/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PC Guide",
  description: "ゲームごとの推奨スペックを確認できるサイト",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
