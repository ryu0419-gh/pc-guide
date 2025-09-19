"use client";

import AppLayout from "@/components/templates/Applayout";
import { ReactNode } from "react";

type ClientLayoutProps = {
  children: ReactNode;
};

export default function ClientLayout({ children }: ClientLayoutProps) {
  return <AppLayout>{children}</AppLayout>;
}