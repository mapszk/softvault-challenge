import type { Metadata } from "next";
import { Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SoftVault Challenge",
  description: "My proposal to the SoftVault Challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={syne.className}>{children}</body>
    </html>
  );
}
