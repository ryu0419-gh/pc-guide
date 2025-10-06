import { ReactNode } from "react";
import type { Metadata } from "next";
import { Providers } from "@/components/providers/Chakra";
import Layout from "@/components/layout/Layout";

export const metadata: Metadata = {
  title: {
    template: "%s | 自作PCガイド",
    default: "自作PCガイド",
  },
  description: "ゲームごとの推奨スペックとパーツ選びをサポートするガイド",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
