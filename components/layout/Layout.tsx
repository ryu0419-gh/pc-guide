import "@/styles/globals.css";
import { ReactNode } from "react";
import Link from "next/link";

export const metadata = {
  title: "PC Guide",
  description: "PC Guide - 自作PCガイド",
};

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <html>
      <body>
        <div className="flex flex-col min-h-screen bg-black">
      {/* Header */}
      <header className="bg-gray-900 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">自作PCガイド</h1>
          <nav className="space-x-4">
            <Link href="/">Home</Link>
            <Link href="/game/1">Games</Link>
            <Link href="#RecommendParts">Parts</Link>
          </nav>
        </div>
      </header>

      {/* Main */}
      <main className="flex-grow container mx-auto p-4">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-100 text-gray-600 p-4 text-center text-sm">
        © 2025 自作PCガイドチーム
      </footer>
    </div>
      </body>
    </html>
  );
}
