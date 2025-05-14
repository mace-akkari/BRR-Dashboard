import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BRR Media Dashboard",
  description: "BRR Media company dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
