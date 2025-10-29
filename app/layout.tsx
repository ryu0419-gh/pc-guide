import { ReactNode } from "react";
import type { Metadata } from "next";
import { Staatliches } from "next/font/google";

import { Providers } from "@/components/providers/Chakra";
import ClientLayout from "@/components/layout/ClientLayout";

const staatliches = Staatliches({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-staatliches",
});

export const metadata: Metadata = {
  title: {
    template: "%s | 自作PCガイド",
    default: "自作PCガイド",
  },
  description: "ゲームごとの推奨スペックとパーツ選びをサポートするガイド",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja" className={staatliches.variable}>
      <head />
      <body>
        <Providers>
          <ClientLayout>{children}</ClientLayout>
        </Providers>
      </body>
    </html>
  );
}

