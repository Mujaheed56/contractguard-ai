import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ContractGuard AI - Your Freelance Contract Bodyguard",
  description: "AI-powered contract analysis for freelancers. Find hidden traps, unfair clauses, and protect your rights in 30 seconds.",
  keywords: "contract analysis, freelance contracts, AI lawyer, contract review, legal AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
