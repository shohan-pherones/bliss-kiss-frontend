import Footer from "@/components/blocks/Footer";
import Header from "@/components/blocks/Header";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bliss Kiss",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="valentine">
      <body className={cn(rubik.className, "antialiased")}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
