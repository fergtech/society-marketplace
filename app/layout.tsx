import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BottomNav } from "./components/BottomNav";
import { AppSwitcher } from "./components/AppSwitcher";
import { Header } from "./components/Header";
import { FilterBar } from "./components/FilterBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "society+ Marketplace",
  description: "Buy, sell, and trade with your community",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <AppSwitcher />
        <Header />
        <FilterBar />
        <main className="min-h-screen">
          {children}
        </main>
        <BottomNav />
      </body>
    </html>
  );
}
